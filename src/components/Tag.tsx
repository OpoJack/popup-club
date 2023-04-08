import { XCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { api } from '~/utils/api';

export default function Tag({
  name,
  id,
  popupId,
}: {
  name: string;
  id: string;
  popupId: string;
}) {
  const [isShown, setIsShown] = useState(false);
  const [showTag, setShowTag] = useState(true);
  const removeTag = api.tag.removeTag.useMutation();
  const router = useRouter();

  const handleDeleteTag = () => {
    removeTag.mutate({ popupId: popupId, tagId: id });
    setShowTag(false);
  };

  return (
    <p className="mt-1 space-x-1 truncate py-2 text-sm">
      {showTag && (
        <span
          className="relative inline-block rounded-full bg-secondary px-3.5 py-0.5 text-xs font-medium text-secondary-content shadow-sm hover:cursor-pointer hover:bg-secondary-focus hover:shadow-md"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {name}

          {
            //Renders the button if the tag is hovered over and if it's the edit page
            isShown && router.pathname === '/popups/edit-popup' && (
              <button
                className="absolute right-0 top-0 -mt-2 flex h-full w-4 items-center justify-center rounded-full align-top"
                onClick={() => handleDeleteTag()}
              >
                <XCircleIcon
                  className="rounded-full bg-neutral text-accent hover:text-accent-focus"
                  aria-hidden="true"
                />
              </button>
            )
          }
        </span>
      )}
    </p>
  );
}
