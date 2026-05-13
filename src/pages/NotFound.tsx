import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0E0B42] px-4">
      {/* Helmet has been removed to stop the dependency scan error. 
        SEO for 404 pages is now handled by the global index.html.
      */}
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-white">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-white">Page not found</h2>
        <p className="mt-2 text-sm text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-[#C5A059] px-4 py-2 text-sm font-medium text-[#0E0B42] transition-colors hover:bg-[#C5A059]/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}