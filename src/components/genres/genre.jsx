import Link from "next/link";

const Genre = ({ api, href }) => {
  return (
    <div className="w-3/4 grid grid-cols-2 mb-16 lg:grid-cols-4">
      {api.map((genre) => {
        return (
          <Link
            key={genre.mal_id}
            href={`genres/${href}/${genre.mal_id}/${genre.name}`}
            className="text-slate-400 text-sm hover:text-sky-500"
          >
            {genre.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Genre;
