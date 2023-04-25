import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Container } from '~/components/Container';
import { api } from '~/utils/api';
import { Loading } from '~/components/Loading';
import Popups, { PopupSkeleton } from '~/components/Popups';

const AllPopups = () => {
  const { data: session, status } = useSession();
  const popups = api.popup.getAll.useQuery();
  const router = useRouter();

  return (
    <Container>
      <div className="relative sm:py-5 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="pb-10">
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
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default AllPopups;
