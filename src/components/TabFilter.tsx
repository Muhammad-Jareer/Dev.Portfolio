
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

interface TabFilterProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (value: string) => void;
  className?: string;
}

const TabFilter: React.FC<TabFilterProps> = ({ 
  tabs, 
  activeTab, 
  onTabChange,
  className = ""
}) => {
  return (
    <motion.div 
      className={`flex justify-center my-8 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-auto">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger 
              key={tab.id} 
              value={tab.id}
              className="px-4 md:px-8"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {tab.label}
              </motion.span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </motion.div>
  );
};

export default TabFilter;
