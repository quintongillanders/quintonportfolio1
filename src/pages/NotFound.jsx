import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/" className="project-link">
        Return Home
      </Link>

    </div>
  );
}

export default NotFound;