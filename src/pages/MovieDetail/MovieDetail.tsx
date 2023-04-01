import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMovie } from '../../services/movies.services';
import styles from './MovieDetail.module.css';

function MovieDetail() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovie(id),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <div className={styles.MovieDetail}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.image}>
            <img src={data?.image?.original} alt={data?.name} />
          </div>
          <div className={styles.details}>
            <p>ID: {id}</p>
            <h1>{data?.name}</h1>
            <p>Rating: {data?.rating.average || 'NA'}</p>
            <p>Premiered: {data?.premiered}</p>
            <p>Ended: {data?.ended}</p>
            <p>Status: {data?.status}</p>
            <p>
              <span className={styles.topics}>{data?.language}</span>
              {data?.genres.map((genre) => (
                <span key={genre} className={styles.topics}>
                  {genre}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div
          className={styles.summary}
          dangerouslySetInnerHTML={{ __html: data?.summary || '' }}
        ></div>
        <button className={styles.bookButton}>Book Movie</button>
      </div>
    </div>
  );
}

export default MovieDetail;
