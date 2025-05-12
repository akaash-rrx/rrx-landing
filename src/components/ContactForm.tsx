
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Request submitted",
        description: "We'll be in touch with you later today.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <section id="book-a-demo-with-rrx" className="py-24 px-6 bg-gray-50">
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
            20 MINUTES TO CLARITY
          </span>

          <h2 className="text-4xl font-bold mb-4">Book a demo with RRX</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready for intelligent and actionable research? We'll break it down in 20 minutes.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send us a note. We'll get back to you today.</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors w-full flex justify-center ${loading ? 'opacity-75' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl self-start"
          >
            <h3 className="text-2xl font-semibold mb-6">The RRX Process</h3>
            <ul className="space-y-6">
              <li className="flex">
                <div className="mt-1 mr-4 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Tell us what's at stake</h4>
                  <p className="text-gray-600">
                    Tell us the decision you need to make: launch a product, refine messaging, or find out what drives loyalty. 
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mt-1 mr-4 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Talk to your customers</h4>
                  <p className="text-gray-600">
                    We recruit and connect with your audience using AI-led interviews, voice diaries, and real-time check-ins—new leads or existing users.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mt-1 mr-4 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Get decision-grade insights</h4>
                  <p className="text-gray-600">
                    Our models turn raw feedback into structured outputs: brand maps, conjoint models, and synthetic simulations tailored to your goals.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mt-1 mr-4 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Trust the experts</h4>
                  <p className="text-gray-600">
                    RRX researchers oversee every step, interpreting results and engineering custom recommendations for your use case.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
