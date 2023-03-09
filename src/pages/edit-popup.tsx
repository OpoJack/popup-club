import type { NextPage } from "next";
import { api } from "../utils/api";

import Nav from "../components/Nav";
import { useState } from "react";
import { Container } from "~/components/Container";

const EditPopup: NextPage = () => {
  //Popup data
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("/hotdog.jpg");
  const [basedIn, setBasedIn] = useState<string>("Orlando, FL");
  const [isHot, setIsHot] = useState<boolean>(false);
  const [orderType, setOrderType] = useState<string>("First come, first serve");

  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [instagramUrl, setInstagramUrl] = useState<string>("");
  const [facebookUrl, setFacebookUrl] = useState<string>("");
  const [tiktokUrl, setTiktokUrl] = useState<string>("");

  const createPopup = api.popup.create.useMutation();
  const createLinks = api.link.createMany.useMutation({
    onSuccess: () => {
      console.log("success");
    },

    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmitPopup = () => {
    const popupData = {
      name,
      description,
      imageUrl,
      basedIn,
      isHot,
      orderType,
    };
    // createPopup.mutate(popupData);
  };
  const handleSubmitLinks = () => {
    // TODO: Need a way to access the popup ID after it's created
    const linkData = {
      links: [
        {
          name: "website",
          url: websiteUrl,
          popupId: "123",
        },
        {
          name: "instagram",
          url: instagramUrl,
          popupId: "123",
        },
        {
          name: "facebook",
          url: facebookUrl,
          popupId: "123",
        },
        {
          name: "tiktok",
          url: tiktokUrl,
          popupId: "123",
        },
      ],
    };
    createLinks.mutate(linkData);
  };

  const trimUrl = (target: HTMLInputElement) => {
    //This checks if the input starts with http:// or https:// and removes it, then sets the state and the input value to the new value
    const input = target.value;

    const newInput = input
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .replace("instagram.com/", "")
      .replace("facebook.com/", "")
      .replace("tiktok.com/@", "");

    target.value = newInput;
    //If social media detected, return full url, same for facebook and tiktok
    if (target.name === "instagram") {
      return `https://instagram.com/${newInput}`;
    }
    if (target.name === "facebook") {
      return `https://facebook.com/${newInput}`;
    }
    if (target.name === "tiktok") {
      return `https://tiktok.com/@${newInput}`;
    }
    return `https://${newInput}`;
  };

  return (
    <>
      <main>
        <Container>
          <div
            className="
      mx-auto max-w-7xl pb-32 sm:px-6 lg:px-8"
          >
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200" />
              </div>
            </div>

            {/* Popup info */}
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      Popup deets
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Tell us about your popup!
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-slate-50 px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          {/* Popup name */}
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="popup-name"
                              className="block text-lg font-medium leading-6 text-gray-900"
                            >
                              Popup name
                            </label>
                            <input
                              type="text"
                              name="popup-name"
                              id="popup-name"
                              autoComplete="popup-name"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          {/* Photo */}
                          <div className="col-span-6 sm:col-span-4">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                              Photo
                            </label>
                            <div className="mt-2 flex items-center">
                              <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
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
                                className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                              >
                                Change
                              </button>
                            </div>
                          </div>
                          {/* Bio */}
                          <div className="col-span-6 sm:col-span-4">
                            <label
                              htmlFor="bio"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Bio
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="bio"
                                name="bio"
                                rows={3}
                                className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                placeholder="Serving up beans, greens, potatoes, tomatoes "
                                defaultValue={""}
                                onChange={(e) => setDescription(e.target.value)}
                              />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                              Brief description of your popup
                            </p>
                          </div>
                          {/* Based in */}
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Which city are you based in?
                            </label>
                            <select
                              id="city"
                              name="city"
                              autoComplete="city-name"
                              className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              value={basedIn}
                              onChange={(e) =>
                                setBasedIn(e.currentTarget.value)
                              }
                            >
                              <option>Orlando, FL</option>
                              <option>Tampa, FL</option>
                              <option>Miami, FL</option>
                            </select>
                          </div>
                          {/* Order style */}
                          <div className="col-span-6  sm:col-span-3">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Order style?
                            </label>
                            <select
                              id="city"
                              name="city"
                              autoComplete="city-name"
                              className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              value={orderType}
                              onChange={(e) =>
                                setOrderType(e.currentTarget.value)
                              }
                            >
                              <option>First come, first serve</option>
                              <option>Preorder only</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                          onClick={() => handleSubmitPopup()}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200" />
              </div>
            </div>
            {/* Social Media */}
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      Social Media
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Where can your customers find out more?
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-slate-50 px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          {/* Instagram */}
                          <div className="col-span-3 sm:col-span-4">
                            <label
                              htmlFor="instagram"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Instagram
                            </label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                                instagram.com/
                              </span>
                              <input
                                type="url"
                                name="instagram"
                                id="instagram"
                                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder=""
                                onChange={(e) =>
                                  setInstagramUrl(trimUrl(e.target))
                                }
                              />
                            </div>
                          </div>
                          {/* TikTok */}
                          <div className="col-span-3 sm:col-span-4">
                            <label
                              htmlFor="popup-tiktok"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              TikTok
                            </label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                                tiktok.com/@
                              </span>
                              <input
                                type="url"
                                name="tiktok"
                                id="popup-tiktok"
                                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder=""
                                onChange={(e) =>
                                  setTiktokUrl(trimUrl(e.target))
                                }
                              />
                            </div>
                          </div>
                          {/* Facebook */}
                          <div className="col-span-3 sm:col-span-4">
                            <label
                              htmlFor="popup-facebook"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Facebook
                            </label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                                facebook.com/
                              </span>
                              <input
                                type="url"
                                name="facebook"
                                id="popup-facebook"
                                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder=""
                                onChange={(e) =>
                                  setFacebookUrl(trimUrl(e.target))
                                }
                              />
                            </div>
                          </div>
                          {/* Website */}
                          <div className="col-span-3 sm:col-span-4">
                            <label
                              htmlFor="popup-website"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Website
                            </label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                                https://
                              </span>
                              <input
                                type="url"
                                name="popup-website"
                                id="popup-website"
                                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="www.example.com"
                                onChange={(e) =>
                                  setWebsiteUrl(trimUrl(e.target))
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                          onClick={() => {
                            handleSubmitLinks;
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default EditPopup;
