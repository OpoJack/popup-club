import Image from "next/image";
import { useState } from "react";
import type { Popup } from "~/types/types";
import SocialMedia from "./SocialMedia";
import Tag from "~/components/Tag";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";
import PopupModal from "./PopupModal";

export default function Popups({ popup }: { popup: Popup }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PopupModal open={open} setOpen={setOpen} popup={popup} />
      <li
        className="mx-2 flex flex-col divide-y divide-base-200 rounded-lg  border bg-base-100 shadow-md  transition-all hover:bg-base-200 hover:shadow-xl"
        onClick={() => setOpen(true)}
      >
        <div className="p-3">
          <div className="flex flex-row space-x-2 object-cover sm:h-fit ">
            <div className="flex-none">
              <Image
                key={popup.links?.id}
                className="flex-shrink-1 h-20 w-20 rounded-full shadow-md hover:shadow-lg"
                src={popup.imageUrl ?? "/hotdog.jpg"}
                alt=""
                width={80}
                height={80}
              />
            </div>
            <div className="flex w-fit shrink flex-col">
              <div className="flex h-5 flex-row space-x-2">
                <SocialMedia links={popup.links} />
                <ShareIcon fill="black" width={17} height={17} />{" "}
                <HeartIcon fill="red" width={17} height={17} />
              </div>
              <div className="-mt-1 text-xl font-bold tracking-tight text-base-content antialiased">
                {popup.name}
              </div>
              <div className="inline-block flex-shrink-0 text-xs font-normal text-base-content">
                {popup.description}
              </div>
              <div className="text-xs font-semibold text-base-content">
                Based in: {popup.basedIn}
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-1">
            {popup.tags?.map((tag) => (
              <Tag
                key={tag.id}
                id={tag.id}
                popupId={popup.id}
                name={tag?.name}
              />
            ))}
          </div>
        </div>
      </li>
    </>
  );
}
