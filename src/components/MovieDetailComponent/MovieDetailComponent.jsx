import { NavLink } from 'react-router-dom';
import css from './MovieDetailComponent.module.css';
import defaultIMG from './default_IMG.jpg';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const MovieDetailComponent = ({
  data: { title, vote_average, overview, poster_path, genres, release_date },
}) => {
  const dateString = release_date;
  const firstNumber = dateString.split('-')[0];
  return (
    <div className={css.mainDiv}>
      <div className={css.wrapper}>
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : defaultIMG}
          alt={title}
          className={css.poster}
        />
        <div className={css.midDiv}>
          <h1 className={css.title}>
            {title} ({firstNumber})
          </h1>
          <p>User Score: {vote_average}</p>
          <h2>Overview</h2>
          <p className={css.overview}>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <h2>Additional information</h2>
          <ul className={css.list}>
            <li>
              <NavLink to="cast" className={buildLinkClass}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={buildLinkClass}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
