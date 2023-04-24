import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Container } from '~/components/Container';
import { api } from '~/utils/api';
import Image from 'next/image';
import { SocialMedia } from '~/components/SocialMedia';
import { Loading } from '~/components/Loading';
import { UpcomingEvents } from '~/components/UpcomingEvents';

const PopupPage = () => {
  // const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const { data: popup } = api.popup.getOne.useQuery({ id: id as string });

  if (status === 'loading') {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <div className="mx-auto max-w-xl px-4 pt-20 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="-mb-5">
          <Image
            className="mx-auto rounded-full shadow-2xl"
            src={popup?.imageUrl ?? '/'}
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-lg bg-neutral-content shadow">
            <div className="flex justify-end pr-2 pt-2">
              {popup?.links && <SocialMedia links={popup?.links} />}
            </div>
            <div className=" px-4  py-5 shadow-md sm:px-6">
              <h3 className="text-center text-3xl font-semibold leading-6 text-base-content">
                {popup?.name}
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-xl font-medium text-base-content">About</dt>
                  <dd className="mt-1 text-sm text-base-content">{popup?.description}</dd>

                  <dt className="text-sm font-medium text-base-content">Email address</dt>
                  <dd className="mt-1 text-sm text-base-content">{popup?.basedIn}</dd>

                  <dt className="text-sm font-medium text-base-content">Role</dt>
                  <dd className="mt-1 text-sm text-base-content">{popup?.orderType}</dd>
                </div>
                <div className="col-span-2 flex flex-col">
                  {popup?.events && <UpcomingEvents popup={popup} />}
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );

  //Profile page
};

export default PopupPage;
