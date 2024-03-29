import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Input } from '~/components/ui/Input';
import { Label } from '~/components/ui/Label';
import { Container } from '~/components/Container';
import { Loading } from '~/components/Loading';
import Tag from '~/components/Tag';

import type { LinkData } from '~/types/types';
import type { TagType } from '~/types/types';

import { api } from '~/utils/api';
import { Textarea } from '~/components/ui/TextArea';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/Avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/Select';
import { Separator } from '~/components/ui/Separator';
import { Button } from '~/components/ui/Button';
import { Loader2 } from 'lucide-react';
import { toast } from '~/hooks/use-toast';

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
  const { data: tagSuggestions } = api.tag.getAll.useQuery();

  const handleSubmit = (formData: FormData) => {
    if (popup) {
      const popupData = {
        popupId: popup.id,
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        imageUrl: '/gnarlycuban.jpg',
        basedIn: formData.get('basedIn') as string,
        orderType: formData.get('orderType') as string,
      };
      mutatePopup.mutate(popupData);

      const linkData: LinkData = {
        popupId: popup.id,
        Instagram: formData.get('Instagram')
          ? restoreUrl(formData.get('Instagram') as string, 'Instagram')
          : '',
        Facebook: formData.get('Facebook')
          ? restoreUrl(formData.get('Facebook') as string, 'Facebook')
          : '',
        TikTok: formData.get('TikTok')
          ? restoreUrl(formData.get('TikTok') as string, 'TikTok')
          : '',
        Website: formData.get('Website')
          ? restoreUrl(formData.get('Website') as string, 'Website')
          : '',
      };
      mutateLink.mutate(linkData);
    }
  };

  //This will take a string containing the social media name and a string defining the type of url (Instagram, Facebook, etc). Depending on the type, it will return a string with the full url.
  const restoreUrl = (url: string, type: string) => {
    if (type === 'Instagram') {
      return 'https://www.instagram.com/' + url;
    } else if (type === 'Facebook') {
      return 'https://www.facebook.com/' + url;
    } else if (type === 'TikTok') {
      return 'https://www.tiktok.com/@' + url;
    } else if (type === 'Website') {
      return 'https://' + url;
    }
    return url;
  };

  //trimUrl will take a string containing the social media url and return a string with the username only. By passing in the HTMLInputElement, it will also update the value of the input.
  const trimUrl = (target: HTMLInputElement) => {
    const input = target.value;

    const newInput = input
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .replace('instagram.com/', '')
      .replace('facebook.com/', '')
      .replace('tiktok.com/@', '');

    target.value = newInput;

    //Checks to see which social media the input is for and returns the username only
    if (input.includes('instagram')) {
      return newInput;
    } else if (input.includes('facebook')) {
      return newInput;
    } else if (input.includes('tiktok')) {
      return newInput;
    } else if (input.includes('www')) {
      return newInput;
    } else {
      return input;
    }
  };

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  if (status === 'authenticated' && session.user.popupId !== popupId) {
    router.push('/').catch((err) => console.log(err));
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
      <main>
        <Container>
          <div
            className="
      mx-auto max-w-7xl sm:px-6 sm:pb-32 lg:px-8"
          >
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-neutral" />
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
              <div className="mt-5 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <Label className="text-xl font-semibold leading-6 sm:text-base">
                        Popup deets
                      </Label>
                      <Label className="mt-1 block text-sm font-normal text-neutral">
                        Tell us about your popup!
                      </Label>
                    </div>
                  </div>
                  <div className="mt-5  md:col-span-2 md:mt-0">
                    <div className="overflow-visible shadow-lg">
                      <div className="bg-base-100 px-4 py-5 sm:rounded-md sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          {/* Popup name */}
                          <div className="col-span-6 sm:col-span-3">
                            <Label htmlFor="popup-name" className="block text-lg font-medium">
                              Popup name
                            </Label>
                            {!popup ? (
                              <Skeleton className="col-span-6 flex h-9 items-center border border-neutral bg-base-300 text-sm text-base-content sm:col-span-3">
                                <div className="pl-3">Loading...</div>
                              </Skeleton>
                            ) : (
                              <Input
                                type="text"
                                name="name"
                                id="popup-name"
                                autoComplete="popup-name"
                                defaultValue={popup.name}
                                onKeyDown={(e) => {
                                  handleKeyDown(e);
                                }}
                              />
                            )}
                          </div>
                          {/* Bio */}
                          <div className="col-span-6 sm:col-span-4">
                            <Label htmlFor="bio" className="block pb-2 font-medium">
                              Bio
                            </Label>
                            {!popup ? (
                              <Skeleton className="col-span-6 flex h-20 items-start border border-neutral bg-base-300 text-sm text-base-content sm:col-span-3">
                                <div className="pl-3 pt-2">Loading...</div>
                              </Skeleton>
                            ) : (
                              <Textarea
                                id="bio"
                                name="description"
                                placeholder="Serving up beans, greens, potatoes, tomatoes "
                                defaultValue={popup.description}
                              />
                            )}
                            <p className="mt-1 text-sm text-neutral text-opacity-80">
                              Brief description of your popup
                            </p>
                          </div>
                          {/* Photo */}
                          <div className="col-span-6 sm:col-span-4">
                            <Label htmlFor="photo" className="block pb-2 font-medium">
                              Photo
                            </Label>
                            <div className="mt-2 flex items-center">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={popup?.imageUrl || '/hotdog.jpg'} alt={''} />
                                <AvatarFallback>ZZ</AvatarFallback>
                              </Avatar>
                              <button
                                type="button"
                                className="ml-5 rounded-md border border-neutral bg-base-100 px-2.5 py-1.5 text-sm font-semibold text-neutral shadow-sm hover:bg-base-300"
                              >
                                Change
                              </button>
                            </div>
                          </div>
                          {/* Based in */}
                          <div className="col-span-6 sm:col-span-3">
                            <Label htmlFor="city" className="block pb-2">
                              Which city are you based in?
                            </Label>
                            <Select name="basedIn">
                              {!popup ? (
                                <SelectTrigger>
                                  <SelectValue placeholder="Loading..." />
                                </SelectTrigger>
                              ) : (
                                <SelectTrigger>
                                  <SelectValue
                                    placeholder={popup.basedIn}
                                    defaultValue={'Orlando, FL'}
                                  />
                                </SelectTrigger>
                              )}
                              <SelectContent>
                                <SelectItem value="Orlando, FL">Orlando, FL</SelectItem>
                                <SelectItem value="Tampa, FL">Tampa, FL</SelectItem>
                                <SelectItem value="Miami, FL">Miami, FL</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          {/* Order style */}
                          <div className="col-span-6  sm:col-span-3">
                            <Label htmlFor="orderType" className="block pb-2">
                              Order style?
                            </Label>
                            <Select name="orderType">
                              {status === 'loading' ? (
                                <SelectTrigger>
                                  <SelectValue placeholder="Loading..." />
                                </SelectTrigger>
                              ) : (
                                <SelectTrigger>
                                  <SelectValue placeholder={popup?.orderType} />
                                </SelectTrigger>
                              )}

                              <SelectContent>
                                <SelectItem value="First come, first serve">
                                  First come, first serve
                                </SelectItem>
                                <SelectItem value="Preorder only">Preorder only</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          {/* Tags*/}
                          {!popup || !tagSuggestions || !popupId ? (
                            <div className="col-span-6 space-y-1 sm:col-span-3">
                              <Skeleton className="col-span-6 flex h-9 items-center bg-base-300 text-base text-base-content sm:col-span-3">
                                <Label className="pl-1">Tags</Label>
                              </Skeleton>
                              <Skeleton className="col-span-6 flex h-9 items-center bg-base-300 text-sm text-base-content sm:col-span-3">
                                <Label className="pl-4">Add a tag (max 3)</Label>
                              </Skeleton>
                            </div>
                          ) : (
                            <ComboBox
                              existingTags={popup.tags}
                              suggestions={tagSuggestions}
                              popupId={popupId as string}
                            />
                          )}

                          {/* {popup?.tags && tagSuggestions && popupId ? (
                            <ComboBox
                              existingTags={popup.tags}
                              suggestions={tagSuggestions}
                              popupId={popupId as string}
                            />
                          ) : (
                            <div className="flex justify-center">
                              <Loading />
                            </div>
                          )} */}

                          {/* {popup?.tags && tagSuggestions && popupId ? (
                            <TagInput
                              existingTags={popup.tags}
                              suggestions={tagSuggestions}
                              popupId={popupId as string}
                            />
                          ) : (
                            <div className="flex justify-center">
                              <Loading />
                            </div>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <Separator className="my-5" />
              {/* Social Media */}
              <div className="mt-10 sm:mt-0 sm:text-sm">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <Label className="text-xl font-semibold leading-6 sm:text-base">
                        Social Media
                      </Label>
                      <Label className="mt-1 block text-sm font-normal text-neutral">
                        Where can your customers find out more?
                      </Label>
                    </div>
                  </div>
                  <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="overflow-hidden shadow-lg sm:rounded-md">
                      <div className="bg-base-100 px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 grid-rows-2 gap-4">
                          {/* Instagram */}
                          <div className="col-span-6 row-start-1 sm:col-span-4">
                            <Label className="text-base-content">Instagram</Label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                              <Label className="inline-flex items-center rounded-l-md border border-r-0 border-neutral px-3 font-normal text-neutral text-opacity-50">
                                instagram.com/
                              </Label>
                              <Input
                                name="Instagram"
                                id="popup-instagram"
                                className="rounded-l-none"
                                onKeyDown={(e) => {
                                  handleKeyDown(e);
                                }}
                                defaultValue={
                                  links?.Instagram
                                    ? links.Instagram.replace('https://www.instagram.com/', '')
                                    : ''
                                }
                                onChange={(e) => {
                                  trimUrl(e.target);
                                }}
                              />
                            </div>
                          </div>
                          {/* TikTok */}
                          <div className="col-span-6 row-start-2 sm:col-span-4">
                            <Label className="text-base-content">TikTok</Label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                              <Label className="inline-flex items-center rounded-l-md border border-r-0 border-neutral px-3 font-normal text-neutral text-opacity-50">
                                tiktok.com/@
                              </Label>
                              <Input
                                name="TikTok"
                                id="popup-tiktok"
                                className="rounded-l-none"
                                onKeyDown={(e) => {
                                  handleKeyDown(e);
                                }}
                                defaultValue={
                                  links?.TikTok
                                    ? links.TikTok.replace('https://www.tiktok.com/@', '')
                                    : ''
                                }
                                onChange={(e) => {
                                  trimUrl(e.target);
                                }}
                              />
                            </div>
                          </div>
                          {/* Facebook */}
                          <div className="col-span-6 row-start-3 sm:col-span-4">
                            <Label className="text-base-content">Facebook</Label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                              <Label className="inline-flex items-center rounded-l-md border border-r-0 border-neutral px-3 font-normal text-neutral text-opacity-50">
                                facebook.com/
                              </Label>
                              <Input
                                name="Facebook"
                                id="popup-facebook"
                                className="rounded-l-none"
                                onKeyDown={(e) => {
                                  handleKeyDown(e);
                                }}
                                defaultValue={
                                  links?.Facebook
                                    ? links.Facebook.replace('https://www.facebook.com/', '')
                                    : ''
                                }
                                onChange={(e) => {
                                  trimUrl(e.target);
                                }}
                              />
                            </div>
                          </div>
                          {/* Website */}
                          <div className="col-span-6 row-start-4 sm:col-span-4">
                            <Label className="text-base-content">Website</Label>
                            <div className="mt-2 flex rounded-md shadow-sm">
                              <Label />
                              <Label className="inline-flex items-center rounded-l-md border border-r-0 border-neutral px-3 font-normal text-neutral text-opacity-50">
                                https://
                              </Label>
                              <Input
                                name="Website"
                                id="popup-website"
                                className="rounded-l-none"
                                onKeyDown={(e) => {
                                  handleKeyDown(e);
                                }}
                                defaultValue={
                                  links?.Website ? links.Website.replace('https://', '') : ''
                                }
                                onChange={(e) => {
                                  trimUrl(e.target);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-3 text-right sm:px-6">
                        {status === 'loading' ? (
                          <Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            variant={'default'}
                            onClick={() => {
                              toast({
                                variant: 'default',
                                title: 'Saved!',
                                description: 'Your changes have been saved.',
                              });
                            }}
                          >
                            Save
                          </Button>
                        )}
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

function TagInput({
  suggestions,
  existingTags,
  popupId,
}: {
  suggestions: TagType[];
  existingTags: TagType[];
  popupId: string;
}) {
  const [selectedTags, setSelectedTags] = useState<TagType[]>(existingTags);

  const tagUpdate = api.tag.updateTags.useMutation();

  const handleTagClick = (selectedTag: TagType) => {
    //This will set all the values if the selectedTags.length is less than 3 and if the selectedTags array does not include the selectedTag
    if (selectedTags.length < 3 && !selectedTags.includes(selectedTag)) {
      tagUpdate.mutate({
        popupId: popupId,
        tags: selectedTags.map((tag) => tag.name).concat(selectedTag.name),
      });

      setSelectedTags([...selectedTags, selectedTag]);
    }
  };

  const handleSelect = (e: string) => {
    const selectedTag = suggestions.find((tag) => tag.name === e);
    console.log(e);
    if (selectedTag) {
      handleTagClick(selectedTag);
    }
  };

  return (
    <div className="col-span-6 sm:col-span-3">
      <div className="flex flex-row justify-between align-middle">
        <div className="flex flex-row justify-start">
          <Label htmlFor="tag-name" className="flex self-center">
            Tags
          </Label>
        </div>
        <div className="flex flex-row-reverse">
          {selectedTags.map((tag) => (
            <Tag name={tag.name} id={tag.id} popupId={popupId} key={tag.id} />
          ))}
        </div>
      </div>
      <Select onValueChange={(e) => handleSelect(e)}>
        <SelectTrigger>
          <SelectValue placeholder="Select one" />
        </SelectTrigger>
        <SelectContent>
          {suggestions.map((tag) => (
            // If the tag is already selected, show a different background color
            <SelectItem
              key={tag.id}
              value={tag.name}
              className={`${selectedTags.includes(tag) ? 'text-secondary' : ''}`}
            >
              {tag.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '~/utils/cn-helper';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '~/components/ui/Command';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/Popover';
import { Skeleton } from '~/components/ui/Skeleton';

export function ComboBox({
  suggestions,
  existingTags,
  popupId,
}: {
  suggestions: TagType[];
  existingTags: TagType[];
  popupId: string;
}) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState('');
  const [showTag, setShowTag] = useState(true);
  const [selectedTags, setSelectedTags] = useState<TagType[]>(existingTags);

  const removeTag = api.tag.removeTag.useMutation();
  const tagUpdate = api.tag.updateTags.useMutation();

  const handleTagClick = (selectedTag: TagType) => {
    //This will set all the values if the selectedTags.length is less than 3 and if the selectedTags array does not include the selectedTag
    if (selectedTags.length < 3 && !selectedTags.includes(selectedTag)) {
      tagUpdate.mutate({
        popupId: popupId,
        tags: selectedTags.map((tag) => tag.name).concat(selectedTag.name),
      });

      setSelectedTags([...selectedTags, selectedTag]);
    }
  };

  const handleSelect = (e: string) => {
    const selectedTag = suggestions.find((tag) => tag.name.toLowerCase() === e);
    if (selectedTag) {
      handleTagClick(selectedTag);
    }
  };

  // const handleClick = () => {
  //   removeTag.mutate({ popupId: popupId, tagId: id });
  //   setShowTag(false);
  // };

  return (
    <div className="col-span-6 sm:col-span-3">
      <div className="flex flex-row justify-normal gap-3 align-middle">
        <div className="flex flex-row justify-start">
          <Label htmlFor="tag-name" className="flex self-center">
            Tags
          </Label>
        </div>
        <div className="flex flex-row-reverse">
          {selectedTags.map((tag) => (
            <Tag name={tag.name} id={tag.id} popupId={popupId} key={tag.id} />
          ))}
        </div>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            Add a tag (max 3)
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search tags..." />
            <CommandEmpty>No tag found.</CommandEmpty>
            <CommandGroup>
              {suggestions.map((tag) => (
                <CommandItem
                  key={tag.id}
                  onSelect={(currentValue) => {
                    setSelection(currentValue === selection ? '' : currentValue);
                    setOpen(false);
                    handleSelect(currentValue);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selection === tag.name ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {tag.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
