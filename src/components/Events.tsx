import Image from "next/image";
import { Popup } from "~/types/types";
import { api } from "~/utils/api";
import SocialMedia from "./SocialMedia";
import Tag from "./Tag";

export function convertTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const hours12 = hours % 12 || 12;
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours12}:${minutesStr}${ampm}`;
}

export default function Events({ popup }: { popup: Popup }) {
  return (
    <>
      {popup.events?.slice(0, 1).map((event) => (
        <li
          key={event.id}
          className="mx-2 flex border-collapse flex-col divide-y divide-zinc-200 rounded-lg border bg-zinc-50 shadow-sm transition-colors hover:shadow-md"
        >
          <div className="p-4 ">
            <div className="flex flex-row justify-between space-x-2 object-cover">
              <div className="flex flex-row space-x-2 object-cover sm:h-20">
                <div className="flex-none">
                  <Image
                    key={popup.id}
                    className="flex-shrink-1 h-20 w-20 rounded-full bg-gray-300"
                    src={popup.imageUrl ?? "/hotdog.jpg"}
                    alt=""
                    width={80}
                    height={80}
                  />

                  {popup.isHot ? (
                    <span className="absolute -top-2.5 -left-2.5 block  rounded-full bg-orange-200">
                      🔥
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="flex w-fit shrink flex-col">
                <div className="grid h-4 grid-cols-3">
                  <div className="col-span-2 text-xs font-semibold text-gray-900">
                    {`${
                      event.date.getMonth() + 1
                    }/${event.date.getDate()}/${event.date.getFullYear()}`}
                    {" • "}
                    <span className="font-bold">
                      @{convertTime(event.date)}
                    </span>
                  </div>
                </div>
                <div className="text-xl font-bold tracking-tight text-gray-900 antialiased">
                  {typeof event.name === "string" ? event.name : popup.name}
                </div>
                <div className="-mt-1 inline-block flex-shrink-0 text-sm font-normal text-gray-900">
                  {typeof event.name === "string" ? (
                    <>
                      <span className="text-xs font-medium">
                        by {popup.name}
                      </span>
                      {" • "}
                    </>
                  ) : null}
                  @{event.location.name}
                </div>
                <div className="-mt-1">
                  <a
                    href={event.location.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block flex-shrink-0 text-xs tracking-tight hover:cursor-pointer"
                  >
                    {event.location.address} {event.location.city},
                    {event.location.state}, {event.location.zip}
                  </a>
                </div>
              </div>
              <div className="flex">
                <SocialMedia links={popup.links} />
              </div>
            </div>
            <div className="flex flex-row space-x-1">
              {popup.tags?.map((tag) => (
                <Tag
                  name={tag.name}
                  id={tag.id}
                  popupId={popup.id}
                  key={tag.id}
                />
              ))}
            </div>
            <p className="text-semibold text-sm text-gray-800">
              {typeof event.description === "string" ? (
                <span className="font-medium">
                  {" "}
                  On special: {event.description}
                </span>
              ) : (
                popup.description
              )}
            </p>
          </div>
        </li>
      ))}
    </>
  );
}
