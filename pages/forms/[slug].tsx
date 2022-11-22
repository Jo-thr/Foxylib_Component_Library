//@ts-nocheck
import { TabsSection } from "@components/foxylib/Tabs/tabs";
import { DefaultLayout } from "@components/layout/DefaultLayout";
import useTranslation from "@hooks/useTranslation";
import { Metadata } from "helpers/Metadata";
import { useRouter } from "next/router";

export default function Forms() {
  const slug = useRouter().query.slug;

  const data = useTranslation().data.elements.filter((element) =>
    element.name.toLowerCase().includes(slug)
  );

  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <h1 className="mb-10 border-b-4 border-primary pr-6 pb-6 text-4xl font-bold capitalize">
          {data[0]?.name}
        </h1>
        <p className="mb-14 w-full">{data[0]?.description}</p>
        <TabsSection data={data} slug={slug} />
      </DefaultLayout>
    </>
  );
}
