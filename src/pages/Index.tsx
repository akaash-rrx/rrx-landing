
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Continuous gradient overlay across the entire page */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 opacity-90 pointer-events-none z-0"></div>
      
      <Navbar />
      <Hero />
      
      {/* Sections with transitions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="section-transition">
          <Offering />
        </div>
        <div className="section-transition">
          <Differentiators />
        </div>
        <div className="section-transition">
          <ContactForm />
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Index;
