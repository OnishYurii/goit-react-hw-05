import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import searchIcon from '../../assets/symbol-defs.svg';

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
        <svg width="15" height="15">
          <use href={`${searchIcon}#icon-search`}></use>
        </svg>
      </button>
    </form>
  );
};
