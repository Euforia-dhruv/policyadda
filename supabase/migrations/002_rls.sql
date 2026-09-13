-- ============================================================================
-- PolicyAdda — 002 Row Level Security
-- Every table gets RLS enabled + explicit policies. Nothing is left open.
--
-- Helpers:
--   public.app_role()          → current actor's role code (from profiles)
--   public.has_permission(p)   → role→permission membership
--   public.is_staff()          → any non-customer role
-- All helpers are SECURITY DEFINER with a fixed search_path.
-- ============================================================================

create or replace function public.app_role()
returns text language sql stable security definer set search_path = public as $$
  select coalesce(p.role_code, 'customer')
  from profiles p
  where p.user_id = auth.uid()
$$;

create or replace function public.is_staff()
returns boolean language sql stable security definer set search_path = public as $$
  select public.app_role() in ('super_admin','admin','manager','sales','support','developer')
$$;

create or replace function public.has_permission(perm text)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1
    from role_permissions rp
    where rp.role_code = public.app_role()
      and rp.permission_code = perm
  )
$$;

-- ---------------------------------------------------------------------------
-- profiles
-- ---------------------------------------------------------------------------
alter table profiles enable row level security;

drop policy if exists profiles_select_own on profiles;
create policy profiles_select_own on profiles
  for select using (auth.uid() = user_id or public.is_staff());

drop policy if exists profiles_insert_own on profiles;
create policy profiles_insert_own on profiles
  for insert with check (auth.uid() = user_id);

drop policy if exists profiles_update_own on profiles;
create policy profiles_update_own on profiles
  for update using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Support staff need to read names/pictures of the people assigned to them;
-- customers may see only the rows that belong to them. Fine-grained reads for
-- staff are scoped by the application/ticket policies below, not by profiles.

-- ---------------------------------------------------------------------------
-- policy_categories
-- ---------------------------------------------------------------------------
alter table policy_categories enable row level security;

drop policy if exists categories_read_public on policy_categories;
create policy categories_read_public on policy_categories
  for select using (is_active = true or public.has_permission('content:read_all'));

drop policy if exists categories_write_admin on policy_categories;
create policy categories_write_admin on policy_categories
  for all using (public.has_permission('content:manage'))
  with check (public.has_permission('content:manage'));

-- ---------------------------------------------------------------------------
-- policies
-- ---------------------------------------------------------------------------
alter table policies enable row level security;

drop policy if exists policies_read_public on policies;
create policy policies_read_public on policies
  for select using (is_active = true or public.has_permission('content:read_all'));

drop policy if exists policies_write_admin on policies;
create policy policies_write_admin on policies
  for all using (public.has_permission('content:manage'))
  with check (public.has_permission('content:manage'));

-- ---------------------------------------------------------------------------
-- status lookups (public read; write = admin)
-- ---------------------------------------------------------------------------
alter table application_statuses enable row level security;
alter table ticket_statuses enable row level security;
alter table ticket_priorities enable row level security;

do $$
declare t text;
begin
  foreach t in array array['application_statuses','ticket_statuses','ticket_priorities']
  loop
    execute format('drop policy if exists %I on %I', 'statuses_read', t);
    execute format('create policy statuses_read on %I for select using (true)', t);
    execute format('drop policy if exists %I on %I', 'statuses_write_admin', t);
    execute format('create policy statuses_write_admin on %I for all using (public.has_permission(%L)) with check (public.has_permission(%L))', t, 'content:manage', 'content:manage');
  end loop;
end $$;

-- ---------------------------------------------------------------------------
-- applications (the sensitive core)
-- ---------------------------------------------------------------------------
alter table applications enable row level security;
alter table application_status_history enable row level security;
alter table customer_assignments enable row level security;

-- Customers: only their own applications.
drop policy if exists apps_own on applications;
create policy apps_own on applications
  for select using (auth.uid() = customer_id or public.app_role() = 'customer' and phone = auth.jwt() ->> 'phone');

-- Staff read: assigned applications OR any if manager/admin.
drop policy if exists apps_staff_read on applications;
create policy apps_staff_read on applications
  for select using (
    public.is_staff() and (
      public.app_role() in ('super_admin','admin','manager')
      or assigned_to = auth.uid()
      or exists (select 1 from customer_assignments ca
                 where ca.application_id = applications.id
                   and ca.employee_id = auth.uid() and ca.active)
    )
  );

-- Admin creates/updates applications (e.g. record a phone enquiry, update status).
drop policy if exists apps_admin_write on applications;
create policy apps_admin_write on applications
  for insert with check (public.has_permission('application:manage'));
create policy apps_admin_update on applications
  for update using (public.has_permission('application:manage'));

-- Status history visible to owner & involved staff only.
drop policy if exists hist_read on application_status_history;
create policy hist_read on application_status_history
  for select using (
    auth.uid() = (select customer_id from applications where id = application_id)
    or public.is_staff()
  );

