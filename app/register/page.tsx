"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
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

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const cfPassword = e.target[3].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    if (password !== cfPassword) {
      setError(
        "Confirm password field has a different value than the password field"
      );
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      if (res.status === 400) {
        setError("This email or username is already registered!");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error: any) {
      setError(
        `Something went wrong... Please try again! \n Error msg: ${error.msg} `
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto flex flex-col p-5 sm:max-w-96 "
    >
      <h1 className="text-center text-2xl font-bold">Register a new account</h1>
      <div className="flex flex-col gap-3 justify-center mt-6">
        <Input name="username" type="text" label="Username:" />
        <Input name="email" type="email" label="Email:" />
        <Input name="password" type="password" label="Password:" />
        <Input name="cf-password" type="password" label="Confirm password:" />
        <p className="text-red-600 font-bold text-center">{error}</p>

        <Input name="submit" type="submit" />
      </div>
    </form>
  );
}
