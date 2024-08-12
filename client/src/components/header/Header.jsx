import { Link } from "react-router-dom";
import '../../css/Header.css'

export default function Header() {
  return (
    <header>
      <h1>
        <Link   to="/">
          ShortStories
        </Link>
      </h1>
      <nav>
        
        <Link to="/stories">All Stories</Link>
        <Link to="/stories/create">Create Story</Link>
        <Link to="/mystories">My Stories</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
}
