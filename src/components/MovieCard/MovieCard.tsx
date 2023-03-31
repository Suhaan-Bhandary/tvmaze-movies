import { Link } from 'react-router-dom';
import { Movie } from '../../types/movies.types';

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  return (
    <div>
      <Link to={`/movie/${movie.show.id}`}>{movie.show.name}</Link>
    </div>
  );
}

export default MovieCard;
