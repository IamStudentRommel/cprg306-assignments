"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, googleSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await googleSignIn(); // Call the googleSignIn function to initiate Google authentication
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <main>
      <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>

      {!user && (
        <button onClick={handleLogin} className="text-lg">
          Sign In with Google
        </button>
      )}
      {user && (
        <div className="text-lg">
          <p>
            Signed in as {user.displayName} ({user.email}).
          </p>
          <div className="container">
            <button onClick={handleLogout} className="text-lg hover:underline">
              Sign out
            </button>
          </div>
          <Link
            href="/auth-test/shopping-list"
            className="text-lg hover:underline"
          >
            Continue to your Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}
