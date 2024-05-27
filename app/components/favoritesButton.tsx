"use client";

import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconFilled } from "@heroicons/react/24/solid";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { postMovie } from "@/_actions/movieAction";
import { updateFavorites, removeFromFavorites } from "@/_actions/userAction";

export default function FavoritesButton({
  className = "",
  props,
  isFavorite,
}: {
  className?: string;
  props: any;
  isFavorite?: boolean;
}) {
  const [isLocalFavorite, setIsLocalFavorite] = useState(isFavorite);

  const { id, title, poster_path, overview, release_date } = props;
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const isLoggedIn = status === "authenticated";

  const removeFavorite = async () => {
    await removeFromFavorites(userEmail, id);
    setIsLocalFavorite(!isLocalFavorite);
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
    setIsLocalFavorite(!isLocalFavorite);
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
