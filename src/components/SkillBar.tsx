
import React from 'react';

interface SkillBarProps {
  value: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ value, color = "#1080b0" }) => {
  return (
    <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  );
};

export default SkillBar;
