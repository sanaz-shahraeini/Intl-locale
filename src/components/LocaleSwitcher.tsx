"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove the current locale from pathname
    const currentPath = pathname.replace(`/${locale}`, "") || "/";
    const newPath = `/${newLocale}${currentPath}`;
    router.replace(newPath);
  };

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
  );
}
