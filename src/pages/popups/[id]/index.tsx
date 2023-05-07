import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Container } from '~/components/Container';
import { api } from '~/utils/api';
import Image from 'next/image';
import SocialMedia from '~/components/SocialMedia';
import { Loading } from '~/components/Loading';
import UpcomingEvents from '~/components/UpcomingEvents';

const PopupPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: popup } = api.popup.getOne.useQuery({ id: id as string });

  return (
    <Container>
      <div className="mx-auto max-w-xl rounded-xl bg-neutral px-4 py-10 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="-mb-5">
          <Image
            className="mx-auto rounded-full shadow-2xl"
            src={popup?.imageUrl ?? '/'}
            alt=""
            width={150}
            height={150}
          />
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden border-secondary bg-base-200 shadow-offset-accent ">
            <div className="flex justify-end pr-2 pt-2">
              {popup?.links && <SocialMedia links={popup?.links} />}
            </div>
            <div className=" mx-auto w-fit bg-neutral px-4 py-5 shadow-xl sm:px-6">
              <h3 className="text-center text-2xl font-semibold leading-6 text-neutral-content">
                {popup?.name}
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-2xl font-bold text-base-content">About</dt>
                  <dd className="text-md mt-1 font-medium text-base-content">
                    {popup?.description}
                  </dd>

                  <dt className="text-2xl font-bold text-base-content">Primary Location</dt>
                  <dd className="text-md mt-1 font-medium text-base-content">{popup?.basedIn}</dd>

                  <dt className="text-2xl font-bold text-base-content">Order Type</dt>
                  <dd className="text-md font-medium text-base-content">{popup?.orderType}</dd>
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
