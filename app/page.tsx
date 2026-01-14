import Image from 'next/image';
import HeroHome from './_section/hero_home';

export default function Home() {
  return (
    <main className='min-h-screen items-center  dark:bg-black'>
      <HeroHome />
    </main>
  );
}
