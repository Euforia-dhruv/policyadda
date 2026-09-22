-- PolicyAdda profiles setup
-- The live schema is defined by supabase/migrations/001_core_schema.sql
-- (profiles: user_id PK, role_code FK -> roles). This file is only a helper
-- for common maintenance — do NOT re-create the table here.

-- Promote yourself to admin (run after creating your account):
-- UPDATE profiles SET role_code = 'admin' WHERE user_id = 'YOUR_USER_UUID';

-- Verify roles exist (seeded by 003_seed.sql):
-- SELECT code FROM roles ORDER BY code;
