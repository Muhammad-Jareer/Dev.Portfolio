import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '@/hooks/useData';
import PageLayout from '@/components/PageLayout';
import SkillBar from '@/components/SkillBar';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';

interface Tag {
  id: number;
  name: string;
}

interface Skill {
  id: number;
  name: string;
  is_featured: boolean;
  percentage: number;
  description?: string;
  svg_icon?: string;
  tags: Tag[];
  label?: {
    id: number;
    name: string;
    percentage: number;
  };
}



const Skills: React.FC = () => {
  const { data: softData, loading: softLoading, error: softError } = useData('skills/soft-skills');
  const { data: techData, loading: techLoading, error: techError } = useData('skills/skills');

  const skillBarVariant = {
    hidden: { width: 0 },
    visible: (value: number) => ({
      width: `${value}%`,
      transition: { duration: 1, ease: 'easeOut' }
    })
  };

  if (softLoading || techLoading) return <p>Loading skills...</p>;
  if (softError || techError || !softData?.results || !techData?.results) {
    return <p>Error loading skills.</p>;
  }

  // Filter featured skills
  const softSkills = softData.results.filter((skill: Skill) => skill.is_featured);
  const featuredTechSkills = techData.results.filter((skill: Skill) => skill.is_featured);
  const categories = Array.from(new Set(featuredTechSkills.map((skill: Skill) => skill.tags[0]?.name)));

  const renderSoftSkills = () => (
    <AnimatedSection>
      <motion.div className="space-y-10">
        <motion.h3
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Soft Skills
        </motion.h3>
        <div className="space-y-8">
          {softSkills.map((skill: Skill, idx: number) => (
            <motion.div
              key={skill.id}
              className="space-y-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <div className="flex items-center gap-3">
                {skill.svg_icon && (
                  <span dangerouslySetInnerHTML={{ __html: skill.svg_icon }} />
                )}
                <h4 className="text-lg font-medium">{skill.name}</h4>
              </div>
              {skill.description && (
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              )}
              <motion.div
                custom={50}
                variants={skillBarVariant}
                initial="hidden"
                animate="visible"
              >
                <SkillBar value={50} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );

  const renderTechnicalSkills = () => (
    <AnimatedSection direction="right">
      <motion.div className="space-y-10">
        <motion.h3
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h3>

        {categories.map((category: string) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-medium mb-2">{category}</h4>
            {featuredTechSkills
              .filter((skill: Skill) => skill.tags[0]?.name === category)
              .map((skill: Skill) => (
                <div key={skill.id} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <motion.div
                    custom={skill.percentage}
                    variants={skillBarVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <SkillBar value={skill.percentage} />
                  </motion.div>
                </div>
              ))}
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );

  return (
    <PageLayout
      title="My Skill Set"
      description="Comprehensive overview of technical expertise and soft skills developed through years of professional experience."
      showBackButton
    >
      <AnimatedPage>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />

        <div className="grid md:grid-cols-2 gap-16">
          {renderSoftSkills()}
          {renderTechnicalSkills()}
        </div>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Skills;