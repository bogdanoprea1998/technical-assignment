import SearchBar from "../components/searchbar";
import SearchResults from "../components/searchresults";

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";

  return (
    <main className="flex flex-col items-center justify-between">
      <SearchBar className="w-full h-12 px-5 text-black outline-none sm:hidden" />
      <SearchResults query={query} currentPage={1} />
    </main>
  );
}
