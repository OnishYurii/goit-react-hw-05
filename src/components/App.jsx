import { Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import { Toaster } from 'react-hot-toast';
import MoviesPage from '../pages/MoviesPage';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<div>MoviDetailsPage</div>}>
          <Route path="cast" element={<div>MovieCast</div>} />
          <Route path="reviews" element={<div>MovieRewies</div>} />
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
