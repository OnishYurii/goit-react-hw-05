import { Link } from 'react-router-dom';

export const ItemList = ({ data }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <img src={baseUrl + item.poster_path} alt={item.title} />
          <Link to="/movies/:movieId">{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
