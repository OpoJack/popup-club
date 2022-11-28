import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { trpc } from '../../utils/trpc';

function SinglePostPage() {
  const router = useRouter();

  //Get the id from the url
  const popupId = router.query.id as string;

  //Get the popup data from the database
  const { data, isLoading } = trpc.popups.getSinglePopup.useQuery({
    popupId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>404 Popup not found</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default SinglePostPage;
