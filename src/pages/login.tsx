import { useSession } from "next-auth/react";
import { Container } from "~/components/Container";
import { useRouter } from "next/router";
import { NextPage } from "next";
import SignIn from "~/components/SignIn";

const Login: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    // Redirect to user profile
    router.push(`/user/${session.user.id}`).catch((err) => {
      console.error(err);
    });
  }

  return (
    <Container>
      <SignIn />
    </Container>
  );
};

export default Login;
