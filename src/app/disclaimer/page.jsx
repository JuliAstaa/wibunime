import Body from "@/components/body/body";
import BoxContainer from "@/components/box-container/box-container";
import Link from "next/link";

const Page = () => {
  return (
    <Body>
      <BoxContainer>
        <h1 className="text-xl font-semibold border-b-2 border-slate-700 w-fit text-sky-500">
          Diclaimer
        </h1>
        <p className="my-8 text-sm text-slate-300">
          This website is my solo project, I made this using NextJS with API
          from{" "}
          <Link href={"https://jikan.moe/"} className="hover:text-sky-500">
            Jikan API
          </Link>
          . So all anime and manga data is data from the{" "}
          <Link href={"https://jikan.moe/"} className="hover:text-sky-500">
            Jikan API
          </Link>
        </p>
      </BoxContainer>
    </Body>
  );
};

export default Page;
