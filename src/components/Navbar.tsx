
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="flex items-left -ml-10">
          <img 
            src="/lovable-uploads/7eedce34-6e27-4846-ad94-996dd71f3fc9.png" 
            alt="RRX Research" 
            className="h-10" 
          />
        </Link>
        {/* <div className="hidden md:flex space-x-8">
          <a href="#our-research-stack" className="text-gray-800 hover:text-black transition-colors">Studies</a>
          <a href="#core-differentiators" className="text-gray-800 hover:text-black transition-colors">Analysis</a>
          <a href="#book-a-demo-with-rrx" className="text-gray-800 hover:text-black transition-colors">Contact</a>
        </div> */}
        <a 
          href="https://beta.rrxresearch.com/login" 
          className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
