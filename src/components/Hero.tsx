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
  CircleDot,
  Layers,
  Filter,
  Clock,
  MapPin,
  ChartBar,
  FileBarChart,
  ChartPie,
  MessageSquareText,
  PanelLeft,
  PanelRight
} from 'lucide-react';

const Hero = () => {
  const [activeChart, setActiveChart] = useState(0);
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeSegment, setActiveSegment] = useState(0);
  
  const topicData = [
    { name: "Product Usability", value: 84, change: "+12", keywords: ["intuitive", "efficient", "learning curve", "onboarding"] },
    { name: "Value Perception", value: 76, change: "+8", keywords: ["worth it", "roi", "expensive", "investment"] },
    { name: "Brand Trust", value: 91, change: "+16", keywords: ["reliable", "reputation", "consistent", "trustworthy"] },
    { name: "Feature Requests", value: 68, change: "+5", keywords: ["integration", "export", "dashboard", "mobile"] },
  ];
  
  const segmentData = [
    { name: "Enterprise", count: 457, percentage: 38, color: "#9b87f5" },
    { name: "Mid-Market", count: 324, percentage: 27, color: "#6E59A5" },
    { name: "SMB", count: 278, percentage: 23, color: "#aaa6db" },
    { name: "Startup", count: 145, percentage: 12, color: "#d0cce9" },
  ];
  
  const demographicData = [
    { label: "25-34", value: 37 },
    { label: "35-44", value: 31 },
    { label: "45-54", value: 18 },
    { label: "18-24", value: 8 },
    { label: "55+", value: 6 },
  ];

  const marketSegmentData = [
    { name: "Early Adopters", percentage: 18, growth: "+5.2%" },
    { name: "Technology Enthusiasts", percentage: 23, growth: "+3.8%" },
    { name: "Pragmatists", percentage: 42, growth: "+1.5%" },
    { name: "Conservatives", percentage: 17, growth: "-2.1%" },
  ];
  
  const competitorPerceptionData = [
    { name: "Your Product", metrics: { innovation: 86, reliability: 92, value: 78 }, overall: 85 },
    { name: "Competitor A", metrics: { innovation: 74, reliability: 68, value: 82 }, overall: 75 },
    { name: "Competitor B", metrics: { innovation: 91, reliability: 65, value: 69 }, overall: 72 },
    { name: "Competitor C", metrics: { innovation: 62, reliability: 88, value: 75 }, overall: 70 },
  ];

  const brandAttributeData = [
    { attribute: "Innovative", percentage: 72, change: "+8%" },
    { attribute: "Reliable", percentage: 84, change: "+12%" },
    { attribute: "User-friendly", percentage: 79, change: "+6%" },
    { attribute: "Cost-effective", percentage: 65, change: "+3%" },
    { attribute: "Forward-thinking", percentage: 77, change: "+15%" }
  ];
  
  const chartTypes = ['topics', 'demographics', 'market', 'competitors', 'sentiment'];
  
  useEffect(() => {
    const chartInterval = setInterval(() => {
      setActiveChart((prev) => (prev + 1) % chartTypes.length);
    }, 8000);
    
    const topicInterval = setInterval(() => {
      setActiveTopic((prev) => (prev + 1) % topicData.length);
    }, 3500);
    
    const segmentInterval = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % segmentData.length);
    }, 5000);
    
    return () => {
      clearInterval(chartInterval);
      clearInterval(topicInterval);
      clearInterval(segmentInterval);
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
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                FOR RESEARCHERS, BY RESEARCHERS
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Your new research <br className="hidden lg:block" />
              <span className="relative inline-block">
                <motion.span 
                  className="relative z-10 text-gray-900" 
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
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 mb-10"
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
                      <span className="text-sm font-semibold text-gray-700">AI INTERVIEW INSIGHTS</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center text-xs text-indigo-600">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-1.5"></span>
                        1,204 Interviews Analyzed
                      </span>
                      <div className="flex items-center space-x-2 bg-gray-50 px-2.5 py-1 rounded-md">
                        <Clock className="h-3.5 w-3.5 text-gray-500" />
                        <span className="text-xs text-gray-600">Last 30 Days</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Topic Insights Panel */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div
                      className="bg-gradient-to-br from-white to-indigo-50/40 p-4 rounded-xl border border-indigo-100 shadow-sm"
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1.5">
                          <ChartBar className="h-4 w-4 text-indigo-600" />
                          <h3 className="font-medium text-sm text-gray-800">Topic Insights</h3>
                        </div>
                        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
                          {topicData.length} Topics
                        </span>
                      </div>
                      
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`topic-${activeTopic}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="p-2"
                        >
                          <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-base font-semibold text-gray-800">{topicData[activeTopic].name}</h4>
                            <div className="flex items-center text-xs">
                              <div className={`flex items-center mr-2 ${topicData[activeTopic].change.includes('+') ? 'text-emerald-600' : 'text-red-500'}`}>
                                <TrendingUp className="h-3 w-3 mr-0.5" />
                                <span>{topicData[activeTopic].change}%</span>
                              </div>
                              <span className="font-semibold text-indigo-600">{topicData[activeTopic].value}%</span>
                            </div>
                          </div>
                          
                          <div className="w-full h-2 bg-gray-100 rounded-full mb-3">
                            <motion.div 
                              className="h-2 bg-indigo-500 rounded-full"
                              initial={{ width: '0%' }}
                              animate={{ width: `${topicData[activeTopic].value}%` }}
                              transition={{ duration: 0.7 }}
                            />
                          </div>
                          
                          <div className="flex flex-wrap gap-1.5">
                            {topicData[activeTopic].keywords.map((keyword, idx) => (
                              <motion.span
                                key={`keyword-${idx}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * idx, duration: 0.3 }}
                                className="bg-white text-xs px-2 py-0.5 rounded border border-gray-200 text-gray-700"
                              >
                                {keyword}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                    
                    <motion.div
                      className="bg-gradient-to-br from-white to-purple-50/40 p-4 rounded-xl border border-purple-100 shadow-sm"
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1.5">
                          <Users className="h-4 w-4 text-purple-600" />
                          <h3 className="font-medium text-sm text-gray-800">Audience Breakdown</h3>
                        </div>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                          1,204 Respondents
                        </span>
                      </div>
                      
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`segment-${activeSegment}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="p-2"
                        >
                          <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-base font-semibold text-gray-800">{segmentData[activeSegment].name}</h4>
                            <div className="flex items-center text-xs">
                              <span className="font-semibold text-purple-600">{segmentData[activeSegment].count}</span>
                              <span className="text-gray-500 ml-1">({segmentData[activeSegment].percentage}%)</span>
                            </div>
                          </div>
                          
                          <div className="w-full h-2 bg-gray-100 rounded-full mb-3">
                            <motion.div 
                              className="h-2 rounded-full"
                              style={{ backgroundColor: segmentData[activeSegment].color }}
                              initial={{ width: '0%' }}
                              animate={{ width: `${segmentData[activeSegment].percentage}%` }}
                              transition={{ duration: 0.7 }}
                            />
                          </div>
                          
                          {activeSegment === 0 && (
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200">
                                <span className="text-gray-600">Average Age</span>
                                <span className="font-medium text-gray-900">42</span>
                              </div>
                              <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200">
                                <span className="text-gray-600">Decision Makers</span>
                                <span className="font-medium text-gray-900">86%</span>
                              </div>
                            </div>
                          )}
                          
                          {activeSegment === 1 && (
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200">
                                <span className="text-gray-600">Average Age</span>
                                <span className="font-medium text-gray-900">38</span>
                              </div>
                              <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200">
                                <span className="text-gray-600">Decision Makers</span>
                                <span className="font-medium text-gray-900">71%</span>
                              </div>
                            </div>
                          )}
                          
                          {activeSegment === 2 && (
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200">
                                <span className="text-gray-600">Average Age</span>
                                <span className="font-medium text-gray-900">35</span>
                              </div>
                              <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200">
                                <span className="text-gray-600">Decision Makers</span>
                                <span className="font-medium text-gray-900">63%</span>
                              </div>
                            </div>
                          )}
                          
                          {activeSegment === 3 && (
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200">
                                <span className="text-gray-600">Average Age</span>
                                <span className="font-medium text-gray-900">31</span>
                              </div>
                              <div className="flex justify-between bg-white px-2.5 py-1.5 rounded border border-gray-200">
                                <span className="text-gray-600">Decision Makers</span>
                                <span className="font-medium text-gray-900">52%</span>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  </div>
                  
                  {/* Main visualization area - Fixed spacing issue */}
                  <div className="grid grid-cols-3 gap-6 h-[280px]">
                    <div className="col-span-2 bg-gray-50 rounded-xl p-4 relative overflow-hidden">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-medium text-gray-700">Market Research Analysis</h4>
                        <div className="flex items-center space-x-1 text-xs">
                          <button className={`px-2 py-1 rounded ${activeChart === 0 ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500'}`}>
                            Topics
                          </button>
                          <button className={`px-2 py-1 rounded ${activeChart === 1 ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500'}`}>
                            Demographics
                          </button>
                          <button className={`px-2 py-1 rounded ${activeChart === 2 ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500'}`}>
                            Market
                          </button>
                          <button className={`px-2 py-1 rounded ${activeChart === 3 ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500'}`}>
                            Competitors
                          </button>
                          <button className={`px-2 py-1 rounded ${activeChart === 4 ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500'}`}>
                            Sentiment
                          </button>
                        </div>
                      </div>
                      
                      {/* Fixed height to ensure content is visible */}
                      <div className="h-[250px] px-2">
                        <AnimatePresence mode="wait">
                          <motion.div 
                            key={`chart-${activeChart}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="h-full w-full"
                          >
                            {/* Topic Distribution Chart */}
                            {activeChart === 0 && (
                              <div className="h-full flex items-start justify-between w-full pt-4">
                                {[
                                  { name: "Product", value: 0.34, positive: 0.76, negative: 0.24 },
                                  { name: "Pricing", value: 0.22, positive: 0.65, negative: 0.35 },
                                  { name: "Support", value: 0.18, positive: 0.88, negative: 0.12 },
                                  { name: "UX", value: 0.14, positive: 0.72, negative: 0.28 },
                                  { name: "Features", value: 0.12, positive: 0.81, negative: 0.19 }
                                ].map((item, i) => (
                                  <div key={`topic-bar-${i}`} className="flex flex-col items-center w-1/5 h-full">
                                    <div className="flex-1 w-12 flex flex-col-reverse relative">
                                      {/* Positive sentiment portion */}
                                      <motion.div
                                        className="w-12 bg-emerald-500/80 rounded-t-sm"
                                        style={{ height: `${item.positive * 100 * item.value}%` }}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${item.positive * 100 * item.value}%` }}
                                        transition={{ delay: 0.3, duration: 1 }}
                                      />
                                      
                                      {/* Negative sentiment portion */}
                                      <motion.div
                                        className="w-12 bg-red-400/80 rounded-t-sm"
                                        style={{ height: `${item.negative * 100 * item.value}%` }}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${item.negative * 100 * item.value}%` }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                      />
                                      
                                      <div className="absolute -top-5 left-0 right-0 text-center">
                                        <span className="text-xs font-medium text-gray-700">{Math.round(item.value * 100)}%</span>
                                      </div>
                                    </div>
                                    <span className="text-xs text-gray-600 mt-2 text-center">{item.name}</span>
                                    <div className="flex items-center space-x-1 mt-1">
                                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                      <span className="text-[10px] text-gray-500">{Math.round(item.positive * 100)}%</span>
                                    </div>
                                  </div>
                                ))}
                                
                                <div className="absolute top-2 left-4 bg-white/80 px-2 py-1 text-xs rounded shadow-sm border border-gray-100">
                                  <div className="font-medium text-gray-900">Topic Distribution</div>
                                  <div className="text-gray-500 text-[10px]">By mention frequency & sentiment</div>
                                </div>
                              </div>
                            )}
                            
                            {/* Demographics Chart */}
                            {activeChart === 1 && (
                              <div className="h-full flex items-center justify-center">
                                <div className="w-full max-w-md">
                                  <div className="mb-4">
                                    <div className="text-xs font-medium text-gray-700 mb-2">Age Distribution</div>
                                    {demographicData.map((item, i) => (
                                      <div key={`demographic-${i}`} className="mb-2">
                                        <div className="flex justify-between text-xs mb-1">
                                          <span className="text-gray-600">{item.label}</span>
                                          <span className="text-gray-900 font-medium">{item.value}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 rounded-full">
                                          <motion.div
                                            className="h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.value}%` }}
                                            transition={{ delay: 0.2 + (i * 0.1), duration: 1 }}
                                          />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                    <div className="bg-white p-2 rounded border border-gray-100 shadow-sm">
                                      <div className="text-gray-500">Gender</div>
                                      <div className="font-medium mt-1 flex justify-center items-center space-x-1.5">
                                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                                        <span>M: 54%</span>
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full ml-1"></div>
                                        <span>F: 46%</span>
                                      </div>
                                    </div>
                                    <div className="bg-white p-2 rounded border border-gray-100 shadow-sm">
                                      <div className="text-gray-500">Role</div>
                                      <div className="font-medium mt-1">73% Decision Makers</div>
                                    </div>
                                    <div className="bg-white p-2 rounded border border-gray-100 shadow-sm">
                                      <div className="text-gray-500">Industry</div>
                                      <div className="font-medium mt-1">Tech (42%)</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Market Segmentation Chart */}
                            {activeChart === 2 && (
                              <div className="h-full flex items-center justify-center">
                                <div className="w-full max-w-md">
                                  <div className="text-xs font-medium text-gray-700 mb-3">Market Adoption Curve</div>
                                  <div className="relative h-32 mb-4">
                                    <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                                      {/* Bell curve path */}
                                      <defs>
                                        <linearGradient id="bellGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.7" />
                                          <stop offset="50%" stopColor="#6E59A5" stopOpacity="0.8" />
                                          <stop offset="100%" stopColor="#d0cce9" stopOpacity="0.7" />
                                        </linearGradient>
                                      </defs>
                                      <path 
                                        d="M0,40 C10,40 15,5 25,5 C35,5 40,15 50,15 C60,15 65,25 75,25 C85,25 90,35 100,35 L100,40 L0,40 Z" 
                                        fill="url(#bellGradient)"
                                      />
                                      <path 
                                        d="M0,40 C10,40 15,5 25,5 C35,5 40,15 50,15 C60,15 65,25 75,25 C85,25 90,35 100,35" 
                                        fill="none"
                                        stroke="#6E59A5"
                                        strokeWidth="0.5"
                                      />
                                      
                                      {/* Market segment markers - removed animation */}
                                      <circle cx="20" cy="8" r="1.2" fill="#9b87f5" />
                                      <circle cx="42" cy="15" r="1.2" fill="#6E59A5" />
                                      <circle cx="65" cy="25" r="1.2" fill="#aaa6db" />
                                      <circle cx="85" cy="33" r="1.2" fill="#d0cce9" />
                                    </svg>
                                    
                                    {/* Labels */}
                                    <div className="absolute bottom-0 left-[18%] transform -translate-x-1/2 text-[10px] text-gray-600">
                                      <div>Innovators</div>
                                    </div>
                                    <div className="absolute bottom-0 left-[42%] transform -translate-x-1/2 text-[10px] text-gray-600">
                                      <div>Early Adopters</div>
                                    </div>
                                    <div className="absolute bottom-0 left-[65%] transform -translate-x-1/2 text-[10px] text-gray-600">
                                      <div>Majority</div>
                                    </div>
                                    <div className="absolute bottom-0 left-[85%] transform -translate-x-1/2 text-[10px] text-gray-600">
