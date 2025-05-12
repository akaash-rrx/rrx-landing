import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/8477b20d-77d0-479d-8b97-3d1a9bb79c36.png" 
              alt="RRX Research" 
              className="h-10 mb-6" 
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Intelligent research. Intelligent decisions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">About RRX</h3>
            <ul className="space-y-2">
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li> */}
              <li><a href="/#our-research-stack" className="text-gray-400 hover:text-white transition-colors">Studies</a></li>
              <li><a href="/#core-differentiators" className="text-gray-400 hover:text-white transition-colors">Analysis</a></li>
              {/* <li><a href="#book-a-demo-with-rrx" className="text-gray-400 hover:text-white transition-colors">Contact</a></li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li> */}
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/#book-a-demo-with-rrx" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} RRX Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
