import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { MovieDetailComponent } from '../components/MovieDetailComponent/MovieDetailComponent';

const MovieDetailsPage = () => {
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
        console.log(fetchedData);
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
      {movie && <MovieDetailComponent data={movie} />}
      {error && <ErrorMessage />}
    </div>
  );
};
export default MovieDetailsPage;
