import VideoPlayer from "../utils/video-player";
import Episodes from "../episodes/episodes";

const DetailAnime = ({ data }) => {
  const genres = data.genres.map((genre, index, array) => {
    if (index === array.length - 1) {
      return genre.name.toString();
    } else {
      return genre.name.toString() + ",";
    }
  });
  const studios = data.studios.map((studios, index, array) => {
    if (index === array.length - 1) {
      return studios.name.toString();
    } else {
      return studios.name.toString() + ",";
    }
  });

  const genre = genres.join(" ");
  const studio = studios.join(" ");

  return (
    <div className="mt-4">
      <div className="p-4 m-auto bg-white dark:bg-gray-950">
        <table>
          <tbody className="text-sm">
            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Title
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300">
                {data.title} {data.title_japanese}
              </td>
            </tr>

            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Genre
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300">
                {genre ? genre : "-"}
              </td>
            </tr>
            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Status
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300">
                {data.status}
              </td>
            </tr>
            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Season
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300 capitalize">
                {data.season ? data.season : "-"}
              </td>
            </tr>
            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Type
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300 capitalize">
                {data.type}
              </td>
            </tr>
            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Duration
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300 capitalize">
                {data.duration ? data.duration : "-"}
              </td>
            </tr>
            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Total episodes
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300 capitalize">
                {data.episodes ? data.episodes : "-"}
              </td>
            </tr>
            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Year
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300 capitalize">
                {data.year ? data.year : "-"}
              </td>
            </tr>
            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Studio
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300 capitalize">
                {studio ? studio : "-"}
              </td>
            </tr>
            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Rating
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300 capitalize">
                {data.rating ? data.rating : "-"}
              </td>
            </tr>
            <tr>
              <td className="text-slate-700 dark:text-slate-300 font-semibold">
                Aired
              </td>
              <td className="text-black dark:text-white">:</td>
              <td className="text-slate-700 dark:text-slate-300 capitalize">
                {data.aired.string}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="youtube mt-4">
        <VideoPlayer youtubeId={data.trailer.youtube_id} />
      </div>
      <div className="episodes mt-4">
        <div className="title">
          <h1 className="text-black dark:text-white ">
            Episodes {data.title} {data.title_japanese}
          </h1>
        </div>
        <Episodes mal_id={data.mal_id} />
      </div>
    </div>
  );
};

export default DetailAnime;
