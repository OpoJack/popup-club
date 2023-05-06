import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Container } from '~/components/Container';

const User = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/login').catch((err) => {
      console.error(err);
    });
  }

  if (!session?.user) {
    return (
      <Container>
        <h1>Something went wrong</h1>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="-mb-5">
          <img
            className="mx-auto h-32 w-32 rounded-full shadow-2xl"
            src={session.user.image ?? '/hotdog.jpg'}
            alt=""
          />
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-neutral overflow-hidden rounded-lg  shadow">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-center text-lg font-medium leading-6 text-base-content">
                {session.user.name}
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-base-content">About</dt>
                  <dd className="mt-1 text-sm text-base-content">{session.user.name}</dd>

                  <dt className="text-sm font-medium text-base-content">Email address</dt>
                  <dd className="mt-1 text-sm text-base-content">{session.user.email}</dd>

                  <dt className="text-sm font-medium text-base-content">Role</dt>
                  <dd className="mt-1 text-sm text-base-content">{session.user.role}</dd>
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

export default User;
