import { SmileyXEyes } from "@phosphor-icons/react/dist/ssr";

const NotFound = () => {
  return (
    <div className="w-full ">
      <div className="w-[95%] m-auto bg-black flex flex-col pt-8 p-2 lg:w-[90%] lg:flex-row lg:gap-8  xl:w-[75%] ">
        <div className="w-full">
          <h1 className="text-white h-[85vh] flex justify-center items-center ">
            <span className="flex justify-center items-center text-xl">
              {" "}
              <SmileyXEyes size={42} color="#ffffff" weight="fill" /> 404 | Page
              Not Found
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
