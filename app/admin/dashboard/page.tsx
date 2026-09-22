"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

interface SiteContent {
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    videoSrc: string;
    posterSrc: string;
    showVideo: boolean;
  };
  banners: { src: string; alt: string; href: string }[];
  site: {
    brand: string;
    tagline: { en: string; hi: string };
    slogan: { en: string; hi: string };
  };
}

type Tab = "hero" | "banners" | "site" | "files";

export default function AdminDashboard() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [tab, setTab] = useState<Tab>("hero");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const load = useCallback(async () => {
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = "/admin";
        return;
      }
      const res = await fetch("/api/admin/content");
      if (res.status === 401) {
        window.location.href = "/admin";
        return;
      }
      setContent(await res.json());
    } catch {
      setError("Failed to load content");
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function save() {
    if (!content) return;
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      } else {
        setError("Save failed");
      }
    } catch {
      setError("Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/admin";
  }

  async function uploadFile(file: File, folder: string): Promise<string | null> {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", folder);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      return data.ok ? data.path : null;
    } catch {
      return null;
    } finally {
      setUploading(false);
    }
  }

  async function deleteFile(path: string) {
    await fetch("/api/admin/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ delete: path }),
    });
  }

  if (!content) {
    return (
      <div className="admin-shell">
        <p className="muted-text">Loading content...</p>
      </div>
    );
  }

  const TABS: { key: Tab; label: string }[] = [
    { key: "hero", label: "Hero Section" },
    { key: "banners", label: "Banners" },
    { key: "site", label: "Site Info" },
    { key: "files", label: "Files" },
  ];

  return (
    <div className="admin-shell">
      <div className="admin-header">
        <h1 className="text-xl font-bold">Site Editor</h1>
        <div className="flex gap-2">
          <button onClick={save} disabled={saving} className="btn btn-primary btn-sm">
            {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
          </button>
          <a href="/" target="_blank" className="btn btn-ghost btn-sm">Preview Site</a>
          <button onClick={logout} className="btn btn-ghost btn-sm">Logout</button>
        </div>
      </div>

      {error && <div className="admin-error">{error}</div>}

      <div className="admin-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={`admin-tab ${tab === t.key ? "active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="admin-content">
        {tab === "hero" && (
          <HeroEditor
            hero={content.hero}
            onChange={(hero) => setContent({ ...content, hero })}
            uploadFile={uploadFile}
            deleteFile={deleteFile}
            uploading={uploading}
          />
        )}
        {tab === "banners" && (
          <BannerEditor
            banners={content.banners}
            onChange={(banners) => setContent({ ...content, banners })}
            uploadFile={uploadFile}
            uploading={uploading}
          />
        )}
        {tab === "site" && (
          <SiteEditor
            site={content.site}
            onChange={(site) => setContent({ ...content, site })}
          />
        )}
        {tab === "files" && (
          <FileBrowser deleteFile={deleteFile} />
        )}
      </div>
    </div>
  );
}

