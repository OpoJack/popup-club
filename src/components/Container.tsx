import Head from 'next/head';
import type { ReactNode } from 'react';
import Footer from './Footer';
import Gradient from './Gradient';
import Nav from './Nav';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Popup Club</title>
        <meta
          name="description"
          content="Popup club - The latest and greatest"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="isolate min-h-screen bg-base-100">
        <Nav />
        {/* Gradient stuff */}
        <Gradient />
        {children}
        <Footer />
      </div>
    </>
  );
};
