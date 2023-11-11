import { SmileyXEyes } from "@phosphor-icons/react/dist/ssr";

const NotFound = () => {
  return (
    <div className="flex gap-2 items-center justify-center h-[80vh] text-black text-xl dark:text-white">
      <SmileyXEyes size={42} weight="fill" />
      <h1 className="">Not Found</h1>
    </div>
  );
};

export default NotFound;
