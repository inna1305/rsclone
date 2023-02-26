import { URL_FILMS } from '../types/constants';
import { Film } from '../types/Film';

export const getFilms = async (page?: number, limit?: number) => {
  const searchParam =
    page !== undefined && limit !== undefined
      ? `?page=${page}&limit=${limit}`
      : '';
  const response = await fetch(`${URL_FILMS}${searchParam}`);
  const films: Film[] = await response.json();
  
  const countFilms =
    Number(response.headers.get('X-Total-Count')) || films.length;
  return { films, countFilms };
};

export const getFilm = async (id: number) => {
  const response = await fetch(`${URL_FILMS}/${id}`);
  const film: Film = await response.json();
  return film;
};
