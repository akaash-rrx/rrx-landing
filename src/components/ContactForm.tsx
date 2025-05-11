import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Intelligent research.<br />Intelligent decisions.</h2>
            <p className="text-xl text-gray-600 mb-12">
              It's that simple. RRX delivers research that's fast, structured, and defensible—so your next decision isn't just informed. It's unstoppable.
            </p>
            
            <div className="space-y-12">
              <h3 className="text-2xl font-bold">Why Work With Us?</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-medium shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Define What's at Stake</h4>
                    <p className="text-gray-600">
                      Tell us the decision you're trying to make—whether it's launching a new product, refining messaging, or identifying what drives loyalty. We'll help you frame the stakes clearly.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-medium shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Talk to Your Customers</h4>
                    <p className="text-gray-600">
                      We recruit and engage your target audience through AI-led interviews, voice diaries, and behavioral check-ins—whether they're new customers or loyal users.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-medium shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Get Decision-Grade Insights</h4>
                    <p className="text-gray-600">
                      Our models structure qualitative input into actionable outputs: brand value maps, conjoint simulations, and synthetic forecasts—all tailored to your exact use case.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-medium shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Trust the Experts</h4>
                    <p className="text-gray-600">
                      Human researchers interpret and contextualize all findings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Please fill out the form below.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
