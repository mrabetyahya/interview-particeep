import { useEffect, useState } from 'react';
import CustomPaginator from '../../components/CustomPaginator/CustomPaginator';
import { movies$ } from '../../config/data/movies';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setMoviesData } from '../../redux/slices/movies/moviesSlice';
import MovieCard from './MovieCard/MovieCard';
import { StackStyle, TitleStyle } from './Movies.style';
import { getCategoryList } from '../../utils/helpers/array.helpers';
import { Movie } from '../../types/models/Movies';
import { Typography } from '@mui/material';
import CustomSelector from '../../components/CustomSelector/CustomSelector';

function Movies() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [elementPerPage, setElementPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const [moviesPaginated, setMoviesPaginated] = useState<Movie[]>();
  const [category, setCategory] = useState<string[]>();
  const [selectedOption, setSelectedOption] = useState<string[]>();
  const movies = useAppSelector((state) => state.moviesReducer.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * elementPerPage;
    const filteredMovies = movies.filter((value) =>
      selectedOption?.length ? selectedOption.includes(value.category) : true,
    );
    const paginatedMovies = filteredMovies.slice(startIndex, startIndex + elementPerPage);
    setMoviesPaginated(paginatedMovies);
    setTotalRows(filteredMovies.length);
    setCategory(getCategoryList(movies));
  }, [movies, currentPage, elementPerPage, selectedOption]);

  const handleFetchData = () => {
    movies$
      .then((data) => {
        dispatch(setMoviesData({ movies: data }));
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch movies.');
        setLoading(false);
      });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  if (loading) {
    return (
      <StackStyle justify={'center'}>
        <TitleStyle>Loading... </TitleStyle>
      </StackStyle>
    );
  }

  if (error) {
    return (
      <StackStyle justify={'center'}>
        <TitleStyle style={{ color: 'red' }}>{error}</TitleStyle>
      </StackStyle>
    );
  }

  return (
    <StackStyle spacing={2}>
      <TitleStyle>Liste des films</TitleStyle>
      <CustomSelector
        selectedOption={selectedOption}
        options={category}
        setSelectedOption={setSelectedOption}
      />
      <StackStyle style={{ minHeight: '80%' }} direction={'row'} spacing={4}>
        {moviesPaginated && moviesPaginated.length ? (
          moviesPaginated.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <Typography variant="h6">{'Aucun film trouvé'}</Typography>
        )}
      </StackStyle>
      <CustomPaginator
        currentPage={currentPage}
        elementPerPage={elementPerPage}
        totalRows={totalRows}
        setElementPerPage={setElementPerPage}
        setCurrentPage={setCurrentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </StackStyle>
  );
}

export default Movies;
