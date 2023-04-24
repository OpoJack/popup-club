import Image from 'next/image';
import { useState } from 'react';
import type { Popup } from '~/types/types';
import SocialMedia from './SocialMedia';
import PopupModal from './PopupModal';
import { Skeleton } from './ui/Skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import { Badge } from './ui/Badge';

export default function PopupCard({ popup }: { popup: Popup }): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
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
          <div className="flex flex-col">
            <SocialMedia links={popup.links} />
            <CardTitle className="-mt-0 text-lg font-bold sm:text-xl">{popup.name}</CardTitle>
            <CardDescription className="text-xs ">{popup.description}</CardDescription>
            <CardDescription className="text-xs font-semibold">
              Based in: {popup.basedIn}
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
        </CardContent>
      </Card>
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
