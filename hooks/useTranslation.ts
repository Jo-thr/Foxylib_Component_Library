import datas from "@data/datas";
import { useRouter } from "next/router";

export default function useTranslation() {
  const router = useRouter();
  const { locale } = router;

  const data = datas

  return {data, locale};
}
