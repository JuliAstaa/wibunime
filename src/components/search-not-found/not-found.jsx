import { SmileyXEyes } from "@phosphor-icons/react/dist/ssr";

const NotFound = () => {
  return (
    <div className="flex gap-2 items-center justify-center h-[80vh]">
      <SmileyXEyes size={42} color="#ffffff" weight="fill" />
      <h1 className="text-white text-xl">Not Found</h1>
    </div>
  );
};

export default NotFound;
