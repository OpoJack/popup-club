import { XCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "~/utils/api";

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
    <p className="mt-1 space-x-1 truncate py-2 text-sm text-gray-500">
      {showTag && (
        <span
          className="relative inline-block rounded-full bg-gray-200 px-4 py-0.5 text-xs font-medium text-gray-800 hover:cursor-pointer hover:bg-gray-300"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {name}

          {
            //Renders the button if the tag is hovered over and if it's the edit page
            isShown && router.pathname === "/popup/edit-popup" && (
              <button
                className="absolute top-0 right-0 -mt-2 flex h-full w-4 items-center justify-center rounded-full align-top text-gray-50 hover:text-gray-900"
                onClick={() => handleDeleteTag()}
              >
                <XCircleIcon
                  className="text-red-400 hover:text-red-700"
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
