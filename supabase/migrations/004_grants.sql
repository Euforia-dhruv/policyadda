-- ============================================================================
-- PolicyAdda — 004 PostgREST grants
-- Tables are RLS-protected (002). These grants give the API roles the *ability*
-- to access the relations; RLS policies decide which rows each role may see.
-- service_role acts with full row access in API routes (server-only key), while
-- anon/authenticated remain row-restricted by the 002 policy set.
-- ============================================================================

grant usage on schema public to anon, authenticated, service_role;

grant select, insert, update, delete on all tables in schema public to anon, authenticated, service_role;
grant select, update, usage on all sequences in schema public to anon, authenticated, service_role;
grant execute on all functions in schema public to anon, authenticated, service_role;

alter default privileges in schema public
  grant select, insert, update, delete on tables to anon, authenticated, service_role;
alter default privileges in schema public
  grant select, update, usage on sequences to anon, authenticated, service_role;
alter default privileges in schema public
  grant execute on functions to anon, authenticated, service_role;