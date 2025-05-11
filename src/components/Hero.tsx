
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [activeInsight, setActiveInsight] = useState(0);
  const insights = [
    { title: "Customer Sentiment", value: "+87%", desc: "positive sentiment" },
    { title: "Decision Speed", value: "48h", desc: "turnaround time" },
    { title: "Actionable Insights", value: "100%", desc: "structured data" },
    { title: "Research ROI", value: "3.5x", desc: "industry average" },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % insights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[15%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-100/30 to-blue-100/30 blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-100/20 to-indigo-100/20 blur-[100px]"></div>
        <div className="absolute top-[40%] left-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-50/10 to-sky-50/10 blur-[60px]"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmOGY5ZmEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwVjBoLTMwdjMwek0wIDMwaDMwdjMwSDBWMzB6IiBmaWxsLW9wYWNpdHk9Ii4wMiIgZmlsbD0iIzAwMCIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium tracking-wider">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                FOR RESEARCHERS, BY RESEARCHERS
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Your new research <br className="hidden lg:block" />
              <span className="relative">
                intelligence
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-[6px] bg-indigo-500 rounded-full opacity-60"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span> engine.
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 md:pr-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              RRX talks to hundreds of your customers and models these conversations 
              into structured, decision-grade insight—revealing what drives people, 
              where their thinking shifts, and what your team should do next.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a 
                href="#contact" 
                className="group flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all text-center shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 2.5, duration: 0.8 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>
              
              <motion.a 
                href="#approach" 
                className="group flex items-center justify-center gap-2 border-2 border-gray-300 px-8 py-4 rounded-lg hover:border-black transition-all text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:block relative"
          >
            <div className="relative h-[500px] w-full">
              {/* Main insight card with animation */}
              <motion.div
                className="absolute inset-x-0 top-[15%] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-semibold text-gray-500">RRX INSIGHTS</span>
                    <span className="flex items-center text-sm text-indigo-600">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
                      Live Demo
                    </span>
                  </div>
                  
                  <div className="h-[220px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeInsight}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-6"
                      >
                        <h3 className="text-xl text-gray-700 mb-6">{insights[activeInsight].title}</h3>
                        <span className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          {insights[activeInsight].value}
                        </span>
                        <p className="text-gray-500 mt-2">{insights[activeInsight].desc}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  <div className="flex justify-center gap-2 mt-4">
                    {insights.map((_, i) => (
                      <button
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === activeInsight ? "bg-indigo-600 w-6" : "bg-gray-200"
                        }`}
                        onClick={() => setActiveInsight(i)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Secondary decorative elements */}
              <motion.div 
                className="absolute right-[10%] top-[5%] w-[150px] h-[150px] rounded-xl rotate-12 bg-gradient-to-r from-indigo-100 to-purple-100 shadow-lg"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.7, rotate: 12 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              
              <motion.div 
                className="absolute left-[5%] bottom-[15%] w-[180px] h-[180px] rounded-xl -rotate-6 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.7, rotate: -6 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
              
              <motion.div
                className="absolute right-[20%] bottom-[0%] p-4 bg-white rounded-lg shadow-lg border border-gray-100"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">
                    <span className="font-bold">AI</span>
                  </div>
                  <div>
                    <h4 className="font-medium">AI-Powered</h4>
                    <p className="text-sm text-gray-500">Advanced ML processing</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