/* ---- Hero Editor ---- */
function HeroEditor({
  hero,
  onChange,
  uploadFile,
  deleteFile,
  uploading,
}: {
  hero: SiteContent["hero"];
  onChange: (h: SiteContent["hero"]) => void;
  uploadFile: (f: File, folder: string) => Promise<string | null>;
  deleteFile: (p: string) => Promise<void>;
  uploading: boolean;
}) {
  function update(field: string, value: string | boolean) {
    onChange({ ...hero, [field]: value });
  }

  async function handleVideoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const path = await uploadFile(file, "videos");
    if (path) update("videoSrc", path);
  }

  async function handlePosterUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const path = await uploadFile(file, "images");
    if (path) update("posterSrc", path);
  }

  return (
    <div className="editor-section">
      <h2 className="editor-heading">Hero Section</h2>

      <Field label="Eyebrow Text" value={hero.eyebrow} onChange={(v) => update("eyebrow", v)} />
      <Field label="Title Line 1" value={hero.titleA} onChange={(v) => update("titleA", v)} />
      <Field label="Title Line 2 (Accent)" value={hero.titleB} onChange={(v) => update("titleB", v)} />
      <Field label="Subtitle" value={hero.sub} onChange={(v) => update("sub", v)} />
      <Field label="Primary CTA" value={hero.ctaPrimary} onChange={(v) => update("ctaPrimary", v)} />
      <Field label="Secondary CTA" value={hero.ctaSecondary} onChange={(v) => update("ctaSecondary", v)} />

      <div className="mt-6 mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={hero.showVideo}
            onChange={(e) => update("showVideo", e.target.checked)}
            className="w-4 h-4"
          />
          <span className="font-medium">Show Background Video</span>
        </label>
      </div>

      <div className="mt-4">
        <label className="block font-medium mb-2">Background Video</label>
        <Field label="Video URL" value={hero.videoSrc} onChange={(v) => update("videoSrc", v)} />
        <div className="flex items-center gap-3 mt-2">
          <label className="btn btn-ghost btn-sm cursor-pointer">
            {uploading ? "Uploading..." : "Upload Video"}
            <input type="file" accept="video/*" className="hidden" onChange={handleVideoUpload} />
          </label>
          {hero.videoSrc && (
            <button
              onClick={() => { deleteFile(hero.videoSrc); update("videoSrc", ""); }}
              className="btn btn-ghost btn-sm text-red-500"
            >
              Delete Current
            </button>
          )}
        </div>
        {hero.videoSrc && (
          <p className="muted-xs mt-1">Current: {hero.videoSrc}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="block font-medium mb-2">Poster / Fallback Image</label>
        <Field label="Poster URL" value={hero.posterSrc} onChange={(v) => update("posterSrc", v)} />
        <div className="flex items-center gap-3 mt-2">
          <label className="btn btn-ghost btn-sm cursor-pointer">
            {uploading ? "Uploading..." : "Upload Poster"}
            <input type="file" accept="image/*" className="hidden" onChange={handlePosterUpload} />
          </label>
          {hero.posterSrc && (
            <button
              onClick={() => { deleteFile(hero.posterSrc); update("posterSrc", ""); }}
              className="btn btn-ghost btn-sm text-red-500"
            >
              Delete Current
            </button>
          )}
        </div>
        {hero.posterSrc && (
          <div className="mt-2">
            <Image src={hero.posterSrc} alt="Poster preview" width={320} height={180} className="rounded max-h-40 border border-[var(--line)]" unoptimized />
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- Banner Editor ---- */
function BannerEditor({
  banners,
  onChange,
  uploadFile,
  uploading,
}: {
  banners: SiteContent["banners"];
  onChange: (b: SiteContent["banners"]) => void;
  uploadFile: (f: File, folder: string) => Promise<string | null>;
  uploading: boolean;
}) {
  function updateBanner(i: number, field: string, value: string) {
    const next = [...banners];
    next[i] = { ...next[i], [field]: value };
    onChange(next);
  }

  function addBanner() {
    onChange([...banners, { src: "", alt: "", href: "" }]);
  }

  function removeBanner(i: number) {
    onChange(banners.filter((_, idx) => idx !== i));
  }

  async function handleUpload(i: number, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const path = await uploadFile(file, "banners");
    if (path) updateBanner(i, "src", path);
  }

  return (
    <div className="editor-section">
      <div className="flex items-center justify-between mb-4">
        <h2 className="editor-heading mb-0">Banners (Auto-slide)</h2>
        <button onClick={addBanner} className="btn btn-primary btn-sm">+ Add Banner</button>
      </div>
      {banners.length === 0 && <p className="muted-text">No banners configured. Add one to show rotating banners on the home page.</p>}
      {banners.map((b, i) => (
        <div key={i} className="card p-4 mb-3">
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium">Banner {i + 1}</span>
            <button onClick={() => removeBanner(i)} className="btn btn-ghost btn-sm text-red-500">Remove</button>
          </div>
          <Field label="Image URL" value={b.src} onChange={(v) => updateBanner(i, "src", v)} />
          <div className="mt-2">
            <label className="btn btn-ghost btn-sm cursor-pointer">
              {uploading ? "Uploading..." : "Upload Image"}
              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(i, e)} />
            </label>
          </div>
          {b.src && <Image src={b.src} alt={b.alt} width={256} height={128} className="rounded mt-2 max-h-32 border border-[var(--line)]" unoptimized />}
          <Field label="Alt Text" value={b.alt} onChange={(v) => updateBanner(i, "alt", v)} />
          <Field label="Link URL (optional)" value={b.href} onChange={(v) => updateBanner(i, "href", v)} />
        </div>
      ))}
    </div>
  );
}

/* ---- Site Info Editor ---- */
function SiteEditor({
  site,
  onChange,
}: {
  site: SiteContent["site"];
  onChange: (s: SiteContent["site"]) => void;
}) {
  return (
    <div className="editor-section">
      <h2 className="editor-heading">Site Information</h2>
      <Field label="Brand Name" value={site.brand} onChange={(v) => onChange({ ...site, brand: v })} />
      <Field label="Tagline (EN)" value={site.tagline.en} onChange={(v) => onChange({ ...site, tagline: { ...site.tagline, en: v } })} />
      <Field label="Tagline (HI)" value={site.tagline.hi} onChange={(v) => onChange({ ...site, tagline: { ...site.tagline, hi: v } })} />
      <Field label="Slogan (EN)" value={site.slogan.en} onChange={(v) => onChange({ ...site, slogan: { ...site.slogan, en: v } })} />
      <Field label="Slogan (HI)" value={site.slogan.hi} onChange={(v) => onChange({ ...site, slogan: { ...site.slogan, hi: v } })} />
    </div>
  );
}

/* ---- File Browser ---- */
function FileBrowser({ deleteFile }: { deleteFile: (p: string) => Promise<void> }) {
  return (
    <div className="editor-section">
      <h2 className="editor-heading">Uploaded Files</h2>
      <p className="muted-text mb-4">Files are stored in /public/uploads/. Upload through the Hero or Banner editors.</p>
      <div className="text-sm">
        <p><strong>Videos:</strong> public/uploads/videos/</p>
        <p><strong>Images:</strong> public/uploads/images/</p>
        <p><strong>Banners:</strong> public/uploads/banners/</p>
      </div>
    </div>
  );
}

/* ---- Shared Field ---- */
function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-[var(--line)] rounded-[var(--radius-sm)] px-3 py-2 bg-[var(--surface)] text-[var(--text)] text-sm"
      />
    </div>
  );
}
