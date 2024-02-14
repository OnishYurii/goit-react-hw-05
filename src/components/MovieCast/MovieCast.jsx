import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../api';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedData = await getCast(movieId, {
          abortController: controller,
        });
        setActors(fetchedData);
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
      {actors.length > 0 && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MovieCast;
