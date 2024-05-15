import { kanit } from "@/app/fonts";

export default function Header() {
  return (
    <header className="flex justify-between items-center container mx-auto py-5">
      <div id="header-logo-ctn">
        <a href="/" className={`${kanit.className} text-4xl`}>
          TechAss
        </a>
      </div>
      <div className="flex flex-row" id="header-search-ctn">
        <input
          className="rounded-full px-5 py-1 focus:outline-none bg-transparent border-2 border-solid border-gray-600"
          type="search"
          id="search"
          placeholder="Search..."
        />
      </div>
      <div
        id="header-buttons-ctn"
        className="flex justify-between gap-10 text-xl"
      >
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </header>
  );
}
