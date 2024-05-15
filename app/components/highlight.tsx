import { StarIcon } from "@heroicons/react/24/outline";

export default function Highlight() {
  return (
    <aside className="flex flex-col justify-between container p-10 bg-highlight-image max-w-full h-30vw bg-cover">
      <a className="self-end" href="/">
        <StarIcon className="text-white w-10" />
      </a>
      <div className="flex flex-col gap-1" id="highlight-info-ctn">
        <h2 className="text-3xl font-bold">Movie title</h2>
        <h3 className="text-xl">Movie short description</h3>
        <button className="mt-2 py-1 border-2 rounded-full max-w-32">
          Play trailer
        </button>
      </div>
    </aside>
  );
}
