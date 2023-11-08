import { usePathname } from "next/navigation";
import Link from "next/link";

interface Routes {
  id: string;
  path: string;
  title: string;
}

export const NavMenu = () => {
  {
    /*====routes page====*/
  }
  const routes: Routes[] = [
    {
      id: crypto.randomUUID(),
      path: "/",
      title: "images",
    },

    {
      id: crypto.randomUUID(),
      path: "/collections",
      title: "collections",
    },
  ];

  const pathName = usePathname();

  return (
    <nav className="flex items-center gap-5 px-48 max-nav:justify-center max-nav:px-0">
      {routes.map((data) => {
        const { id, path, title } = data;

        return (
          <Link
            className={`rounded-3xl border border-blue-300 text-blue-300 ${
              pathName === path
                ? "text-neutral-950 font-semibold bg-blue-300"
                : null
            } text-xs capitalize font-normal px-5 py-1`}
            key={id}
            href={path}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
};
