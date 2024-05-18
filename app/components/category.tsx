import { fetchMovies } from "../utils/data";
import { Card } from "./card";

export default async function Category({ title }: { title: string }) {
  const movies = await fetchMovies(1);

  return (
    <article className="flex flex-col p-10 max-w-full">
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="flex gap-2 overflow-x-scroll">
        {movies.results.map((movie: any) => (
          <Card key={movie.id} props={movie} />
        ))}
      </div>
    </article>
  );
}
