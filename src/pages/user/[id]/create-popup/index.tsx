import { useState } from 'react';
import { NextPage } from 'next';
import { api } from '~/utils/api';
import { Container } from '~/components/Container';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const CreatePopup: NextPage = () => {
  const router = useRouter();
  const createPopup = api.popup.create.useMutation();
  const { data: session, status } = useSession();

  //Popup data
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('/hotdog.jpg');
  const [basedIn, setBasedIn] = useState<string>('Orlando, FL');
  const [orderType, setOrderType] = useState<string>('First come, first serve');

  const handleSubmitPopup = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!session) {
      return;
    }
    const userId = session.user.id;

    const popupData = {
      name: name,
      description: description,
      imageUrl: imageUrl,
      basedIn: basedIn,
      isHot: false,
      orderType: orderType,
      userId: userId,
    };
    createPopup.mutate(popupData);
    router.push(`/user/${session.user.id}`).catch((err) => {
      console.error(err);
    });
  };

  if (status === 'loading') {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <Container>
        <h1>Please sign in</h1>
      </Container>
    );
  }

  // Checks if the user already has a popup and redirects them to their edit popup page if they do.
  if (session?.user.popupId) {
    router
      .push(`/popups/edit-popup/?popupId=${session.user.popupId}`)
      .catch((err) => {
        console.error(err);
      });
  }

  if (session?.user.role === 'USER') {
    return (
      <Container>
        <h1>Please contact us to get started as a popup vendor.</h1>
      </Container>
    );
  }

  return (
    <>
      <Container>
        {/* Main Content */}
        <main>
          <div className="relative py-10 sm:py-14 lg:pb-40">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              {/* Title */}
              <div className="mx-auto max-w-3xl pb-14 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-neutral-focus sm:text-7xl">
                  Welcome to Popup Club!
                </h1>
                <p className="mt-6 text-lg leading-8 text-base-content">
                  We&apos;re building a community of people who love food,
                  cooking and small-businesses. You bring the food, we get the
                  word out. Thank you for sharing your passion with us.
                </p>
                <p className="mt-6 text-xl font-semibold leading-8 text-base-content">
                  When&apos;s the next popup?
                </p>
              </div>
              {/* Popup info */}
              <form
                className="space-y-8 divide-y divide-neutral"
                onSubmit={handleSubmitPopup}
              >
                <div className="divide-neut space-y-8 divide-y">
                  <div>
                    <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6 ">
                      {/* Popup Name */}
                      <div className="sm:col-span-3 sm:col-start-1 ">
                        <label
                          htmlFor="popup"
                          className="block pb-2 text-2xl font-medium leading-6 text-base-content"
                        >
                          What&apos;s your Popup called?
                        </label>
                        <div className="mt-2 rounded-md shadow-lg shadow-secondary">
                          <input
                            type="text"
                            name="popup-name"
                            id="popup-name"
                            className="block w-full rounded-md border-0 py-2 text-base-content shadow-sm ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-secondary-focus sm:text-lg sm:leading-6"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* Bio */}
                      <div className="sm:col-span-5">
                        <label
                          htmlFor="bio"
                          className="text-md block font-medium leading-6 text-base-content"
                        >
                          Bio
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="bio"
                            name="bio"
                            rows={2}
                            className="block w-full rounded-md border-0 text-base-content shadow-sm ring-1 ring-inset ring-base-content placeholder:text-base-content focus:ring-2 focus:ring-inset focus:ring-secondary-focus sm:py-1.5 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <p className="mt-2 text-xs text-neutral">
                          Write a bit about your product + service.
                        </p>
                      </div>
                      {/* Photo */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="photo"
                          className="text-md block font-medium leading-6 text-base-content"
                        >
                          Photo
                        </label>
                        <div className="mt-2 flex items-center">
                          <span className="h-20 w-20 overflow-hidden rounded-full bg-gray-100">
                            <svg
                              className="h-full w-full text-base-100"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                          <button
                            type="button"
                            className="ml-5 rounded-md bg-base-100 px-2.5 py-1.5 text-sm font-semibold text-neutral shadow-sm ring-1 ring-inset ring-neutral-focus hover:bg-base-300"
                          >
                            Change
                          </button>
                        </div>
                      </div>
                      {/* Based in */}
                      <div className=" sm:col-span-3">
                        <label
                          htmlFor="city"
                          className="text-md block font-medium leading-6 text-base-content"
                        >
                          Where are you based in?
                        </label>
                        <select
                          id="city"
                          name="city"
                          autoComplete="city-name"
                          className="mt-2 block w-full rounded-md border-0 bg-base-100 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                          value={basedIn}
                          onChange={(e) => setBasedIn(e.currentTarget.value)}
                        >
                          <option>Orlando, FL</option>
                          <option>Tampa, FL</option>
                          <option>Miami, FL</option>
                        </select>
                      </div>
                      {/* Order type */}
                      <div className="sm:col-span-3 sm:col-start-1">
                        <label
                          htmlFor="order-type"
                          className="text-md block font-medium leading-6 text-base-content"
                        >
                          How do you take orders?
                        </label>
                        <select
                          id="order-type"
                          name="order-type"
                          autoComplete="on"
                          className="mt-2 block w-full rounded-md border-0 bg-base-100 py-1.5 text-base-content shadow-sm ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                          value={orderType}
                          onChange={(e) => setOrderType(e.currentTarget.value)}
                        >
                          <option>First come, first serve</option>
                          <option>Preorder</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Save */}
                <div className="pt-5">
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-neutral-content shadow-sm hover:bg-secondary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-focus"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
};
export default CreatePopup;
