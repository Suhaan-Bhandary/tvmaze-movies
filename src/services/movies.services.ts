import axios from 'axios';
import { MovieList, Show } from '../types/movies.types';

export const getMovieList = () => {
  const url = 'https://api.tvmaze.com/search/shows?q=all';
  return axios.get<MovieList>(url).then((response) => response.data);
};

export const getMovie = (id: string | undefined) => {
  if (!id) return;

  const url = `https://api.tvmaze.com/shows/${id}`;
  return axios.get<Show>(url).then((response) => response.data);
};

export default {};
