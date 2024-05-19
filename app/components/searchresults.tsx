import Link from "next/link";
import { fetchMoviesByQuery } from "../utils/data";
import { Card } from "./card";

export default async function SearchResults({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const moviesList = await fetchMoviesByQuery(query, currentPage);
  const hasMovies = moviesList.results.length > 0;
  return (
    <section className="flex flex-row py-5 px-5 gap-x-10 gap-y-5 max-w-full flex-wrap justify-center sm:gap-x-5">
      {hasMovies ? (
        moviesList.results.map((movie: any) => (
          <Card className="my-0 " key={movie.id} props={movie} />
        ))
      ) : (
        <div className="text-center container mx-auto">
          <h1 className="text-3xl mt-32 font-bold">
            There are no movies related to the searched keyword.
          </h1>
          <h2 className="text-2xl mt-10">
            Try another keyword and make sure that the spacing is right!
          </h2>
          <h2 className="text-xl mt-5">
            Or do you want to return to the{" "}
            <Link className="font-bold text-green-500" href={"/"}>
              homepage
            </Link>
            ?
          </h2>
        </div>
      )}
    </section>
  );
}
