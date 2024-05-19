import { fetchMovieById } from "@/app/utils/data";
import { fetchTrailerByMovieId } from "@/app/utils/data";
import { YoutubeIframe } from "@/app/components/youtubeIframe";
import { tmdb_images_base_url } from "@/app/utils/api_endpoints";

export default async function Page({ params }: { params: { slug: string } }) {
  const movieDetails = await fetchMovieById(params.slug);
  const trailers = await fetchTrailerByMovieId(params.slug);

  const { genres, release_date, title, vote_average, poster_path, overview } =
    movieDetails;
  const trailerKey = trailers?.results[0]?.key;
  const imageUrl = `${tmdb_images_base_url}/w300${poster_path}`;

  return (
    <main className="flex flex-col items-center justify-between container sm:mx-auto sm:p-4">
      <section className="flex flex-col sm:flex-row sm:justify-between min-w-full">
        <img src={imageUrl} alt={title} />
        <div className="flex flex-col py-4 px-3 sm:px-0 gap-2 sm:py-0">
          <h1 className="text-2xl sm:text-4xl font-bold">{title}</h1>
          <div className="inline-flex justify-between">
            <h2 className="font-bold sm:text-xl">{release_date}</h2>
            <h3 className="font-bold sm:text-xl">
              Rating: <span className="text-lime-400">{vote_average}</span>
            </h3>
          </div>

          <div className="flex justify-between py-3 sm:mt-auto sm:py-0 sm:text-xl">
            <h2 className="text-lg font-bold pr-5 sm:text-2xl">Genres:</h2>
            <ul className="flex gap-2 flex-wrap justify-end">
              {genres.map((genre: { id: number; name: string }) => (
                <li
                  className="bg-emerald-900 rounded-2xl px-3 py-1 text-center"
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold self-start px-3 sm:px-0 sm:text-3xl sm:pt-5">
          Description:
        </h2>
        <article className="text-lg pt-2 px-3 text-justify sm:px-0 sm:text-xl">
          {overview}
        </article>

        <h2 className="text-xl font-bold pt-10 self-start px-3 sm:px-0 sm:text-3xl">
          Trailer:
        </h2>
        <YoutubeIframe
          className="w-full aspect-video my-5"
          videoId={trailerKey}
        />
      </section>
    </main>
  );
}
