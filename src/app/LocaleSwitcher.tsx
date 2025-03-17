// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function LocaleSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [currentLocale, setCurrentLocale] = useState<"en" | "de">("en");

//   useEffect(() => {
//     // Set initial locale based on pathname
//     const pathLocale = pathname.split("/")[1];
//     if (pathLocale === "en" || pathLocale === "de") {
//       setCurrentLocale(pathLocale);
//     }
//   }, [pathname]);

//   const switchLocale = (locale: "en" | "de") => {
//     setCurrentLocale(locale);
//     const newPath = pathname.split("/").slice(2).join("/");
//     router.push(`/${locale}/${newPath || ""}`);
//   };

//   return (
//     <div className="flex gap-2">
//       <button
//         className="px-4 py-2 rounded border"
//         disabled={currentLocale === "en"}
//         onClick={() => switchLocale("en")}
//       >
//         English
//       </button>
//       <button
//         className="px-4 py-2 rounded border"
//         disabled={currentLocale === "de"}
//         onClick={() => switchLocale("de")}
//       >
//         Deutschland
//       </button>
//     </div>
//   );
// }

"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname}`
    router.replace(newPath)
  }

  return (
    <div className="flex gap-2">
      <Button
        variant={locale === "en" ? "default" : "outline"}
        onClick={() => switchLocale("en")}
        className="border border-white"
      >
        English
      </Button>
      <Button
        variant={locale === "de" ? "default" : "outline"}
        onClick={() => switchLocale("de")}
        className="border border-white"
      >
        Deutsch
      </Button>
    </div>
  )
}