// @ts-nocheck
import Alert from "@components/foxylib/Alert/alert";
import { BrowserView } from "@components/foxylib/BrowserView/BrowserView";
import { TabsSection } from "@components/foxylib/Tabs/tabs";
import { DefaultLayout, LeftSide, RightSide } from "@components/layout/DefaultLayout";
import useTranslation from "@hooks/useTranslation";
import { Metadata } from "helpers/Metadata";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import imageUrl from '@public/adrian-infernus-GLf7bAwCdYg-unsplash.jpg';
import { DarkBrowserView } from "@components/foxylib/BrowserView/DarkBrowserView";

export default function Navigation() {
  const slug = useRouter().query.slug;

  const data = useTranslation().data.elements.filter((element) =>
    element.name.toLowerCase().includes(slug)
  );

  const [showAlert, setShowAlert] = useState(false);

  const delay = 3;
  const handleClicked = () => {
    navigator.clipboard.writeText(data[0]?.cta);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), delay * 1000);
  };

  console.log(data);
  return (
    <>
      <Metadata title={"Foxylib"} />
      {/* <DefaultLayout>
        <h1 className="mb-6 border-b-2  border-primary pr-6 pb-4 text-3xl font-bold capitalize">
          {data[0]?.name}
        </h1>
        <p className="mb-4 w-full text-sm">{data[0]?.description}</p>
        <button
          className="mb-14 rounded-full bg-primary px-3 py-2 text-xs text-white"
          onClick={handleClicked}
        >
          {data[0]?.ctaName}
        </button>
        <div className="grid w-full gap-16">
          {data[0]?.codes.map((item, index) => (
            <TabsSection key={index} data={data} item={item} />
          ))}
        </div>
        <Alert show={showAlert} />
      </DefaultLayout> */}
      <DefaultLayout>
        <LeftSide>
          {data[0].preview}
        </LeftSide>

        <RightSide className="gap-10">
          <h1 className="border-b-2  border-primary pr-6 pb-4 text-3xl font-bold capitalize">
          {data[0]?.name}
        </h1>
        <p className="w-full text-sm px-10">{data[0]?.description}</p>
          <DarkBrowserView>{data[0].codes[0].code}</DarkBrowserView>
        </RightSide>
      </DefaultLayout>
    </>
  );
}
