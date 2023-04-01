import MovieList from '../../components/MovieList/MovieList';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={`container ${styles.Home}`}>
      <div className={styles.heading}>
        <h1>TV Maze Show</h1>
        <h2>Find Shows You Like!!</h2>
      </div>

      {/* Component to display movies list */}
      <MovieList />
    </main>
  );
}

export default Home;
