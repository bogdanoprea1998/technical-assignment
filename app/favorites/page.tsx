"use client";

import { useSession } from "next-auth/react";
import NotAuthorized from "../not-authorized";
import Pagination from "../components/pagination";

export default function Page() {
  const isLoggedIn = useSession().status === "authenticated";
  return isLoggedIn ? (
    <article>
      <h1>Your favorite movies:</h1>
      <section>
        <p>movie 1</p>
        <p>movie 2</p>
        <p>movie 3</p>
      </section>
      <Pagination totalPages={3} />
    </article>
  ) : (
    <NotAuthorized />
  );
}
