import Body from "@/components/body/body";
import BoxContainer from "@/components/box-container/box-container";
import FetchedData from "@/components/utils/fetched-data";

const Page = ({ params }) => {
  const decodeUrl = params.genre.replace(/%20/g, " ");

  return (
    <Body>
      <BoxContainer title={`${params.resource} with ${decodeUrl} genre`}>
        <FetchedData
          href={params.resource}
          resource={params.resource}
          query={`genres=${params.genreID}&page=`}
        />
      </BoxContainer>
    </Body>
  );
};

export default Page;
