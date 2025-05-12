
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, FileText } from 'lucide-react';

const Offering = () => {
  return (
    <section id="our-research-stack" className="py-24 px-6 relative overflow-hidden">
      {/* Remove the gradient overlay at top of section */}
      
      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium tracking-wider mb-4">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
            DESIGNED FOR SPEED
          </span>

          <h2 className="text-4xl font-bold mb-4">Our Research Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI interviewer collects high-quality data in less than 24 hours.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px]"
          >
            <div className="p-3 bg-black rounded-md w-fit mb-6">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Qualitative Interviews</h3>
            <p className="text-gray-600">
              AI-led interviews deliver rich, unbiased conversations at scale to reveal how customers think and feel.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px]"
          >
            <div className="p-3 bg-black rounded-md w-fit mb-6">
              <BookOpen className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Iterative Hypothesis Testing</h3>
            <p className="text-gray-600">
              Test every message, feature, and value prop using real input with synthetic pruning to explore the full decision space.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px]"
          >
            <div className="p-3 bg-black rounded-md w-fit mb-6">
              <FileText className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Immersive Studies</h3>
            <p className="text-gray-600">
              Capture real-time behavior through voice diaries and mobile prompts while context and emotion are still fresh.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle wave separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-20 text-white fill-current">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Offering;
