import { Link, useLocation } from 'react-router-dom';
import css from './ItemList.module.css';

export const ItemList = ({ data }) => {
  const location = useLocation();
  const baseUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <ul className={css.list}>
      {data.map(item => (
        <li key={item.id} className={css.listItem}>
          <Link to={`/movies/${item.id}`} state={location}>
            <img src={baseUrl + item.poster_path} alt={item.title} className={css.poster} />
          </Link>
          <Link to={`/movies/${item.id}`} state={location} className={css.link}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
