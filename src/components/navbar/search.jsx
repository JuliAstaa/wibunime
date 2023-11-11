"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const Search = () => {
  const [scale, setScale] = useState(false);
  const [scaled, setScaled] = useState("scale-0");
  const selectRef = useRef();
  const inputRef = useRef();
  const router = useRouter();

  const handleClick = () => {
    setScale(!scale);
    scale ? setScaled("scale-100") : setScaled("scale-0");
  };

  const handleSearch = (event) => {
    event.preventDefault();

    console.log(inputRef);
    if (inputRef.current.value.length == 0) {
      if (selectRef.current.value == "anime") {
        router.push("/top-anime");
      } else {
        router.push("/top-manga");
      }
    } else {
      router.push(
        `/search/${selectRef.current.value}/${inputRef.current.value}`
      );
    }
    inputRef.current.value = "";
  };

  return (
    <div>
      <div className="search text-black lg:hidden dark:text-white">
        <MagnifyingGlass size={32} onClick={handleClick} />
      </div>
      <div
        className={`px-2 absolute w-full left-0 ${scaled} transition-all duration-300 ease-in-out origin-top-right z-10 lg:scale-100 lg:flex lg:items-center lg:relative`}
      >
        <div className="bg-slate-300   dark:bg-slate-800 rounded-lg">
          <form action="" className=" flex items-center w-full p-2 gap-2 ">
            <input
              type="text"
              placeholder="search.."
              className="w-full outline-none bg-slate-300 text-slate-800 dark:text-white dark:bg-slate-800"
              ref={inputRef}
            />
            <select
              name=""
              id=""
              className=" outline-none bg-slate-300 text-slate-700 dark:text-slate-300 dark:bg-slate-800"
              ref={selectRef}
            >
              <option value="anime">Anime</option>
              <option value="manga">Manga</option>
            </select>
            <button
              type="submit"
              className="text-slate-300"
              onClick={handleSearch}
            >
              <MagnifyingGlass
                size={20}
                className="text-slate-700 dark:text-slate-300"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Search;
