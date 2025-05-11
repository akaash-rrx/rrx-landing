
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ArrowRight, 
  LayoutDashboard, 
  BarChart2, 
  LineChart, 
  PieChart,
  Users,
  TrendingUp,
  CircleDot
} from 'lucide-react';

const Hero = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [activeChart, setActiveChart] = useState(0);
  const [activeSentiment, setActiveSentiment] = useState(0);
  
  const metrics = [
    { title: "Customer Sentiment", value: "+87%", desc: "positive sentiment", color: "from-indigo-600 to-purple-600" },
    { title: "Decision Speed", value: "48h", desc: "turnaround time", color: "from-blue-600 to-cyan-600" },
    { title: "Actionable Insights", value: "100%", desc: "structured data", color: "from-emerald-600 to-teal-600" },
    { title: "Research ROI", value: "3.5x", desc: "industry average", color: "from-violet-600 to-indigo-600" },
  ];
  
  const chartTypes = ['demographics', 'sentiment', 'engagement'];
  const sentiments = ['Positive', 'Neutral', 'Negative'];
  
  useEffect(() => {
    const metricInterval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    
    const chartInterval = setInterval(() => {
      setActiveChart((prev) => (prev + 1) % chartTypes.length);
    }, 5000);
    
    const sentimentInterval = setInterval(() => {
      setActiveSentiment((prev) => (prev + 1) % sentiments.length);
    }, 2000);
    
    return () => {
      clearInterval(metricInterval);
      clearInterval(chartInterval);
      clearInterval(sentimentInterval);
    }
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
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
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
              <span className="relative inline-block">
                <motion.span 
                  className="relative z-10 text-gray-900" // Changed to visible text color
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  intelligence
                </motion.span>
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
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 mb-8" // Added bottom margin to prevent overlap
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
            <div className="relative h-[560px] w-full">
              {/* Main dashboard card */}
              <motion.div
                className="absolute inset-x-0 top-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <LayoutDashboard className="h-5 w-5 text-indigo-600" />
                      <span className="text-sm font-semibold text-gray-700">RRX INTELLIGENCE DASHBOARD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center text-sm text-indigo-600">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
                        Live Data
                      </span>
                      <motion.div 
                        className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
                        whileHover={{ backgroundColor: "#f3f4f6" }}
                      >
                        <span className="text-xs text-gray-500">⋮</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {metrics.map((metric, idx) => (
                      <motion.div 
                        key={`metric-${idx}`}
                        className={`bg-white p-4 rounded-xl border ${activeMetric === idx ? 'border-indigo-200 shadow-md' : 'border-gray-100'}`}
                        whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      >
                        <h4 className="text-sm text-gray-500 mb-1">{metric.title}</h4>
                        <div className="flex items-end space-x-1">
                          <span className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                            {metric.value}
                          </span>
                          <span className="text-xs text-gray-500 mb-1">{metric.desc}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 h-[280px]">
                    {/* Main chart visualization */}
                    <div className="col-span-2 bg-gray-50 rounded-xl p-4 relative overflow-hidden">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Customer Sentiment Analysis</h4>
                      
                      <div className="absolute bottom-0 left-0 right-0 h-[200px] px-4 pb-4">
                        <AnimatePresence mode="wait">
                          <motion.div 
                            key={`chart-${activeChart}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="h-full w-full"
                          >
                            {activeChart === 0 && (
                              <div className="h-full flex items-end justify-between w-full">
                                {[0.65, 0.45, 0.75, 0.52, 0.68, 0.81, 0.42].map((value, i) => (
                                  <div key={`bar-${i}`} className="flex flex-col items-center w-1/7 h-full">
                                    <motion.div
                                      className="w-8 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-sm"
                                      style={{ height: `${value * 100}%` }}
                                      initial={{ height: 0 }}
                                      animate={{ height: `${value * 100}%` }}
                                      transition={{ delay: i * 0.1, duration: 0.5 }}
                                    />
                                    <span className="text-xs text-gray-500 mt-1">W{i+1}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {activeChart === 1 && (
                              <div className="h-full relative">
                                <svg viewBox="0 0 300 200" className="w-full h-full">
                                  <motion.path
                                    d="M0,100 C20,80 40,120 60,100 C80,80 100,120 120,90 C140,60 160,110 180,80 C200,50 220,100 240,70 C260,40 280,90 300,60"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="3"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                  />
                                  <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#9b87f5" />
                                      <stop offset="100%" stopColor="#6E59A5" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                                    <span key={`day-${i}`} className="text-xs text-gray-500">{day}</span>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {activeChart === 2 && (
                              <div className="h-full flex items-center justify-center">
                                <div className="relative w-[180px] h-[180px]">
                                  <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <motion.circle
                                      cx="50" cy="50" r="40"
                                      fill="none"
                                      stroke="#9b87f5"
                                      strokeWidth="20"
                                      strokeDasharray="251.2"
                                      strokeDashoffset="50.24"
                                      initial={{ strokeDashoffset: 251.2 }}
                                      animate={{ strokeDashoffset: 50.24 }}
                                      transition={{ duration: 1.5, ease: "easeInOut" }}
                                    />
                                    <motion.circle
                                      cx="50" cy="50" r="40"
                                      fill="none"
                                      stroke="#6E59A5"
                                      strokeWidth="20"
                                      strokeDasharray="251.2"
                                      strokeDashoffset="175.84"
                                      transform="rotate(-80 50 50)"
                                      initial={{ strokeDashoffset: 251.2 }}
                                      animate={{ strokeDashoffset: 175.84 }}
                                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                                    />
                                    <motion.circle
                                      cx="50" cy="50" r="40"
                                      fill="none"
                                      stroke="#a1a1aa"
                                      strokeWidth="20"
                                      strokeDasharray="251.2"
                                      strokeDashoffset="226.08"
                                      transform="rotate(-170 50 50)"
                                      initial={{ strokeDashoffset: 251.2 }}
                                      animate={{ strokeDashoffset: 226.08 }}
                                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                                    />
                                    <circle cx="50" cy="50" r="30" fill="white" />
                                    <text x="50" y="55" textAnchor="middle" fontSize="12" fontWeight="bold">80%</text>
                                  </svg>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    {/* Right side secondary panels */}
                    <div className="flex flex-col space-y-4">
                      {/* Sentiment panel */}
                      <div className="bg-gray-50 rounded-xl p-4 flex-1">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Sentiment</h4>
                        
                        <div className="mt-3">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`sentiment-${activeSentiment}`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="flex items-center justify-between"
                            >
                              <span className={`text-lg font-bold ${
                                activeSentiment === 0 ? "text-emerald-600" : 
                                activeSentiment === 1 ? "text-blue-600" : "text-red-600"
                              }`}>
                                {sentiments[activeSentiment]}
                              </span>
                              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                                activeSentiment === 0 ? "bg-emerald-100 text-emerald-600" : 
                                activeSentiment === 1 ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600"
                              }`}>
                                {activeSentiment === 0 ? "+" : activeSentiment === 1 ? "=" : "-"}
                              </div>
                            </motion.div>
                          </AnimatePresence>
                          
                          <div className="h-4 w-full bg-gray-200 rounded-full mt-4 overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                              initial={{ width: "0%" }}
                              animate={{ width: activeSentiment === 0 ? "75%" : activeSentiment === 1 ? "45%" : "30%" }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Topic Correlation</span>
                            <span>86%</span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-indigo-400"
                              initial={{ width: "0%" }}
                              animate={{ width: "86%" }}
                              transition={{ delay: 0.3, duration: 0.7 }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Users panel */}
                      <div className="bg-gray-50 rounded-xl p-4 flex-1">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-sm font-medium text-gray-700">Top Demographics</h4>
                          <Users className="h-4 w-4 text-indigo-500" />
                        </div>
                        
                        <div className="space-y-2.5">
                          {["Age 25-34", "High Income", "Tech Industry"].map((item, i) => (
                            <motion.div 
                              key={`demo-${i}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                              className="flex items-center space-x-2"
                            >
                              <CircleDot className="h-3 w-3 text-indigo-500" />
                              <span className="text-xs text-gray-700">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">Engagement</span>
                            <div className="flex items-center space-x-1 text-emerald-600">
                              <TrendingUp className="h-3 w-3" />
                              <span>+12%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
                      <span className="text-xs text-gray-600">Updated 5 minutes ago</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <motion.button 
                        className="text-xs text-gray-700 bg-white px-3 py-1.5 rounded border border-gray-200 flex items-center space-x-1"
                        whileHover={{ y: -1, boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}
                        whileTap={{ y: 0 }}
                      >
                        <span>Refresh</span>
                      </motion.button>
                      <motion.button 
                        className="text-xs text-white bg-indigo-600 px-3 py-1.5 rounded flex items-center space-x-1"
                        whileHover={{ y: -1, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
                        whileTap={{ y: 0 }}
                      >
                        <span>Export Data</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating insights */}
              <motion.div 
                className="absolute -right-4 top-12 p-3 bg-white rounded-lg shadow-xl border border-gray-100 w-[180px]"
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">+23%</h4>
                    <p className="text-xs text-gray-500">Growth this week</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 bottom-12 p-3 bg-white rounded-lg shadow-xl border border-gray-100 w-[180px]"
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">532</h4>
                    <p className="text-xs text-gray-500">New responses</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Data points floating around */}
              {[1, 2, 3].map((_, i) => (
                <motion.div
                  key={`data-point-${i}`}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow-lg"
                  style={{
                    left: `${10 + i * 25}%`,
                    top: `${(i % 3) * 25 + 10}%`,
                    zIndex: 5
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.2, 1],
                    opacity: [0, 0.8, 1]
                  }}
                  transition={{ 
                    delay: 1.8 + (i * 0.2),
                    duration: 0.8,
                    times: [0, 0.7, 1]
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-indigo-300 opacity-70"
                    animate={{ 
                      scale: [1, 2, 1],
                      opacity: [0.7, 0, 0.7]
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2 + i,
                      delay: i * 0.3
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
