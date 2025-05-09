import React, { useEffect, useState } from 'react';
import ExperienceTimeline from '../ExperienceTimeline';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import FloatingDecorativeCircle from '../FloatingDecorativeCircle';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

// Stagger container
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

// Header animation
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Button animation
const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } }
};

const ExperienceSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });
  const [activeTab, setActiveTab] = useState<'professional' | 'technical'>('professional');

  const professionalExperiences = [
    {
      company: 'TechCorp Solutions',
      title: 'Senior Frontend Developer',
      period: '2024 - Present',
      description: 'Led frontend development for enterprise applications, improving performance by 40% through optimization techniques.',
      badges: [
        { label: 'React',     colorClass: 'bg-pink-500/20 text-pink-500 hover:bg-pink-500/30' },
        { label: 'TypeScript',colorClass: 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30' },
        { label: 'Next.js',    colorClass: 'bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/30' },
      ],
      nodeColor: 'bg-primary glow-primary',
    },
    {
      company: 'InnovateTech Inc',
      title: 'Full Stack Developer',
      period: '2022 - 2024',
      description: 'Developed and maintained multiple web applications, implementing new features and optimizing database performance.',
      badges: [
        { label: 'Node.js',   colorClass: 'bg-green-500/20 text-green-500 hover:bg-green-500/30' },
        { label: 'Vue.js',    colorClass: 'bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30' },
        { label: 'MongoDB',   colorClass: 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30' },
      ],
      nodeColor: 'bg-pink-500 glow-pink',
    },
    {
      company: 'StartUp Labs',
      title: 'Junior Developer',
      period: '2021 - 2022',
      description: 'Started career developing responsive websites and contributing to mobile app development projects.',
      badges: [
        { label: 'JavaScript',colorClass: 'bg-orange-500/20 text-orange-500 hover:bg-orange-500/30' },
        { label: 'React Native',colorClass:'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30' },
        { label: 'CSS',       colorClass: 'bg-gray-500/20 text-gray-500 hover:bg-gray-500/30' },
      ],
      nodeColor: 'bg-yellow-400 glow-yellow',
    },
  ];

  const technicalExperiences = [
    {
      company: 'Component Library',
      title: 'Built Custom Design System',
      period: '2023',
      description: 'Designed and implemented a reusable component library in Storybook, standardizing UI patterns across projects.',
      badges: [
        { label: 'Tailwind CSS', colorClass: 'bg-teal-500/20 text-teal-500 hover:bg-teal-500/30' },
        { label: 'Storybook',    colorClass: 'bg-purple-500/20 text-purple-500 hover:bg-purple-500/30' },
        { label: 'Figma',        colorClass: 'bg-indigo-500/20 text-indigo-500 hover:bg-indigo-500/30' },
      ],
      nodeColor: 'bg-cyan-400 glow-cyan',
    },
    {
      company: 'Performance Audit',
      title: 'Web Vitals Optimization',
      period: '2022',
      description: 'Conducted Lighthouse & Web Vitals audits on client sites; cut TTFB by 50% and improved CLS and LCP metrics.',
      badges: [
        { label: 'Lighthouse',    colorClass: 'bg-red-500/20 text-red-500 hover:bg-red-500/30' },
        { label: 'Webpack',       colorClass: 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30' },
        { label: 'Workbox',       colorClass: 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30' },
      ],
      nodeColor: 'bg-green-400 glow-green',
    },
    {
      company: 'CI/CD Pipeline',
      title: 'Automated Deployments',
      period: '2021',
      description: 'Set up GitHub Actions pipelines for testing, linting, and deploy to Vercel & Netlify, reducing manual errors.',
      badges: [
        { label: 'GitHub Actions',colorClass: 'bg-gray-700/20 text-gray-700 hover:bg-gray-700/30' },
        { label: 'Docker',        colorClass: 'bg-blue-600/20 text-blue-600 hover:bg-blue-600/30' },
        { label: 'Vercel',        colorClass: 'bg-purple-600/20 text-purple-600 hover:bg-purple-600/30' },
      ],
      nodeColor: 'bg-blue-300 glow-blue',
    },
  ];
  

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  return (
    <>
      {isSmallDevice && (
        <>
          <FloatingDecorativeCircle className="absolute bottom-24 right-10 w-32 h-32" />
          <FloatingDecorativeCircle className="absolute top-24 left-10 w-48 h-48" />
        </>
      )}

      <motion.div
        ref={ref}
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={headerVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional career highlighting key roles and achievements.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 text-base sm:text-lg">
          <button
            onClick={() => setActiveTab('professional')}
            className={`px-4 py-2 mx-2 rounded-t-lg ${
              activeTab === 'professional' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-4 py-2 mx-2 rounded-t-lg ${
              activeTab === 'technical' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Technical
          </button>
        </div>

        {/* Content based on tab */}
        {activeTab === 'professional' ? (
          <ExperienceTimeline experience={professionalExperiences} />
        ) : (
          <ExperienceTimeline experience={technicalExperiences} />
        )}

        <motion.div variants={buttonVariants} className="text-center mt-12">
          <Link to="/experience">
            <Button className="hover:scale-105 transition-all">View Full Experience</Button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ExperienceSection;
