"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInPage() {
  const { data: session } = useSession(); // Use session to check if the user is authenticated

  return (
    <div className=" bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          {session ? `Welcome, ${session.user?.name}` : "Sign In"}
        </h1>
        <div className="space-y-4">
          {!session ? (
            <>
              <button
                onClick={() => signIn("github")}
                className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Sign In with GitHub
              </button>
              <button
                onClick={() => signIn("google")}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Sign In with Google
              </button>
            </>
          ) : (
            <button
              onClick={() => signOut()}
              className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
