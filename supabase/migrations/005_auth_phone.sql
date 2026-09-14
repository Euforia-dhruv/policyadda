-- ============================================================================
-- PolicyAdda — 005 auth path fixes
--  * apps_own used `auth.jwt() ->> 'phone'`, but Supabase stores custom
--    claims under `app_metadata`. Corrected so customers who register with a
--    phone can see applications submitted with that phone.
-- ============================================================================

drop policy if exists apps_own on applications;
create policy apps_own on applications
  for select using (
    auth.uid() = customer_id
    or (
      public.app_role() = 'customer'
      and phone = auth.jwt() -> 'app_metadata' ->> 'phone'
    )
  );