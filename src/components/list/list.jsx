import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import NotFound from "../search-not-found/not-found";

const List = ({ api, href }) => {
  let stars = [
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
  ];

  return (
    <div>
      {api?.length != 0 ? (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {api?.map((data) => {
            return (
              <Link
                key={data.mal_id}
                href={`/${href}/${data.mal_id}/${data.title}`}
              >
                <div className="card flex flex-col  w-full h-full">
                  <div className="image w-full h-full">
                    <Image
                      src={data.images.webp.image_url}
                      width={500}
                      height={500}
                      alt={data.images.jpg.image_url}
                      priority={true}
                    />
                  </div>
                  <div className="title w-full h-8 text-slate-300">
                    <div>
                      <p className="whitespace-nowrap text-ellipsis overflow-x-hidden">
                        {data.title}{" "}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 rating text-white flex justify-between items-center">
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
                        <p className="text-slate-300 text-sm">No rating</p>
                      </div>
                    )}

                    <p className="text-slate-300 text-sm">{data.score}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default List;
