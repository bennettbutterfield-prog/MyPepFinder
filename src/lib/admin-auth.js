import { cookies } from "next/headers";

export function getAdminSecret() {
  return process.env.ADMIN_SECRET?.trim() || "";
}

export async function isAdminAuthenticated() {
  const secret = getAdminSecret();
  if (!secret) return false;

  const cookieStore = await cookies();
  return cookieStore.get("mypep_admin")?.value === secret;
}
