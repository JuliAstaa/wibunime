import NavMenu from "./nav-menu";
import Search from "./search";
import Link from "next/link";
import { PawPrint } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => {
  return (
    <div className="w-full relative">
      <div className="w-full flex m-auto py-4 bg-slate-200  px-2 items-center gap-2 lg:w-[90%] xl:w-[75%] border-b-[1px] border-slate-100 dark:bg-black dark:border-slate-700">
        <div className="flex justify-between w-full items-center ">
          <div className="logo ">
            <Link href={"/"} className="">
              <h2 className="text-xl font-semibold text-sky-500 flex items-center">
                WIBUNIME
                <PawPrint size={32} color="#0ea5e9" weight="fill" />
              </h2>
            </Link>
          </div>
        </div>
        <div className="search w-full flex justify-end">
          <Search />
        </div>
        <div className="nav-menu lg:w-full">
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
