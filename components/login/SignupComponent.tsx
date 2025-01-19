"use client";
import { signIn } from "next-auth/react";

const SignupPage: React.FC = () => {
  return (
    <div className=" bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <div className="space-y-4">
          <button
            onClick={() => signIn("github")}
            className="w-full px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            Sign up with GitHub
          </button>
          <button
            onClick={() => signIn("google")}
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
