
import PageLayout from '@/components/PageLayout';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { Button } from '@/components/ui/button';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';

const Experience = () => {
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

  return (
    <PageLayout 
      title="Professional Experience" 
      description="A journey through my professional career highlighting key roles and achievements."
      showBackButton
    >
      <AnimatedPage>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />
        
        <AnimatedSection>
          <ExperienceTimeline experience={professionalExperiences}/>
        </AnimatedSection>
              
        <AnimatedSection delay={0.2} className="text-center mt-12">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Button className="transition-all">
              Download Resume
            </Button>
          </motion.div>
        </AnimatedSection>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Experience;
