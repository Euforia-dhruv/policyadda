import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import GoogleForm from "@/components/GoogleForm";
import { company, pickLocale } from "@/content/company";

export const metadata: Metadata = {
  title: "Careers — PolicyAdda",
  description:
    "Join Policy Adda. Apply online for Sales Executive, Team Leader, HR Recruiter and other roles — submit your application with a link to your resume.",
};

export default function CareersPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  return (
    <section className="pad">
      <div className="wrap">
        <div className="section-head">
          <h2>{pickLocale(company.careers.title, locale)}</h2>
          <p className="lead">{pickLocale(company.careers.tagline, locale)}</p>
        </div>
        <GoogleForm formKey="careers" copy={copy} submitLabel={copy.forms.careersSubmit} />
      </div>
    </section>
  );
}
