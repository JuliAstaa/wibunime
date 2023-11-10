const { FetchingData } = require("@/libs/api-libs");
import Image from "next/image";

const TopCharacter = async () => {
  const topCharacter = await FetchingData("top/characters", "limit=15");

  return (
    <div>
      <h1 className="text-sky-500 border-b-[1px] border-sky-500 w-fit font-semibold">
        Top character
      </h1>
      <div className="mt-2 w-full lg:border-l-2 lg:px-4 lg:border-slate-700">
        {topCharacter.data.map((character) => {
          return (
            <div className="flex w-full h-auto gap-4  " key={character.mal_id}>
              <div className="flex items-center gap-4 border-b-[1px] border-slate-700 w-full h-full mb-4 py-2 ">
                <div className="w-1/4  h-auto">
                  <div className=" w-full h-full">
                    <Image
                      src={character.images.webp.image_url}
                      alt={character.images.jpg.image_url}
                      width={400}
                      height={400}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="name  w-full">
                  <p className="text-slate-300">{character.name}</p>
                  <p className="text-slate-300">{character.name_kanji}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCharacter;
