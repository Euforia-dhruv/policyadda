import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { writeFileSync, mkdirSync, existsSync, unlinkSync } from "fs";
import { join } from "path";

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");

async function isAdmin(req: NextRequest): Promise<boolean> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
  return profile?.role === "admin" || profile?.role === "super_admin";
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const folder = (formData.get("folder") as string) || "uploads";
  const deletePath = formData.get("delete") as string | null;

  if (deletePath) {
    const fullPath = join(process.cwd(), "public", deletePath);
    if (existsSync(fullPath)) {
      unlinkSync(fullPath);
      return NextResponse.json({ ok: true, deleted: deletePath });
    }
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
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
