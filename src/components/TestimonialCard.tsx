
import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  stars: number;
  text: string;
  category: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  stars,
  text,
  category,
}) => {
  return (
    <Card className="p-6 backdrop-blur-lg bg-background border-muted hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-12 h-12 border border-muted">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < stars} />
        ))}
      </div>
      
      <blockquote className="text-sm mb-4">"{text}"</blockquote>
      
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground"
        >
          <path d="M17 6.1H3" />
          <path d="M21 12.1H3" />
          <path d="M15.1 18H3" />
        </svg>
        <span className="text-xs text-muted-foreground">{category}</span>
      </div>
    </Card>
  );
};

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={filled ? 'text-yellow-400' : 'text-muted'}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default TestimonialCard;
