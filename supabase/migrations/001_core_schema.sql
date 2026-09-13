-- ============================================================================
-- PolicyAdda — 001 core schema
-- Run in order: 001_core_schema.sql → 002_rls.sql → 003_seed.sql
--
-- Design notes:
--  * RBAC via roles/permissions/role_permissions (server-enforced, not UI-only).
--  * Statuses are DATA (configurable lookup tables), not hardcoded enums —
--    the client defines the final workflow later.
--  * Every domain table carries created_at / updated_at (trigger-maintained).
--  * Important state changes land in an immutable audit_logs table.
-- ============================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Lookups: roles & permissions
-- ---------------------------------------------------------------------------
create table if not exists roles (
  code          text primary key,              -- super_admin | admin | manager | sales | support | developer | customer
  name          text not null,
  description   text,
  is_system     boolean not null default true
);

create table if not exists permissions (
  code          text primary key,              -- e.g. policy:manage, application:assign
  name          text not null,
  scope         text not null default 'app'    -- 'app' | 'policy' | 'application' | 'customer' ...
);

create table if not exists role_permissions (
  role_code      text not null references roles(code) on delete cascade,
  permission_code text not null references permissions(code) on delete cascade,
  primary key (role_code, permission_code)
);

-- ---------------------------------------------------------------------------
-- Profiles: extension of auth.users; every authenticated actor gets a row.
-- ---------------------------------------------------------------------------
create table if not exists profiles (
  user_id        uuid primary key references auth.users(id) on delete cascade,
  role_code      text not null default 'customer' references roles(code),
  full_name      text,
  phone          text,
  email          text,
  city           text,
  locale         text not null default 'en' check (locale in ('en','hi')),
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Content: categories & policies (store localized content as jsonb maps)
-- ---------------------------------------------------------------------------
create table if not exists policy_categories (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  name          jsonb not null,                -- {"en": "...", "hi": "..."}
  short         jsonb,
  description   jsonb,
  icon          text,
  sort          int not null default 0,
  is_active     boolean not null default true,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table if not exists policies (
  id                 uuid primary key default gen_random_uuid(),
  category_id        uuid not null references policy_categories(id),
  slug               text unique not null,
  name               text not null,
  provider_note      jsonb,                     -- informational only; no implied partnership
  short_description  jsonb,
  full_description   jsonb,
  key_benefits       jsonb,                     -- {"en": [...], "hi": [...]}
  eligibility        jsonb,
  coverage           jsonb,
  exclusions         jsonb,
  documents_required jsonb,
  faqs               jsonb,
  disclaimer         jsonb,
  google_form_url    text,                      -- external form; internal form allowed too
  is_active          boolean not null default true,
  is_featured        boolean not null default false,
  created_by         uuid references profiles(user_id),
  updated_by         uuid references profiles(user_id),
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Configurable workflow statuses (these drive the UI timeline + DB state)
-- ---------------------------------------------------------------------------
create table if not exists application_statuses (
  code        text primary key,                 -- submitted | under_review | assigned | ...
  label       jsonb not null,
  description jsonb,
  sort        int not null default 0,
  is_terminal boolean not null default false
);

-- ---------------------------------------------------------------------------
-- Applications & status history
-- ---------------------------------------------------------------------------
create table if not exists applications (
  id            uuid primary key default gen_random_uuid(),
  application_no text not null unique default 'PA-' || to_char(now(),'YYMMDD') || '-' || substr(md5(random()::text),1,4),
  customer_id   uuid references profiles(user_id),          -- set after login/link
  policy_id     uuid references policies(id),
  status_code   text not null default 'submitted' references application_statuses(code),
  full_name     text not null,
  phone         text not null,
  email         text,
  city          text,
  message       text,
  source        text not null default 'website',
  assigned_to   uuid references profiles(user_id),
  assigned_at   timestamptz,
  meta          jsonb,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table if not exists application_status_history (
  id            uuid primary key default gen_random_uuid(),
  application_id uuid not null references applications(id) on delete cascade,
  from_status   text,
  to_status     text not null,
  changed_by    uuid references profiles(user_id),
  note          text,
  created_at    timestamptz not null default now()
);

create table if not exists customer_assignments (
  id             uuid primary key default gen_random_uuid(),
  application_id uuid not null references applications(id) on delete cascade,
  employee_id    uuid not null references profiles(user_id),
  assigned_by    uuid references profiles(user_id),
  active         boolean not null default true,
  assigned_at    timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Documents (pointers into Supabase Storage)
-- ---------------------------------------------------------------------------
create table if not exists documents (
  id            uuid primary key default gen_random_uuid(),
  owner_type    text not null check (owner_type in ('application','policy','profile','ticket')),
  owner_id      uuid not null,
  customer_id   uuid references profiles(user_id),           -- access scoping
  storage_path  text not null,
  title         text,
  mime          text,
  size_bytes    bigint,
  created_by    uuid references profiles(user_id),
  created_at    timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Support
-- ---------------------------------------------------------------------------
create table if not exists ticket_statuses (
  code text primary key,                        -- open | in_progress | waiting_customer | resolved | closed
  label jsonb not null,
  sort int not null default 0,
  is_terminal boolean not null default false
);

create table if not exists ticket_priorities (
  code text primary key,                        -- low | normal | high | urgent
  label jsonb not null,
  sort int not null default 0
);

create table if not exists support_tickets (
  id            uuid primary key default gen_random_uuid(),
  ticket_no     text unique not null default 'SUP-' || substr(md5(random()::text),1,6),
  customer_id   uuid references profiles(user_id),
  contact_email text,
  contact_phone text,
  subject       text not null,
  category      text,
  description   text,
  status_code   text not null default 'open' references ticket_statuses(code),
  priority_code text not null default 'normal' references ticket_priorities(code),
  assigned_to   uuid references profiles(user_id),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table if not exists support_messages (
  id          uuid primary key default gen_random_uuid(),
  ticket_id   uuid not null references support_tickets(id) on delete cascade,
  sender_id   uuid references profiles(user_id),
  sender_role text,                             -- customer | support | system
  body        text not null,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Notifications
-- ---------------------------------------------------------------------------
create table if not exists notifications (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references profiles(user_id) on delete cascade,
  channel    text not null default 'in_app' check (channel in ('in_app','email','whatsapp')),
  title      text not null,
  body       text,
  link       text,
  read_at    timestamptz,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Audit log (append-mostly; no UPDATE/DELETE for normal users)
-- ---------------------------------------------------------------------------
create table if not exists audit_logs (
  id          bigserial primary key,
  actor_id    uuid references profiles(user_id),
  action      text not null,                    -- policy:update | app:status_change | role:change ...
  entity_type text,
  entity_id   text,
  meta        jsonb,
  ip          inet,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- updated_at maintenance
-- ---------------------------------------------------------------------------
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists trg_profiles_updated on profiles;
create trigger trg_profiles_updated before update on profiles
  for each row execute function set_updated_at();

drop trigger if exists trg_policies_updated on policies;
create trigger trg_policies_updated before update on policies
  for each row execute function set_updated_at();

drop trigger if exists trg_applications_updated on applications;
create trigger trg_applications_updated before update on applications
  for each row execute function set_updated_at();

drop trigger if exists trg_tickets_updated on support_tickets;
create trigger trg_tickets_updated before update on support_tickets
  for each row execute function set_updated_at();

-- ---------------------------------------------------------------------------
-- Status-change recording (keeps history + audit on applications)
-- ---------------------------------------------------------------------------
create or replace function record_application_status_change()
returns trigger language plpgsql as $$
begin
  if old.status_code is distinct from new.status_code then
    insert into application_status_history (application_id, from_status, to_status, changed_by)
    values (new.id, old.status_code, new.status_code, auth.uid());
    insert into audit_logs (actor_id, action, entity_type, entity_id, meta)
    values (auth.uid(), 'app:status_change', 'application', new.id::text,
            jsonb_build_object('from', old.status_code, 'to', new.status_code));
  end if;
  return new;
end $$;

drop trigger if exists trg_applications_history on applications;
create trigger trg_applications_history
  after update of status_code on applications
  for each row execute function record_application_status_change();

-- New profile row on auth signup
create or replace function handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (user_id, email, locale)
  values (new.id, new.email, coalesce((current_setting('request.headers', true)::jsonb -> 'x-policyadda-locale')::text, 'en'))
  on conflict (user_id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();