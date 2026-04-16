import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold text-[#0B2545] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[#0B2545] mb-6">Page Not Found</h2>
      <p className="text-[#6B7280] mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link to="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  );
}
