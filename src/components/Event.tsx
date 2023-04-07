import Image from "next/image";
import type { Popup } from "~/types/types";
import SocialMedia from "./SocialMedia";
import Tag from "~/components/Tag";
import { CalendarIcon } from "@heroicons/react/24/solid";

export function convertTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const hours12 = hours % 12 || 12;
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours12}:${minutesStr}${ampm}`;
}

export default function Event({ popup }: { popup: Popup }) {
  return (
    <>
      {popup.events?.slice(0, 1).map((event) => (
        <li
          key={event.id}
          className="mx-2 flex flex-col divide-y divide-base-200 rounded-lg  border bg-base-100 shadow-md  transition-all hover:bg-base-200 hover:shadow-xl"
        >
          <div className="p-3">
            <div className="flex flex-row justify-between space-x-2 object-cover sm:h-fit ">
              <div className="flex flex-row gap-2">
                <Image
                  key={popup.links?.id}
                  className="flex-shrink-1 h-20 w-20 rounded-full shadow-md hover:shadow-lg"
                  src={popup.imageUrl ?? "/hotdog.jpg"}
                  alt=""
                  width={80}
                  height={80}
                />

                <div className="flex w-fit shrink flex-col text-base-content">
                  <div className="col-span-2 text-xs">
                    <span className="font-semibold">
                      {`${
                        event.date.getMonth() + 1
                      }/${event.date.getDate()}/${event.date.getFullYear()}`}
                      {" • "}
                    </span>
                    <span className="font-bold">
                      @{convertTime(event.date)}
                    </span>
                  </div>
                  <div className="text-xl font-bold tracking-tight text-base-content antialiased">
                    {typeof event.name === "string" ? event.name : popup.name}
                  </div>
                  <div className="-mt-1 inline-block flex-shrink-0 text-sm font-normal text-base-content">
                    {typeof event.name === "string" ? (
                      <>
                        <span className="text-xs font-medium">
                          by {popup.name}
                        </span>
                      </>
                    ) : null}
                    <span className="block text-xs font-semibold">
                      @{event.location.name}
                    </span>
                  </div>
                  <div className="-mt-1">
                    <a
                      href={event.location.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block flex-shrink-0 rounded-lg text-xs tracking-tight hover:cursor-pointer hover:bg-base-300"
                    >
                      {event.location.address} {event.location.city},{" "}
                      {event.location.state}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex">
                <SocialMedia links={popup.links} />
              </div>
            </div>

            <div className="flex flex-row space-x-1">
              {popup.tags.map((tag) => (
                <Tag
                  key={tag.id}
                  id={tag.id}
                  popupId={popup.id}
                  name={tag.name}
                />
              ))}
            </div>
            <p className="text-sm text-base-content">
              {typeof event.description === "string" ? (
                <span className="font-semibold">
                  {" "}
                  On special: {event.description}
                </span>
              ) : (
                <span>Bio: {popup.description}</span>
              )}
            </p>
          </div>
        </li>
      ))}
    </>
  );
}
