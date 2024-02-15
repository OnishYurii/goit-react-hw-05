import { Link } from 'react-router-dom';
import css from './BackLink.module.css';
import { IoMdArrowRoundBack } from 'react-icons/io';

export const BackLink = ({ href, children }) => {
  return (
    <Link to={href} className={css.link}>
      <IoMdArrowRoundBack />
      {children}
    </Link>
  );
};
