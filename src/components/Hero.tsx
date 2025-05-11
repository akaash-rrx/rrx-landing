
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gray-100 rounded-full opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gray-200 rounded-full opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <span className="text-sm uppercase tracking-widest font-medium text-gray-600">For researchers, by researchers</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your new research intelligence engine.
            </h1>
            <p className="text-lg text-gray-700 md:pr-12">
              RRX talks to hundreds of your customers and models these conversations into structured, decision-grade insight—revealing what drives people, where their thinking shifts, and what your team should do next.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#contact" 
                className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-all text-center"
              >
                Get Started
              </a>
              <a 
                href="#approach" 
                className="border border-gray-300 px-8 py-3 rounded hover:border-black transition-all text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative h-[400px] w-[400px]">
              <div className="absolute inset-0 bg-gray-100 rounded-xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-2 grid-rows-2 h-full">
                  <div className="p-4 border-r border-b border-gray-200 flex flex-col justify-center">
                    <span className="text-3xl font-bold">48h</span>
                    <p className="text-sm text-gray-500">Turnaround</p>
                  </div>
                  <div className="p-4 border-b border-gray-200 flex flex-col justify-center">
                    <span className="text-3xl font-bold">100%</span>
                    <p className="text-sm text-gray-500">Structured</p>
                  </div>
                  <div className="p-4 border-r border-gray-200 flex flex-col justify-center">
                    <span className="text-3xl font-bold">AI</span>
                    <p className="text-sm text-gray-500">Powered</p>
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <span className="text-3xl font-bold">∞</span>
                    <p className="text-sm text-gray-500">Possibilities</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
