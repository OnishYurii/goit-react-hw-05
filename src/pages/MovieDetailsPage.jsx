import { useState, useEffect, useRef, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../api';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { MovieDetailComponent } from '../components/MovieDetailComponent/MovieDetailComponent';
import { BackLink } from '../components/BackLink';

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedData = await getMovieDetails(movieId, {
          abortController: controller,
        });
        setMovie(fetchedData);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      <BackLink href={backLinkRef.current ?? '/movies'}>Go Back</BackLink>
      {movie && <MovieDetailComponent data={movie} />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {error && <ErrorMessage />}
    </div>
  );
};
export default MovieDetailsPage;
