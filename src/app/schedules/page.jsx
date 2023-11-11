import Body from "@/components/body/body";
import BoxContainer from "@/components/box-container/box-container";
import FetchedData from "@/components/utils/fetched-data";

const Page = () => {
  return (
    <Body resource={"anime"}>
      <BoxContainer title={"Schedules"}>
        <FetchedData href={"anime"} resource={"schedules"} query={"page="} />
      </BoxContainer>
    </Body>
  );
};

export default Page;
