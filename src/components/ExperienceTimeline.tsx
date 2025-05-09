import React, { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define the shape of each experience item
export interface Experience {
  company: string;
  title: string;
  period: string;
  description: string;
  badges: { label: string; colorClass: string }[];
  nodeColor: string;
}

// Props for the timeline component
interface ExperienceTimelineProps {
  experience: Experience[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experience }) => {
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
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative grid md:grid-cols-2 gap-6 md:gap-10"
          >
            <div className={`absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full ${exp.nodeColor}`} />
            {/* Left or right content based on index parity */}
            {idx % 2 === 0 ? (
              <>
                <div className="md:text-right ml-6 md:ml-0 md:pr-10">
                  <span className="inline-block text-gradient">{exp.company}</span>
                  <h3 className="text-xl font-bold flex md:justify-end items-center gap-2">
                    <span>{exp.title}</span>
                    {idx === 0 && <span className="text-primary">{`</>`}</span>}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  <p className="mt-4 text-sm">{exp.description}</p>
                  <div className="flex gap-2 mt-4 flex-wrap md:justify-end">
                    {exp.badges.map((b, i) => (
                      <Badge key={i} className={b.colorClass}>{b.label}</Badge>
                    ))}
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
                    {exp.badges.map((b, i) => (
                      <Badge key={i} className={b.colorClass}>{b.label}</Badge>
                    ))}
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
