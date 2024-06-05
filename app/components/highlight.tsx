import YoutubeIframe from "./youtubeIframe";
import FavoritesButton from "./favoritesButton";
import { fetchMovies, fetchTrailerByMovieId } from "../utils/data";
import { tmdb_images_base_url } from "../utils/api_endpoints";
import Link from "next/link";

export default async function Highlight() {
  const trendingMovies = await fetchMovies(1);
  const topTrendyMovie = trendingMovies.results[0];

  const trailers = await fetchTrailerByMovieId(topTrendyMovie.id);
  const trailerKey = trailers.results[0].key;

  const imageUrl = topTrendyMovie.poster_path
    ? `${tmdb_images_base_url}/w300${topTrendyMovie.poster_path}`
    : "https://placehold.jp/5d5e65/000000/300x450.png?text=404%20-%20Movie%20does%20not%20have%20an%20image%20yet&css=%7B%22border-radius%22%3A%2215px%22%2C%22background%22%3A%22%20-webkit-gradient(linear%2C%20left%20top%2C%20left%20bottom%2C%20from(%23666666)%2C%20to(%23cccccc))%22%7D";

  return (
    <aside className="relative container overflow-hidden gap-48 h-65vh rounded-lg max-w-96 sm:rounded-none sm:min-w-full sm:h-40vw bg-gradient-to-t from-black to-transparent">
      <FavoritesButton
        className="absolute top-0 right-0 w-14 m-3"
        props={topTrendyMovie}
      />
      <YoutubeIframe
        isHighlight={true}
        className="absolute w-full h-full hidden sm:block -top-10 sm:-top-16 md:-top-20 xl:-top-40 2xl:-top-48 -z-10 sm:h-56vw overflow-hidden"
        videoId={trailerKey}
      />
      <img className="sm:hidden absolute -z-10 w-full" src={imageUrl} />
      <div className="flex flex-col justify-between gap-10 p-5 sm:p-10 min-h-full">
        <div className="self-end"></div>
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
