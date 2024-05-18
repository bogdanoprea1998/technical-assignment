import { tmdb_images_base_url } from "../utils/api_endpoints";
import Link from "next/link";

export const Card = ({ props }: { props: any }) => {
  const { title, id, poster_path, release_date, overview } = props;
  const imageUrl = `${tmdb_images_base_url}/w300${poster_path}`;
  return (
    <Link
      href="/"
      className="group flex flex-col rounded-lg relative overflow-hidden aspect-2/3 min-w-40 sm:min-w-60 my-4"
    >
      <img className="absolute -z-10" src={imageUrl} alt={title} />
      <div className="p-3 z-10 flex-col justify-between min-h-full hidden group-hover:flex group-hover: bg-gray-900 group-hover: bg-opacity-70">
        <div className="block">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{release_date}</p>
        </div>
        <p>{overview && overview.slice(0, 120) + "..."}</p>
      </div>
    </Link>
  );
};
