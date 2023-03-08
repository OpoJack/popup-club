import { useSession } from "next-auth/react";

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
    <p>Welcome {session ? session.user?.name : "Could not find session"}!</p>
  );
};

export default User;
