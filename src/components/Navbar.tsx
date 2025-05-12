
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-white shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-left -ml-10">
          <img 
            src="/lovable-uploads/7eedce34-6e27-4846-ad94-996dd71f3fc9.png" 
            alt="RRX Research" 
            className="h-10" 
          />
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#what-we-offer" className="text-gray-800 hover:text-black transition-colors">Services</a>
          <a href="#approach" className="text-gray-800 hover:text-black transition-colors">Our Approach</a>
          <a href="#differentiators" className="text-gray-800 hover:text-black transition-colors">Why RRX</a>
        </div>
        <a 
          href="#contact" 
          className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

