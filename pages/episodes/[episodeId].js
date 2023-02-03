import axios from "axios";

const Episode = ({ episode }) => {

  console.log(episode);
  return (
    <>
      <h1>Episode: {episode.episode}</h1>
      <h2>
        Name: {episode.name} - Date: {episode.air_date}
      </h2>
    </>
  );
};

export default Episode;

export async function getStaticPaths() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
  const paths = data.results.map((episode) => {
    return {
      params: { episodeId: `${episode.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/episode/${params.episodeId}`
  );
  return {
    props: {
      episode: data,
    },
  };
}
