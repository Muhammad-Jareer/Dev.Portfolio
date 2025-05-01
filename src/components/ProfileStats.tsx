
import React from 'react';
import { Card } from '@/components/ui/card';

const ProfileStats: React.FC = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="7+" label="Years Experience" />
        <StatCard value="50+" label="Projects Completed" />
        <StatCard value="20+" label="Happy Clients" />
        <StatCard value="15+" label="Open Source Contributions" />
      </div>
    </div>
  );
};

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  return (
    <Card className="p-4 text-center backdrop-blur-lg bg-card/60 border-muted hover:shadow-lg transition-shadow group">
      <p className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
        {value}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </Card>
  );
};

export default ProfileStats;
