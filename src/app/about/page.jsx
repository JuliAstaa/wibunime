import Body from "@/components/body/body";
import BoxContainer from "@/components/box-container/box-container";
import {
  DiscordLogo,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <Body>
      <BoxContainer>
        <h1 className="text-xl font-semibold border-b-2 border-slate-300 w-fit text-sky-500 dark:border-slate-700">
          About
        </h1>
        <p className="my-8 text-sm text-slate-700 dark:text-slate-300">
          WIBUNIME is an anime list website that I created using NextJS with API
          from{" "}
          <Link href={"https://jikan.moe/"} className="hover:text-sky-500">
            Jikan API
          </Link>
        </p>
        <div className="about-me">
          <h2 className="text-black dark:text-white">About Me</h2>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Hello everyone, my name is Juli, I live in a small village in Bali.
            I started to love the world of coding since I was in high school, at
            that time I managed to create a simple web that displays the words
            {` "Hello World"`} , since then I have continued to learn about web
            developers and improve my skills. <br />
            Nice to meet you!
          </p>
        </div>
        <div className="socmed my-4 text-slate-700 dark:text-slate-300">
          <h2 className="text-black dark:text-white">Follow me</h2>
          <Link
            target="_blank"
            href={"https://www.instagram.com/juliasta._"}
            className="flex items-center gap-2 group w-fit"
          >
            <InstagramLogo size={25} className=" hover:text-sky-500" />
            <span className="origin-left transition-all ease-in-out duration-300  scale-1 group-hover:scale-100 group-hover:text-sky-500 lg:scale-0">
              Instagram
            </span>
          </Link>
          <Link
            target="_blank"
            href={"https://web.facebook.com/i.astawa.3705/"}
            className="flex items-center gap-2 group w-fit"
          >
            <FacebookLogo size={25} className=" hover:text-sky-500" />
            <span className="origin-left transition-all ease-in-out duration-300  scale-1 group-hover:scale-100 group-hover:text-sky-500 lg:scale-0">
              Facebook
            </span>
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/JuliAstaa"}
            className="flex items-center gap-2 group w-fit"
          >
            <GithubLogo size={25} className=" hover:text-sky-500" />
            <span className="origin-left transition-all ease-in-out duration-300  scale-1 group-hover:scale-100 group-hover:text-sky-500 lg:scale-0">
              GitHub
            </span>
          </Link>
          <Link
            target="_blank"
            href={"https://x.com/astajuliii?t=DIzywNC86UM5yzy_lFgKvw&s=08"}
            className="flex items-center gap-2 group w-fit"
          >
            <TwitterLogo size={25} className=" hover:text-sky-500" />
            <span className="origin-left transition-all ease-in-out duration-300  scale-1 group-hover:scale-100 group-hover:text-sky-500 lg:scale-0">
              X
            </span>
          </Link>
          <Link
            target="_blank"
            href={"https://discord.com/invite/BMSnxQg8"}
            className="flex items-center gap-2 group w-fit"
          >
            <DiscordLogo size={25} className=" hover:text-sky-500" />
            <span className="origin-left transition-all ease-in-out duration-300  scale-1 group-hover:scale-100 group-hover:text-sky-500 lg:scale-0">
              Discord
            </span>
          </Link>
          <Link
            target="_blank"
            href={
              "https://www.linkedin.com/in/juli-asta-58a21b27a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            className="flex items-center gap-2 group w-fit"
          >
            <LinkedinLogo size={25} className=" hover:text-sky-500" />
            <span className="origin-left transition-all ease-in-out duration-300  scale-1 group-hover:scale-100 group-hover:text-sky-500 lg:scale-0">
              LinkedIn
            </span>
          </Link>
        </div>
      </BoxContainer>
    </Body>
  );
};

export default Page;
