"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

export default function Page() {
  const { user, googleSignIn, gitHubSignIn, fbSignIn, firebaseSignOut } =
    useUserAuth();

  const googleLogin = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  const gitLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  const fbLogin = async () => {
    try {
      await fbSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>

      {!user && (
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={googleLogin}
            className="btn flex items-center border border-gray-400 rounded-lg p-2 w-48"
          >
            <FaGoogle className="w-8 h-8 mr-2 text-red-500" />
            Sign In with Google
          </button>
          <button
            onClick={gitLogin}
            className="btn flex items-center border border-gray-400 rounded-lg p-2 w-48"
          >
            <FaGithub className="w-8 h-8 mr-2 text-white-500" />
            Sign In with GitHub
          </button>
          <button
            onClick={fbLogin}
            className="btn flex items-center border border-gray-400 rounded-lg p-2 w-48"
          >
            <FaFacebook className="w-8 h-8 mr-2 text-blue-500" />
            Sign In with Facebook
          </button>
        </div>
      )}

      {user && (
        <div className="text-lg text-center">
          <p>
            {user.displayName} {user.email}.
          </p>
          <div className="container">
            <button onClick={handleLogout} className="text-lg hover:underline">
              Sign out
            </button>
          </div>
          <Link
            href="/week-8/shopping-list"
            className="text-lg hover:underline"
          >
            Continue to your Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}
