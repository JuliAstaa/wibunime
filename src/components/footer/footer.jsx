import Link from "next/link";
import { PawPrint } from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-black mt-16">
      <div className="m-auto w-[75%] dark:bg-dark p-4 pt-16">
        <div className="m-auto w-full flex gap-4 item-center justify-center text-slate-300 ">
          <Link href={"/about"} className="hover:text-sky-500">
            About
          </Link>
        </div>
        <div className="title flex justify-center">
          <h2 className="text-2xl font-bold text-white flex items-center">
            WIBUNIME
            <PawPrint size={32} color="#ffffff" weight="fill" />
          </h2>
        </div>
        <div className="h-[1px] w-full bg-slate-800 my-6"></div>
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
