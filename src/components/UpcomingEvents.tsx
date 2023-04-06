import { useState } from "react";
import { Popup, Event } from "~/types/types";
import { convertTime } from "./Events";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

export default function UpcomingEvents({ popup }: { popup: Popup }) {
  const [remainingEvents, setRemainingEvents] = useState(
    popup.events.length - 3
  );
  const [upperLimit, setUpperLimit] = useState(3);
  const [parent] = useAutoAnimate<HTMLOListElement>();

  const handleClick = () => {
    setUpperLimit(upperLimit + 3);
    setRemainingEvents(remainingEvents - 3);
  };
  return (
    <>
      <div className="border-base-200 bg-base-200 overflow-hidden rounded-md border">
        <div className="text-base-content text-center text-sm">
          Recent + Upcoming Events
        </div>
        <ol ref={parent} role="list" className="divide-base-200 divide-y">
          {popup.events.length === 0 ? (
            <li className="mx-1 px-1 py-4">
              <span className="flex flex-row justify-center text-sm">
                No events posted 😢
              </span>
            </li>
          ) : null}
          {popup.events?.slice(0, upperLimit).map((event) => (
            <li
              key={event.id}
              className="-mx-3 flex flex-col px-6 py-4 text-xs"
            >
              <div className="flex justify-between">
                <div>
                  {`${event.date
                    .toLocaleString("default", { month: "long" })
                    .slice(
                      0,
                      3
                    )} ${event.date.getDate()} ${event.date.getFullYear()}`}
                </div>
                <Link href={event.location.mapsUrl}>
                  @{event.location.name}
                </Link>
              </div>
              <div className="flex justify-between">
                {" "}
                <div>{convertTime(event.date)}</div>
                <Link className="underline" href={event.location.mapsUrl}>
                  {" "}
                  {event.location.address}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex justify-center pt-3">
        {remainingEvents >= 1 ? (
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => handleClick()}
          >
            See {remainingEvents >= 3 ? remainingEvents : null} more
          </button>
        ) : null}
      </div>
    </>
  );
}
