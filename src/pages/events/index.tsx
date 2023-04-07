import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Container } from "~/components/Container";
import { api } from "~/utils/api";
import { Loading } from "~/components/Loading";
import Event from "~/components/Event";

const EventsPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const { data: events } = api.event.getAll.useQuery();
  const { data: popups } = api.popup.getAll.useQuery();

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
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-content sm:text-5xl lg:text-6xl">
              <span className="block text-base-content">
                The latest and greatest
              </span>
              <span className="block text-accent">Events</span>
            </h1>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {popups?.map((popup) => (
              <Event popup={popup} key={popup.id} />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default EventsPage;
