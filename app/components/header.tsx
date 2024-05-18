import { kanit } from "@/app/fonts";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Header() {
  return (
    <header className="flex justify-between items-center container mx-auto p-4 sm:py-5">
      <div id="header-logo-ctn">
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
      <div className="flex flex-row" id="header-search-ctn">
        <input
          className="rounded-full px-5 py-1 focus:outline-none bg-transparent border-2 border-solid border-gray-600 hidden sm:block"
          type="search"
          id="search"
          placeholder="Search..."
        />
      </div>
      <div
        id="header-buttons-ctn"
        className="flex justify-between gap-5 sm:gap-10 text-xl"
      >
        <Link className="sm:hidden" href="/">
          <MagnifyingGlassIcon className="text-white w-7" />
        </Link>
        <Link href="/">Login</Link>
        <Link href="/">Register</Link>
      </div>
    </header>
  );
}
