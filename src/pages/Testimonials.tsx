import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import TestimonialCard from '@/components/TestimonialCard';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import TabFilter from '@/components/TabFilter';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { useData } from '@/hooks/useData';

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('all');
  const { data, loading, error } = useData('testimonials');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'freelance', label: 'Freelance' },
    { id: 'opensource', label: 'Open Source' }
  ];

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } } };

  if (loading) return <p>Loading testimonials...</p>;
  if (error || !data?.results) return <p>Error loading testimonials.</p>;

  // filter based on active tab and project_type.name
  const filtered = data.results.filter((t: any) => {
    if (activeTab === 'all') return true;
    const key = activeTab === 'opensource' ? 'Open Source' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
    return t.project_type.name.toLowerCase().includes(key.toLowerCase());
  });

  return (
    <PageLayout title="Client Testimonials" description="What people say about working with me." showBackButton>
      <AnimatedPage>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />

        <AnimatedSection>
          <TabFilter tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </AnimatedSection>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6" variants={container} initial="hidden" animate="show">
          {filtered.map((t, idx) => (
            <motion.div key={t.id} variants={item}>
              <AnimatedSection delay={0.1 * idx}>
                <TestimonialCard
                  name={t.client_name}
                  role={t.client_designation}
                  image={t.client_image_url || '/default-avatar.png'}
                  stars={t.rating}
                  text={t.description || 'No comment provided.'}
                  category={t.project_type.name}
                />
              </AnimatedSection>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.5} className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Button variant="outline" className="transition-all">Add Your Testimonial</Button>
          </motion.div>
        </AnimatedSection>
      </AnimatedPage>
    </PageLayout>
  );
}
