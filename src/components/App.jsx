import { Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import { Toaster } from 'react-hot-toast';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import { MovieReviews } from './MovieReviews/MovieReviews';
import { MovieCast } from './MovieCast/MovieCast';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Toaster
        containerStyle={{
          top: 50,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
    </div>
  );
}

export default App;
