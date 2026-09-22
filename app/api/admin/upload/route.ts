import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { writeFileSync, mkdirSync, existsSync, unlinkSync } from "fs";
import { join, normalize, sep } from "path";
import { rateLimit, clientIp } from "@/lib/utils";

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");
const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
const ALLOWED_EXT = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif", ".ico",
  ".pdf", ".txt", ".csv", ".json", ".mp4", ".webm",
]);

function safePublicPath(relative: string): string | null {
  const rel = relative.replace(/^\/+/, "");
  const full = normalize(join(process.cwd(), "public", rel));
  const root = join(process.cwd(), "public") + sep;
  if (!full.startsWith(root)) return null;
  return full;
}

async function isAdmin(req: NextRequest): Promise<boolean> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  const { data: profile } = await supabase
    .from("profiles")
    .select("role_code")
    .eq("user_id", user.id)
    .single();
  return profile?.role_code === "admin" || profile?.role_code === "super_admin";
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (!rateLimit(`upload:${ip}`, 10, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  if (!(await isAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const folder = ((formData.get("folder") as string) || "uploads").replace(/[^a-zA-Z0-9_-]/g, "");
  const deletePath = formData.get("delete") as string | null;

  if (deletePath) {
    const fullPath = safePublicPath(deletePath);
    if (fullPath && existsSync(fullPath)) {
      unlinkSync(fullPath);
      return NextResponse.json({ ok: true, deleted: deletePath });
    }
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (file.size > MAX_UPLOAD_BYTES) {
    return NextResponse.json({ error: "File too large (max 5MB)" }, { status: 413 });
  }

  const ext = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;
  if (!ALLOWED_EXT.has(ext)) {
    return NextResponse.json({ error: "File type not allowed" }, { status: 415 });
  }

  const dir = join(UPLOAD_DIR, folder);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const bytes = await file.arrayBuffer();
  const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
  const filepath = join(dir, filename);
  writeFileSync(filepath, Buffer.from(bytes));

  const publicPath = `/uploads/${folder}/${filename}`;
  return NextResponse.json({ ok: true, path: publicPath });
}
