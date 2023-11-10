import { Spinner } from "@phosphor-icons/react/dist/ssr";

const Loading = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-[95%] h-full m-auto bg-black flex flex-col pt-8 p-2 lg:w-[90%] lg:flex-row lg:gap-8  xl:w-[75%] ">
        <div className="w-full h-full flex justify-center items-center gap-2">
          <Spinner size={32} className={"text-white animate-spin "} />
          <p className="text-white">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
