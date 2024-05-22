"use client";

import { kanit } from "@/app/fonts";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./searchbar";

export default function Header() {
  const isSearchPage = "/search" === usePathname();

  return (
    <header className="flex justify-between items-center container mx-auto p-4 sm:py-5">
      {isSearchPage ? (
        <Link href="/">
          <ChevronLeftIcon className="text-white w-10" />
        </Link>
      ) : (
        <div>
          <Link
            href="/"
            className={`${kanit.className} text-4xl hidden sm:block`}
          >
            TechAss
          </Link>
          <Link href="/" className={`${kanit.className} text-4xl sm:hidden`}>
            T.A.
          </Link>
        </div>
      )}
      <div className="flex flex-row">
        <SearchBar className="rounded-full px-5 py-1 focus:outline-none bg-transparent border-2 border-solid border-gray-600 hidden sm:block" />
      </div>
      <div className="flex justify-between gap-5 sm:gap-10 text-xl">
        {!isSearchPage && (
          <Link className="sm:hidden" href="/search">
            <MagnifyingGlassIcon className="text-white w-7" />
          </Link>
        )}
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </header>
  );
}
