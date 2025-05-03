import React, { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const experiences = [
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

const ExperienceTimeline: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Timeline Line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary via-pink-500 to-yellow-400" />

      <div className="space-y-16">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative grid md:grid-cols-2 gap-6 md:gap-10"
          >
            <div className={`absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full ${exp.nodeColor}`} />
            {/* Left or right content based on idx */}
            {idx % 2 === 0 ? (
              <>
                <div className="md:text-right ml-6 md:ml-0 md:pr-10">
                  <span className="inline-block text-gradient">{exp.company}</span>
                  <h3 className="text-xl font-bold flex md:justify-end items-center gap-2">
                    <span>{exp.title}</span>
                    {idx === 0 && <span className="text-primary">{'</>'}</span>}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  <p className="mt-4 text-sm">{exp.description}</p>
                  <div className="flex gap-2 mt-4 flex-wrap md:justify-end">
                    {exp.badges.map((b, i) => <Badge key={i} className={b.colorClass}>{b.label}</Badge>)}
                  </div>
                </div>
                <div className="hidden md:block" />
              </>
            ) : (
              <>
                <div className="hidden md:block" />
                <div className="ml-6 md:ml-0 md:pl-10">
                  <span className="inline-block text-gradient">{exp.company}</span>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="hidden md:inline text-primary">{'/>'}</span>
                    <span>{exp.title}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  <p className="mt-4 text-sm">{exp.description}</p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {exp.badges.map((b,i)=><Badge key={i} className={b.colorClass}>{b.label}</Badge>)}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;