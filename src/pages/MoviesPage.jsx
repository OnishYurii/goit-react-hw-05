import { useState, useEffect } from 'react';
import { getSearchMovies } from '../api';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { ItemList } from '../components/ItemList/ItemList';
import { MagnifyingGlass } from 'react-loader-spinner';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchMovies = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setMovies([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await getSearchMovies(query.split('/')[1]);
        setMovies(fetchedData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

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
