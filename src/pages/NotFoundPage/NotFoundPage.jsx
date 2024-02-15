import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.parallax}>
      <strong className={css.text}>Ooops, this page is not found😱</strong>
      <Link to="/" className={css.link}>
        Back to home page🏠
      </Link>
    </div>
  );
};
export default NotFoundPage;
