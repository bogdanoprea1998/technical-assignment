import { fetchMovies } from "../utils/data";
import Card from "./card";

export default async function Category({
  title = "[Placeholder Title]",
  page = 1,
}: {
  title: string;
  page: number;
}) {
  const moviesList = await fetchMovies(page);

  return (
    <article className="flex flex-col p-5 pb-0 sm:p-10 sm:pb-0 max-w-full">
      <h2 className="text-2xl sm:text-4xl font-bold">{title}</h2>
      <div className="flex gap-2 overflow-x-scroll">
        {moviesList.results.map((movie: any) => (
          <Card key={`id:${movie.id}page:${page}`} props={movie} />
        ))}
      </div>
    </article>
  );
}
