import { Link, useLocation } from 'react-router-dom';

export const ItemList = ({ data }) => {
  const location = useLocation();
  const baseUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <img src={baseUrl + item.poster_path} alt={item.title} />
          <Link to={`/movies/${item.id}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
