"use client";

import Card from "./card";
import Link from "next/link";
import { useFavorites } from "../context/favorites.ctx";

export default function FavoritesList() {
  const userFavorites = useFavorites();
  return (
    <>
      {userFavorites.length > 0 ? (
        <>
          <div className="flex flex-row gap-x-10 gap-y-5 max-w-full flex-wrap justify-center sm:gap-x-5">
            {userFavorites.map((movie: any) => {
              const movieContract = { ...movie, id: movie.tmdb_id };
              return (
                <Card
                  className="my-0"
                  key={`id:${movie.tmdb_id}`}
                  props={movieContract}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="text-center container mx-auto">
          <h1 className="text-3xl mt-32 font-bold">
            There are no movies added to favorites yet.
          </h1>
          <h2 className="text-xl mt-5">
            Do you want to return to the{" "}
            <Link className="font-bold text-green-500" href={"/"}>
              homepage
            </Link>
            ?
          </h2>
        </div>
      )}
    </>
  );
}
