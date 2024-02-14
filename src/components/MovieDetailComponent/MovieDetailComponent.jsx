import { NavLink } from 'react-router-dom';

export const MovieDetailComponent = ({
  data: { title, vote_average, overview, poster_path, genres, release_date },
}) => {
  const dateString = release_date;
  const firstNumber = dateString.split('-')[0];
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
      <div>
        <h1>
          {title} ({firstNumber})
        </h1>
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};
