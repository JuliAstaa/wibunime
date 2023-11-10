import TopCharacter from "../top-character/top-character";
import Recommendation from "../recommendation/recommendation";
import Footer from "../footer/footer";

const Body = ({ children, resource }) => {
  return (
    <div className="w-full ">
      <div className="w-[95%] m-auto bg-black flex flex-col pt-8 p-2 lg:w-[90%] lg:flex-row lg:gap-8  xl:w-[75%] ">
        <div className="w-full lg:w-3/4">
          <div>{children}</div>
          <div>
            <Recommendation resource={resource} />
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <TopCharacter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
