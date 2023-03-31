import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MovieDetail from '../pages/MovieDetail/MovieDetail';
import NotFound from '../pages/NotFound/NotFound';

function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="8" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
