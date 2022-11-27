import { DefaultLayout } from "@components/layout/DefaultLayout";
import { Metadata } from "helpers/Metadata";

export default function Layout() {
  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <h1 className="mb-10 border-b-4 border-secondary pr-6 pb-6 text-4xl font-bold capitalize">
          Get Started !
        </h1>
      </DefaultLayout>
    </>
  );
}
