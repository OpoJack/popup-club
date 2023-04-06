import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { type NextRouter, useRouter } from "next/router";

const navigation = [
  { name: "Vendors", href: "/popups", current: false },
  { name: "Events", href: "/events", current: false },
  { name: "Calendar", href: "/", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const router = useRouter();
  const { data: sessionData } = useSession();

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16  items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-1 text-base-content focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  href={{
                    pathname: "/",
                  }}
                >
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <Link
                  href={{
                    pathname: "/",
                  }}
                  className="flex flex-shrink-0"
                >
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={{
                        pathname: item.href,
                      }}
                      className={`inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-base-content hover:border-secondary ${
                        router.asPath === item.href
                          ? "border-secondary-focus"
                          : "border-base-content"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {sessionData && <UserProfile sessionData={sessionData} />}
                {!sessionData && <Login router={router} />}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => (
                <Link
                  as="a"
                  key={item.name}
                  href={{
                    pathname: item.href,
                  }}
                  className="block rounded-sm border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-base-content hover:bg-neutral-focus hover:text-neutral-content"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const Login = ({ router }: { router: NextRouter }) => {
  return (
    <Link
      href={{
        pathname: "/login",
      }}
      className="text-sm font-semibold leading-6 text-base-content"
    >
      Sign in
      <span aria-hidden="true"> &rarr;</span>
    </Link>
  );
};

const UserProfile = ({ sessionData }: { sessionData: Session }) => {
  const userNavigation = [
    {
      name: "Your Profile",
      href: {
        pathname: `/user/${sessionData.user.id}`,
      },
      display: true,
      styles:
        "block px-4 py-2 text-sm text-secondary-content hover:bg-secondary-focus",
    },
    {
      name: "Popup Settings",
      href: {
        pathname: `/popups/edit-popup/`,
        query: {
          popupId: sessionData.user.popupId,
        },
      },
      display: sessionData.user.popupId ? true : false,
      styles:
        "block px-4 py-2 text-sm text-secondary-content hover:bg-secondary-focus",
    },
    {
      name: "Create popup",
      href: {
        pathname: `/user/${sessionData.user.id}/create-popup`,
      },
      display: sessionData.user.popupId ? false : true,
      styles:
        "block bg-accent px-4 py-2 text-sm font-semibold text-secondary-content hover:bg-accent-focus",
    },
  ];
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-secondary-content text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-secondary-content">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={sessionData.user.image ?? ""}
            alt=""
          />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-secondary py-1 shadow-lg ring-1 ring-secondary ring-opacity-5 focus:outline-none">
          {userNavigation.map(
            (item) =>
              item.display && (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={classNames(
                        active ? "bg-secondary" : "",
                        item.styles
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              )
          )}
          <Menu.Item>
            {({ active }) => (
              <Link
                href="#"
                className={classNames(
                  active ? "bg-secondary" : "",
                  "block px-4 py-2 text-sm text-secondary-content hover:bg-secondary-focus"
                )}
                onClick={
                  sessionData ? () => void signOut() : () => void signIn()
                }
              >
                {sessionData ? "Sign out" : "Sign in with Discord"}
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
