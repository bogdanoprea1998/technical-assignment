"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useState, useEffect, Suspense } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({
  className,
  placeholder = "Search...",
}: {
  className?: string;
  placeholder?: string;
}) {
  const [input, setInput] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();
  const hasSearchParams = searchParams.get("query");

  useEffect(() => {
    console.log(pathname);
    console.log(searchParams);
    if (!hasSearchParams && pathname !== "/search") {
      console.log("FROM HERE");
      clearSearch();
    }
  }, [pathname]);

  const handleSearch = useDebouncedCallback((query) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    if (pathname !== "/search") {
      push("/search");
      setInput(query);
      return;
    }

    setInput(query);
    replace(`${pathname}?${params.toString()}`);
  });

  const clearSearch = () => {
    replace(`${pathname}?`);
    setInput("");
  };

  return (
    <Suspense>
      <div className={`container relative`}>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className={`${className} `}
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          value={input}
        />
        {hasSearchParams && (
          <XMarkIcon
            className="absolute text-black sm:text-white w-10 sm:w-7 right-2 top-1 "
            onClick={() => {
              clearSearch();
            }}
          />
        )}
      </div>
    </Suspense>
  );
}
