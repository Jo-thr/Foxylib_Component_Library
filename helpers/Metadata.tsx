import Head from "next/head";

export interface MetadataProps {
  title: string;
}

export const Metadata = ({ title }: MetadataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel={"shortcut icon"} href={"/fox.png"} />
    </Head>
  );
};
