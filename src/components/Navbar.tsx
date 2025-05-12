import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4",
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/7eedce34-6e27-4846-ad94-996dd71f3fc9.png"
            alt="RRX Research"
            className="h-10"
          />
        </Link>

        {/* Uncomment when ready to display navigation links */}
        {/* <div className="hidden md:flex space-x-8">
          <a href="#our-research-stack" className="text-gray-800 hover:text-black transition-colors">Studies</a>
          <a href="#core-differentiators" className="text-gray-800 hover:text-black transition-colors">Analysis</a>
          <a href="#book-a-demo-with-rrx" className="text-gray-800 hover:text-black transition-colors">Contact</a>
        </div> */}

        <div className="mt-4 sm:mt-0">
          <a
            href="https://beta.rrxresearch.com/login"
            className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            Log In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
