import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// import { NextRequest, NextResponse } from "next/server";

// const intlMiddleware = createMiddleware(routing);

// export const middleware = (request: NextRequest) => {
//   const acceptLanguage = request.headers.get("accept-language");
//   const preferredLanguage = acceptLanguage?.split(",")[0].split("-")[0] || "en";
//   const { pathname } = request.nextUrl;

//   if (pathname === "/") {
//     return NextResponse.redirect(new URL(`/${preferredLanguage}`, request.url));
//   }

//   return intlMiddleware(request);
// };

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(en|de)/:path*"],
// };