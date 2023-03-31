import MovieList from '../../components/MovieList/MovieList';

function Home() {
  return (
    <main>
      <h1>TV Maze Movies</h1>
      <h2>Find All kinds of Movies!!</h2>

      {/* Component to display movies list */}
      <MovieList />
    </main>
  );
}

export default Home;
