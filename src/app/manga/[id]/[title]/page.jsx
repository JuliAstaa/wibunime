import Body from "@/components/body/body";
import Detail from "@/components/detail/detail";
import DetailManga from "@/components/detail/detail-manga";
import { FetchingData } from "@/libs/api-libs";
const Page = async ({ params }) => {
  const data = await FetchingData(`manga/${params.id}`);

  return (
    <Body resource={"manga"}>
      <Detail data={data.data}>
        <DetailManga data={data.data} />
      </Detail>
    </Body>
  );
};

export default Page;
