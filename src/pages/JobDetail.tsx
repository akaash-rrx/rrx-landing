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
    title: 'UX Designer',
    location: 'Palo Alto, CA',
    salary: '$120,000 - $180,000 per year + equity',
    overview: `RRX builds systems that translate qualitative data into structured insight, helping organizations make better decisions. As a UX Designer, you'll help shape the interface layer of this complex engine, designing ways for users to engage with research outputs, simulated audiences, and evolving decision paths.

You’ll collaborate with product, engineering, and research teams to build an experience that’s both powerful and human-centered. Your work will make the difference between raw research and usable, actionable intelligence — and you’ll be central to helping our users navigate high-stakes questions with confidence.`,
    responsibilities: [
      'Design intuitive workflows that help users explore behavioral insights from studies',
      'Work with researchers and engineers to visualize abstract or multi-scale models',
      'Own interface design for internal tools and client-facing dashboards',
      'Establish and maintain a consistent design language across the platform'
    ],
    requirements: [
      '1+ years of experience in UX or product design roles',
      'Experience prototyping data-driven interfaces',
      'Strong systems thinking and ability to reduce complexity through design',
      'Comfort working with technical teams and engaging directly with research outputs'
    ]
  },
  'research-scientist': {
    id: 'research-scientist',
    title: 'Research Scientist',
    location: 'Palo Alto, CA',
    salary: '$160,000 - $220,000 per year + equity',
    overview: `At RRX, our core technology transforms raw qualitative data into structured, decision-grade insight. As a Research Scientist, you’ll develop the methodologies behind this transformation. Your work will directly influence how we design, execute, and analyze studies — and how we translate that into clear strategic recommendations.`,
    responsibilities: [
      'Design experiments and inference frameworks to quantify & understand human decision-making',
      'Develop and refine methods for drawing causal, predictive conclusions from qualitative data',
      'Collaborate with engineers to scale and design automated analysis pipelines',
    ],
    requirements: [
      'Research in a relevant field like computer science, math, or applied statistics',
      'Strong foundation in experimental design, statistical analysis, and quantitative modeling',
      'Ability to collaborate with product, engineering, and client-facing teams'
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
                Send your CV and introduction to <a href="mailto:contact@rrxresearch.com" className="text-black hover:underline">contact@rrxresearch.com</a>
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
