import SearchBar from "../components/searchbar";
import SearchResults from "../components/searchresults";

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="sm:hidden w-full">
        <SearchBar className="w-full h-12 px-5 text-black outline-none" />
      </div>
      <SearchResults query={query} currentPage={currentPage} />
    </main>
  );
}
