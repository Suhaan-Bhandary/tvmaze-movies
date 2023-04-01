import { Link } from 'react-router-dom';
import { Movie } from '../../types/movies.types';
import styles from './MovieCard.module.css';
import { convert } from 'html-to-text';

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  return (
    <div className={styles.MovieCard}>
      <img src={movie.show.image?.medium} alt={movie.show.name} />
      <div className={styles.details}>
        <h3>
          <Link to={`/movie/${movie.show.id}`}>{movie.show.name}</Link>
        </h3>
        <p>
          {convert(movie.show.summary, { wordwrap: 130 }).slice(0, 80)}
          ...
        </p>
        <Link to={`/movie/${movie.show.id}`} className={styles.readBtn}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
