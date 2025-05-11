
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Database, Lightbulb, ChartLine, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const Differentiators = () => {
  const [activeDemo, setActiveDemo] = useState<number>(0);

  const modelingDemo = (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1.5 p-4">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="overflow-hidden rounded-md bg-white/90 shadow-sm border border-gray-100 flex flex-col"
            style={{ opacity: 0.9 - (i * 0.1) }}
          >
            <div className="bg-gray-100/80 h-1/2 p-2 flex items-center justify-center overflow-hidden">
              {i % 3 === 0 && (
                <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 animate-pulse flex items-center justify-center">
                  <ChartLine className="text-purple-600" size={16} />
                </div>
              )}
              {i % 3 === 1 && (
                <motion.div 
                  className="w-full h-3 bg-gradient-to-r from-purple-300 to-indigo-300 rounded"
                  initial={{ width: '30%' }}
                  animate={{ width: ['30%', '80%', '50%', '70%'] }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
                />
              )}
              {i % 3 === 2 && (
                <div className="grid grid-cols-2 gap-1 w-full h-full">
                  <div className="bg-indigo-100/70 rounded"></div>
                  <div className="bg-purple-100/70 rounded"></div>
                </div>
              )}
            </div>
            <div className="p-2 text-[10px] text-gray-600 flex-1 flex flex-col">
              <div className="font-medium mb-1 text-gray-800">Data Node {i+1}</div>
              <div className="bg-gray-100 h-1.5 w-[70%] rounded mb-1"></div>
              <div className="bg-gray-100 h-1.5 w-[50%] rounded"></div>
            </div>
          </div>
        ))}
      </div>
      
      <motion.div 
        className="absolute bottom-3 left-0 right-0 mx-auto w-[80%] h-6 bg-white/90 rounded shadow-sm border border-gray-100 flex items-center justify-between px-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-[10px] font-medium text-gray-800">Brand Value Model v2.3</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <div className="text-[10px] text-gray-600">Live</div>
        </div>
      </motion.div>
      
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
