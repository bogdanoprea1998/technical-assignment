"use client";

import React, { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { stat } from "fs";

const FavoritesContext = React.createContext<any>(null);
const UpdateFavoritesContext = React.createContext<any>(null);

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function useUpdateFavorites() {
  return useContext(UpdateFavoritesContext);
}

export function FavoritesProvider({ children }: { children: any }) {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [userEmail, setUserEmail] = useState<any>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      setUserEmail(session?.user?.email);
    }
  }, [session]);

  useEffect(() => {
    if (userEmail) {
      fetchFavorites(userEmail);
    }
  }, [userEmail]);

  const fetchFavorites = async (email: any) => {
    try {
      const res = await fetch("/api/user/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setFavorites(data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  function updateFavorites() {
    if (userEmail) fetchFavorites(userEmail);
  }

  return (
    <FavoritesContext.Provider value={favorites}>
      <UpdateFavoritesContext.Provider value={updateFavorites}>
        {children}
      </UpdateFavoritesContext.Provider>
    </FavoritesContext.Provider>
  );
}
