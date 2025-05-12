
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, FileText } from 'lucide-react';

const Offering = () => {
  return (
    <section id="our-research-stack" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
    </section>
  );
};

export default Offering;
