import type { NextPage } from "next";
import Head from "next/head";
import { api, type RouterOutputs } from "../utils/api";

import Nav from "../components/Nav";
import { useSession } from "next-auth/react";

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
        <Nav />
        <div
          className="
      mx-auto max-w-7xl pb-32 sm:px-6 lg:px-8"
        >
          <div className="pt-6">All popups:</div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          ></ul>
        </div>
      </main>
    </>
  );
};

export default Home;

type Popup = RouterOutputs["popup"]["getAll"][0];

const Content: React.FC = () => {
  const { data: sessionData } = useSession();

  return <div>hello</div>;
};
