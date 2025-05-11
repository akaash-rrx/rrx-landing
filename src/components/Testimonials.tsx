
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
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "RRX completely transformed how we understand our customers. Their research methodology and innovative approach delivered actionable insights that we couldn't have obtained any other way.",
    author: "Sarah Johnson",
    position: "VP of Product, TechCorp"
  },
  {
    quote: "The speed and depth of RRX's analysis is unparalleled. We were able to make critical strategic decisions with confidence based on their structured insights.",
    author: "Michael Chen",
    position: "Chief Marketing Officer, Innovate Inc"
  },
  {
    quote: "What impressed me most was how RRX turned qualitative conversations into quantitative models that actually predict customer behavior. Game-changing for our product roadmap.",
    author: "Alex Rodriguez",
    position: "Head of Research, Future Labs"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What our clients say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research that drives real-world results.
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
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8 md:p-10">
                      <div className="mb-6">
                        <Quote size={42} className="text-gray-200" />
                      </div>
                      <p className="text-lg md:text-xl italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex flex-col">
                        <span className="font-semibold">{testimonial.author}</span>
                        <span className="text-gray-500">{testimonial.position}</span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:flex justify-end gap-2 mt-8">
              <CarouselPrevious className="relative -left-0 top-0 translate-y-0" />
              <CarouselNext className="relative -right-0 top-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
