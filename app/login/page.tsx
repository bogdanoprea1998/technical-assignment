"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Input from "../components/input";

export default function Page() {
  const [error, setError] = useState("");
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError("Invalid username or password");
      if (res?.url) router.replace("/");
    } else {
      setError("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto flex flex-col p-5 sm:max-w-96 "
    >
      <h1 className="text-center text-2xl font-bold">Log into your account</h1>
      <div className="flex flex-col gap-3 justify-center mt-6">
        <Input name="username" type="text" label="Username:" />
        <Input name="password" type="password" label="Password:" />
        <p className="text-red-600 font-bold text-center">{error}</p>
        <Input name="submit" type="submit" />
      </div>
    </form>
  );
}
