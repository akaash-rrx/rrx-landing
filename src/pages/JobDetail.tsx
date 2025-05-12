
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

interface JobDetail {
  id: string;
  title: string;
  location: string;
  salary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

const jobDetails: Record<string, JobDetail> = {
  'designer': {
    id: 'designer',
    title: 'Designer',
    location: 'New York City',
    salary: '$150,000 - $220,000 per year + equity',
    overview: `At RRX, we're building cutting-edge simulation engines that model the decisions and behaviors of individuals, groups, and entire populations. Your job as a designer is to turn these powerful tools into intuitive, beautiful products our customers love to use.

You'll work closely with engineering and growth teams to design interfaces that showcase insights, predictions, and outcomes — from simulating the behavior of a single politician to forecasting market responses to a new product launch.

Simulation design comes with unique challenges: How do you visualize an audience of matcha-drinkers in Brooklyn versus a national population of voters? How do you make these vastly different use cases feel part of one coherent experience? Solving problems like these — and building elegant, scalable design systems around them — will be at the core of your work.`,
    responsibilities: [
      'Design user experiences and interfaces for our simulation platform',
      'Create original, compelling data visualizations and charts',
      'Work with product and growth teams to turn user feedback into features',
      'Define a visual and UX approach to ensure simulations feel magical'
    ],
    requirements: [
      '3+ years of experience',
      'Willing to work in person in our office in New York, NY, 6 days a week',
      'Solid understanding of UX principles, including user research, journey mapping, and prototyping',
      'Familiarity with design systems and scaling UI/UX across multiple use cases'
    ]
  },
  'deployment-lead': {
    id: 'deployment-lead',
    title: 'Deployment Lead',
    location: 'Remote (US)',
    salary: '$140,000 - $180,000 per year + equity',
    overview: `As a Deployment Lead at RRX, you will play a critical role in ensuring our simulation engines are successfully integrated with our clients' existing systems and workflows. You'll be the bridge between our engineering team and client stakeholders, managing all aspects of the deployment process.`,
    responsibilities: [
      'Lead the technical implementation of our platform for enterprise clients',
      'Develop deployment strategies and timelines based on client requirements',
      'Collaborate with engineering to troubleshoot integration issues',
      'Provide technical guidance and support throughout the client onboarding process'
    ],
    requirements: [
      '5+ years of experience in technical project management or similar role',
      'Strong technical background with experience in enterprise software deployment',
      'Excellent communication skills and ability to explain complex technical concepts',
      'Experience with data migration, API integration, and system architecture'
    ]
  },
  'software-engineer': {
    id: 'software-engineer',
    title: 'Software Engineer',
    location: 'Remote (US)',
    salary: '$160,000 - $220,000 per year + equity',
    overview: `Join our engineering team at RRX to build the next generation of simulation engines. You'll be working on challenging problems at the intersection of machine learning, behavioral science, and software engineering to create tools that provide unprecedented insights into human behavior and decision-making.`,
    responsibilities: [
      'Design, develop, and maintain our core simulation platform',
      'Implement efficient algorithms for processing large datasets',
      'Build robust APIs and integrations with third-party services',
      'Collaborate with data scientists to implement and optimize models'
    ],
    requirements: [
      '3+ years of experience in software development',
      'Proficiency in Python, TypeScript, or similar languages',
      'Experience with distributed systems and cloud infrastructure',
      'Knowledge of machine learning concepts and frameworks is a plus'
    ]
  }
};

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobId ? jobDetails[jobId] : null;

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job not found</h1>
          <Link to="/careers" className="text-blue-600 hover:underline">Back to all jobs</Link>
        </div>
      </div>
    );
  }

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
        
        <motion.div
          className="pt-32 pb-20 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto">
            <Link to="/careers" className="inline-flex items-center text-gray-600 hover:text-black mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Careers
            </Link>
            
            <h1 className="text-4xl font-bold">{job.title}</h1>
            <p className="text-gray-600 mt-2">{job.location}</p>
            
            <div className="mt-12">
              <h2 className="text-lg font-semibold uppercase text-gray-500">TO APPLY</h2>
              <p className="mt-2">
                Send your CV and introduction to <a href="mailto:jobs@rrx.com" className="text-black hover:underline">jobs@rrx.com</a>
              </p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-lg font-semibold uppercase text-gray-500">SALARY</h2>
              <p className="mt-2">{job.salary}</p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-lg font-semibold uppercase text-gray-500">OVERVIEW</h2>
              <div className="mt-2 whitespace-pre-line">
                {job.overview}
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-lg font-semibold uppercase text-gray-500">RESPONSIBILITIES</h2>
              <ul className="mt-4 space-y-2">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <h2 className="text-lg font-semibold uppercase text-gray-500">REQUIREMENTS</h2>
              <ul className="mt-4 space-y-2">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        
        <Footer />
      </div>
    </div>
  );
};

export default JobDetail;
