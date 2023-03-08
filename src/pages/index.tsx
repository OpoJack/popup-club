import type { NextPage } from "next";
import Head from "next/head";
import { api } from "../utils/api";

import Nav from "../components/Nav";
import Popups from "~/components/Popups";
import Gradient from "~/components/Gradient";
import Footer from "~/components/Footer";

const Home: NextPage = () => {
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
      <main>
        <div className="isolate bg-gray-900">
          <PopupContent />
        </div>
      </main>
    </>
  );
};

export default Home;

const PopupContent: React.FC = () => {
  const { data: popups } = api.popup.getAll.useQuery();
  return (
    <>
      <Nav />
      <Gradient />
      <div className="relative sm:py-10 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="py-20">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">The latest and greatest</span>
              <span className="block text-indigo-400">Popups</span>
            </h1>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {popups?.map((popup) => (
              <Popups popup={popup} key={popup.id} />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
