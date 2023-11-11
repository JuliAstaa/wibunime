import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";

const Detail = ({ children, data }) => {
  let stars = [
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
  ];

  return (
    <div>
      <div className="detail">
        <div className="header flex flex-col justify-between items-start gap-2 lg:flex-row lg:gap-8 lg:items-center">
          <h1 className="font-semibold text-black border-b-[1px] w-fit dark:text-white">
            {data.title} {data.title_japanese}
          </h1>
          <div className="rating">
            <div className="text-slate-400 flex items-center gap-4">
              {data.score ? (
                <div className="star flex">
                  {stars.map((star, index) => {
                    let score = Math.floor(data.score / 2);
                    for (score; score < stars.length; score++) {
                      stars[score] = (
                        <Star size={15} color="grey" weight="fill" />
                      );
                    }
                    return <div key={index}>{star}</div>;
                  })}
                </div>
              ) : (
                <div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    No rating
                  </p>
                </div>
              )}

              <p className="text-slate-700 dark:text-slate-300 text-sm">
                {data.score}
              </p>
            </div>
          </div>
        </div>
        <div className=" gap-2 grid-cols-3 mt-4  lg:grid lg:p-2">
          <div className="img">
            <Image
              src={data.images.webp.image_url}
              width={200}
              height={200}
              alt={data.images.jpg.image_url}
              priority={true}
            />
          </div>
          <div className="synopsis col-span-2 mt-4 lg:mt-0">
            <p className="text-sm text-slate-700 text-justify lg:text-start dark:text-slate-300">
              {data.synopsis ? data.synopsis : "No sypnosis yet"}
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Detail;
