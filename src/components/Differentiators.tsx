import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Database, Lightbulb, ChartLine, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const Differentiators = () => {
  const [activeDemo, setActiveDemo] = useState<number>(0);
  const [activeBrand, setActiveBrand] = useState<string>("Brand B");
  const [selectedFeature, setSelectedFeature] = useState<string>("Performance");

  // Updated modeling demo to match the luxury automotive brand style with fixes for overflow
  const modelingDemo = (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 p-4 flex flex-col">
        <div className="mb-2">
          {/* <h3 className="text-sm font-medium">Brand Associations & Value Modeling</h3> */}
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
        
        {/* Selected brand detail - reduced height to avoid overflow */}
        <motion.div 
          className="bg-white rounded-md border border-gray-200 p-2 flex-1 overflow-hidden"
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
          
          <div className="h-[130px] relative">
            {/* Y-axis labels - adjusted size */}
            <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-[8px] text-gray-500 py-1">
              <div>$1000k</div>
              <div>$750k</div>
              <div>$500k</div>
              <div>$250k</div>
              <div>$0k</div>
            </div>
            
            {/* Bar chart - modified with bars closer together, narrower, and ensuring it fits */}
            <div className="absolute left-12 right-2 bottom-[-15px] flex items-end justify-between">
              {["Design", "Innov", "Luxury", "Connect", "Quality", "Loyalty", "Percep"].map((attr, i) => {
                const values = [
                  [85, 80, 75, 65, 60, 45, 22],
                  [80, 75, 70, 55, 55, 40, 25],
                  [90, 70, 80, 60, 45, 50, 18],
                  [75, 85, 65, 70, 50, 35, 30],
                ];
                const brandIndex = activeBrand === "Brand A" ? 0 :
                                  activeBrand === "Brand B" ? 1 :
                                  activeBrand === "Brand C" ? 2 : 3;
                const height = (values[brandIndex][i] * 1.2); // Scaling to fit properly
                
                return (
                  <div key={i} className="flex flex-col items-center w-5">
                    <motion.div 
                      className={`w-4 ${
                        i < 3 ? 'bg-black' : 
                        i < 6 ? 'bg-gray-600' : 'bg-gray-400'
                      } rounded-t`}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}px` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                    <div className="text-[7px] text-gray-500 mt-1 w-full text-center whitespace-nowrap">
                      {attr}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        
          {/* Insight box - adjusted size */}
          <motion.div 
            className="relative top-[30px] bg-indigo-50 border border-indigo-100 p-1.5 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-start gap-1.5">
              <div className="font-medium text-[9px] text-indigo-700">Key Decision Insight:</div>
              <div className="text-[9px] text-indigo-800">
                {activeBrand} leads with "Design" at $970K. Leverage design to reinforce market differentiation.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
  
  // Redesigned demo for conjoint-based preference modeling with a radically different look
  const conjointModelingDemo = (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 p-4 flex flex-col">
        <div className="mb-2">
          {/* <h3 className="text-sm font-medium">Conjoint-Based Preference Modeling</h3> */}
        </div>
        
        {/* Horizontal feature selector */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-1 no-scrollbar">
          {["Performance", "Design", "Technology", "Sustainability"].map((feature, i) => (
            <motion.div 
              key={i} 
              className={`flex-shrink-0 bg-white rounded-full px-3 py-1 border-2 ${
                selectedFeature === feature 
                  ? 'border-purple-500 shadow-sm bg-purple-50' 
                  : 'border-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedFeature(feature)}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full ${
                  i === 0 ? 'bg-purple-600' : 
                  i === 1 ? 'bg-blue-600' :
                  i === 2 ? 'bg-amber-600' :
                  'bg-green-600'
                }`}></div>
                <div className="text-xs font-medium">{feature}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Feature detail with hexagonal insights */}
        <div className="flex-1 grid grid-cols-12 gap-3">
          {/* Left side - radar chart visualization */}
          <div className="col-span-5 bg-white rounded-lg border border-gray-100 shadow-sm p-2 relative flex flex-col">
            <div className="text-xs font-medium mb-1">Importance</div>
            <div className="text-[10px] text-gray-500 mb-2">Relative score</div>
            
            <div className="flex-1 relative">
              {/* Radar chart simulation */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background hexagon shapes */}
                  <polygon 
                    points="50,10 85,30 85,70 50,90 15,70 15,30" 
                    fill="none" 
                    stroke="#f3f4f6" 
                    strokeWidth="0.5"
                  />
                  <polygon 
                    points="50,20 77,35 77,65 50,80 23,65 23,35" 
                    fill="none" 
                    stroke="#f3f4f6" 
                    strokeWidth="0.5"
                  />
                  <polygon 
                    points="50,30 70,40 70,60 50,70 30,60 30,40" 
                    fill="none" 
                    stroke="#f3f4f6" 
                    strokeWidth="0.5"
                  />
                  <polygon 
                    points="50,40 62,45 62,55 50,60 38,55 38,45" 
                    fill="none" 
                    stroke="#f3f4f6" 
                    strokeWidth="0.5"
                  />
                  
                  {/* Data polygon for Performance */}
                  {selectedFeature === "Performance" && (
                    <motion.polygon 
                      points="50,15 80,32 75,65 45,80 25,55 30,35" 
                      fill="rgba(147, 51, 234, 0.1)" 
                      stroke="#9333ea" 
                      strokeWidth="1.5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  
                  {/* Data polygon for Design */}
                  {selectedFeature === "Design" && (
                    <motion.polygon 
                      points="50,20 75,38 70,65 40,75 25,50 35,30" 
                      fill="rgba(59, 130, 246, 0.1)" 
                      stroke="#3b82f6" 
                      strokeWidth="1.5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  
                  {/* Data polygon for Technology */}
                  {selectedFeature === "Technology" && (
                    <motion.polygon 
                      points="50,25 70,35 75,60 55,75 30,60 25,35" 
                      fill="rgba(217, 119, 6, 0.1)" 
                      stroke="#d97706" 
                      strokeWidth="1.5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  
                  {/* Data polygon for Sustainability */}
                  {selectedFeature === "Sustainability" && (
                    <motion.polygon 
                      points="50,30 65,40 60,60 45,65 30,55 35,40" 
                      fill="rgba(16, 185, 129, 0.1)" 
                      stroke="#10b981" 
                      strokeWidth="1.5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  
                  {/* Dynamic axis labels based on selected feature - adjusted positions to prevent overflow */}
                  {selectedFeature === "Performance" && (
                    <>
                      <text x="50" y="8" fontSize="3.5" textAnchor="middle" fill="#6b7280">Speed</text>
                      <text x="88" y="30" fontSize="3.5" textAnchor="start" fill="#6b7280">Acceleration</text>
                      <text x="88" y="70" fontSize="3.5" textAnchor="start" fill="#6b7280">Power</text>
                      <text x="50" y="94" fontSize="3.5" textAnchor="middle" fill="#6b7280">Handling</text>
                      <text x="12" y="70" fontSize="3.5" textAnchor="end" fill="#6b7280">Efficiency</text>
                      <text x="12" y="30" fontSize="3.5" textAnchor="end" fill="#6b7280">Braking</text>
                    </>
                  )}
                  
                  {selectedFeature === "Design" && (
                    <>
                      <text x="50" y="8" fontSize="3.5" textAnchor="middle" fill="#6b7280">Exterior</text>
                      <text x="88" y="30" fontSize="3.5" textAnchor="start" fill="#6b7280">Materials</text>
                      <text x="88" y="70" fontSize="3.5" textAnchor="start" fill="#6b7280">Color</text>
                      <text x="50" y="94" fontSize="3.5" textAnchor="middle" fill="#6b7280">Interior</text>
                      <text x="12" y="70" fontSize="3.5" textAnchor="end" fill="#6b7280">Lighting</text>
                      <text x="12" y="30" fontSize="3.5" textAnchor="end" fill="#6b7280">Comfort</text>
                    </>
                  )}
                  
                  {selectedFeature === "Technology" && (
                    <>
                      <text x="50" y="8" fontSize="3.5" textAnchor="middle" fill="#6b7280">Display</text>
                      <text x="88" y="30" fontSize="3.5" textAnchor="start" fill="#6b7280">Interface</text>
                      <text x="88" y="70" fontSize="3.5" textAnchor="start" fill="#6b7280">Connect</text>
                      <text x="50" y="94" fontSize="3.5" textAnchor="middle" fill="#6b7280">Voice</text>
                      <text x="12" y="70" fontSize="3.5" textAnchor="end" fill="#6b7280">Safety</text>
                      <text x="12" y="30" fontSize="3.5" textAnchor="end" fill="#6b7280">Features</text>
                    </>
                  )}
                  
                  {selectedFeature === "Sustainability" && (
                    <>
                      <text x="50" y="8" fontSize="3.5" textAnchor="middle" fill="#6b7280">Emissions</text>
                      <text x="88" y="30" fontSize="3.5" textAnchor="start" fill="#6b7280">Materials</text>
                      <text x="88" y="70" fontSize="3.5" textAnchor="start" fill="#6b7280">Recycle</text>
                      <text x="50" y="94" fontSize="3.5" textAnchor="middle" fill="#6b7280">Energy</text>
                      <text x="12" y="70" fontSize="3.5" textAnchor="end" fill="#6b7280">Production</text>
                      <text x="12" y="30" fontSize="3.5" textAnchor="end" fill="#6b7280">Lifecycle</text>
                    </>
                  )}
                </svg>
              </div>
              
              {/* Impact value (absolute center) */}
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <div className={`text-lg font-bold ${
                  selectedFeature === "Performance" ? 'text-purple-700' : 
                  selectedFeature === "Design" ? 'text-blue-700' :
                  selectedFeature === "Technology" ? 'text-amber-700' :
                  'text-green-700'
                }`}>
                  {selectedFeature === "Performance" ? '38%' : 
                  selectedFeature === "Design" ? '27%' : 
                  selectedFeature === "Technology" ? '23%' : 
                  '12%'}
                </div>
                <div className="text-[10px] text-gray-500">Impact</div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="mt-2 pt-1 border-t border-gray-100">
              <div className="flex items-center justify-between text-[9px] text-gray-500">
                <span>Relative importance</span>
                <span className="font-medium">
                  {selectedFeature === "Performance" ? 'Very High' : 
                  selectedFeature === "Design" ? 'High' : 
                  selectedFeature === "Technology" ? 'Medium' : 
                  'Low'}
                </span>
              </div>
            </div>
          </div>
          
          {/* Right side - detailed breakdown */}
          <div className="col-span-7 flex flex-col">
            {/* Feature detail card */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-2 flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-xs font-medium">{selectedFeature} Attributes</div>
                  <div className="text-[10px] text-gray-500">Value contribution</div>
                </div>
                <div className={`px-2 py-0.5 text-[10px] rounded-full ${
                  selectedFeature === "Performance" ? 'bg-purple-100 text-purple-700' : 
                  selectedFeature === "Design" ? 'bg-blue-100 text-blue-700' :
                  selectedFeature === "Technology" ? 'bg-amber-100 text-amber-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {selectedFeature === "Performance" ? '#1 Factor' : 
                  selectedFeature === "Design" ? '#2 Factor' : 
                  selectedFeature === "Technology" ? '#3 Factor' : 
                  '#4 Factor'}
                </div>
              </div>
              
              {/* Horizontal bars */}
              <div className="space-y-2">
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
                  
                  const selectedFeatureData = features[selectedFeature as keyof typeof features];
                  const selectedValues = values[selectedFeature as keyof typeof values];
                  
                  return selectedFeatureData.map((featureName, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-20 text-[9px] text-gray-600 mr-2 overflow-visible whitespace-nowrap">
                        {featureName}
                      </div>
                      <div className="flex-1 h-5 bg-gray-50 rounded-full overflow-hidden flex items-center">
                        <motion.div 
                          className={`h-5 ${
                            selectedFeature === "Performance" 
                              ? 'bg-gradient-to-r from-purple-700 to-purple-400' : 
                            selectedFeature === "Design" 
                              ? 'bg-gradient-to-r from-blue-700 to-blue-400' :
                            selectedFeature === "Technology" 
                              ? 'bg-gradient-to-r from-amber-700 to-amber-400' :
                            'bg-gradient-to-r from-green-700 to-green-400'
                          } rounded-full`}
                          initial={{ width: '0%' }}
                          animate={{ width: `${selectedValues[i]}%` }}
                          transition={{ duration: 0.7, delay: i * 0.1 }}
                        >
                          <div className="h-full w-full opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMiI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDUgNVpNNSAwTDAgNVoiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IiNmZmYiPjwvcGF0aD4KPC9zdmc+')]"></div>
                        </motion.div>
                        <div className="absolute ml-2 text-[10px] text-white font-medium drop-shadow-sm">
                          {selectedValues[i]}%
                        </div>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
            
            {/* Insight box */}
            <motion.div 
              className={`mt-3 p-2 rounded-lg border ${
                selectedFeature === "Performance" ? 'bg-purple-50 border-purple-200' : 
                selectedFeature === "Design" ? 'bg-blue-50 border-blue-200' :
                selectedFeature === "Technology" ? 'bg-amber-50 border-amber-200' :
                'bg-green-50 border-green-200'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col text-[10px]">
                <div className={`font-medium ${
                  selectedFeature === "Performance" ? 'text-purple-700' : 
                  selectedFeature === "Design" ? 'text-blue-700' :
                  selectedFeature === "Technology" ? 'text-amber-700' :
                  'text-green-700'
                } flex items-center gap-1`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
                  </svg>
                  Model Insight
                </div>
                <div className={`${
                  selectedFeature === "Performance" ? 'text-purple-800' : 
                  selectedFeature === "Design" ? 'text-blue-800' :
                  selectedFeature === "Technology" ? 'text-amber-800' :
                  'text-green-800'
                } mt-1`}>
                  {selectedFeature === "Performance" 
                    ? 'Acceleration (85%) is the top performance driver – 2.1x more valued than efficiency.' 
                    : selectedFeature === "Design" 
                    ? 'Material quality (80%) dominates design perception – 1.6x more important than color options.' 
                    : selectedFeature === "Technology" 
                    ? 'Safety tech (80%) is the leading technology value driver for luxury segment buyers.' 
                    : 'Sustainable materials (70%) have the highest environmental impact on purchase intent.'}
                </div>
              </div>
            </motion.div>
          </div>
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

      <div className="absolute top-4 right-4 bg-black/80 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1.5">
        <Play size={10} /> Run New Simulation
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
    <section id="core-differentiators" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium tracking-wider mb-4">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
            BUILT FOR INSIGHT
          </span>

          <h2 className="text-4xl font-bold mb-4">From Noise to Signal</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don’t summarize what customers say. We model what drives their decisions.
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
              <h3 className="text-2xl font-bold mb-4">
                Brand Associations & Value Modeling
              </h3>
              <p className="text-gray-700 mb-6">
                Regression analysis to quantify how customer perceptions translate to brand value. Identify which associations drive growth and tailor strategy by audience.
              </p>
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {[
                    "Compare brand positioning by channel",
                    "Track shifts in brand narrative over time"
                  ].map((item, index) => (
                    <CarouselItem key={index} className="pl-2 basis-full md:basis-1/2">
                      <Card>
                        <CardContent className="p-3">
                          <div className="flex items-start">
                            {/* <span className="mr-2 text-lg text-indigo-500">→</span> */}
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
              <h3 className="text-2xl font-bold mb-4">
                Conjoint-Based Preference Modeling
              </h3>
              <p className="text-gray-700 mb-6">
                Quantitative tradeoff modeling using real customer choices to uncover what features, benefits, and messages matter most.
              </p>
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {[
                    "Identify must-have features by audience",
                    "Test new value props before launch",
                  ].map((item, index) => (
                    <CarouselItem key={index} className="pl-2 basis-full md:basis-1/2">
                      <Card>
                        <CardContent className="p-3">
                          <div className="flex items-start">
                            {/* <span className="mr-2 text-lg text-indigo-500">→</span> */}
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
              <h3 className="text-2xl font-bold mb-4">
                Synthetic Data & Simulations
              </h3>
              <p className="text-gray-700 mb-6">
                Generative modeling for stress-testing decisions and running what-if scenarios. Forecast real outcomes fast—before investing in rollout.
              </p>
              <Carousel className="w-full">
                <CarouselContent className="-ml-2">
                  {[
                    "Model downstream impact of messaging",
                    "Compare rollout strategies side-by-side",
                  ].map((item, index) => (
                    <CarouselItem key={index} className="pl-2 basis-full md:basis-1/2">
                      <Card>
                        <CardContent className="p-3">
                          <div className="flex items-start">
                            {/* <span className="mr-2 text-lg text-indigo-500">→</span> */}
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
