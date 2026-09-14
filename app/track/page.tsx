import type { Metadata } from "next";
import { getCopy } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";
import { data } from "@/lib/data";
import TrackForm from "@/components/TrackForm";

export const metadata: Metadata = {
  title: "Track application — PolicyAdda",
  description: "Check the status of your PolicyAdda application using your Application ID.",
};

export default function TrackPage() {
  const locale = getLocale();
  const copy = getCopy(locale);

  return (
    <section className="pad">
      <div className="wrap max-w-md">
        <div className="section-head">
          <p className="eyebrow">{copy.track.title}</p>
          <h2>{copy.track.title}</h2>
          <p className="lead">{copy.track.sub}</p>
        </div>
        <TrackForm locale={locale} copy={copy} statuses={data.statuses()} />
      </div>
    </section>
  );
}