
import React from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, BarChart2, LineChart } from 'lucide-react';

const testimonials = [
  {
    quote: "RRX completely transformed how we understand our customers. Their research methodology and innovative approach delivered actionable insights that we couldn't have obtained any other way.",
    author: "Sarah Johnson",
    position: "VP of Product, TechCorp",
    metric: { value: "87%", label: "Decision confidence" },
    chartType: "bar"
  },
  {
    quote: "The speed and depth of RRX's analysis is unparalleled. We were able to make critical strategic decisions with confidence based on their structured insights.",
    author: "Michael Chen",
    position: "Chief Marketing Officer, Innovate Inc",
    metric: { value: "3.2x", label: "ROI improvement" },
    chartType: "line"
  },
  {
    quote: "What impressed me most was how RRX turned qualitative conversations into quantitative models that actually predict customer behavior. Game-changing for our product roadmap.",
    author: "Alex Rodriguez",
    position: "Head of Research, Future Labs",
    metric: { value: "94%", label: "Feature adoption" },
    chartType: "bar"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Abstract background elements similar to Hero */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[15%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-100/20 to-blue-100/20 blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-100/10 to-indigo-100/10 blur-[100px]"></div>
        
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
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">What our clients say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research that drives real-world results and transforms decision-making.
          </p>
        </motion.div>
        
        <div className="px-4 md:px-12">
          <Carousel 
            opts={{
              align: "center",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-4/5 lg:basis-3/4">
                  <Card className="border border-gray-100 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 md:p-10">
                      <div className="grid md:grid-cols-5 gap-8">
                        <div className="md:col-span-3">
                          <div className="mb-6">
                            <Quote size={42} className="text-indigo-200" />
                          </div>
                          <p className="text-lg md:text-xl italic mb-6 text-gray-700">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex flex-col">
                            <span className="font-semibold text-lg">{testimonial.author}</span>
                            <span className="text-gray-500">{testimonial.position}</span>
                          </div>
                        </div>
                        
                        <div className="md:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex flex-col items-center justify-center">
                          <div className="text-center mb-4">
                            <h4 className="text-gray-500 text-sm uppercase tracking-wider">{testimonial.metric.label}</h4>
                            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                              {testimonial.metric.value}
                            </div>
                          </div>
                          
                          <div className="h-[100px] w-full mt-4">
                            {testimonial.chartType === "bar" ? (
                              <div className="flex items-end justify-between h-full">
                                {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.5].map((value, i) => (
                                  <motion.div
                                    key={i}
                                    className="w-4 bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-sm"
                                    style={{ height: `${value * 100}%` }}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${value * 100}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                  />
                                ))}
                              </div>
                            ) : (
                              <div className="h-full w-full relative">
                                <svg viewBox="0 0 200 100" className="w-full h-full">
                                  <motion.path
                                    d="M0,50 C20,30 40,70 60,50 C80,30 100,70 120,50 C140,30 160,70 180,50 C200,30"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="3"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                  />
                                  <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                      <stop offset="0%" stopColor="#9b87f5" />
                                      <stop offset="100%" stopColor="#6E59A5" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                
                                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>
                                <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gray-200"></div>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-4 flex items-center justify-center">
                            {testimonial.chartType === "bar" ? (
                              <BarChart2 className="h-4 w-4 text-indigo-500 mr-2" />
                            ) : (
                              <LineChart className="h-4 w-4 text-indigo-500 mr-2" />
                            )}
                            <span className="text-xs text-gray-500">Data visualization</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="relative -left-0 top-0 translate-y-0 bg-white border-gray-200 shadow-md hover:bg-indigo-50 hover:border-indigo-200" />
              <CarouselNext className="relative -right-0 top-0 translate-y-0 bg-white border-gray-200 shadow-md hover:bg-indigo-50 hover:border-indigo-200" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
