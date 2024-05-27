import { getServerSession } from "next-auth";
import { getFavorites } from "@/_actions/userAction";
import NotAuthorized from "../not-authorized";
import Card from "../components/card";
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession();
  const isLoggedIn = Boolean(session);
  const userEmail = session?.user?.email;
  const userFavorites = userEmail ? await getFavorites(userEmail) : [];

  if (!isLoggedIn)
    return (
      <>
        <NotAuthorized />
      </>
    );

  return (
    <section className="flex flex-row py-5 px-5 gap-x-10 gap-y-5 max-w-full flex-wrap justify-center sm:gap-x-5">
      {userFavorites.length > 0 ? (
        <>
          <div className="flex flex-row gap-x-10 gap-y-5 max-w-full flex-wrap justify-center sm:gap-x-5">
            {userFavorites.map((movie: any) => {
              const movieContract = JSON.parse(
                JSON.stringify({ ...movie._doc, id: movie.tmdb_id })
              );
              return (
                <Card
                  className="my-0"
                  key={`id:${movie.tmdb_id}`}
                  props={movieContract}
                  isFavorite={true}
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
    </section>
  );
}
