import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div>Footer</div>

      <Link to='/test1'>
        <button>page 1</button>
      </Link>
      <Link to='/test2'>
        <button>page 2</button>
      </Link>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </>
  );
};

export default Footer;
