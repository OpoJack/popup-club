import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { trpc } from '../../utils/trpc';
import { z } from 'zod';
import { raw } from '@prisma/client/runtime';
import AllPopups from '../../components/allPopups';

const PopupProfile: NextPage = () => {
  const router = useRouter();

  const { popupname } = router.query;

  const rawpopups = trpc.popups.getAllPopups.useQuery().data;

  const [popup, setPopup] = useState(null);
  useEffect(() => {
    fetch(`/api/popup/${popupname}`)
      .then((res) => res.json())
      .then((data) => setPopup(data));
  }, [popupname]);

  if (typeof rawpopups === 'undefined') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Popup Club</title>
        <meta
          name='description'
          content='Popup club - The latest and greatest'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main
        className='
      mx-auto max-w-7xl pb-32 sm:px-6 lg:px-8'
      >
        <div className='pt-6'>
          This should be its own unique page: {popupname}
        </div>
        <div>{}</div>
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {rawpopups.map((popup) => (
            <AllPopups popup={popup} key={popup.id} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default PopupProfile;
