
import React from 'react';
import { motion } from 'framer-motion';

const Approach = () => {
  const steps = [
    {
      number: '01',
      title: 'Define the decision',
      description: 'Tell us what\'s at stake.',
    },
    {
      number: '02',
      title: 'Capture high-signal input',
      description: 'With our AI interviewer.',
    },
    {
      number: '03',
      title: 'Get modeled insight, fast',
      description: 'Scored, segmented, structured—for confident action.',
    },
  ];

  return (
    <section id="approach" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We ask better. You know more.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl relative"
            >
              <div className="text-5xl font-bold text-gray-100 absolute top-4 right-6">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 italic">
            "The quality of your answers depends on the quality of your questions."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
