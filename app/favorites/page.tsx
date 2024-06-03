import { getServerSession } from "next-auth";
import NotAuthorized from "../not-authorized";
import FavoritesList from "../components/favoritesList";

export default async function Page() {
  const session = await getServerSession();
  const isLoggedIn = Boolean(session);

  if (!isLoggedIn)
    return (
      <>
        <NotAuthorized />
      </>
    );

  return (
    <section className="flex flex-row py-5 px-5 gap-x-10 gap-y-5 max-w-full flex-wrap justify-center sm:gap-x-5">
      <FavoritesList />
    </section>
  );
}
