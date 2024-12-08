import Link from 'next/link';
import { Button } from '~/components/ui/button';

const NotFoundFallback = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center space-y-4 bg-black p-4'>
            <div className='flex items-center gap-2 text-xl'>
                <span className='text-red-500'>404</span>
                <span className='text-secondary'>Page not found</span>
            </div>
            <Button asChild>
                <Link href='/'>Back to Home</Link>
            </Button>
        </div>
    );
};

export default NotFoundFallback;
