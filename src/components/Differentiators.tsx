import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Database, Lightbulb, ChartLine, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const Differentiators = () => {
  const [activeDemo, setActiveDemo] = useState<number>(0);
  const [activeBrand, setActiveBrand] = useState<string>("Brand B");

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
              {/* Fix the arithmetic operation error - convert to number instead of using character code */}
              {activeBrand === "Brand A" ? 28 : 
               activeBrand === "Brand B" ? 25 : 
               activeBrand === "Brand C" ? 22 : 19}% Market Share
            </div>
          </div>
          
          <div className="h-[140px] relative">
            {/* Bar chart - reduced height */}
            <div className="absolute inset-0 flex items-end justify-between px-1">
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
                  <motion.div 
                    key={i} 
                    className="flex flex-col items-center gap-0.5"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <motion.div 
                      className={`w-7 ${
                        i < 3 ? 'bg-black' : 
                        i < 6 ? 'bg-gray-600' : 'bg-gray-400'
                      } rounded-t`}
                      style={{ height: `${height}%` }}
                    />
                    <div className="text-[8px] text-gray-500 transform -rotate-45 origin-top-left mt-1">
                      {attr}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Y-axis labels - adjusted size */}
            <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-[8px] text-gray-500 py-1">
              <div>$1000k</div>
              <div>$750k</div>
              <div>$500k</div>
              <div>$250k</div>
              <div>$0k</div>
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
      
      <div className="absolute top-4 right-4 bg-black/80 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1.5">
        <Play size={10} /> Live Demo
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
      
      <div className="absolute top-4 right-4 bg-black/80 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1.5">
        <Play size={10} /> Live Demo
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
                Latent topic identification
              </h3>
              <p className="text-gray-700 mb-6">
                AI-driven text mining to reveal themes and forecast narrative change. Our algorithms detect emerging concepts before they become mainstream trends.
              </p>
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {[
                    "Uncover hidden patterns in language",
                    "Track sentiment evolution over time",
                    "Detect emerging narratives early",
                    "Quantify concept associations"
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
                {latentTopicDemo}
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
