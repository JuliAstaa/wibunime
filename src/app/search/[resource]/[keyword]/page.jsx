import Body from "@/components/body/body";
import BoxContainer from "@/components/box-container/box-container";
import List from "@/components/list/list";
import { FetchingData } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const results = await FetchingData(
    `${params.resource}`,
    `q=${params.keyword}`
  );

  const decodeUrl = params.keyword.replace(/%20/g, " ");

  return (
    <Body>
      <BoxContainer
        title={`${params.resource} search by keyword "${decodeUrl}"`}
      >
        <List api={results.data} href={params.resource} />
      </BoxContainer>
    </Body>
  );
};

export default Page;
