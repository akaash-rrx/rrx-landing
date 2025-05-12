
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
              <li><a href="#our-research-stack" className="text-gray-400 hover:text-white transition-colors">Studies</a></li>
              <li><a href="#core-differentiators" className="text-gray-400 hover:text-white transition-colors">Analysis</a></li>
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
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li> */}
              <li><a href="#book-a-demo-with-rrx" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} RRX Research. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.128 1.195 4.92 4.92 0 00-8.48 4.482 13.995 13.995 0 01-10.155-5.145 5 5 0 00-.665 2.5 4.998 4.998 0 002.25 4.188 4.936 4.936 0 01-2.235-.616v.061a4.926 4.926 0 003.95 4.827 4.996 4.996 0 01-2.235.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
