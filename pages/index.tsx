import { DefaultLayout } from "@components/layout/DefaultLayout";
import useTranslation from "@hooks/useTranslation";
import { Metadata } from "helpers/Metadata";

export default function Index() {
  const data = useTranslation().data.fixedContent.home;
  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <h1 className="mb-10 border-b-4 border-secondary pr-6 pb-6 text-4xl font-bold capitalize">
          {data.introduction.title}
        </h1>
        <p>{data.introduction.text}</p>
        <h2 className="mb-8 mt-20 text-xl font-bold capitalize">
          {data.introduction.tailwind}
        </h2>
        <p>{data.introduction.textTailwind}</p>
      </DefaultLayout>
    </>
  );
}
