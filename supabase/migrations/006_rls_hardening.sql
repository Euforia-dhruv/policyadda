-- ============================================================================
-- PolicyAdda — 006 RLS hardening
-- Closes issues found in the final security audit:
--
--   1. Role escalation via REST on `profiles`:
--      `profiles_insert_own`/`profiles_update_own` let a user set their own
--      `role_code`. We revoke INSERT/UPDATE from `authenticated` entirely;
--      profile creation is owned by the signup service-role upsert and the
--      `handle_new_user` trigger, and edits go through /api/profile which uses
--      the service role with an explicit field allowlist.
--
--   2. `sales` previously held `application:manage`, which let any sales user
--      UPDATE any application directly via PostgREST. Sales keep full working
--      access through the API routes (which enforce assignment), but no longer
--      hold the DB-level manage permission.
--
--   3. Staff could read/insert messages on ANY ticket (even unassigned) and
--      insert notes on any application. Tightened to assigned-or-manager.
--
--   4. `apps_admin_update` gets an explicit WITH CHECK so update remains
--      gated by the same permission as the USING clause.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 1. profiles — no INSERT/UPDATE/DELETE via REST roles
-- ---------------------------------------------------------------------------
revoke insert, update, delete on profiles from anon, authenticated;

drop policy if exists profiles_insert_own on profiles;
drop policy if exists profiles_update_own on profiles;

-- ---------------------------------------------------------------------------
-- 2. sales loses database-level application:manage
-- ---------------------------------------------------------------------------
delete from role_permissions
where role_code = 'sales' and permission_code = 'application:manage';

-- ---------------------------------------------------------------------------
-- 3a. support_messages — read/insert scoped to owner or assigned staff
-- ---------------------------------------------------------------------------
drop policy if exists messages_read on support_messages;
create policy messages_read on support_messages
  for select using (
    auth.uid() = (select customer_id from support_tickets where id = ticket_id)
    or (
      public.is_staff()
      and (
        public.app_role() in ('super_admin','admin','manager')
        or (select assigned_to from support_tickets where id = ticket_id) = auth.uid()
      )
    )
  );

drop policy if exists messages_insert on support_messages;
create policy messages_insert on support_messages
  for insert with check (
    auth.uid() = (select customer_id from support_tickets where id = ticket_id)
    or (
      public.is_staff()
      and (
        public.app_role() in ('super_admin','admin','manager')
        or (select assigned_to from support_tickets where id = ticket_id) = auth.uid()
      )
    )
  );

-- ---------------------------------------------------------------------------
-- 3b. status-history notes — insert scoped to assigned staff (or manager)
-- ---------------------------------------------------------------------------
drop policy if exists hist_admin_write on application_status_history;
create policy hist_admin_write on application_status_history
  for insert with check (
    public.is_staff()
    and (
      public.app_role() in ('super_admin','admin','manager')
      or exists (
        select 1 from applications a
        where a.id = application_id and a.assigned_to = auth.uid()
      )
    )
  );

-- ---------------------------------------------------------------------------
-- 4. applications admin update — explicit WITH CHECK
-- ---------------------------------------------------------------------------
drop policy if exists apps_admin_update on applications;
create policy apps_admin_update on applications
  for update using (public.has_permission('application:manage'))
  with check (public.has_permission('application:manage'));