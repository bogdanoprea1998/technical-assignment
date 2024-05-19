import Category from "./components/category";
import Highlight from "./components/highlight";
import MovieGrid from "./components/moviegrid";

export default function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  return (
    <main className="flex flex-col items-center justify-between">
      <Highlight />
      <Category page={1} title="Discover new movies" />
      <MovieGrid searchParams={searchParams} page={2} />
    </main>
  );
}
