"use client";
import Link from "next/link";
import { MoonStars } from "@phosphor-icons/react/dist/ssr";

import { useState } from "react";

const NavMenu = () => {
  const [active, setActive] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState("");
  const [scale, setScale] = useState("scale-0");

  const handleHamburger = () => {
    setActive(!active);
    active ? setHamburgerActive("hamburger-active") : setHamburgerActive("");
    active ? setScale("scale-100") : setScale("scale-0");
  };

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
        className={`nav-menu text-slate-300 absolute right-0 top-16 w-[200px] h-auto bg-black py-8 px-4 flex flex-col gap-6 origin-top-right transition-all duration-300 ease-in-out ${scale} lg:scale-100 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:justify-around lg:w-full`}
      >
        <ul>
          <li>
            <Link href={"/genres"} className="hover:text-sky-500">
              Genres
            </Link>
          </li>
        </ul>
        <ul>
          <li>Schedule</li>
        </ul>
        <ul>
          <li>
            <MoonStars size={24} color="#fffff7" weight="fill" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
