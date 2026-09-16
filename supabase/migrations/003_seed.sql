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
   '{"en":"Protect your vehicle against accidental damage, theft, fire, and third-party liabilities.","hi":"दुर्घटना, चोरी, आग और थर्ड-पार्टी देयता से अपने वाहन की सुरक्षा करें।"}',
   '{"en":"Motor insurance provides financial protection for your vehicle and covers third-party liabilities. In India, Third-Party Liability insurance is mandatory.","hi":"मोटर बीमा आपके वाहन के लिए वित्तीय सुरक्षा प्रदान करता है। भारत में, थर्ड-पार्टी देयता बीमा अनिवार्य है।"}','🚗',1,true),
  ('health',   '{"en":"Health Insurance","hi":"हेल्थ इंश्योरेंस"}',
   '{"en":"Protect your health and savings with comprehensive medical coverage.","hi":"व्यापक चिकित्सा कवरेज के साथ अपने स्वास्थ्य और बचत की रक्षा करें।"}',
   '{"en":"Health insurance provides financial protection against eligible medical and hospitalisation expenses.","hi":"हेल्थ इंश्योरेंस पात्र चिकित्सा और अस्पताल खर्चों के खिलाफ वित्तीय सुरक्षा प्रदान करता है।"}','🏥',2,true),
  ('life',     '{"en":"Life Insurance","hi":"लाइफ इंश्योरेंस"}',
   '{"en":"Secure your family financial future with term plans, savings plans, and investment-linked coverage.","hi":"टर्म प्लान, बचत प्लान और निवेश-लिंक्ड कवरेज के साथ अपने परिवार के वित्तीय भविष्य को सुरक्षित करें।"}',
   '{"en":"Life insurance provides financial protection to your family in case of your unfortunate demise during the policy term.","hi":"लाइफ इंश्योरेंस पॉलिसी अवधि के दौरान आपके दुर्भाग्यपूर्ण निधन की स्थिति में आपके परिवार को वित्तीय सुरक्षा प्रदान करता है।"}','❤️',3,true),
  ('business', '{"en":"Business & Commercial Insurance","hi":"व्यवसाय और वाणिज्यिक बीमा"}',
   '{"en":"Protect your business, employees, and commercial assets.","hi":"अपने व्यवसाय, कर्मचारियों और वाणिज्यिक संपत्ति की रक्षा करें।"}',
   '{"en":"Business and commercial insurance helps protect organizations against various risks.","hi":"व्यवसाय और वाणिज्यिक बीमा संगठनों को विभिन्न जोखिमों से बचाने में मदद करता है।"}','🏢',4,true),
  ('property', '{"en":"Property & Home Insurance","hi":"संपत्ति और घर बीमा"}',
   '{"en":"Protect your home, property, and valuable assets.","hi":"अपने घर, संपत्ति और बहुमूल्य संपत्ति की रक्षा करें।"}',
   '{"en":"Property insurance provides financial protection for your property against fire, natural calamities, burglary, and accidental damage.","hi":"संपत्ति बीमा आग, प्राकृतिक आपदाओं, चोरी और आकस्मिक क्षति से आपकी संपत्ति के लिए वित्तीय सुरक्षा प्रदान करता है।"}','🏠',5,true),
  ('travel',   '{"en":"Travel Insurance","hi":"ट्रैवल इंश्योरेंस"}',
   '{"en":"Travel with confidence — protect against medical emergencies, delays, and disruptions.","hi":"आत्मविश्वास के साथ यात्रा करें — चिकित्सा आपातकाल, देरी और व्यवधानों से सुरक्षा।"}',
   '{"en":"Travel insurance protects against unexpected expenses during your journey.","hi":"ट्रैवल इंश्योरेंस आपकी यात्रा के दौरान अप्रत्याशित खर्चों से रक्षा करता है।"}','✈️',6,true)
on conflict (slug) do update set name = excluded.name, sort = excluded.sort;

-- Policies are seeded via scripts/seed-supabase.mjs (reads content/*) to keep
-- the TS content layer as the single source during development.