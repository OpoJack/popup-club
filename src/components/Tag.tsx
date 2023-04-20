import { XCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from '~/hooks/use-toast';
import { api } from '~/utils/api';
import { badgeVariants } from '~/components/ui/Badge';
import Link from 'next/link';

export default function Tag({ name, id, popupId }: { name: string; id: string; popupId: string }) {
  const [isShown, setIsShown] = useState(false);
  const router = useRouter();
  const [showTag, setShowTag] = useState(true);

  const removeTag = api.tag.removeTag.useMutation();
  const handleDeleteTag = () => {
    removeTag.mutate({ popupId: popupId, tagId: id });
    setShowTag(false);
  };

  return (
    <p className="mt-1 truncate px-0.5 py-2 text-sm text-secondary-content">
      {showTag && (
        <Link
          href={'#'}
          className={badgeVariants({ variant: 'secondary' }) + 'relative inline-block'}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {name}
          {
            //Renders the button if the tag is hovered over and if it's the edit page
            isShown && router.pathname === '/popups/edit-popup' && (
              <button
                className="absolute right-0 top-0 -mr-0.5 -mt-2 flex h-full w-4 items-center justify-center rounded-full align-top"
                onClick={() => {
                  handleDeleteTag();
                  toast({
                    variant: 'default',
                    title: 'Tags updated!',
                    description: `"${name}" was removed from this popup.`,
                  });
                }}
              >
                <XCircleIcon
                  className="rounded-full bg-neutral text-accent hover:text-accent-focus"
                  aria-hidden="true"
                />
              </button>
            )
          }
        </Link>
      )}
    </p>
  );
}
