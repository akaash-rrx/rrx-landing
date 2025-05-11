import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Database, Lightbulb } from 'lucide-react';

const Differentiators = () => {
  return (
    <section id="differentiators" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Core differentiators</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't summarize data. We model it.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="rounded-xl overflow-hidden h-[400px] relative bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                <div className="relative h-full w-full">
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[60%] h-[2px] bg-black"></div>
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[2px] h-[50%] bg-black"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-[50%] h-[2px] bg-black"></div>
                  <div className="absolute top-1/4 right-1/4 w-[2px] h-[50%] bg-black"></div>
                  
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
                  <div className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
                  
                  <div className="absolute bottom-8 w-full text-center text-sm font-medium text-gray-600">
                    Brand Value Correlation
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex p-3 bg-black rounded-md mb-6">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Brand associations & value modeling
              </h3>
              <p className="text-gray-700 mb-6">
                Regression analysis to map consumer associations to brand value. We identify which specific perceptions drive the most value, enabling targeted brand strategy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-xl">→</span>
                  <span>Isolate key value drivers from noise</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">→</span>
                  <span>Forecast impact of perception changes</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center md:order-1 md:-order-1"
          >
            <div className="order-2 md:order-1">
              <div className="inline-flex p-3 bg-black rounded-md mb-6">
                <Database className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Latent topic identification
              </h3>
              <p className="text-gray-700 mb-6">
                AI-driven text mining to reveal themes and forecast narrative change. Our algorithms detect emerging concepts before they become mainstream trends.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-xl">→</span>
                  <span>Uncover hidden patterns in language</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">→</span>
                  <span>Track sentiment evolution over time</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-xl overflow-hidden h-[400px] relative bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center opacity-80">
                <div className="grid grid-cols-3 gap-2 p-8 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-white/80 rounded p-3 text-xs flex flex-col items-center justify-center text-center"
                      style={{
                        opacity: 0.4 + Math.random() * 0.6,
                      }}
                    >
                      <div className="font-medium mb-1">Topic {i+1}</div>
                      <div className="text-gray-500 text-[10px]">
                        {Math.floor(Math.random() * 100)}% relevance
                      </div>
                    </div>
                  ))}
                </div>
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
            <div className="rounded-xl overflow-hidden h-[400px] relative bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute opacity-10">
                    <div className="w-[300px] h-[300px] border-[15px] border-black rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 z-10 w-3/4">
                    <div className="bg-white rounded-lg shadow-sm p-4">
                      <div className="text-xs font-medium mb-1">Simulation A</div>
                      <div className="w-full h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-black rounded" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-4">
                      <div className="text-xs font-medium mb-1">Simulation B</div>
                      <div className="w-full h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-black rounded" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-4">
                      <div className="text-xs font-medium mb-1">Simulation C</div>
                      <div className="w-full h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-black rounded" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-4">
                      <div className="text-xs font-medium mb-1">Simulation D</div>
                      <div className="w-full h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-black rounded" style={{ width: '34%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex p-3 bg-black rounded-md mb-6">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Synthetic data & simulations
              </h3>
              <p className="text-gray-700 mb-6">
                Generative modeling for prototyping, stress-testing, and what-if scenarios. Explore potential outcomes without the cost and time of traditional testing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-xl">→</span>
                  <span>Test concepts before investment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">→</span>
                  <span>Predict audience response with high accuracy</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
