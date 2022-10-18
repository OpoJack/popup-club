import { Popup } from '../types/popup';
import Image from 'next/image';
import SocialMedia from './socialMedia';
import PopupModal from './popupModal';
import { useState } from 'react';
import PopupTags from './tags';

import { trpc } from '../utils/trpc';

export function getLinksByPopupId(popupId: { popupId: string }) {
  return trpc.useQuery(['links.getLinksByPopup', popupId], {
    enabled: true,
  });
}

export default function AllPopups({ popup }: { popup: Popup }) {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(!isShown);
  };

  // console.log(popup);

  return (
    <>
      {isShown && (
        <PopupModal isShown={isShown} setIsShown={setIsShown} popup={popup} />
      )}
      <li
        key={popup.id}
        className='flex flex-col border divide-y divide-zinc-200 rounded-lg bg-white shadow-sm hover:bg-zinc-50 hover:shadow-md transition-colors'
        onClick={handleClick}
      >
        <div className='p-4'>
          <div className='flex flex-row object-cover space-x-2'>
            <div className='h-fit space-y-3 flex'>
              <Image
                key={popup.links.id}
                className='h-10 w-10 flex-shrink-0 rounded-full bg-gray-300'
                src={popup.links.imageUrl ?? '/hotdog.jpg'}
                alt=''
                width={75}
                height={75}
              />
            </div>
            <div className='flex flex-col w-fit shrink'>
              <div className='flex flex-row space-x-2 h-5'>
                <SocialMedia links={popup.links} showAll={false} />
              </div>
              <div className='text-xl font-bold text-gray-900 -mt-1 tracking-tight antialiased'>
                {popup.name}
              </div>
              <div className='inline-block flex-shrink-0 text-xs font-normal text-gray-800'>
                {popup.description}
              </div>
              <div className='text-xs font-semibold text-gray-900'>
                Based in: {popup.basedIn}
              </div>
            </div>
          </div>
          <div className='flex flex-row space-x-1'>
            {popup.tags?.map((tag) => (
              <PopupTags key={tag.tag.id} name={tag.tag?.name} />
            ))}
          </div>
        </div>
      </li>
    </>
  );
}
