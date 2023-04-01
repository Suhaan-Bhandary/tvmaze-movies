import { useQuery } from '@tanstack/react-query';
import { getMovieList } from '../../services/movies.services';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesList.module.css';

function MovieList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['company-role-list'],
    queryFn: () => getMovieList(),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <div className={styles.MovieList}>
      {data.map((movie) => (
        <MovieCard key={movie.show.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
