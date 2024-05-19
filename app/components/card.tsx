import { tmdb_images_base_url } from "../utils/api_endpoints";
import Link from "next/link";

export const Card = ({
  className,
  props,
}: {
  className?: string;
  props: any;
}) => {
  const { title, id, poster_path, release_date, overview } = props;
  const imageUrl = poster_path
    ? `${tmdb_images_base_url}/w300${poster_path}`
    : "https://placehold.jp/5d5e65/000000/300x450.png?text=404%20-%20Movie%20does%20not%20have%20an%20image%20yet&css=%7B%22border-radius%22%3A%2215px%22%2C%22background%22%3A%22%20-webkit-gradient(linear%2C%20left%20top%2C%20left%20bottom%2C%20from(%23666666)%2C%20to(%23cccccc))%22%7D";
  return (
    <Link
      href={`/movie/${id}`}
      className={`${className} group flex flex-col rounded-lg relative overflow-hidden max-w-36 sm:max-w-60 aspect-2/3 min-w-40 sm:min-w-60 my-4`}
    >
      <img className="absolute -z-10" src={imageUrl} alt={title} />
      <div className="p-3 z-10 flex-col justify-between min-h-full hidden sm:group-hover:flex sm:group-hover: bg-gray-900 sm:group-hover:bg-opacity-70 ">
        <div className="block">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{release_date}</p>
        </div>
        <p className="overflow-hidden text-wrap">
          {overview && overview.slice(0, 120) + "..."}
        </p>
      </div>
      <h2 className="lg:hidden self-center text-md px-3 py-2 max-w-full h-full bg-gradient-to-t">
        {title}
      </h2>
    </Link>
  );
};
