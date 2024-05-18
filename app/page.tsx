import Category from "./components/category";
import Highlight from "./components/highlight";
import { fetchMovies } from "./utils/data";

export default async function Home() {
  // const movies = await fetchMovies(1);
  return (
    <main className="flex flex-col items-center justify-between">
      <Highlight />
      <Category title="Test Category" />
    </main>
  );
}
