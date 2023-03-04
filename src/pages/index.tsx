import type { NextPage } from "next";
import Head from "next/head";
import { api, type RouterOutputs } from "../utils/api";

import Nav from "../components/Nav";
import { useSession } from "next-auth/react";
import { useState } from "react";
import AllPopups from "~/components/AllPopups";
import { Popup } from "../types/types";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  const [selectedPopup, setSelectedPopup] = useState<Popup | null>(null);

  const { data: popups } = api.popup.getAll.useQuery();
  // const { data: popups, refetch: refetchPopups } = api.popup.getAll.useQuery(
  //   {
  //     id: selectedPopup?.id ?? "",
  //   },
  //   { enabled: sessionData?.user !== undefined && selectedPopup !== null }
  // );

  // const createPopup = api.popup.create.useMutation({
  //   onSuccess: () => {
  //     void refetchPopups();
  //   },
  // });

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
          >
            {popups?.map((popup) => (
              <AllPopups popup={popup} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
