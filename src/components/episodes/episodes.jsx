import { FetchingData } from "@/libs/api-libs";
import Link from "next/link";

const Episodes = async ({ mal_id }) => {
  const results = await FetchingData(`anime/${mal_id}/videos`);
  const episodes = results.data.episodes;

  return (
    <div>
      {episodes.length != 0 ? (
        <div className="w-full h-[30rem] overflow-auto ">
          {episodes.map((episode) => {
            return (
              <ul
                key={episode.mal_id}
                className="border-b-2 border-slate-300 py-2 flex text-sm dark:border-slate-800"
              >
                <li className=" text-slate-800 flex w-full justify-between items-center dark:text-slate-400">
                  <div className="episode w-1/2 lg:w-[20%]">
                    <p className="w-full">{episode.episode}</p>
                  </div>
                  <div className="hidden title w-[90%] lg:flex">
                    <p>{episode.title}</p>
                  </div>
                  <div className="title w-1/2 flex justify-end lg:w-[15%] lg:justify-center">
                    <Link
                      className="p-2 rounded-lg bg-slate-300 hover:text-white hover:bg-sky-500 dark:bg-slate-700 "
                      href={episode.url}
                    >
                      {" "}
                      Watch
                    </Link>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-full flex justify-start items-center mt-8">
          <h1 className="text-slate-700  font-semibold text-sm dark:text-slate-300">
            {"Episode is not available:( "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Episodes;
