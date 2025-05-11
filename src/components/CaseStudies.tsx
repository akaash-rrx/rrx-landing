
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Play, Film, Music } from 'lucide-react';

const caseStudies = [
  {
    id: "brand-study",
    title: "Brand Impact Study",
    icon: <Film className="h-4 w-4" />,
    description: "How a major media company identified which brand perceptions drive the most value.",
    results: "42% increase in brand consideration metrics after targeted campaign.",
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
    }
  },
  {
    id: "topic-study",
    title: "Narrative Evolution",
    icon: <Play className="h-4 w-4" />,
    description: "Tracking how customer sentiment evolved across key product features.",
    results: "Identified emerging concern 3 months before it appeared in market research.",
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
    }
  },
  {
    id: "simulation-study",
    title: "Feature Simulation",
    icon: <Music className="h-4 w-4" />,
    description: "Simulated customer response to new product features before development.",
    results: "Saved $1.2M by eliminating 3 low-impact features from roadmap.",
    chartData: [
      { name: 'Feature A', predicted: 85, actual: 82 },
      { name: 'Feature B', predicted: 45, actual: 43 },
      { name: 'Feature C', predicted: 65, actual: 68 },
      { name: 'Feature D', predicted: 30, actual: 27 },
    ],
    chartConfig: {
      predicted: { color: "#000000" },
      actual: { color: "#999999" },
    }
  }
];

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState("brand-study");
  
  const activeStudy = caseStudies.find(study => study.id === activeTab);

  const renderChart = (study: typeof activeStudy) => {
    if (!study) return null;
    
    switch (study.id) {
      case "brand-study":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={study.chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, 'Score']} />
              <Bar dataKey="value" fill="#000" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case "topic-study":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={study.chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Positivity" stackId="stack" fill="#000000" radius={[0, 0, 0, 0]} />
              <Bar dataKey="Neutrality" stackId="stack" fill="#999999" radius={[0, 0, 0, 0]} />
              <Bar dataKey="Concern" stackId="stack" fill="#CCCCCC" radius={[0, 0, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case "simulation-study":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={study.chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="predicted" fill="#000000" name="Predicted" />
              <Bar dataKey="actual" fill="#999999" name="Actual" />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Case studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results, real impact.
          </p>
        </motion.div>
        
        <Tabs defaultValue="brand-study" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full mb-12">
            {caseStudies.map((study) => (
              <TabsTrigger key={study.id} value={study.id} className="flex items-center gap-2">
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
                className="grid md:grid-cols-2 gap-12"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-gray-700 mb-6">{study.description}</p>
                  <div className="p-4 bg-gray-50 rounded-lg mb-6">
                    <h4 className="font-medium mb-2">Results</h4>
                    <p className="text-gray-700">{study.results}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <ChartContainer 
                    className="h-[350px] mt-4" 
                    config={study.chartConfig}
                  >
                    {renderChart(study)}
                  </ChartContainer>
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
