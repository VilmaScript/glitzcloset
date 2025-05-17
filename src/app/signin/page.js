"use client";


import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <h1 className="text-2xl font-medium mb-4">Sign In</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/profile" })}
        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary"
      >
        Sign in with Google
      </button>
    </div>
  );
}
