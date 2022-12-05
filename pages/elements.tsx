import { Button } from "@components/elements/Button/button";
import { DefaultLayout } from "@components/layout/DefaultLayout";
import useTranslation from "@hooks/useTranslation";
import { Metadata } from "helpers/Metadata";
import Link from "next/link";

export default function Elements() {
  const data = useTranslation().data.elements;
  return (
    <>
      <Metadata title={"Foxylib"} />
      <DefaultLayout>
        <h1 className="mb-10 border-b-4 border-primary pr-6 pb-6 text-4xl font-bold capitalize">
          Elements !
        </h1>
        <div className="grid w-full grid-cols-3 gap-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col rounded-lg border border-transparent bg-blue-50 shadow-blur hover:bg-blue-200"
            >
              <div className="flex h-52 items-center justify-center rounded-t-lg bg-white p-10 group-hover:border-x group-hover:border-t group-hover:border-primary">
                {item.preview}
              </div>

              <Link href={"/elements/" + item.name.toLocaleLowerCase()}>
                <div className="flex flex-row items-center justify-between rounded-b-lg border border-transparent p-4 group-hover:border-primary">
                  <div className="font-semibold group-hover:text-primary">
                    {item.name}
                  </div>
                  <Button aspect="circular" children={"voir"} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </DefaultLayout>
    </>
  );
}
