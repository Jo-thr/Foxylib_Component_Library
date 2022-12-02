import cn from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export interface SidebarProps {
  data: {
    id: number;
    name: string;
    path: string;
    subpages?: Record<string, any>[] | undefined;
  }[];
}

export const Sidebar = ({ data }: SidebarProps) => {
  const router = useRouter();

  return (
    <div className="flex min-w-[14rem] flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-4">
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex flex-col gap-1 bg-white" aria-label="Sidebar">
          {data.map((item) => (
            <div key={item.id} className={"px-2"}>
              <div
                className={cn(`flex flex-col items-start border-l-4 border-transparent text-sm font-medium
                ${
                  router.asPath.includes(item.path) &&
                  "rounded-lg bg-secondary text-white"
                }
                `)}
              >
                <Link href={item.path} className="flex w-full py-2 px-3">
                  <span>{item.name}</span>
                </Link>
              </div>
              {item.id === 1 && <div className="mt-3 mb-2 h-px bg-gray-200" />}
              {item.subpages && router.asPath.includes(item.path) && (
                <div className="mx-3 mb-2 flex flex-col gap-2 border-l-4 border-gray-200">
                  {item.subpages?.map((sub) => (
                    <Link
                      key={sub.id}
                      href={sub.path}
                      className={cn(`-ml-1 border-l-4 p-2 text-sm font-medium first:pt-4
                  ${router.asPath === sub.path && "border-l-4 border-secondary"}
                  `)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
