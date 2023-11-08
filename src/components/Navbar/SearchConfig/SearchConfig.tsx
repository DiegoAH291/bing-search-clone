import { Menu } from "./Menu/Menu";
import { useState } from "react";

export const SearchConfig = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <button
        className="bg-transparent flex items-center justify-center text-neutral-100 relative"
        onClick={showMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width={28}
          height={28}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>

      <Menu menu={menu} />
    </>
  );
};
