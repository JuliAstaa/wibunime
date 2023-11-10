import Body from "@/components/body/body";
import Detail from "@/components/detail/detail";
import DetailAnime from "@/components/detail/detail-anime";
import { FetchingData } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const data = await FetchingData(`anime/${params.id}`);

  return (
    <Body resource={"anime"}>
      <Detail data={data.data}>
        <DetailAnime data={data.data} />
      </Detail>
    </Body>
  );
};

export default Page;
