import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <strong>Ooops, this page is not found😱</strong>
      <Link to="/">Back to home page🏠</Link>
    </div>
  );
};
export default NotFoundPage;
