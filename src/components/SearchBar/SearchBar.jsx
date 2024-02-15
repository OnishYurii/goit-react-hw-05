import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { IoMdSearch } from 'react-icons/io';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ev => {
    ev.preventDefault();
    if (ev.target.elements.query.value.trim() === '') {
      toast('Empty String', {
        icon: '🤪',
        style: {
          backgroundColor: '#e91111',
          borderRadius: '20px',
          color: '#fff',
        },
      });
      return;
    }
    onSubmit(ev.target.elements.query.value);
    ev.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="query"
        className={css.input}
      />
      <button type="submit" className={css.button}>
        <IoMdSearch size="20px" />
      </button>
    </form>
  );
};
