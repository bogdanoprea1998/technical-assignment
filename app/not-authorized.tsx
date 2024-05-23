import Link from "next/link";

export default function NotAuthorized() {
  return (
    <div className="container mx-auto w-full text-center mt-24">
      <h2 className="text-3xl">You must be logged in to access this route.</h2>
      <Link href="/login">
        <p className="font-bold mt-5 text-green-400">Go to the login page</p>
      </Link>
    </div>
  );
}
