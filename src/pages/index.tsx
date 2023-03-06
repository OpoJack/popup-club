import type { NextPage } from "next";
import Head from "next/head";
import { api } from "../utils/api";

import Nav from "../components/Nav";
import Popups from "~/components/Popups";

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
        <PopupContent />
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
      <div
        className="
      mx-auto max-w-7xl pb-32 sm:px-6 lg:px-8"
      >
        <div className="pt-6">All popups:</div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {popups?.map((popup) => (
            <Popups popup={popup} key={popup.id} />
          ))}
        </ul>
      </div>
    </>
  );
};
