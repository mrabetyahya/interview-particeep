import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../../types/models/Movies';
import { deleteById, findMovieById } from '../../../utils/helpers/array.helpers';

const INITIAL_STATE = { movies: [{ id: '', title: '', category: '', likes: 0, dislikes: 0 }] };

const moviesSlice = createSlice({
  name: 'movies',
  initialState: INITIAL_STATE,
  reducers: {
    setMoviesData: (state, action: PayloadAction<{ movies: Movie[] }>) => {
      state.movies = action.payload.movies;
    },
    deleteMovieById: (state, action: PayloadAction<{ id: string }>) => {
      state.movies = deleteById(state.movies, action.payload.id);
    },
    addMovieLike: (state, action: PayloadAction<{ id: string }>) => {
      const index = findMovieById(state.movies, action.payload.id);
      state.movies[index] = { ...state.movies[index], likes: state.movies[index].likes + 1 };
    },
    addMovieDislike: (state, action: PayloadAction<{ id: string }>) => {
      const index = findMovieById(state.movies, action.payload.id);
      state.movies[index] = { ...state.movies[index], dislikes: state.movies[index].dislikes + 1 };
    },
    deleteMovieLike: (state, action: PayloadAction<{ id: string }>) => {
      const index = findMovieById(state.movies, action.payload.id);
      state.movies[index] = { ...state.movies[index], likes: state.movies[index].likes - 1 };
    },
    deleteMovieDislike: (state, action: PayloadAction<{ id: string }>) => {
      const index = findMovieById(state.movies, action.payload.id);
      state.movies[index] = { ...state.movies[index], dislikes: state.movies[index].dislikes - 1 };
    },
  },
});

export const {
  setMoviesData,
  deleteMovieById,
  addMovieLike,
  addMovieDislike,
  deleteMovieLike,
  deleteMovieDislike,
} = moviesSlice.actions;
export default moviesSlice.reducer;
