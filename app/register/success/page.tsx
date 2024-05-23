import Link from "next/link";

export default function Page() {
  return (
    <section className="container mx-auto text-center mt-24">
      <h1 className="text-2xl">Your account was created successfully</h1>
      <h2 className="text-xl mt-10">
        You can now{" "}
        <Link className="text-green-400 font-bold" href="/login">
          login
        </Link>{" "}
        into the website
      </h2>
    </section>
  );
}
