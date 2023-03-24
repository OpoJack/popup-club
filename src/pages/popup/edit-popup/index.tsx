import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import type { LinkData } from "~/types/types";

import { Container } from "~/components/Container";
import { api } from "~/utils/api";
import { Loading } from "~/components/Loading";
import Tag from "~/components/Tag";

const EditPopup: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { popupId } = router.query;

  const mutatePopup = api.popup.updateOne.useMutation();
  const mutateLink = api.link.upsert.useMutation();

  const { data: popup } = api.popup.getOne.useQuery({
    id: popupId as string,
  });
  const { data: links } = api.link.get.useQuery({
    popupId: popupId as string,
  });
  const { data: tags } = api.tag.getAll.useQuery();

  const handleSubmit = (formData: FormData) => {
    if (popup) {
      const popupData = {
        popupId: popup.id,
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        imageUrl: "/gnarlycuban.jpg",
        basedIn: formData.get("basedIn") as string,
        orderType: formData.get("orderType") as string,
      };
      mutatePopup.mutate(popupData);

      const linkData: LinkData = {
        popupId: popup.id,
        Instagram: formData.get("Instagram")
          ? restoreUrl(formData.get("Instagram") as string, "Instagram")
          : "",
        Facebook: formData.get("Facebook")
          ? restoreUrl(formData.get("Facebook") as string, "Facebook")
          : "",
        TikTok: formData.get("TikTok")
          ? restoreUrl(formData.get("TikTok") as string, "TikTok")
          : "",
        Website: formData.get("Website")
          ? restoreUrl(formData.get("Website") as string, "Website")
          : "",
      };
      mutateLink.mutate(linkData);
    }
  };

  //This will take a string containing the social media name and a string defining the type of url (Instagram, Facebook, etc). Depending on the type, it will return a string with the full url.
  const restoreUrl = (url: string, type: string) => {
    if (type === "Instagram") {
      return "https://www.instagram.com/" + url;
    } else if (type === "Facebook") {
      return "https://www.facebook.com/" + url;
    } else if (type === "TikTok") {
      return "https://www.tiktok.com/@" + url;
    } else if (type === "Website") {
      return "https://" + url;
    }
    return url;
  };

  //trimUrl will take a string containing the social media url and return a string with the username only. By passing in the HTMLInputElement, it will also update the value of the input.
  const trimUrl = (target: HTMLInputElement) => {
    const input = target.value;

    const newInput = input
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .replace("instagram.com/", "")
      .replace("facebook.com/", "")
      .replace("tiktok.com/@", "");

    target.value = newInput;

    //Checks to see which social media the input is for and returns the username only
    if (input.includes("instagram")) {
      return newInput;
    } else if (input.includes("facebook")) {
      return newInput;
    } else if (input.includes("tiktok")) {
      return newInput;
    } else if (input.includes("www")) {
      return newInput;
    } else {
      return input;
    }
  };

  if (status === "authenticated" && session.user.popupId !== popupId) {
    router.push("/").catch((err) => console.log(err));
  }

  if (session?.user.role === "USER") {
    return (
      <Container>
        <h1>Please contact us to get started as a popup vendor.</h1>
      </Container>
    );
  }

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
                <div className="border-t border-gray-700" />
              </div>
            </div>

            {/* Popup info */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                handleSubmit(formData);
              }}
              action="#"
              method="POST"
            >
              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-base font-semibold leading-6 text-gray-100">
                        Popup deets
                      </h3>
                      <p className="mt-1 text-sm text-gray-300">
                        Tell us about your popup!
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="overflow-visible shadow sm:rounded-md">
                      <div className="bg-slate-50 px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          {/* Popup name */}
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="popup-name"
                              className="block text-lg font-medium leading-6 text-gray-900"
                            >
                              {}
                              Popup name
                            </label>

                            {status === "loading" ? (
                              <div className="flex justify-center">
                                <Loading />
                              </div>
                            ) : (
                              <input
                                type="text"
                                name="name"
                                id="popup-name"
                                autoComplete="popup-name"
                                className="mt-2 block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={popup?.name ? popup.name : ""}
                                onKeyDown={(e) => {
                                  handleKeyDown(e);
                                }}
                              />
                            )}
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
                              {popup && (
                                <textarea
                                  id="bio"
                                  name="description"
                                  rows={3}
                                  className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                  placeholder="Serving up beans, greens, potatoes, tomatoes "
                                  defaultValue={popup.description}
                                />
                              )}
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                              Brief description of your popup
                            </p>
                          </div>
                          {/* Photo */}
                          <div className="col-span-6 sm:col-span-4">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                              Photo
                            </label>
                            <div className="mt-2 flex items-center">
                              <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                <Image
                                  src={popup?.imageUrl || "/hotdog.jpg"}
                                  alt={""}
                                  width={50}
                                  height={50}
                                />
                              </span>
                              <button
                                type="button"
                                className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                              >
                                Change
                              </button>
                            </div>
                          </div>

                          {/* Based in */}
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Which city are you based in?
                            </label>
                            {popup && (
                              <select
                                id="city"
                                name="basedIn"
                                autoComplete="city-name"
                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={popup.basedIn}
                              >
                                <option>Orlando, FL</option>
                                <option>Tampa, FL</option>
                                <option>Miami, FL</option>
                              </select>
                            )}
                          </div>
                          {/* Order style */}
                          <div className="col-span-6  sm:col-span-3">
                            <label
                              htmlFor="orderType"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Order style?
                            </label>
                            {popup && (
                              <select
                                id="order-type"
                                name="orderType"
                                autoComplete="order-type"
                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={popup.orderType}
                              >
                                <option>First come, first serve</option>
                                <option>Preorder only</option>
                              </select>
                            )}
                          </div>
                          {/* Tags*/}
                          <div className="col-span-6 sm:col-span-3">
                            <div className="flex flex-row justify-between align-middle">
                              <label
                                htmlFor="popup-name"
                                className="flex self-center text-lg font-medium leading-6 text-gray-900"
                              >
                                {}
                                Tags
                              </label>
                              {popup?.tags &&
                                popup.tags.map((tag) => (
                                  <Tag name={tag.name} key={tag.id} />
                                ))}
                            </div>
                            {/* <Tag name={tag.name} key={tag.id} /> */}
                            {tags !== undefined && <TagInput tags={tags} />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-700" />
                </div>
              </div>
              {/* Social Media */}
              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-base font-semibold leading-6 text-gray-100">
                        Social Media
                      </h3>
                      <p className="mt-1 text-sm text-gray-300">
                        Where can your customers find out more?
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-slate-50 px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 grid-rows-2 gap-6">
                          {/* Instagram */}
                          <div className="col-span-6 row-start-1 sm:col-span-4">
                            <label
                              htmlFor="popup-instagram"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Instagram
                            </label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500  sm:text-sm">
                                instagram.com/
                              </span>
                              <input
                                name="Instagram"
                                id="popup-instagram"
                                className="block w-full flex-1  rounded-none rounded-r-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onKeyDown={(e) => {
                                  handleKeyDown(e);
                                }}
                                defaultValue={
                                  links?.Instagram
                                    ? links.Instagram.replace(
                                        "https://www.instagram.com/",
                                        ""
                                      )
                                    : ""
                                }
                                onChange={(e) => {
                                  trimUrl(e.target);
                                }}
                              />
                            </div>
                          </div>
                          {/* TikTok */}
                          <div className="col-span-6 row-start-2 sm:col-span-4">
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
                                name="TikTok"
                                id="popup-tiktok"
                                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onKeyDown={(e) => {
                                  handleKeyDown(e);
                                }}
                                defaultValue={
                                  links?.TikTok
                                    ? links.TikTok.replace(
                                        "https://www.tiktok.com/@",
                                        ""
                                      )
                                    : ""
                                }
                                onChange={(e) => {
                                  trimUrl(e.target);
                                }}
                              />
                            </div>
                          </div>
                          {/* Facebook */}
                          <div className="col-span-6 row-start-3 sm:col-span-4">
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
                                name="Facebook"
                                id="popup-facebook"
                                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onKeyDown={(e) => {
                                  handleKeyDown(e);
                                }}
                                defaultValue={
                                  links?.Facebook
                                    ? links.Facebook.replace(
                                        "https://www.facebook.com/",
                                        ""
                                      )
                                    : ""
                                }
                                onChange={(e) => {
                                  trimUrl(e.target);
                                }}
                              />
                            </div>
                          </div>
                          {/* Website */}
                          <div className="col-span-6 row-start-4 sm:col-span-4">
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
                                name="Website"
                                id="popup-website"
                                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onKeyDown={(e) => {
                                  handleKeyDown(e);
                                }}
                                defaultValue={
                                  links?.Website
                                    ? links.Website.replace("https://www./", "")
                                    : ""
                                }
                                onChange={(e) => {
                                  trimUrl(e.target);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </main>
    </>
  );
};

export default EditPopup;

import { useState } from "react";
import { TagType } from "~/types/types";

function TagInput({ tags }: { tags: TagType[] }) {
  const [value, setValue] = useState("");
  const [filteredTags, setFilteredTags] = useState<TagType[]>([]);
  const [inputFocused, setInputFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    // If the input value is empty, clear the tags
    if (newValue.trim() === "") {
      setFilteredTags([]);
    } else {
      // Filter the tags based on the current input value
      const filtered = tags.filter((tag) =>
        tag.name.toLowerCase().startsWith(newValue.toLowerCase())
      );
      setFilteredTags(filtered.slice(0, 3));
    }
  };

  const handleTagClick = (tag: TagType) => {
    setValue(tag.name);
    setFilteredTags([]);
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          id="tag"
          name="tag"
          value={value}
          onChange={handleChange}
          autoComplete="off"
          className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 "
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
      </div>
      {inputFocused && filteredTags.length > 0 && (
        <ul className="absolute z-10 w-full rounded-md border border-gray-300 bg-white py-1 shadow-lg">
          {filteredTags.map((tag) => (
            <li
              key={tag.id}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleTagClick(tag)}
            >
              {tag.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
}
