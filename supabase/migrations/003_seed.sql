-- ============================================================================
-- PolicyAdda — 003 seed: roles, permissions, mappings, statuses, categories
-- ============================================================================

insert into roles (code, name, description, is_system) values
  ('super_admin', 'Super Admin', 'Full system access: users, roles, settings, audit.', true),
  ('admin',       'Admin',       'Policy/customer/application/support oversight & reports.', true),
  ('manager',     'Manager',     'Assigns applications, monitors workload & support.', true),
  ('sales',       'Sales Executive', 'Handles assigned customers & applications.', true),
  ('support',     'Support Executive', 'Answers tickets & customer questions.', true),
  ('developer',   'Developer',   'Controlled technical maintenance access.', true),
  ('customer',    'Customer',    'Own profile, applications, policies, documents, tickets.', true)
on conflict (code) do update set name = excluded.name, description = excluded.description;

insert into permissions (code, name, scope) values
  ('content:manage',     'Create/edit/publish policies',        'content'),
  ('content:read_all',   'Read unpublished content',            'content'),
  ('application:manage', 'Create/update applications',          'application'),
  ('application:assign', 'Assign applications to staff',        'application'),
  ('ticket:manage',      'Update/resolve support tickets',      'support'),
  ('customer:read',      'View customer details',               'customer'),
  ('audit:read',         'Read audit logs',                     'system'),
  ('admin:manage',       'Manage users, roles, settings',       'system')
on conflict (code) do update set name = excluded.name;

-- super_admin gets everything
insert into role_permissions (role_code, permission_code)
select 'super_admin', code from permissions
on conflict do nothing;

insert into role_permissions (role_code, permission_code) values
  ('admin', 'content:manage'),
  ('admin', 'content:read_all'),
  ('admin', 'application:manage'),
  ('admin', 'application:assign'),
  ('admin', 'ticket:manage'),
  ('admin', 'customer:read'),
  ('admin', 'audit:read'),

  ('manager', 'application:assign'),
  ('manager', 'content:read_all'),
  ('manager', 'customer:read'),
  ('manager', 'ticket:manage'),

  ('sales', 'application:manage'),
  ('sales', 'content:read_all'),

  ('support', 'ticket:manage'),
  ('support', 'customer:read')
on conflict do nothing;

insert into application_statuses (code, label, description, sort, is_terminal) values
  ('submitted',     '{"en":"Application Submitted","hi":"आवेदन प्रस्तुत"}',   '{"en":"We have received your details.","hi":"हमें आपकी जानकारी प्राप्त हो गई है।"}', 1, false),
  ('under_review',  '{"en":"Under Review","hi":"समीक्षा में"}',               '{"en":"Our team is checking your enquiry.","hi":"हमारी टीम आपकी पूछताछ की जाँच कर रही है।"}', 2, false),
  ('assigned',      '{"en":"Executive Assigned","hi":"कार्यकारी नियुक्त"}',   '{"en":"A PolicyAdda executive has been assigned.","hi":"एक PolicyAdda कार्यकारी नियुक्त किया गया है।"}', 3, false),
  ('contacted',     '{"en":"Customer Contacted","hi":"ग्राहक से संपर्क"}',     '{"en":"Our executive has contacted you.","hi":"हमारे कार्यकारी ने आपसे संपर्क किया है।"}', 4, false),
  ('processing',    '{"en":"Processing","hi":"प्रक्रिया जारी"}',              '{"en":"Your application is being processed.","hi":"आपका आवेदन संसाधित किया जा रहा है।"}', 5, false),
  ('completed',     '{"en":"Completed","hi":"पूर्ण"}',                         '{"en":"The process has been completed.","hi":"प्रक्रिया पूर्ण हो गई है।"}', 6, true),
  ('on_hold',       '{"en":"On Hold","hi":"रोक दिया गया"}',                   '{"en":"Awaiting further information.","hi":"अधिक जानकारी की प्रतीक्षा में।"}', 7, false),
  ('rejected',      '{"en":"Rejected","hi":"अस्वीकृत"}',                       '{"en":"This application could not proceed.","hi":"यह आवेदन आगे नहीं बढ़ सका।"}', 8, true),
  ('cancelled',     '{"en":"Cancelled","hi":"रद्द"}',                           '{"en":"The application has been cancelled.","hi":"आवेदन रद्द कर दिया गया है।"}', 9, true)
on conflict (code) do update set sort = excluded.sort;

insert into ticket_statuses (code, label, sort, is_terminal) values
  ('open',            '{"en":"Open","hi":"खुला"}', 1, false),
  ('in_progress',     '{"en":"In Progress","hi":"प्रगति में"}', 2, false),
  ('waiting_customer', '{"en":"Waiting for Customer","hi":"ग्राहक की प्रतीक्षा"}', 3, false),
  ('resolved',        '{"en":"Resolved","hi":"हल"}', 4, true),
  ('closed',          '{"en":"Closed","hi":"बंद"}', 5, true)
on conflict (code) do update set sort = excluded.sort;

insert into ticket_priorities (code, label, sort) values
  ('low',     '{"en":"Low","hi":"कम"}', 1),
  ('normal',  '{"en":"Normal","hi":"सामान्य"}', 2),
  ('high',    '{"en":"High","hi":"उच्च"}', 3),
  ('urgent',  '{"en":"Urgent","hi":"अति आवश्यक"}', 4)
on conflict (code) do update set sort = excluded.sort;

insert into policy_categories (slug, name, short, description, icon, sort, is_active) values
  ('motor',    '{"en":"Motor Insurance","hi":"मोटर बीमा"}',
   '{"en":"Protection for two-wheelers and private cars.","hi":"दोपहिया और निजी कार के लिए सुरक्षा।"}',
   '{"en":"Cover options for your bike, scooter, or private car.","hi":"आपकी बाइक, स्कूटर या निजी कार के लिए कवर विकल्प।"}','🛞',1,true),
  ('health',   '{"en":"Health Insurance","hi":"हेल्थ इंश्योरेंस"}',
   '{"en":"Hospitalization and medical coverage.","hi":"अस्पताल व चिकित्सा कवरेज।"}',
   '{"en":"Health plans that help cover hospitalization and medical expenses.","hi":"हेल्थ प्लान जो अस्पताल और चिकित्सा खर्चों को कवर करने में मदद करते हैं।"}','🏥',2,true),
  ('business', '{"en":"Business / SME Insurance","hi":"व्यवसाय / एसएमई बीमा"}',
   '{"en":"Employee benefits & protection for organizations.","hi":"संगठनों के लिए कर्मचारी लाभ व सुरक्षा।"}',
   '{"en":"Customizable solutions for businesses and SMEs.","hi":"व्यवसायों और एसएमई के लिए अनुकूलन योग्य समाधान।"}','🏢',3,true)
on conflict (slug) do update set name = excluded.name, sort = excluded.sort;

-- Policies are seeded via scripts/seed-supabase.mjs (reads content/*) to keep
-- the TS content layer as the single source during development.