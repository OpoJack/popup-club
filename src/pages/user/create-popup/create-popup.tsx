import { useState } from "react";
import { NextPage } from "next";
import { api } from "~/utils/api";
import { Container } from "~/components/Container";
import { useSession } from "next-auth/react";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Vendors", href: "#" },
  { name: "Events", href: "#" },
  { name: "Calendar", href: "#" },
];

const CreatePopup: NextPage = () => {
  //Popup data
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("/hotdog.jpg");
  const [basedIn, setBasedIn] = useState<string>("Orlando, FL");
  const [isHot, setIsHot] = useState<boolean>(false);
  const [orderType, setOrderType] = useState<string>("First come, first serve");

  const createPopup = api.popup.create.useMutation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleSubmitPopup = () => {
    if (!session) {
      return;
    }
    const user = session.user;

    const popupData = {
      name,
      description,
      imageUrl,
      basedIn,
      isHot,
      orderType,
      user,
    };
    createPopup.mutate(popupData);
  };

  if (!session) {
    // Handle unauthenticated state, e.g. render a SignIn component
    return (
      <div>
        <h1>Please sign in</h1>
      </div>
    );
  }

  return (
    <>
      <Container>
        {/* Main Content */}
        <main>
          <div className="relative py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              {/* Title */}
              <div className="mx-auto max-w-3xl pb-14 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
                  Welcome to Popup Club!
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  We&apos;re happy to have you. This is a community of people
                  who love food and cooking. Thank you for sharing your passion
                  with us.
                </p>
                <p className="mt-6 text-xl font-semibold leading-8 text-gray-100">
                  When&apos;s the next popup?
                </p>
              </div>
              {/* Popup info */}
              <form className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200">
                  <div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 ">
                      {/* Popup Name */}
                      <div className="sm:col-span-3 sm:col-start-1 ">
                        <label
                          htmlFor="popup"
                          className="block pb-2 text-2xl font-medium leading-6 text-gray-100"
                        >
                          What&apos;s your Popup called?
                        </label>
                        <div className="mt-2 shadow-lg shadow-indigo-500">
                          <input
                            type="text"
                            name="popup-name"
                            id="popup-name"
                            className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* Bio */}
                      <div className="sm:col-span-5">
                        <label
                          htmlFor="bio"
                          className="text-md block font-medium leading-6 text-gray-100"
                        >
                          Bio
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="bio"
                            name="bio"
                            rows={2}
                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                            defaultValue={""}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <p className="mt-2 text-xs text-gray-400">
                          Write a bit about your product + service.
                        </p>
                      </div>
                      {/* Photo */}
                      <div className="sm:col-span-6">
                        <label
                          htmlFor="photo"
                          className="text-md block font-medium leading-6 text-gray-100"
                        >
                          Photo
                        </label>
                        <div className="mt-2 flex items-center">
                          <span className="h-20 w-20 overflow-hidden rounded-full bg-gray-100">
                            <svg
                              className="h-full w-full text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </span>
                          <button
                            type="button"
                            className="ml-5 rounded-md bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Change
                          </button>
                        </div>
                      </div>
                      {/* Based in */}
                      <div className=" sm:col-span-3">
                        <label
                          htmlFor="city"
                          className="text-md block font-medium leading-6 text-gray-100"
                        >
                          Where are you based in?
                        </label>
                        <select
                          id="city"
                          name="city"
                          autoComplete="city-name"
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                          className="text-md block font-medium leading-6 text-gray-100"
                        >
                          How do you take orders?
                        </label>
                        <select
                          id="order-type"
                          name="order-type"
                          autoComplete="on"
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="ml-3 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => handleSubmitPopup()}
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
