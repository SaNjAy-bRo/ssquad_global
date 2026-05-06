import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/app/lib/session";

const COOKIE_NAME = "ssquad_admin_session";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Only handle /admin routes
  if (!path.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Read the session cookie
  const sessionCookie = request.cookies.get(COOKIE_NAME)?.value;
  const session = await decrypt(sessionCookie);
  const isAuthenticated = !!session?.userId;

  // If on the login page and already authenticated, redirect to dashboard
  if (path === "/admin/login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/admin", request.nextUrl));
  }

  // If on any other /admin route and NOT authenticated, redirect to login
  if (path !== "/admin/login" && !isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
  }

  return NextResponse.next();
}

// Only run on admin routes (skip static files, images, api, etc.)
export const config = {
  matcher: ["/admin/:path*"],
};
