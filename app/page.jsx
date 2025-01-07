import Hero from '@/sections/Hero';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
export default function Home() {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <Hero />

    </div>

  );
}
