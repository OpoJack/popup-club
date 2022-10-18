import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import AllPopups from '../components/allPopups';
import { trpc } from '../utils/trpc';
import { Popup } from '../types/popup';

const Home: NextPage = () => {
  const rawpopups = trpc.useQuery(['popup.getPopups']).data;

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
      max-w-7xl mx-auto sm:px-6 lg:px-8 pb-32'
      >
        <div className='pt-6'>All popups:</div>
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {rawpopups?.map((popup) => (
            <AllPopups popup={popup as unknown as Popup} key={popup.id} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
