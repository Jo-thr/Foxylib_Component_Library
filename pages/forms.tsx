import { DefaultLayout } from "@components/layout/DefaultLayout";
import { Metadata } from "helpers/Metadata";

export default function Forms() {
  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <div className="flex h-full w-full items-center justify-center bg-gray-50">
          <h1 className="text-4xl font-bold">Forms!</h1>
        </div>
      </DefaultLayout>
    </>
  );
}
