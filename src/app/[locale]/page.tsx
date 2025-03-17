import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-2xl">
      <LocaleSwitcher />
      <h1>{t("title")}</h1>
      <p>{t("about")}</p>
    </div>
  )
}

export default HomePage;
