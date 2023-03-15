import { useSession } from "next-auth/react";
import { Container } from "~/components/Container";

const User = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }

  if (status === "unauthenticated") {
    return (
      <Container>
        <h1>Please sign in</h1>
      </Container>
    );
  }

  return (
    <Container>
      <div>hi</div>
    </Container>
  );
};

export default User;
