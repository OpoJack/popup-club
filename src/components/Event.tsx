import { useState } from 'react';
import SocialMedia from './SocialMedia';
import PopupModal from './PopupModal';
import { Skeleton } from './ui/Skeleton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import { Badge } from './ui/Badge';
import { Popup } from '~/types/types';
import Link from 'next/link';

export default function EventCard({ popup }: { popup: Popup }): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <>
      {popup.events?.slice(0, 1).map((event) => (
        <>
          <PopupModal open={open} setOpen={setOpen} popup={popup} />
          <Card
            className="h-full transition hover:bg-base-200 hover:shadow-md"
            onClick={() => setOpen(true)}
          >
            <CardHeader className="flex-row space-y-0 p-3">
              <Avatar className="mx-2 h-20 w-20">
                <AvatarImage width={80} height={80} src={popup.imageUrl} />
                <AvatarFallback>{popup.name}</AvatarFallback>
              </Avatar>
              <div className="flex w-full flex-col">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    <CardDescription className="text-xs font-semibold">
                      {`${
                        event.date.getMonth() + 1
                      }/${event.date.getDate()}/${event.date.getFullYear()}`}{' '}
                      •&nbsp;
                    </CardDescription>
                    <CardDescription className="text-xs font-bold">
                      @{convertTime(event.date)}
                    </CardDescription>
                  </div>
                  <SocialMedia links={popup.links} />
                </div>
                <CardTitle className="-mt-0 text-xl font-bold">{popup.name}</CardTitle>
                <CardDescription className=" text-xs font-semibold">
                  @{event.location.name}
                </CardDescription>
                <CardDescription className="-mt-1 ">
                  <Link
                    href={event.location.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block flex-shrink-0 rounded-sm px-0.5 text-xs tracking-tight hover:cursor-pointer hover:bg-base-300"
                  >
                    {event.location.address} {event.location.city}, {event.location.state}
                  </Link>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pb-4 pl-4">
              <div className="flex flex-row gap-1">
                {popup.tags.map((tag) => (
                  <Badge key={tag.id} variant={'secondary'} className="cursor-pointer">
                    {tag.name}
                  </Badge>
                ))}
              </div>
              <CardFooter className="p-0 pt-2 text-sm text-base-content">
                {typeof event.description === 'string' ? (
                  <span className="font-semibold"> On special: {event.description}</span>
                ) : (
                  <span>Bio: {popup.description}</span>
                )}
              </CardFooter>
            </CardContent>
          </Card>
        </>
      ))}
    </>
  );
}

export function PopupSkeleton(): JSX.Element {
  return (
    <Skeleton className="mx-2 flex flex-col divide-base-200 rounded-lg border bg-base-100 shadow-md">
      <div className="p-3">
        <div className="flex flex-row space-x-2 object-cover sm:h-fit ">
          <div className="flex-none">
            <Skeleton className="flex-shrink-1 h-20 w-20 rounded-full shadow-md hover:shadow-lg" />
          </div>
          <div className="flex w-full flex-col gap-2">
            <Skeleton className="flex h-5 flex-row" />
            <Skeleton className="-mt-1 h-20 text-xl font-bold tracking-tight antialiased" />
          </div>
        </div>
        <div className="flex flex-row space-x-1">
          <div className="mt-1 flex flex-row gap-2 truncate px-0.5 py-2 text-sm">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
      </div>
    </Skeleton>
  );
}

export function convertTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const hours12 = hours % 12 || 12;
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours12}:${minutesStr}${ampm}`;
}
