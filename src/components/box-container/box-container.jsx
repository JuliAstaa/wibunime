import Link from "next/link";
import { CaretDoubleRight } from "@phosphor-icons/react/dist/ssr";

const BoxContainer = ({ title, href, children }) => {
  return (
    <div>
      <div className="box-container-header flex justify-between">
        <div className="title">
          <h1 className="text-sky-500 border-b-[1px] border-sky-500 w-fit font-semibold capitalize">
            {title}
          </h1>
        </div>
        {href ? (
          <div className="more text-slate-300  ">
            <Link
              href={href}
              className="flex items-center gap-1 hover:text-sky-500 text-slate-800 dark:text-slate-200"
            >
              More <CaretDoubleRight size={20} weight="bold" />
            </Link>
          </div>
        ) : null}
      </div>
      <div className="box-container mt-4">{children}</div>
    </div>
  );
};

export default BoxContainer;
