
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Database, Lightbulb, ChartLine, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const Differentiators = () => {
  const [activeDemo, setActiveDemo] = useState<number>(0);
  const [activeBrand, setActiveBrand] = useState<string>("Brand B");
  const [selectedFeature, setSelectedFeature] = useState<string>("Performance");

  // Updated modeling demo to match the luxury automotive brand style
  const modelingDemo = (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 p-4 flex flex-col">
        <div className="mb-2">
          <h3 className="text-sm font-medium">Brand Associations & Value Modeling</h3>
          <p className="text-xs text-gray-500">Quantifying how specific attributes drive overall brand value. Hover over each brand to see its breakdown.</p>
        </div>
        
        {/* Brand cards row */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {["Brand A", "Brand B", "Brand C", "Brand D"].map((brand, i) => (
            <motion.div 
              key={i} 
              className={`bg-white rounded-md p-2 border ${activeBrand === brand ? 'border-indigo-500 shadow-md' : 'border-gray-200'}`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveBrand(brand)}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-center mb-1">
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  {i === 0 && <div className="w-4 h-4 rounded-full bg-blue-400" />}
                  {i === 1 && <div className="w-4 h-4 rounded-full border-2 border-gray-400" />}
                  {i === 2 && <div className="w-4 h-4 bg-red-400" />}
                  {i === 3 && <div className="w-4 h-4 bg-green-400" />}
                </div>
              </div>
              <div className="text-center text-xs font-medium">{brand}</div>
              <div className="text-xs text-center text-gray-500">{28 - (i * 3)}% Market Share</div>
              <div className="mt-1 bg-black text-white text-xs px-2 py-0.5 rounded text-center">
                ${(4.2 - (i * 0.3)).toFixed(1)}M
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Selected brand detail - reduced height */}
        <motion.div 
          className="bg-white rounded-md border border-gray-200 p-2 flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-1">
            <div>
              <h4 className="text-xs font-medium">{activeBrand} Association Value</h4>
              <div className="text-[10px] text-gray-500">Total brand value: $3.9M</div>
            </div>
            <div className="bg-black text-white text-[10px] px-1.5 py-0.5 rounded">
              {activeBrand === "Brand A" ? 28 : 
               activeBrand === "Brand B" ? 25 : 
               activeBrand === "Brand C" ? 22 : 19}% Market Share
            </div>
          </div>
          
          <div className="h-[140px] relative">
            {/* Y-axis labels - adjusted size */}
            <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-[8px] text-gray-500 py-1">
              <div>$1000k</div>
              <div>$750k</div>
              <div>$500k</div>
              <div>$250k</div>
              <div>$0k</div>
            </div>
            
            {/* Bar chart - modified for bottom alignment, closer bars, and preventing text overlap */}
            <div className="absolute left-12 right-2 bottom-0 flex items-end justify-between">
              {["Design", "Innovation", "Luxury", "Connectivity", "Quality", "Loyalty", "Perception"].map((attr, i) => {
                const values = [
                  [90, 85, 80, 70, 65, 50, 25],
                  [85, 80, 75, 60, 60, 45, 30],
                  [95, 75, 85, 65, 50, 55, 20],
                  [80, 90, 70, 75, 55, 40, 35],
                ];
                const brandIndex = activeBrand === "Brand A" ? 0 :
                                  activeBrand === "Brand B" ? 1 :
                                  activeBrand === "Brand C" ? 2 : 3;
                const height = values[brandIndex][i];
                
                return (
                  <div key={i} className="flex flex-col items-center w-6">
                    <motion.div 
                      className={`w-4 ${
                        i < 3 ? 'bg-black' : 
                        i < 6 ? 'bg-gray-600' : 'bg-gray-400'
                      } rounded-t`}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}px` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                    <div className="text-[8px] text-gray-500 mt-1 w-full text-center whitespace-nowrap">
                      {attr}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Legend - adjusted size */}
          <div className="flex gap-3 text-[8px] mt-6">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-black rounded-sm"></div>
              <span>High Impact</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-600 rounded-sm"></div>
              <span>Medium Impact</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
              <span>Low Impact</span>
            </div>
          </div>
          
          {/* Insight box - adjusted size */}
          <motion.div 
            className="mt-2 bg-indigo-50 border border-indigo-100 p-1.5 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-start gap-1.5">
              <div className="font-medium text-[9px] text-indigo-700">Key Decision Insight:</div>
              <div className="text-[9px] text-indigo-800">
                {activeBrand} leads with "Design" at $970K—over 20% of its brand value. Leverage this design leadership to reinforce market differentiation.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
  
  // Updated demo for conjoint-based preference modeling
  const conjointModelingDemo = (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 p-4 flex flex-col">
        <div className="mb-2">
          <h3 className="text-sm font-medium">Conjoint-Based Preference Modeling</h3>
          <p className="text-xs text-gray-500">Quantifying feature importance and value for consumer decision-making.</p>
        </div>
        
        {/* Feature category rows */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {["Performance", "Design", "Technology", "Sustainability"].map((feature, i) => (
            <motion.div 
              key={i} 
              className={`bg-white rounded-md p-2 border ${selectedFeature === feature ? 'border-purple-500 shadow-md' : 'border-gray-200'}`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedFeature(feature)}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-center mb-1">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  i === 0 ? 'bg-purple-100' : 
                  i === 1 ? 'bg-blue-100' :
                  i === 2 ? 'bg-amber-100' :
                  'bg-green-100'
                }`}>
                  {i === 0 && <div className="w-3 h-3 rounded-sm bg-purple-500" />}
                  {i === 1 && <div className="w-3 h-3 rounded-sm bg-blue-500" />}
                  {i === 2 && <div className="w-3 h-3 rounded-sm bg-amber-500" />}
                  {i === 3 && <div className="w-3 h-3 rounded-sm bg-green-500" />}
                </div>
              </div>
              <div className="text-center text-xs font-medium">{feature}</div>
              <div className="text-xs text-center text-gray-500">{i === 0 ? 'High' : i === 1 ? 'Medium' : i === 2 ? 'Medium' : 'Low'} Priority</div>
            </motion.div>
          ))}
        </div>
        
        {/* Selected feature detail */}
        <motion.div 
          className="bg-white rounded-md border border-gray-200 p-3 flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <h4 className="text-xs font-medium">{selectedFeature} Feature Importance</h4>
              <div className="text-[10px] text-gray-500">Relative importance in purchase decisions</div>
            </div>
            <div className={`px-1.5 py-0.5 rounded text-[10px] ${
              selectedFeature === "Performance" ? 'bg-purple-100 text-purple-700' :
              selectedFeature === "Design" ? 'bg-blue-100 text-blue-700' :
              selectedFeature === "Technology" ? 'bg-amber-100 text-amber-700' :
              'bg-green-100 text-green-700'
            }`}>
              {selectedFeature === "Performance" ? '38% Impact' : 
               selectedFeature === "Design" ? '27% Impact' : 
               selectedFeature === "Technology" ? '23% Impact' : 
               '12% Impact'}
            </div>
          </div>
          
          <div className="h-[140px] relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-[8px] text-gray-500 py-1">
              <div>100%</div>
              <div>75%</div>
              <div>50%</div>
              <div>25%</div>
              <div>0%</div>
            </div>
            
            {/* Bar chart - with bars closer together and preserving full text visibility */}
            <div className="absolute left-12 right-2 bottom-0 flex items-end justify-between">
              {(() => {
                const features = {
                  "Performance": ["Acceleration", "Top Speed", "Engine Type", "Handling", "Efficiency"],
                  "Design": ["Exterior", "Interior", "Materials", "Colors", "Lighting"],
                  "Technology": ["Connect", "Display", "Interface", "Voice", "Safety"],
                  "Sustainability": ["Emissions", "Materials", "Energy", "Recycle", "Lifecycle"]
                };
                
                const values = {
                  "Performance": [85, 65, 55, 75, 40],
                  "Design": [70, 60, 80, 50, 65],
                  "Technology": [65, 75, 60, 45, 80],
                  "Sustainability": [50, 70, 55, 65, 45]
                };
                
                const colors = {
                  "Performance": ["bg-purple-800", "bg-purple-700", "bg-purple-600", "bg-purple-500", "bg-purple-400"],
                  "Design": ["bg-blue-800", "bg-blue-700", "bg-blue-600", "bg-blue-500", "bg-blue-400"],
                  "Technology": ["bg-amber-800", "bg-amber-700", "bg-amber-600", "bg-amber-500", "bg-amber-400"],
                  "Sustainability": ["bg-green-800", "bg-green-700", "bg-green-600", "bg-green-500", "bg-green-400"]
                };
                
                const selectedFeatureData = features[selectedFeature as keyof typeof features];
                const selectedValues = values[selectedFeature as keyof typeof values];
                const selectedColors = colors[selectedFeature as keyof typeof colors];
                
                return selectedFeatureData.map((featureName, i) => {
                  // Fixed pixel heights instead of percentages
                  const height = selectedValues[i];
                  const pixelHeight = (height / 100) * 120; // 120px is max height
                  
                  return (
                    <div key={i} className="flex flex-col items-center w-6">
                      <motion.div 
                        className={`w-4 ${selectedColors[i]} rounded-t`}
                        style={{ height: `${pixelHeight}px` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${pixelHeight}px` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      />
                      <div className="text-[8px] text-gray-500 mt-1 w-full text-center overflow-visible whitespace-nowrap">
                        {featureName}
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
          
          {/* Insights */}
          <motion.div 
            className="mt-2 bg-purple-50 border border-purple-100 p-1.5 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-start gap-1.5">
              <div className="font-medium text-[9px] text-purple-700">Model Insight:</div>
              <div className="text-[9px] text-purple-800">
                {selectedFeature === "Performance" ? 'Acceleration (85%) is the top performance driver – 2.1x more valued than efficiency.' :
                 selectedFeature === "Design" ? 'Material quality (80%) dominates design perception – 1.6x more important than color options.' :
                 selectedFeature === "Technology" ? 'Safety tech (80%) is the leading technology value driver for luxury segment buyers.' :
                 'Sustainable materials (70%) have the highest environmental impact on purchase intent.'}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute top-4 right-4 bg-black/80 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1.5">
        <Play size={10} /> Live Demo
      </div>
    </div>
  );

  const latentTopicDemo = (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 p-6">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full w-full">
          {[...Array(9)].map((_, i) => (
            <motion.div 
              key={i} 
              className="bg-white/90 rounded-lg shadow-sm border border-gray-100 p-3 flex flex-col"
              initial={{ scale: 0.9, opacity: 0.7 }}
              animate={{ 
                scale: i === (activeDemo % 9) ? 1.05 : 1,
                opacity: i === (activeDemo % 9) ? 1 : 0.7 + (Math.random() * 0.2)
              }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2
              }}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium text-xs">Topic {i+1}</div>
                <div className={`text-[10px] px-1.5 py-0.5 rounded ${
                  i % 3 === 0 ? 'bg-emerald-100 text-emerald-700' : 
                  i % 3 === 1 ? 'bg-amber-100 text-amber-700' : 
                  'bg-indigo-100 text-indigo-700'
                }`}>
                  {i % 3 === 0 ? 'Trending' : i % 3 === 1 ? 'Stable' : 'Emerging'}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-1.5">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <div 
                        className="h-1.5 rounded"
                        style={{ 
                          width: `${20 + Math.random() * 60}%`,
                          backgroundColor: `rgba(${100 + i*20}, ${120 + j*20}, ${190 - i*10}, 0.3)`
                        }}
                      ></div>
                      <div className="text-[9px] text-gray-500">{Math.floor(Math.random() * 100)}%</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="mt-2 text-[9px] text-gray-500 italic"
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {i % 3 === 0 ? 'Language pattern detected' : i % 3 === 1 ? 'Sentiment analysis' : 'Association mapping'}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const simulationDemo = (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute opacity-10">
          <motion.div 
            className="w-[300px] h-[300px] border-[15px] border-black rounded-full"
            animate={{ 
              rotateZ: [0, 360],
              borderColor: ['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.1)']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 gap-4 z-10 w-3/4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={i} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs font-medium">Simulation {String.fromCharCode(65 + i)}</div>
                <div className={`px-1.5 py-0.5 rounded text-[10px] ${
                  i === 2 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {i === 2 ? 'Recommended' : 'Alternative'}
                </div>
              </div>
              
              <div className="w-full h-2 bg-gray-200 rounded mb-3">
                <motion.div 
                  className={`h-2 rounded ${i === 2 ? 'bg-purple-500' : 'bg-black'}`}
                  initial={{ width: '0%' }}
                  animate={{ width: `${30 + i * 15}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                ></motion.div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="text-[10px] text-gray-500">
                  <div className="text-gray-400">ROI</div>
                  <div className="font-medium text-gray-900">{30 + i * 15}%</div>
                </div>
                <div className="text-[10px] text-gray-500">
                  <div className="text-gray-400">Confidence</div>
                  <div className="font-medium text-gray-900">{70 + i * 5}%</div>
                </div>
              </div>
              
              {i === 2 && (
                <motion.div
                  className="mt-2 border-t border-dashed border-gray-200 pt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="text-[9px] text-green-600 font-medium">
                    Highest performing option
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <div className="text-[10px] text-gray-600">Real-time data processing</div>
      </div>
    </div>
  );

  // Update the active demo every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 10);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="differentiators" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text font-medium mb-3">
            Our approach
          </div>
          <h2 className="text-4xl font-bold mb-4">Core differentiators</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't summarize data. We model it.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="rounded-xl overflow-hidden h-[400px] relative bg-gradient-to-br from-slate-50 to-indigo-50 shadow-lg border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                {modelingDemo}
              </div>
            </div>
            <div>
              <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md mb-6 shadow-md">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Brand associations & value modeling
              </h3>
              <p className="text-gray-700 mb-6">
                Regression analysis to map consumer associations to brand value. We identify which specific perceptions drive the most value, enabling targeted brand strategy.
              </p>
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {[
                    "Isolate key value drivers from noise",
                    "Forecast impact of perception changes",
                    "Build predictive models with high accuracy",
                    "Optimize messaging for maximum ROI"
                  ].map((item, index) => (
                    <CarouselItem key={index} className="pl-2 basis-full md:basis-1/2">
                      <Card>
                        <CardContent className="p-3">
                          <div className="flex items-start">
                            <span className="mr-2 text-lg text-indigo-500">→</span>
                            <span className="text-sm">{item}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md mb-6 shadow-md">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Conjoint-Based Preference Modeling
              </h3>
              <p className="text-gray-700 mb-6">
                Quantitative modeling to uncover what features, benefits, or messages matter most to your customers. Reveal the real-world value of each through rigorous experimental design.
              </p>
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {[
                    "Isolate feature importance by segment",
                    "Calculate price sensitivity thresholds",
                    "Simulate market response to changes",
                    "Optimize product configurations"
                  ].map((item, index) => (
                    <CarouselItem key={index} className="pl-2 basis-full md:basis-1/2">
                      <Card>
                        <CardContent className="p-3">
                          <div className="flex items-start">
                            <span className="mr-2 text-lg text-indigo-500">→</span>
                            <span className="text-sm">{item}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className="order-1 md:order-2 rounded-xl overflow-hidden h-[400px] relative bg-gradient-to-br from-slate-50 to-purple-50 shadow-lg border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                {conjointModelingDemo}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="rounded-xl overflow-hidden h-[400px] relative bg-gradient-to-br from-slate-50 to-emerald-50 shadow-lg border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                {simulationDemo}
              </div>
            </div>
            <div>
              <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md mb-6 shadow-md">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Synthetic data & simulations
              </h3>
              <p className="text-gray-700 mb-6">
                Generative modeling for prototyping, stress-testing, and what-if scenarios. Explore potential outcomes without the cost and time of traditional testing.
              </p>
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {[
                    "Test concepts before investment",
                    "Predict audience response with high accuracy",
                    "Run thousands of simulations in minutes",
                    "Optimize for specific business outcomes"
                  ].map((item, index) => (
                    <CarouselItem key={index} className="pl-2 basis-full md:basis-1/2">
                      <Card>
                        <CardContent className="p-3">
                          <div className="flex items-start">
                            <span className="mr-2 text-lg text-indigo-500">→</span>
                            <span className="text-sm">{item}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
