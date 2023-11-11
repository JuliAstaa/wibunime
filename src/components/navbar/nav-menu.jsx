"use client";
import Link from "next/link";
import { MoonStars, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const NavMenu = () => {
  const [active, setActive] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState("");
  const [scale, setScale] = useState("scale-0");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleHamburger = () => {
    setActive(!active);
    active ? setHamburgerActive("hamburger-active") : setHamburgerActive("");
    active ? setScale("scale-100") : setScale("scale-0");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div
        className={`hamburger-menu flex flex-col gap-2 justify-center items-center ${hamburgerActive} lg:hidden `}
        onClick={handleHamburger}
      >
        <span className="line origin-top-left"></span>
        <span className="line origin-center"></span>
        <span className="line origin-bottom-left"></span>
      </div>

      <div
        className={`nav-menu text-slate-300 absolute right-0 top-16 w-[200px] h-auto bg-slate-200 py-8 px-4 flex flex-col gap-6 origin-top-right transition-all duration-300 ease-in-out ${scale} lg:scale-100 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:justify-around lg:w-full lg:transition-none dark:bg-black`}
      >
        <ul>
          <li>
            <Link
              href={"/genres"}
              className="text-slate-900 hover:text-sky-500 dark:text-white"
            >
              Genres
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href={"/schedules"}
              className="text-slate-900 hover:text-sky-500 dark:text-white"
            >
              Schedules
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            {theme != "light" ? (
              <MoonStars
                size={24}
                color="#ffffff"
                weight="fill"
                onClick={() => setTheme("light")}
              />
            ) : (
              <Sun
                size={24}
                color="#000000"
                weight="fill"
                onClick={() => setTheme("dark")}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
