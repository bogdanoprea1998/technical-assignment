import { StarIcon } from "@heroicons/react/24/outline";
import { YoutubeIframe } from "./youtubeIframe";
import { fetchMovies, fetchTrailerByMovieId } from "../utils/data";
import Link from "next/link";

export default async function Highlight() {
  const trendingMovies = await fetchMovies(1);
  const topTrendyMovie = trendingMovies.results[0];
  const trailers = await fetchTrailerByMovieId(topTrendyMovie.id);
  const trailerKey = trailers.results[0].key;
  // h-96
  return (
    <aside className="relative container overflow-hidden gap-48 min-w-full h-30vh sm:h-40vw bg-gradient-to-t from-black to-transparent">
      <YoutubeIframe
        isHighlight={true}
        className="absolute w-full h-full -top-10 sm:-top-36 -z-10 sm:h-56vw overflow-hidden"
        videoId={trailerKey}
      />
      <div className="flex flex-col justify-between gap-10 p-5 sm:p-10 min-h-full">
        <a className="self-end" href="/">
          <StarIcon className="text-white w-10" />
        </a>
        <div className="flex flex-col gap-1" id="highlight-info-ctn">
          <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            {topTrendyMovie.title}
          </h2>
          <h3 className="text-md sm:text-xl hidden sm:block">
            {topTrendyMovie.overview &&
              topTrendyMovie.overview.slice(0, 200) + "..."}
          </h3>
          <Link
            href={`/movie/${topTrendyMovie.id}`}
            className="mt-2 py-1 border-2 rounded-full max-w-40 mx-auto px-5 sm:mx-0 sm:px-0 text-center hover:text-black hover:bg-white"
          >
            Learn more
          </Link>
        </div>
      </div>
    </aside>
  );
}
