//@ts-nocheck
import datas from "@data/datas";
import { useRouter } from "next/router";

export default function useTranslation() {
  const router = useRouter();
  const { locale } = router;

  const data = locale === "en-EN" ? datas["en-EN"] : datas["fr-FR"];

  return { data, locale };
}
