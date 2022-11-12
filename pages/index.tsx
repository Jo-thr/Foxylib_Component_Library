import { DefaultLayout } from "@components/layout/DefaultLayout";
import useTranslation from "@hooks/useTranslation";
import { Metadata } from "helpers/Metadata";

export default function Index() {
  const data = useTranslation().data.fixedContent.home;
  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <h1 className="mb-10 border-b-4 border-primary pr-6 pb-6 text-4xl font-bold capitalize">
          {data.introduction.title}
        </h1>
        <p>{data.introduction.texte}</p>
      </DefaultLayout>
    </>
  );
}
