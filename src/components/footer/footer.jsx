import Link from "next/link";
import { PawPrint } from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <footer className="w-full h-full mt-16 bg-slate-200 dark:bg-black ">
      <div className="m-auto w-[75%] dark:bg-dark p-4 pt-16">
        <div className="m-auto w-full flex gap-4 item-center justify-center text-slate-700 dark:text-slate-300 ">
          <Link href={"/about"} className="hover:text-sky-500">
            About
          </Link>
        </div>
        <div className="title flex justify-center">
          <h2 className="text-2xl font-bold text-black flex items-center dark:text-white">
            WIBUNIME
            <PawPrint size={32} weight="fill" />
          </h2>
        </div>
        <div className="h-[1px] w-full  my-6 bg-slate-300 dark:bg-slate-800"></div>
        <div className="title flex justify-center">
          <p className="text-slate-400">
            Copyright © WIBUNIME. All right reserved
          </p>
        </div>
        <div className="title flex justify-center">
          <p className="text-center text-sm text-slate-600">
            <span className="text-red-500 ">
              <Link href={"/disclaimer"} className="hover:text-sky-500">
                Disclaimer
              </Link>
            </span>
            : This website I use API from{" "}
            <Link
              target="_blank"
              href={"https://jikan.moe/"}
              className="hover:text-sky-500"
            >
              Jikan API
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
