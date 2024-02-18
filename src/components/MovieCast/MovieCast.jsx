import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../api';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import defaultAvatar from './default_Avatar.jpg';
import css from './MovieCast.module.css';

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
    <div className={css.wrap}>
      {error && <ErrorMessage />}
      {actors.length > 0 && (
        <ul className={css.list}>
          {actors.map(actor => (
            <li key={actor.id} className={css.listItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : defaultAvatar
                }
                alt={actor.name}
                className={css.avatar}
              />
              <p className={css.text}>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
