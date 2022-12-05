//@ts-nocheck
import { TabsSection } from "@components/foxylib/Tabs/tabs";
import { DefaultLayout } from "@components/layout/DefaultLayout";
import useTranslation from "@hooks/useTranslation";
import { Metadata } from "helpers/Metadata";
import { useRouter } from "next/router";

export default function Navigation() {
  const slug = useRouter().query.slug;

  const data = useTranslation().data.nav.filter((element) =>
    element.name.toLowerCase().includes(slug)
  );

  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <h1 className="mb-6 border-b-2  border-primary pr-6 pb-4 text-3xl font-bold capitalize">
          {data[0]?.name}
        </h1>
        <p className="mb-14 w-full text-sm">{data[0]?.description}</p>
        <div className="grid w-full gap-16">
          {data[0]?.codes.map((item, index) => (
            <TabsSection key={index} data={data} item={item} />
          ))}
        </div>
      </DefaultLayout>
    </>
  );
}
