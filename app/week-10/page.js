"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
    window.location.href = "/week-10";
  };
  // console.log(user);

  return (
    <main>
      <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>

      {!user && (
        <button onClick={handleLogin} className="text-lg">
          Sign In with GitHub
        </button>
      )}
      {user && (
        <div className="text-lg">
          <p>
            Signed in as, ({user.displayName} {user.email}).
          </p>
          <div className="container">
            <button onClick={handleLogout} className="text-lg hover:underline">
              Sign out
            </button>
          </div>
          <Link
            href="/week-10/shopping-list"
            className="text-lg hover:underline"
          >
            Continue to your Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}
