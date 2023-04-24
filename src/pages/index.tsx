import type { NextPage } from 'next';
import { api } from '~/utils/api';

import Popups, { PopupSkeleton } from '~/components/Popups';
import { Container } from '~/components/Container';
import { Skeleton } from '~/components/ui/Skeleton';
import { badgeVariants } from '~/components/ui/Badge';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/Avatar';
import { Badge } from '~/components/ui/Badge';
import { Button } from '~/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/Card';
import { Input } from '~/components/ui/Input';
import { Label } from '~/components/ui/Label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/Select';
import SocialMedia from '~/components/SocialMedia';
import { Popup } from '~/types/types';
import PopupCard from '~/components/Popups';

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
                  <PopupCard popup={popup} key={popup.id} />
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
