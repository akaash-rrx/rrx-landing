
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Offering from '@/components/Offering';
import Differentiators from '@/components/Differentiators';
import Approach from '@/components/Approach';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Offering />
      <Differentiators />
      <Approach />
      <Testimonials />
      <CallToAction />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
