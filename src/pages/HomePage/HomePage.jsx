import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api';
import { ItemList } from '../../components/ItemList/ItemList';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';

const HomePage = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const fetchedData = await getTrendingMovies({
          abortController: controller,
        });
        setResults(fetchedData);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className={css.parallax}>
      <div className={css.title}>
        <h1>Weekly Trends</h1>
      </div>
      {error && <ErrorMessage />}
      {results.length > 0 && <ItemList data={results} />}
    </div>
  );
};
export default HomePage;
