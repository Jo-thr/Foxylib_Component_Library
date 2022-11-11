import { DefaultLayout } from "@components/layout/DefaultLayout";
import { Metadata } from "helpers/Metadata";
import { useRouter } from "next/router";

export default function Navigation() {
  const slug = useRouter().query.slug;
  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <div className="flex h-full w-full flex-col items-start justify-center bg-gray-50 px-40 py-24">
          <h1 className="mb-10 border-b-4 border-primary pr-6 pb-6 text-4xl font-bold capitalize">
            {slug}
          </h1>
          <p className="mb-14 w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />
            Dignissimos earum expedita sunt, reprehenderit eveniet ut asperiores
            ratione repellat ipsam nobis sint minima nostrum ? <br />
            Quos eos, veniam odio excepturi porro ex.
          </p>
          <div className="h-[50vh] w-full border bg-white"></div>
        </div>
      </DefaultLayout>
    </>
  );
}
