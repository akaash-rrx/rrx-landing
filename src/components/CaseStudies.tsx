
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartLegend } from "@/components/ui/chart";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { LayoutDashboard, TrendingUp, Users, ArrowRight, ChevronRight, CircleDot } from 'lucide-react';

const caseStudies = [
  {
    id: "brand-study",
    title: "Brand Intelligence Analysis",
    icon: <LayoutDashboard className="h-4 w-4" />,
    description: "How a global media company decoded complex brand perception patterns through multi-dimensional analysis of audience conversations.",
    methodology: "Cross-referenced 12,000+ customer interviews against behavioral data to identify hidden drivers of brand value.",
    results: "42% increase in brand consideration metrics after targeted campaign based on revealed perception drivers.",
    impact: "Redirected $3.8M in marketing spend toward highest-impact channels, resulting in 3.2x ROI improvement.",
    chartData: [
      { name: 'Trust', value: 78, fill: '#000000' },
      { name: 'Innovation', value: 65, fill: '#333333' },
      { name: 'Quality', value: 82, fill: '#666666' },
      { name: 'Value', value: 54, fill: '#999999' },
      { name: 'Relevance', value: 71, fill: '#CCCCCC' },
    ],
    chartConfig: {
      Trust: { color: "#000000" },
      Innovation: { color: "#333333" },
      Quality: { color: "#666666" },
      Value: { color: "#999999" },
      Relevance: { color: "#CCCCCC" },
    },
    secondaryChartData: [
      { name: 'Jan', Awareness: 40, Consideration: 30, Conversion: 15 },
      { name: 'Feb', Awareness: 45, Consideration: 35, Conversion: 18 },
      { name: 'Mar', Awareness: 50, Consideration: 38, Conversion: 22 },
      { name: 'Apr', Awareness: 65, Consideration: 42, Conversion: 25 },
      { name: 'May', Awareness: 70, Consideration: 50, Conversion: 30 },
      { name: 'Jun', Awareness: 75, Consideration: 60, Conversion: 40 },
    ],
  },
  {
    id: "sentiment-study",
    title: "Sentiment Evolution Analysis",
    icon: <TrendingUp className="h-4 w-4" />,
    description: "Sophisticated tracking of narrative patterns and emotional resonance across 15,000+ customer conversations over a 6-month period.",
    methodology: "Applied proprietary NLP algorithms to detect subtle shifts in language patterns before they manifested in traditional metrics.",
    results: "Identified emerging concern 3 months before it appeared in market research, enabling proactive product refinement.",
    impact: "Created $2.4M in retained revenue through early intervention strategy, preventing customer churn.",
    chartData: [
      { name: 'Jan', Positivity: 30, Neutrality: 35, Concern: 15 },
      { name: 'Feb', Positivity: 28, Neutrality: 32, Concern: 20 },
      { name: 'Mar', Positivity: 25, Neutrality: 30, Concern: 25 },
      { name: 'Apr', Positivity: 28, Neutrality: 25, Concern: 30 },
      { name: 'May', Positivity: 32, Neutrality: 20, Concern: 35 },
      { name: 'Jun', Positivity: 35, Neutrality: 15, Concern: 40 },
    ],
    chartConfig: {
      Positivity: { color: "#000000" },
      Neutrality: { color: "#999999" },
      Concern: { color: "#CCCCCC" },
    },
    secondaryChartData: [
      { name: 'Quality', value: 35 },
      { name: 'Price', value: 25 },
      { name: 'Support', value: 15 },
      { name: 'Features', value: 25 },
    ],
    colors: ["#000000", "#333333", "#666666", "#999999"]
  },
  {
    id: "prediction-study",
    title: "Predictive Feature Analysis",
    icon: <Users className="h-4 w-4" />,
    description: "Advanced simulation of customer response to potential product innovations using a hybrid ML model trained on qualitative interviews.",
    methodology: "Developed feature prioritization matrix using 5,000+ structured conversations and historical feature adoption data.",
    results: "Saved $1.2M by eliminating 3 low-impact features from roadmap while accelerating 2 high-impact features.",
    impact: "Achieved 94% prediction accuracy when comparing simulated vs. actual adoption metrics for released features.",
    chartData: [
      { name: 'Feature A', predicted: 85, actual: 82 },
      { name: 'Feature B', predicted: 45, actual: 43 },
      { name: 'Feature C', predicted: 65, actual: 68 },
      { name: 'Feature D', predicted: 30, actual: 27 },
    ],
    chartConfig: {
      predicted: { color: "#000000" },
      actual: { color: "#999999" },
    },
    secondaryChartData: [
      { name: 'Q1', expectedValue: 4000, actualValue: 4200 },
      { name: 'Q2', expectedValue: 5000, actualValue: 5100 },
      { name: 'Q3', expectedValue: 6000, actualValue: 6300 },
      { name: 'Q4', expectedValue: 7000, actualValue: 7200 },
    ],
  }
];

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState("brand-study");
  const activeStudy = caseStudies.find(study => study.id === activeTab);
  
  const renderPrimaryChart = (study) => {
    if (!study) return null;
    
    switch (study.id) {
      case "brand-study":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={study.chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Score']}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} 
              />
              <Bar dataKey="value" fill="#000" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case "sentiment-study":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={study.chartData}>
              <defs>
                <linearGradient id="colorPositivity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000000" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorNeutrality" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#999999" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#999999" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorConcern" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#CCCCCC" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#CCCCCC" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
              <Area type="monotone" dataKey="Positivity" stroke="#000000" strokeWidth={2} fillOpacity={1} fill="url(#colorPositivity)" />
              <Area type="monotone" dataKey="Neutrality" stroke="#999999" strokeWidth={2} fillOpacity={1} fill="url(#colorNeutrality)" />
              <Area type="monotone" dataKey="Concern" stroke="#CCCCCC" strokeWidth={2} fillOpacity={1} fill="url(#colorConcern)" />
            </AreaChart>
          </ResponsiveContainer>
        );
      case "prediction-study":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={study.chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
              <Bar dataKey="predicted" fill="#000000" name="Predicted" radius={[0, 4, 4, 0]} />
              <Bar dataKey="actual" fill="#999999" name="Actual" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  const renderSecondaryChart = (study) => {
    if (!study) return null;
    
    switch (study.id) {
      case "brand-study":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={study.secondaryChartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
              <Line type="monotone" dataKey="Awareness" stroke="#000000" strokeWidth={2} dot={{ stroke: '#000000', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="Consideration" stroke="#666666" strokeWidth={2} dot={{ stroke: '#666666', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="Conversion" stroke="#999999" strokeWidth={2} dot={{ stroke: '#999999', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      case "sentiment-study":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={study.secondaryChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={1}
                dataKey="value"
              >
                {study.secondaryChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={study.colors[index % study.colors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} formatter={(value, name) => [`${value}%`, name]} />
            </PieChart>
          </ResponsiveContainer>
        );
      case "prediction-study":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={study.secondaryChartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
              <Line type="monotone" dataKey="expectedValue" stroke="#000000" strokeWidth={2} dot={{ stroke: '#000000', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="actualValue" stroke="#999999" strokeWidth={2} dot={{ stroke: '#999999', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <section id="case-studies" className="py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative">
      {/* Abstract background elements similar to Hero */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-100/20 to-blue-100/20 blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-violet-100/10 to-indigo-100/10 blur-[100px]"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmOGY5ZmEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwVjBoLTMwdjMwek0wIDMwaDMwdjMwSDBWMzB6IiBmaWxsLW9wYWNpdHk9Ii4wMiIgZmlsbD0iIzAwMCIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium tracking-wider mb-6">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
            EVIDENCE-BASED RESEARCH
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">Case studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sophisticated research methodologies delivering transformative business outcomes.
          </p>
        </motion.div>
        
        <Tabs defaultValue="brand-study" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto mb-12">
            {caseStudies.map((study) => (
              <TabsTrigger key={study.id} value={study.id} className="flex items-center gap-2 py-3">
                {study.icon}
                <span className="hidden md:inline">{study.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {caseStudies.map((study) => (
            <TabsContent key={study.id} value={study.id} className="w-full">
              <motion.div 
                key={study.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">{study.title}</h3>
                    <p className="text-gray-700 mb-6 text-lg">{study.description}</p>
                    
                    <div className="space-y-6">
                      <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                            <span className="text-xs font-medium text-gray-700">01</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 mb-1">Methodology</h4>
                            <p className="text-gray-600">{study.methodology}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                            <span className="text-xs font-medium text-gray-700">02</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 mb-1">Results</h4>
                            <p className="text-gray-600">{study.results}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                            <span className="text-xs font-medium text-gray-700">03</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 mb-1">Impact</h4>
                            <p className="text-gray-600">{study.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-[350px]">
                      <h4 className="text-sm uppercase text-gray-500 tracking-wide mb-4">Primary Metrics</h4>
                      <ChartContainer 
                        className="h-[300px]" 
                        config={study.chartConfig}
                      >
                        {renderPrimaryChart(study)}
                      </ChartContainer>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-[250px]">
                      <h4 className="text-sm uppercase text-gray-500 tracking-wide mb-4">Performance Over Time</h4>
                      <div className="h-[200px]">
                        {renderSecondaryChart(study)}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <motion.button
                    className="group flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-lg transition-all shadow-sm hover:shadow"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <span>Request detailed case study</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CaseStudies;
