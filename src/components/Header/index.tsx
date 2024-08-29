import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

export default function Header() {
  return (
    <div className="header">
      <Link to='/'>
        <h1>Ruben Dominguez</h1>
      </Link>
      <Navigation />
    </div>
  );
}
