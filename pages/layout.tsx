import { Gallery } from "@components/foxylib/Gallery/Gallery";
import { DefaultLayout } from "@components/layout/DefaultLayout";
import useTranslation from "@hooks/useTranslation";
import { Metadata } from "helpers/Metadata";

export default function Layout() {
  const data = useTranslation().data.layout;
  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <h1 className="mb-10 border-b-4 border-primary pr-6 pb-6 text-4xl font-bold capitalize">
          Layout !
        </h1>
        <Gallery data={data} />
      </DefaultLayout>
    </>
  );
}
