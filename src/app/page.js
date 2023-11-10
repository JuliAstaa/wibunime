import Body from "@/components/body/body";
import BoxContainer from "@/components/box-container/box-container";
import List from "@/components/list/list";
import { FetchingData } from "@/libs/api-libs";

const Home = async () => {
  const topAnime = await FetchingData("top/anime", "limit=10");
  const topManga = await FetchingData("top/manga", "limit=10");

  return (
    <Body resource={"anime"}>
      <BoxContainer title={"Top anime"} href={"/top-anime"}>
        <List api={topAnime.data} href={"anime"} />
      </BoxContainer>
      <BoxContainer title={"Top manga"} href={"/top-manga"}>
        <List api={topManga.data} href={"manga"} />
      </BoxContainer>
    </Body>
  );
};

export default Home;
