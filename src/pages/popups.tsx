import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';

const Popups: NextPage = () => {
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
      ></main>
    </>
  );
};

export default Popups;
