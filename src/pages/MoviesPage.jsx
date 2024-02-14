import { useState, useEffect } from 'react';
import { getSearchMovies } from '../api';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { ItemList } from '../components/ItemList/ItemList';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();

  const searchMovies = newQuery => {
    setMovies([]);
    params.set('query', newQuery);
    setParams(params);
  };

  useEffect(() => {
    const query = params.get('query') ?? '';
    if (query === '') {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await getSearchMovies(query);
        setMovies(fetchedData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return (
    <div>
      <SearchBar onSubmit={searchMovies} />
      {error && <ErrorMessage />}
      {loading && (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#acaaa7"
        />
      )}
      {movies.length > 0 && <ItemList data={movies} />}
    </div>
  );
};

export default MoviesPage;
