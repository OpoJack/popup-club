import Image from "next/image";
import { useState } from "react";
import type { Popup } from "~/types/types";
import SocialMedia from "./SocialMedia";
import Tag from "~/components/Tag";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";

export default function Popups({ popup }: { popup: Popup }) {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(!isShown);
  };
  return (
    <li
      className="mx-2 flex flex-col divide-y divide-zinc-200 rounded-lg border bg-white shadow-sm transition-colors hover:bg-zinc-50 hover:shadow-md"
      onClick={handleClick}
    >
      <div className="p-4">
        <div className="flex flex-row space-x-2 object-cover sm:h-24">
          <div className="flex-none">
            <Image
              key={popup.links?.id}
              className="flex-shrink-1 h-20 w-20 rounded-full bg-gray-300"
              src={popup.imageUrl ?? "/hotdog.jpg"}
              alt=""
              width={80}
              height={80}
            />
          </div>
          <div className="flex w-fit shrink flex-col">
            <div className="flex h-5 flex-row space-x-2">
              <SocialMedia links={popup.links} />
              <ShareIcon
                fill="black"
                width={17}
                height={17}
                className=""
              />{" "}
              <HeartIcon fill="red" width={17} height={17} className="" />
            </div>
            <div className="-mt-1 text-xl font-bold tracking-tight text-gray-900 antialiased">
              {popup.name}
            </div>
            <div className="inline-block flex-shrink-0 text-xs font-normal text-gray-800">
              {popup.description}
            </div>
            <div className="text-xs font-semibold text-gray-900">
              Based in: {popup.basedIn}
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-1">
          {popup.tags?.map((tag) => (
            <Tag key={tag.id} id={tag.id} popupId={popup.id} name={tag?.name} />
          ))}
        </div>
      </div>
    </li>
  );
}
