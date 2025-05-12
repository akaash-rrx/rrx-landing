
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Offering from '@/components/Offering';
import Differentiators from '@/components/Differentiators';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Full page gradient overlay that shows through all content */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 z-0" 
        style={{ pointerEvents: 'none' }}
      ></div>
      
      {/* Content container with transparent background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Sections without any background color */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Offering />
          <Differentiators />
          <ContactForm />
        </motion.div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
