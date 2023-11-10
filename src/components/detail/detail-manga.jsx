const DetailManga = ({ data }) => {
  const genres = data.genres.map((genre, index, array) => {
    if (index === array.length - 1) {
      return genre.name.toString();
    } else {
      return genre.name.toString() + ",";
    }
  });
  const authors = data.authors.map((author, index, array) => {
    if (index === array.length - 1) {
      return author.name.toString();
    } else {
      return author.name.toString() + ",";
    }
  });

  const genre = genres.join(" ");
  const author = authors.join(" ");

  return (
    <div className="mt-4">
      <div className="p-4 m-auto bg-gray-950">
        <table>
          <tbody className="text-sm">
            <tr>
              <td className="text-slate-300 font-semibold">Title</td>
              <td className="text-white">:</td>
              <td className="text-slate-300">
                {data.title} {data.title_japanese}
              </td>
            </tr>

            <tr>
              <td className="text-slate-300 font-semibold">Genre</td>
              <td className="text-white">:</td>
              <td className="text-slate-300">{genre ? genre : "-"}</td>
            </tr>
            <tr>
              <td className="text-slate-300 font-semibold">Status</td>
              <td className="text-white">:</td>
              <td className="text-slate-300">{data.status}</td>
            </tr>
            <tr>
              <td className="text-slate-300 font-semibold">Chapter</td>
              <td className="text-white">:</td>
              <td className="text-slate-300 capitalize">
                {data.chapter ? data.chapter : "-"}
              </td>
            </tr>
            <tr>
              <td className="text-slate-300 font-semibold">Volume</td>
              <td className="text-white">:</td>
              <td className="text-slate-300 capitalize">
                {data.volume ? data.volume : "-"}
              </td>
            </tr>
            <tr>
              <td className="text-slate-300 font-semibold">Type</td>
              <td className="text-white">:</td>
              <td className="text-slate-300 capitalize">{data.type}</td>
            </tr>

            <tr>
              <td className="text-slate-300 font-semibold">Author</td>
              <td className="text-white">:</td>
              <td className="text-slate-300 capitalize">
                {author ? author : "-"}
              </td>
            </tr>
            <tr>
              <td className="text-slate-300 font-semibold">Published</td>
              <td className="text-white">:</td>
              <td className="text-slate-300 capitalize">
                {data.published.string}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailManga;
