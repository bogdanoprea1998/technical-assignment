"use client";

import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconFilled } from "@heroicons/react/24/solid";

import { useState, useEffect } from "react";
import { useFavorites, useUpdateFavorites } from "../context/favorites.ctx";
import { useSession } from "next-auth/react";
import { postMovie } from "@/_actions/movieAction";
import { updateFavorites, removeFromFavorites } from "@/_actions/userAction";

export default function FavoritesButton({
  className = "",
  props,
}: {
  className?: string;
  props: any;
}) {
  const [isLocalFavorite, setIsLocalFavorite] = useState<boolean>(false);

  const userFavorites = useFavorites();
  const updateFavoritesCtx = useUpdateFavorites();

  const { id, title, poster_path, overview, release_date } = props;
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const isLoggedIn = status === "authenticated";

  useEffect(() => {
    const isFavorite = Boolean(
      userFavorites.find((movie: any) => Number(movie.tmdb_id) === Number(id))
    );
    setIsLocalFavorite(isFavorite);
  }, [userFavorites, updateFavorites]);

  const removeFavorite = async () => {
    await removeFromFavorites(userEmail, id);
    updateFavoritesCtx();
  };

  const addToFavorites = async () => {
    await postMovie({
      tmdb_id: id,
      title,
      poster_path,
      overview,
      release_date,
    });
    await updateFavorites(userEmail, id);
    updateFavoritesCtx();
  };

  return (
    isLoggedIn && (
      <>
        {isLocalFavorite ? (
          <StarIconFilled
            className={`${className} text-yellow-400 hover: cursor-pointer`}
            onClick={removeFavorite}
          />
        ) : (
          <StarIconOutline
            className={`${className} text-yellow-400 hover: cursor-pointer`}
            onClick={addToFavorites}
          />
        )}
      </>
    )
  );
}
