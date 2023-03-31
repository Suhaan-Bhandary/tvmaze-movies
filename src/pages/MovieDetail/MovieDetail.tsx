import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMovie } from '../../services/movies.services';

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
    <div>
      MovieDetail: {id} : {data?.name}
    </div>
  );
}

export default MovieDetail;
