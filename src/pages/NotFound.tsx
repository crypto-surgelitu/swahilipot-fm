import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className='min-h-[80vh] flex items-center justify-center px-4'>
      <div className='text-center max-w-md'>
        <h1 className='text-9xl font-display font-bold mb-4'>404</h1>
        <div className='w-16 h-1 bg-black mx-auto mb-8'></div>
        <p className='text-xl text-gray-600 mb-8'>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          asChild
          className='rounded-full bg-black text-white hover:bg-gray-900'
        >
          <Link to='/' className='inline-flex items-center'>
            <ArrowLeft className='mr-2 h-4 w-4' /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
