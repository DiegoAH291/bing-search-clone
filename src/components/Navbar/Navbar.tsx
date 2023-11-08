"use client";

import { SearchConfig } from "./SearchConfig/SearchConfig";
import { SearchForm } from "../SearchForm/SearchForm";
import { NavMenu } from "./NavMenu/NavMenu";

export const Navbar = () => {
  return (
    <>
      <header className="w-full flex items-center justify-between px-5 py-4 max-nav:flex-col">
        <section className="flex items-center gap-6 max-nav:flex-col w-full max-nav:gap-3">
          {/*====logo====*/}
          <div className="flex items-center gap-1 w-36 justify-start max-nav:w-full max-nav:justify-center">
            {/*====config menu with mobile====*/}
            <section className="hidden items-center justify-center gap-6 max-nav:flex">
              <SearchConfig />
            </section>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <path
                fill="#ff5722"
                d="M6 6H22V22H6z"
                transform="rotate(-180 14 14)"
              ></path>
              <path
                fill="#4caf50"
                d="M26 6H42V22H26z"
                transform="rotate(-180 34 14)"
              ></path>
              <path
                fill="#ffc107"
                d="M26 26H42V42H26z"
                transform="rotate(-180 34 34)"
              ></path>
              <path
                fill="#03a9f4"
                d="M6 26H22V42H6z"
                transform="rotate(-180 14 34)"
              ></path>
            </svg>

            <span className="text-neutral-100 text-sm capitalize font-normal">
              Microsoft Bing
            </span>
          </div>

          {/*====search form====*/}
          <SearchForm />
        </section>

        {/*====config menu====*/}
        <section className="flex items-center justify-center gap-6 max-nav:hidden">
          <SearchConfig />
        </section>
      </header>
      <NavMenu />
    </>
  );
};
