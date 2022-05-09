import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <div className="text-center">
      <h1>404 Error</h1>
      <h2>The page is not found</h2>
      <Link to="/">Back to the Chuck homepage</Link>
    </div>
  );
}
