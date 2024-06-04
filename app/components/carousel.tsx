"use client";

import Card from "./card";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Carousel = (moviesList: any) => {
  const [maxScrollLeft, setMaxScrollLeft] = useState<Boolean>(true);
  const [maxScrollRight, setMaxScrollRight] = useState<Boolean>(false);

  const moviesListArr = moviesList.moviesList;

  const handleScroll = (e: any) => {
    const maxLeft = e.target.scrollLeft < 50;

    const maxRight =
      e.target.scrollLeft === e.target.scrollWidth - e.target.clientWidth;

    if (maxLeft) setMaxScrollLeft(true);
    if (maxRight) setMaxScrollRight(true);
    if (!maxLeft) setMaxScrollLeft(false);
    if (!maxRight) setMaxScrollRight(false);
  };

  return (
    <div className="relative">
      {!maxScrollLeft && (
        <div className="hidden sm:block absolute left-0 top-40 z-30 justify-between">
          <ChevronLeftIcon className="w-14 text-green-500 hover:cursor-pointer" />
        </div>
      )}
      <div
        className="relative flex gap-2 overflow-x-scroll sm:scrollbar sm:hover:scrollbar-thumb-green-500 sm:scrollbar-thumb-gray-600 sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full"
        onScroll={handleScroll}
      >
        {moviesListArr.map((movie: any, index: number) => (
          <Card
            elementId={`card-${index}`}
            key={`id:${movie.id}`}
            props={movie}
          />
        ))}
      </div>
      {!maxScrollRight && (
        <div className="hidden sm:block absolute right-0 top-40 z-30 justify-between">
          <ChevronRightIcon className="w-14 text-green-500 hover:cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Carousel;
