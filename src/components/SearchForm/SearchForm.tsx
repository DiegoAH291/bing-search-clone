"use client";

import { Microphone } from "./Microphone/Microphone";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchForm = () => {
  const router = useRouter();

  {
    /*====get the length of the query====*/
  }
  const [lengthQuery, setLengthQuery] = useState<number>(0);

  {
    /*====get the data and do the search====*/
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;

    const input = elements.namedItem("query");
    const isInput = input instanceof HTMLInputElement;

    if (!isInput || input === null) return;

    router.push(`/?q=${input.value}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center relative w-form-search max-nav:w-full"
    >
      <input
        className="w-full px-5 py-3 rounded-3xl outline-none bg-neutral-700 shadow-md text-sm text-neutral-100"
        name="query"
        onChange={(e) => setLengthQuery(e.target.value.length)}
        type="text"
      />

      <div className="absolute right-5 flex items-center gap-3">
        <Microphone />

        {/*====show the search button in case there is information====*/}
        {lengthQuery > 0 ? (
          <button
            type="submit"
            className="bg-transparent flex items-center justify-center text-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
          </button>
        ) : null}
      </div>
    </form>
  );
};
