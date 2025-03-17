"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type LocaleType = "en" | "de" | "fa";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: LocaleType) => {
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
      <Button
        variant={locale === "fa" ? "default" : "outline"}
        onClick={() => switchLocale("fa")}
        className="border border-white"
      >
        فارسی
      </Button>
    </div>
  );
}
