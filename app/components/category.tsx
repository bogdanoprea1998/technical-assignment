import { fetchMovies } from "../utils/data";
import Card from "./card";
import Carousel from "./carousel";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default async function Category({
  title = "[Placeholder Title]",
  page = 1,
}: {
  title: string;
  page: number;
}) {
  const moviesList = await fetchMovies(page);

  const moviesCardList = moviesList.results;

  return (
    <article className="flex flex-col p-5 pb-0 sm:p-10 sm:pb-0 max-w-full">
      <h2 className="text-2xl sm:text-4xl font-bold">{title}</h2>
      <Carousel moviesList={moviesCardList} />
    </article>
  );
}
