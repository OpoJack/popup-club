import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Container } from "~/components/Container";
import { api } from "~/utils/api";
import { Loading } from "~/components/Loading";
import Popups from "~/components/Popups";

const AllPopups = () => {
  const { data: session, status } = useSession();
  const { data: popups } = api.popup.getAll.useQuery();
  const router = useRouter();

  if (status === "loading") {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <div className="relative sm:py-10 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="pb-20 pt-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block text-base-content">
                The latest and greatest
              </span>
              <span className="block text-secondary">Popups</span>
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
    </Container>
  );
};

export default AllPopups;
