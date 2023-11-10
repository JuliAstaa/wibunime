import { FetchingData } from "@/libs/api-libs";
import Genre from "./genre";
import BoxContainer from "../box-container/box-container";

const AllGenres = async () => {
  const animeGenres = await FetchingData("genres/anime");
  const mangaGenres = await FetchingData("genres/manga");

  return (
    <div>
      <BoxContainer title={"Genres for anime"}>
        <Genre api={animeGenres.data} href={"anime"} />
      </BoxContainer>
      <BoxContainer title={"Genres for manga"}>
        <Genre api={mangaGenres.data} href={"manga"} />
      </BoxContainer>
    </div>
  );
};

export default AllGenres;
