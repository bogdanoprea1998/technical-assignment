import { tmdb_base_url } from "./api_endpoints";

const read_token = process.env.TMDB_API_READ_TOKEN;
const api_key = process.env.TMDB_API_KEY;

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${read_token}`,
  },
};

export const fetchMovies = async (page: number) => {
  const url = `${tmdb_base_url}/discover/movie?api_key=${api_key}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  const response = await fetch(url, getOptions)
    .then((res) => res.json())
    .catch((err) => console.error("error: " + err));

  return response;
};

export const fetchMovieById = async (movieId: string) => {
  const url = `${tmdb_base_url}/movie/${movieId}?api_key=${api_key}&language=en-US`;

  const response = await fetch(url, getOptions)
    .then((res) => res.json())
    .catch((err) => console.error("error: " + err));

  return response;
};

export const fetchTrailerByMovieId = async (movieId: string) => {
  const url = `${tmdb_base_url}/movie/${movieId}/videos?api_key=${api_key}&language=en-US`;

  const response = await fetch(url, getOptions)
    .then((res) => res.json())
    .catch((err) => console.error("error: " + err));

  return response;
};

export const fetchMoviesByQuery = async (query: string, page: number) => {
  const url = `${tmdb_base_url}/search/movie?query=${query}&page=${page.toString()}&include_adult=false&language=en&api_key=${api_key}`;
  const response = await fetch(url, getOptions)
    .then((res) => res.json())
    .catch((err) => console.error("error: " + err));

  return response;
};
