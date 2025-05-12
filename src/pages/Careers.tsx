
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  type: string;
}

const jobs: Job[] = [
  { id: 'designer', title: 'UX Designer', type: 'Full Time' },
  // { id: 'deployment-lead', title: 'Deployment Lead', type: 'Full Time' },
  { id: 'research-scientist', title: 'Research Scientist', type: 'Full Time' },
];

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Full page gradient overlay that shows through all content */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 z-0" 
        style={{ pointerEvents: 'none' }}
      ></div>
      
      {/* Content container with transparent background */}
      <div className="relative z-10">
        <Navbar />
        
        <motion.div
          className="pt-32 pb-20 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-12">Open Roles</h1>
            
            <div className="space-y-4">
              {jobs.map((job) => (
                <div 
                  key={job.id}
                  onClick={() => navigate(`/careers/${job.id}`)}
                  className="border-b border-gray-200 py-6 flex justify-between items-center cursor-pointer hover:bg-gray-50/30 transition-colors rounded px-4"
                >
                  <h2 className="text-xl font-medium">{job.title}</h2>
                  <div className="flex items-center">
                    <span className="mr-6 text-gray-600">{job.type}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-600">
                Don't see what you're looking for? 
                <a href="mailto:contact@rrxresearch.com" className="text-black ml-2 hover:underline">
                  Get in touch: contact@rrxresearch.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
