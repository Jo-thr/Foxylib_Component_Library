import { FC } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import cn from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import FlagFR from "@assets/images/FR.png";
import FlagEN from "@assets/images/EN.png";

interface ComponentProps {
  onClick?: () => any;
  isValid?: boolean;
}

const SwitchLang: FC<ComponentProps> = ({ onClick, isValid }) => {
  const router = useRouter();
  const onChangeLanguage =
    (lang: string) => (e: { preventDefault: () => void }) => {
      e.preventDefault();
      router.push(router.asPath, undefined, { locale: lang });
    };
  return (
    <Menu as="div" className="relative text-left">
      <div className="ml-2">
        <Menu.Button className="flex w-full items-center justify-center text-sm font-medium ">
          <div className="ml-1">
            {router.locale === "fr-FR" ? (
              <div className="h-6 w-6 overflow-hidden rounded-full bg-center bg-no-repeat">
                <Image src={FlagFR} alt={"FR"} className={"h-full w-auto"} />
              </div>
            ) : (
              <div className="h-6 w-6 overflow-hidden rounded-full bg-center bg-no-repeat">
                <Image src={FlagEN} alt={"EN"} className={"h-full w-auto"} />
              </div>
            )}
          </div>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="shadow-magical absolute -right-6 z-10  mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md border bg-white ">
          <div>
            {router.locales?.map((locale) => (
              <Menu.Item key={locale}>
                <button
                  onClick={onChangeLanguage(locale)}
                  className={cn(`
                  group flex w-full items-center px-4 py-2 text-sm
                    ${
                      locale === router.locale
                        ? "cursor-default bg-gray-100 text-gray-400"
                        : "font-semibold text-gray-700 hover:bg-blue-100"
                    }
                    `)}
                >
                  <div className="flex items-center">
                    {locale === "fr-FR" ? <>Français</> : <>English</>}
                  </div>
                </button>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SwitchLang;
