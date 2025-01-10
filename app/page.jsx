import Hero from '@/sections/Hero';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import About from '@/sections/About';
import Explore from '@/sections/Explore';
export default function Home() {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <Hero />
      <div className='relative'>
        <About />
        <div className='gradient-03 z-0' />
        <Explore />
      </div>

    </div>

  );
}