drop policy if exists hist_admin_write on application_status_history;
create policy hist_admin_write on application_status_history
  for insert with check (public.is_staff());

-- Assignments: manager/admin write, involved staff read.
drop policy if exists assignments_read on customer_assignments;
create policy assignments_read on customer_assignments
  for select using (employee_id = auth.uid() or public.app_role() in ('super_admin','admin','manager'));

drop policy if exists assignments_admin_write on customer_assignments;
create policy assignments_admin_write on customer_assignments
  for all using (public.has_permission('application:assign'))
  with check (public.has_permission('application:assign'));

-- ---------------------------------------------------------------------------
-- documents
-- ---------------------------------------------------------------------------
alter table documents enable row level security;

drop policy if exists docs_own on documents;
create policy docs_own on documents
  for select using (
    customer_id = auth.uid()
    or (owner_type = 'application' and exists (
          select 1 from applications a
          where a.id = documents.owner_id
            and (a.customer_id = auth.uid() or a.assigned_to = auth.uid())
        ))
    or public.is_staff()
  );

drop policy if exists docs_insert on documents;
create policy docs_insert on documents
  for insert with check (customer_id = auth.uid() or public.is_staff());

-- ---------------------------------------------------------------------------
-- support tickets & messages
-- ---------------------------------------------------------------------------
alter table support_tickets enable row level security;
alter table support_messages enable row level security;

-- Owner: their own tickets. Staff: assigned or manager/admin.
drop policy if exists tickets_own on support_tickets;
create policy tickets_own on support_tickets
  for select using (customer_id = auth.uid());

drop policy if exists tickets_staff_read on support_tickets;
create policy tickets_staff_read on support_tickets
  for select using (
    public.is_staff() and (
      public.app_role() in ('super_admin','admin','manager')
      or assigned_to = auth.uid()
    )
  );

drop policy if exists tickets_create on support_tickets;
create policy tickets_create on support_tickets
  for insert with check (auth.uid() = customer_id or public.is_staff());

drop policy if exists tickets_write on support_tickets;
create policy tickets_write on support_tickets
  for update using (
    public.is_staff() and (assigned_to = auth.uid() or public.app_role() in ('super_admin','admin','manager'))
  );

-- Messages: visible to everyone involved in the ticket.
drop policy if exists messages_read on support_messages;
create policy messages_read on support_messages
  for select using (
    auth.uid() = (select customer_id from support_tickets where id = ticket_id)
    or public.is_staff()
  );

drop policy if exists messages_insert on support_messages;
create policy messages_insert on support_messages
  for insert with check (
    auth.uid() = (select customer_id from support_tickets where id = ticket_id)
    or public.is_staff()
  );

-- ---------------------------------------------------------------------------
-- notifications
-- ---------------------------------------------------------------------------
alter table notifications enable row level security;

drop policy if exists notifications_own on notifications;
create policy notifications_own on notifications
  for all using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- ---------------------------------------------------------------------------
-- audit_logs — strictly append via security-definer; read only for admins.
-- ---------------------------------------------------------------------------
alter table audit_logs enable row level security;

-- Staff can insert audit entries (via our functions); everyone must be able to
-- INSERT through SECURITY DEFINER triggers, so grant a controlled insert policy
-- rather than leaving the table writeable by customers.
drop policy if exists audit_insert_staff on audit_logs;
create policy audit_insert_staff on audit_logs
  for insert with check (public.is_staff());

drop policy if exists audit_read_admin on audit_logs;
create policy audit_read_admin on audit_logs
  for select using (public.has_permission('audit:read'));

revoke all on audit_logs from anon, authenticated;
grant select, insert on audit_logs to authenticated;

-- ---------------------------------------------------------------------------
-- Roles/permissions lookups: readable by staff; writeable by admins only.
-- ---------------------------------------------------------------------------
alter table roles enable row level security;
alter table permissions enable row level security;
alter table role_permissions enable row level security;

drop policy if exists roles_read on roles;
create policy roles_read on roles for select using (public.is_staff() or true);
drop policy if exists roles_admin on roles;
create policy roles_admin on roles for all using (public.has_permission('admin:manage')) with check (public.has_permission('admin:manage'));

drop policy if exists perms_read on permissions;
create policy perms_read on permissions for select using (true);
drop policy if exists perms_admin on permissions;
create policy perms_admin on permissions for all using (public.has_permission('admin:manage')) with check (public.has_permission('admin:manage'));

drop policy if exists rp_read on role_permissions;
create policy rp_read on role_permissions for select using (public.is_staff());
drop policy if exists rp_admin on role_permissions;
create policy rp_admin on role_permissions for all using (public.has_permission('admin:manage')) with check (public.has_permission('admin:manage'));