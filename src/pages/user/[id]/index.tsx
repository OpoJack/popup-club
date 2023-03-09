import { useSession } from "next-auth/react";
import { Container } from "~/components/Container";
import { useRouter } from "next/router";

const User = () => {
  const { data: session } = useSession();

  if (!session) {
    // Handle unauthenticated state, e.g. render a SignIn component
    return (
      <div>
        <h1>Please sign in</h1>
      </div>
    );
  }

  return (
    <Container>
      <div>hi</div>
    </Container>
  );
};

export default User;
