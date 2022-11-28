import { trpc } from '../../utils/trpc';

// This should be the page that shows all the popups

function SinglePopupPage() {
  const { data, isLoading } = trpc.popups.getAllPopups.useQuery();
}

export default SinglePopupPage;
