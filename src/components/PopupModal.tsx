/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Popup } from "~/types/types";
import Image from "next/image";
// import UpcomingEvents from
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import UpcomingEvents from "./UpcomingEvents";

export default function PopupModal({
  open,
  setOpen,
  popup,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  popup: Popup;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-secondary bg-opacity-20 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-xs transform overflow-hidden rounded-lg bg-base-200 px-11 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8  sm:max-w-sm sm:p-6">
                <div className="absolute right-4 top-2 flex space-x-2">
                  <SocialMedia links={popup.links} />
                </div>
                <div>
                  <div className="mx-auto flex items-center justify-center rounded-full">
                    <Image
                      key={popup.id}
                      src={popup.imageUrl || "/hotdog.jpg"}
                      alt="Popup logo"
                      height={75}
                      width={75}
                      className="h-1/2 w-1/2 flex-shrink-0 rounded-full"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-primary"
                    >
                      {popup.name}
                    </Dialog.Title>
                    <div className="mt-1">
                      {/* TODO: Add a field for a US state to popup properties */}
                      <p className="pb-5 text-sm text-primary-focus text-opacity-60">
                        {popup.basedIn}
                      </p>

                      <UpcomingEvents popup={popup} />
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <Link
                    href={`/popups/${popup.id}`}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-base font-medium text-primary shadow-sm hover:bg-opacity-80 hover:text-primary-focus focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    View Popup
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
