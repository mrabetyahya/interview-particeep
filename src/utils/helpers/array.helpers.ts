import { Movie } from '../../types/models/Movies';

export const findMovieById = (arr: Movie[], id: string) => {
  return arr.findIndex((item) => item.id === id);
};

export const deleteById = (arr: Movie[], id: string) => {
  const index = arr.findIndex((item) => item.id === id);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
};

export const getCategoryList = (movies: Movie[]) => {
  const categories = movies.map((movie) => movie.category);
  const uniqueCategories: Set<string> = new Set(categories);

  return Array.from(uniqueCategories);
};
