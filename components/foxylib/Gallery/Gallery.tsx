import { Button } from "@components/elements/Button/button";
import Link from "next/link";
import { useRouter } from "next/router";

export type GalleryProps = {
  data: Array<Record<string, any>>;
};

export const Gallery = ({ data }: GalleryProps) => {
  const router = useRouter();
  console.log(router);
  return (
    <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-3">
      {data.map((item) => (
        <div
          key={item?.id}
          className="group flex flex-col rounded-lg border border-transparent bg-blue-50 shadow-blur hover:bg-blue-200"
        >
          <div className="flex h-52 items-center justify-center rounded-t-lg bg-white p-10 group-hover:border-x group-hover:border-t group-hover:border-primary">
            {item?.preview}
          </div>

          <Link href={router.route + "/" + item?.name.toLocaleLowerCase()}>
            <div className="flex flex-row items-center justify-between rounded-b-lg border border-transparent p-4 group-hover:border-primary">
              <div className="font-semibold group-hover:text-primary">
                {item?.name}
              </div>
              <Button aspect="rounded" children={"voir"} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
