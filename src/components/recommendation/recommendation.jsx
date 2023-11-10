import { FecthingNestedData, RandomData } from "@/libs/api-libs";
import BoxContainer from "../box-container/box-container";
import List from "../list/list";

const Recommendation = async ({ resource }) => {
  if (resource) {
    let recommendations = await FecthingNestedData(
      `recommendations/${resource}`,
      "entry"
    );
    recommendations = RandomData(recommendations, 10);

    return (
      <div className="mt-8">
        <BoxContainer title={`Recommended ${resource}`}>
          <List api={recommendations.data} href={resource} />
        </BoxContainer>
      </div>
    );
  } else {
    return null;
  }
};

export default Recommendation;
