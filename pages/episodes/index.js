import axios from "axios";
import Link from "next/link";

const EpisodeList = ({ episodeList }) => {
  return (
    <>
      <h1>episodeList Page</h1>
      {episodeList.map((episode) => {
        return (
          <div key={episode.id}>
            <Link href={`/episodes/${episode.id}`}>
              <h1>
                Episode: {episode.episode} - Name: {episode.name}
              </h1>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default EpisodeList;

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
  return {
    props: {
      episodeList: data.results.slice(0,3),
    },
  };
}
