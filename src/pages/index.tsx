import type { NextPage } from 'next';
import { api } from '~/utils/api';

import Popups from '~/components/Popups';
import { Container } from '~/components/Container';
import { Skeleton } from '~/components/ui/Skeleton';
import { badgeVariants } from '~/components/ui/Badge';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Container>
          <PopupContent />
        </Container>
      </main>
    </>
  );
};
/* "Discover the best popups in Orlando, Miami and Tampa Florida"
"Explore the newest and most exciting popup food experiences"
"Satisfy your cravings with the latest popup sensations"
"Find your new favorite food popup in one easy place"
"Experience the unique flavors of local popup businesses"
"From tacos to sushi, find your next food adventure"
"A taste of something new: the freshest popups around"
"The ultimate guide to popup food in Orlando, Miami and Tampa Florida"
"Stay up-to-date with the latest popup trends and flavors"
"A popup paradise: where foodies come to play"
*/

export default Home;

const PopupContent: React.FC = () => {
  const popups = api.popup.getAll.useQuery();
  return (
    <>
      <div className="relative sm:py-10 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="pb-10 pt-10 sm:pb-20">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block text-base-content">The latest and greatest</span>
              <span className="block text-secondary">Popups</span>
            </h1>
          </div>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popups.isLoading ? (
              <>
                <PopupSkeleton />
                <PopupSkeleton />
                <PopupSkeleton />
                <PopupSkeleton />
                <PopupSkeleton />
                <PopupSkeleton />
              </>
            ) : (
              <>
                {popups.data?.map((popup) => (
                  <Popups popup={popup} key={popup.id} />
                ))}
              </>
            )}

            {/* {popups?.map((popup) => (
              <Popups popup={popup} key={popup.id} />
            ))} */}
          </ul>
        </div>
      </div>
    </>
  );
};

function PopupSkeleton(): JSX.Element {
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
