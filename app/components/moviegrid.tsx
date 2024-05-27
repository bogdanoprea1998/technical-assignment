import { fetchMovies } from "../utils/data";
import Card from "./card";
import Pagination from "./pagination";

export default async function MovieGrid({
  page,
  title = "Placeholder title",
  searchParams,
  userFavorites,
}: {
  page: number;
  title?: string;
  searchParams?: { page?: string };
  userFavorites?: any;
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const moviesList = await fetchMovies(currentPage);

  return (
    <section className="flex flex-col p-5 pb-0 sm:p-10 sm:pb-0 min-w-full">
      <h1 className="text-2xl sm:text-4xl font-bold">All Movies</h1>
      <div className="flex flex-wrap gap-x-7 justify-evenly sm:justify-center">
        {moviesList.results.map((movie: any) => {
          const isFavorite = Boolean(
            userFavorites.find(
              (element: any) => Number(element.tmdb_id) === movie.id
            )
          );
          return (
            <Card
              key={`id:${movie.id}`}
              props={movie}
              isFavorite={isFavorite}
            />
          );
        })}
      </div>
      <Pagination totalPages={500} startingPage={1} />
    </section>
  );
}
