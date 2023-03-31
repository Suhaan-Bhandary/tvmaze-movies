import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();

  return <div>MovieDetail: {id}</div>;
}

export default MovieDetail;
