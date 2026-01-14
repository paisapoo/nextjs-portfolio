import Link from 'next/link';
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-background text-foreground'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <p className='text-2xl mb-8'>Page Not Found</p>
      <Link
        href='/'
        className='px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition'
      >
        Go Back Home
      </Link>
    </div>
  );
}
