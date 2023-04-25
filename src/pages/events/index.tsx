import { Container } from '~/components/Container';
import { api } from '~/utils/api';
import EventCard from '~/components/Event';
import { PopupSkeleton } from '~/components/Popups';

const EventsPage = () => {
  const popups = api.popup.getAll.useQuery();

  return (
    <Container>
      <div className="relative sm:py-5 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="pb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-content sm:text-5xl lg:text-6xl">
              <span className="block text-base-content">The latest and greatest</span>
              <span className="block text-accent">Events</span>
            </h1>
          </div>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popups.isLoading ? (
              <>
                <PopupSkeleton />
                <PopupSkeleton />
                <PopupSkeleton />
                <PopupSkeleton />
                <PopupSkeleton />
                <PopupSkeleton />
              </>
            ) : (
              <>
                {popups.data?.map((popup) => (
                  <>
                    {popup.events.length > 0 ? <EventCard popup={popup} key={popup.id} /> : <></>}
                  </>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default EventsPage;
