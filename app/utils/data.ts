import { tmdb_base_url } from "./api_endpoints";

const read_token = process.env.TMDB_API_READ_TOKEN;
const api_key = process.env.TMDB_API_KEY;

export const fetchMovies = async (page: number) => {
  const url = `${tmdb_base_url}/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${read_token}`,
    },
  };

  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error("error: " + err));

  return response;
};
