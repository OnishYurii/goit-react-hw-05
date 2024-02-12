import { Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<div>MoviesPage</div>} />
        <Route path="/movies/:movieId" element={<div>MoviDetailsPage</div>}>
          <Route path="cast" element={<div>MovieCast</div>} />
          <Route path="reviews" element={<div>MovieRewies</div>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
