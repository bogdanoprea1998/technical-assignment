import Category from "./components/category";
import Highlight from "./components/highlight";
import MovieGrid from "./components/moviegrid";
import { getServerSession } from "next-auth";
import { getFavorites } from "@/_actions/userAction";

export default async function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const userEmail = (await getServerSession())?.user?.email;
  const userFavorites = userEmail ? await getFavorites(userEmail) : [];
  return (
    <main className="flex flex-col items-center justify-between">
      <Highlight userFavorites={userFavorites} />
      <Category
        page={1}
        userFavorites={userFavorites}
        title="Discover new movies"
      />
      <MovieGrid
        userFavorites={userFavorites}
        searchParams={searchParams}
        page={2}
      />
    </main>
  );
}
