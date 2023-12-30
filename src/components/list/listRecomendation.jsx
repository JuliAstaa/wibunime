import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import NotFound from "../search-not-found/not-found";

const ListRecommendation = ({ api, href }) => {
  let stars = [
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
    <Star size={15} color="orange" weight="fill" />,
  ];

  return (
    <div className="mb-8">
      {api?.length != 0 ? (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {api?.map((data, index) => {
            return (
              <Link
                key={index}
                href={`/${href}/${data.mal_id}/${data.title}`}
                className="shadow-lg"
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
                  <div className="title w-full h-8 text-slate-700 dark:text-slate-300">
                    <div>
                      <p className="whitespace-nowrap text-ellipsis overflow-x-hidden">
                        {data.title}{" "}
                      </p>
                    </div>
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

export default ListRecommendation;
