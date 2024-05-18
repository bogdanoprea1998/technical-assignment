import Category from "./components/category";
import Highlight from "./components/highlight";
import { fetchMovies } from "./utils/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Highlight />
      <Category key={1} page={1} title="Discover 1" />
      <Category key={2} page={2} title="Discover 2" />
      <Category key={3} page={3} title="Discover 3" />
    </main>
  );
}
