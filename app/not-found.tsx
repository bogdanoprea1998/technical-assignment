import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto w-full text-center mt-24">
      <h2 className="text-3xl">404 - Page Not Found</h2>
      <p className="text-xl mt-5">Could not find requested resource</p>
      <Link href="/">
        <p className="font-bold mt-5 text-green-400">Return Home</p>
      </Link>
    </div>
  );
}
