
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gray-100 rounded-full opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Intelligent research.<br />
            Intelligent decisions.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            It's that simple. RRX delivers research that's fast, structured, and defensible—so your next decision isn't just informed. It's unstoppable.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <a 
            href="#contact" 
            id="contact"
            className="bg-black text-white px-10 py-4 rounded hover:bg-gray-800 transition-all text-lg"
          >
            Work with us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
