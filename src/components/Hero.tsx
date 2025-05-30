
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
  PanelRight,
  BarChart
} from 'lucide-react';

const Hero = () => {
  const [activeChart, setActiveChart] = useState(1);
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeAttribute, setActiveAttribute] = useState("Innovative");
  
  const topicData = [
    { name: "Product Usability", value: 84, change: "+12", keywords: ["intuitive", "efficient", "learning curve", "onboarding"] },
    { name: "Value Perception", value: 76, change: "+8", keywords: ["worth it", "roi", "expensive", "investment"] },
    { name: "Brand Trust", value: 91, change: "+16", keywords: ["reliable", "reputation", "consistent", "trustworthy"] },
    { name: "Feature Requests", value: 68, change: "+5", keywords: ["integration", "export", "dashboard", "mobile"] },
  ];
  
  const segmentData = [
    { name: "Enterprise", count: 457, percentage: 38, color: "#9b87f5", description: "Senior executives seeking comprehensive solutions" },
    { name: "Mid-Market", count: 324, percentage: 27, color: "#6E59A5", description: "Growth-focused managers needing scalability" },
    { name: "SMB", count: 278, percentage: 23, color: "#aaa6db", description: "Budget-conscious business owners" },
    { name: "Startup", count: 145, percentage: 12, color: "#d0cce9", description: "Innovation-driven founders in early stages" },
  ];
  
  const competitorPerceptionData = [
    { name: "Your Product", metrics: { innovation: 86, reliability: 92, value: 78 }, overall: 85 },
    { name: "Competitor A", metrics: { innovation: 74, reliability: 68, value: 82 }, overall: 75 },
    { name: "Competitor B", metrics: { innovation: 91, reliability: 65, value: 69 }, overall: 72 },
    { name: "Competitor C", metrics: { innovation: 62, reliability: 88, value: 75 }, overall: 70 },
  ];

  const insightTrendsData = [
    { month: "Jan", positive: 35, negative: 20, neutral: 45 },
    { month: "Feb", positive: 42, negative: 18, neutral: 40 },
    { month: "Mar", positive: 38, negative: 24, neutral: 38 },
    { month: "Apr", positive: 45, negative: 15, neutral: 40 },
    { month: "May", positive: 48, negative: 12, neutral: 40 },
    { month: "Jun", positive: 52, negative: 10, neutral: 38 },
  ];

  const marketSegmentData = [
    { name: "Early Adopters", percentage: 18, growth: "+5.2%" },
    { name: "Innovators", percentage: 23, growth: "+3.8%" },
    { name: "Pragmatists", percentage: 42, growth: "+1.5%" },
    { name: "Conservatives", percentage: 17, growth: "-2.1%" },
  ];
  
  const brandAttributeData = [
    { attribute: "Innovative", percentage: 72, change: "+8%" },
    { attribute: "Reliable", percentage: 84, change: "+12%" },
    { attribute: "User-friendly", percentage: 79, change: "+6%" },
    { attribute: "Cost-effective", percentage: 65, change: "+3%" },
    { attribute: "Forward-thinking", percentage: 77, change: "+15%" }
  ];

  const brandAssociationData = {
    "Your Product": [
      { attribute: "Innovative", score: 4.7 },
      { attribute: "Trustworthy", score: 4.5 },
      { attribute: "Modern", score: 4.8 },
      { attribute: "Efficient", score: 4.6 },
      { attribute: "Premium", score: 4.2 }
    ],
    "Competitor A": [
      { attribute: "Innovative", score: 3.9 },
      { attribute: "Trustworthy", score: 4.2 },
      { attribute: "Modern", score: 3.7 },
      { attribute: "Efficient", score: 4.1 },
      { attribute: "Premium", score: 4.5 }
    ],
    "Competitor B": [
      { attribute: "Innovative", score: 4.5 },
      { attribute: "Trustworthy", score: 3.6 },
      { attribute: "Modern", score: 4.6 },
      { attribute: "Efficient", score: 3.5 },
      { attribute: "Premium", score: 4.0 }
    ]
  };
  
  const chartTypes = ['insights', 'market', 'competitors'];
  
  useEffect(() => {
    // const chartInterval = setInterval(() => {
    //   setActiveChart((prev) => (prev + 1) % chartTypes.length);
    // }, 8000);
    
    const topicInterval = setInterval(() => {
      setActiveTopic((prev) => (prev + 1) % topicData.length);
    }, 3500);
    
    const segmentInterval = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % segmentData.length);
    }, 5000);
    
    const attributeInterval = setInterval(() => {
      const attributes = ["Innovative", "Trustworthy", "Modern", "Efficient", "Premium"];
      setActiveAttribute((prev) => {
        const currentIndex = attributes.indexOf(prev);
        return attributes[(currentIndex + 1) % attributes.length];
      });
    }, 4000);
    
    return () => {
      // clearInterval(chartInterval);
      clearInterval(topicInterval);
      clearInterval(segmentInterval);
      clearInterval(attributeInterval);
    };
  }, []);

  // Handle tab clicks
  const handleTabClick = (index) => {
    setActiveChart(index);
  };

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
                  intelligence engine.
                </motion.span>
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-[6px] bg-indigo-500 rounded-full opacity-60"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
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
                href="https://cal.com/rrx-demo" 
                className="group flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all text-center shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Demo
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 2.5, duration: 0.8 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>
              
              <motion.a 
                href="#core-differentiators" 
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
            <div className="relative h-[520px] w-full">
              {/* Main dashboard card - reduced height from 540px to 520px */}
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
                      <span className="text-sm font-semibold text-gray-700">RRX DASHBOARD</span>
                    </div>
                    <div className="flex items-center space-x-3">
                    <span className="flex items-center text-xs text-green-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-1.5 inline-block"></span>
                      <span>Live</span>
                    </span>
                      <div className="flex items-center space-x-2 bg-gray-50 px-2.5 py-1 rounded-md">
                        <Clock className="h-3.5 w-3.5 text-gray-500" />
                        <span className="text-xs text-gray-600">Last 30 Days</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Topic Insights Panel */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
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
                          <h3 className="font-medium text-sm text-gray-800">Audiences</h3>
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
                                <span className="text-gray-600">Average <br /> Age</span>
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
                  
                  {/* Main visualization area - made more compact */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 bg-gray-50 rounded-xl p-3 relative overflow-hidden">
                      {/* Analysis header and tabs */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-1.5">
                          <LineChart className="h-4 w-4 text-indigo-600" />
                          <h4 className="text-sm font-medium text-gray-700">Analysis</h4>
                        </div>
                        {/* <div className="flex items-center space-x-1 text-xs">
                          <button 
                            onClick={() => handleTabClick(0)} 
                            className={`px-2 py-0.5 rounded cursor-pointer ${activeChart === 0 ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`}
                          >
                            Insights
                          </button>
                          <button 
                            onClick={() => handleTabClick(1)} 
                            className={`px-2 py-0.5 rounded cursor-pointer ${activeChart === 1 ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`}
                          >
                            Market
                          </button>
                          <button 
                            onClick={() => handleTabClick(2)} 
                            className={`px-2 py-0.5 rounded cursor-pointer ${activeChart === 2 ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:bg-gray-100'}`}
                          >
                            Competitors
                          </button>
                        </div> */}
                        <div className="flex items-center space-x-1 text-xs">
                          <span className="px-2 py-0.5 rounded text-gray-400 bg-gray-100 cursor-default select-none">
                            Insights
                          </span>
                          <span className="px-2 py-0.5 rounded text-indigo-700 bg-indigo-100 font-medium cursor-default select-none">
                            Market
                          </span>
                          <span className="px-2 py-0.5 rounded text-gray-400 bg-gray-100 cursor-default select-none">
                            Competitors
                          </span>
                        </div>
                      </div>
                      {/* Fixed height container for charts - reduced height */}
                      <div className="h-[170px] px-2 mt-6">
                        <AnimatePresence mode="wait">
                          <motion.div 
                            key={`chart-${activeChart}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="h-full w-full"
                          >
                            {/* Insights Trends Chart - Moved down with mt-6 */}
                            {activeChart === 0 && (
                              <div className="h-full flex items-center justify-center">
                                <div className="w-full">
                                  <div className="flex justify-between mb-2">
                                    <div className="text-xs font-medium text-gray-700">Customer Sentiment Analysis</div>
                                  </div>
                                  
                                  {/* SVG Area Chart */}
                                  <div className="relative h-20">
                                    <svg width="100%" height="100%" viewBox="0 0 600 100">
                                      {/* Gradient definitions */}
                                      <defs>
                                        <linearGradient id="positiveGradient" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="0%" stopColor="rgba(16, 185, 129, 0.3)" />
                                          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.05)" />
                                        </linearGradient>
                                        <linearGradient id="negativeGradient" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="0%" stopColor="rgba(239, 68, 68, 0.3)" />
                                          <stop offset="100%" stopColor="rgba(239, 68, 68, 0.05)" />
                                        </linearGradient>
                                        <linearGradient id="neutralGradient" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="0%" stopColor="rgba(156, 163, 175, 0.3)" />
                                          <stop offset="100%" stopColor="rgba(156, 163, 175, 0.05)" />
                                        </linearGradient>
                                      </defs>

                                      {/* Grid lines */}
                                      <line x1="0" y1="0" x2="600" y2="0" stroke="#f1f1f1" />
                                      <line x1="0" y1="50" x2="600" y2="50" stroke="#f1f1f1" />
                                      <line x1="0" y1="100" x2="600" y2="100" stroke="#f1f1f1" />

                                      {/* Positive sentiment area */}
                                      <path 
                                        d="M0,65 L100,58 L200,62 L300,55 L400,52 L500,48 L600,48 L600,100 L0,100 Z" 
                                        fill="url(#positiveGradient)" 
                                        strokeWidth="0"
                                      />
                                      <path 
                                        d="M0,65 L100,58 L200,62 L300,55 L400,52 L500,48 L600,48" 
                                        fill="none" 
                                        stroke="#10b981" 
                                        strokeWidth="2"
                                      />

                                      {/* Negative sentiment area */}
                                      <path 
                                        d="M0,80 L100,82 L200,76 L300,85 L400,88 L500,90 L600,90 L600,100 L0,100 Z" 
                                        fill="url(#negativeGradient)" 
                                        strokeWidth="0"
                                      />
                                      <path 
                                        d="M0,80 L100,82 L200,76 L300,85 L400,88 L500,90 L600,90" 
                                        fill="none" 
                                        stroke="#ef4444" 
                                        strokeWidth="2"
                                      />

                                      {/* Neutral sentiment area */}
                                      <path 
                                        d="M0,55 L100,60 L200,62 L300,60 L400,60 L500,62 L600,62 L600,100 L0,100 Z" 
                                        fill="url(#neutralGradient)" 
                                        strokeWidth="0"
                                      />
                                      <path 
                                        d="M0,55 L100,60 L200,62 L300,60 L400,60 L500,62 L600,62" 
                                        fill="none" 
                                        stroke="#9ca3af" 
                                        strokeWidth="2"
                                      />
                                    </svg>
                                  </div>
                                  
                                  <div className="flex items-center justify-end text-xs space-x-3 mt-2">
                                    <div className="flex items-center space-x-1">
                                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                      <span className="text-gray-600">Positive</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                      <span className="text-gray-600">Negative</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                      <span className="text-gray-600">Neutral</span>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-1 grid grid-cols-3 gap-2">
                                    <div className="text-center bg-gray-50 rounded-md px-2 py-1 border border-gray-200">
                                      <div className="text-[10px] text-gray-500">Key Driver</div>
                                      <div className="text-xs font-medium text-gray-800 mt-0.5">Reliability</div>
                                    </div>
                                    <div className="text-center bg-gray-50 rounded-md px-2 py-1 border border-gray-200">
                                      <div className="text-[10px] text-gray-500">Score</div>
                                      <div className="text-xs font-medium text-emerald-600 mt-0.5">+32 NPS</div>
                                    </div>
                                    <div className="text-center bg-gray-50 rounded-md px-2 py-1 border border-gray-200">
                                      <div className="text-[10px] text-gray-500">Q/Q</div>
                                      <div className="text-xs font-medium text-emerald-600 mt-0.5">+5.4 pts</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Market Adoption Curve */}
                            {activeChart === 1 && (
                              <div className="h-full flex items-center justify-center">
                                <div className="w-full">
                                  <div className="text-xs font-medium text-gray-700 mb-2">Market Adoption Analysis</div>
                                  <div className="relative h-24">
                                    {/* Market chart would go here */}
                                    <svg width="100%" height="100%" viewBox="0 0 600 100">
                                      <path d="M0,90 C150,90 100,30 300,30 C500,30 450,90 600,90" stroke="#6366f1" strokeWidth="2" fill="none" />
                                      <path d="M0,90 C150,90 100,30 300,30 C500,30 450,90 600,90 L600,100 L0,100 Z" fill="url(#marketGradient)" />
                                      <defs>
                                        <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
                                          <stop offset="100%" stopColor="rgba(99, 102, 241, 0.05)" />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                  <div className="grid grid-cols-4 gap-1 mt-2">
                                    {marketSegmentData.map((segment, idx) => (
                                      <div key={`market-segment-${idx}`} className="text-center">
                                        <div className="text-[10px] text-gray-500">{segment.name}</div>
                                        <div className="text-xs font-medium text-gray-800">{segment.percentage}%</div>
                                        <div className={`text-[10px] ${segment.growth.includes('+') ? 'text-emerald-600' : 'text-red-500'}`}>
                                          {segment.growth}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Brand Association Analysis */}
                            {activeChart === 2 && (
                              <div className="h-full flex items-center justify-center">
                                <div className="w-full">
                                  <div className="flex justify-between items-center mb-2">
                                    <div className="text-xs font-medium text-gray-700">Brand Association - {activeAttribute}</div>
                                    <div className="text-xs text-indigo-600">
                                      <span className="font-medium">
                                        {brandAssociationData["Your Product"].find(item => item.attribute === activeAttribute)?.score.toFixed(1)}/5.0
                                      </span>
                                    </div>
                                  </div>
                                  
                                  <div className="relative h-24 flex justify-center">
                                    <svg width="100%" height="100%" viewBox="0 0 300 100">
                                      <g transform="translate(150, 50)">
                                        {/* Radar chart background */}
                                        <circle cx="0" cy="0" r="40" fill="none" stroke="#f1f1f1" strokeWidth="1" />
                                        <circle cx="0" cy="0" r="30" fill="none" stroke="#f1f1f1" strokeWidth="1" />
                                        <circle cx="0" cy="0" r="20" fill="none" stroke="#f1f1f1" strokeWidth="1" />
                                        <circle cx="0" cy="0" r="10" fill="none" stroke="#f1f1f1" strokeWidth="1" />
                                        
                                        {/* Your product */}
                                        <path 
                                          d="M0,-40 L38,13 L24,34 L-24,34 L-38,13 Z" 
                                          fill="rgba(99, 102, 241, 0.2)" 
                                          stroke="#6366f1" 
                                          strokeWidth="2"
                                        />
                                        
                                        {/* Competitor A */}
                                        <path 
                                          d="M0,-33 L31,11 L19,27 L-19,27 L-31,11 Z" 
                                          fill="none" 
                                          stroke="#94a3b8" 
                                          strokeWidth="1"
                                          strokeDasharray="3,2"
                                        />
                                        
                                        {/* Competitor B */}
                                        <path 
                                          d="M0,-36 L36,12 L15,22 L-28,40 L-30,10 Z" 
                                          fill="none" 
                                          stroke="#cbd5e1" 
                                          strokeWidth="1"
                                          strokeDasharray="2,2"
                                        />
                                      </g>
                                    </svg>
                                  </div>

                                  <div className="flex justify-between text-xs mt-1">
                                    <div className="flex items-center space-x-1">
                                      <div className="w-2 h-2 bg-indigo-500"></div>
                                      <span className="text-gray-700">Your Product</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <div className="w-2 h-2 bg-gray-400"></div>
                                      <span className="text-gray-500">Competitors</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    {/* Right side panel - Brand attributes */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="flex items-center space-x-1.5 mb-2">
                        <ChartPie className="h-4 w-4 text-indigo-600" />
                        <h4 className="text-sm font-medium text-gray-700">Brand Attributes</h4>
                      </div>
                      
                      <div className="space-y-2.5">
                        {brandAttributeData.slice(0, 3).map((attr, idx) => (
                          <div key={`attr-${idx}`} className="bg-white rounded-md p-2 border border-gray-100">
                            <div className="flex justify-between items-baseline mb-1">
                              <div className="text-xs font-medium text-gray-800">{attr.attribute}</div>
                              <div className="flex items-center text-xs">
                                <span className={`mr-1 ${attr.change.includes('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                                  {attr.change}
                                </span>
                                <span>{attr.percentage}%</span>
                              </div>
                            </div>
                            <div className="w-full h-1.5 bg-gray-100 rounded-full">
                              <div 
                                className="h-1.5 rounded-full bg-indigo-500/80" 
                                style={{ width: `${attr.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                        
                        <div className="text-center">
                          <span className="text-xs text-indigo-600 cursor-pointer hover:underline">
                            View All Attributes
                          </span>
                        </div>
                      </div>
                    </div>
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
