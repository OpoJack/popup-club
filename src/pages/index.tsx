import type { NextPage } from "next";
import { api } from "../utils/api";

import Popups from "~/components/Popups";
import { Container } from "~/components/Container";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Container>
          <PopupContent />
        </Container>
      </main>
    </>
  );
};

export default Home;

const PopupContent: React.FC = () => {
  const { data: popups } = api.popup.getAll.useQuery();
  return (
    <>
      <div className="relative sm:py-10 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="pb-20 pt-10">
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
    </>
  );
};
