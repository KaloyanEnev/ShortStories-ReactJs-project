import { Link } from "react-router-dom";
import '../../css/Header.css'
import { useAuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const { isAuthenticated } = useAuthContext();
  
    return (
      <header>
        <h1>
          <Link to="/">
            ShortStories
          </Link>
        </h1>
        <nav>
          
            <Link to="/stories">All Stories</Link>
            {isAuthenticated ? (
              <div>
                <Link to="/mystories">My Stories</Link>
                <Link to="/stories/create">Create Story</Link>
                <Link to="/logout">Logout</Link>
              </div>
            ) : (
              <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
         
        </nav>
      </header>
    );
  }