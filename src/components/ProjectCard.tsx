
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    code?: string;
    app?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  links,
}) => {
  return (
    <Card className="overflow-hidden group backdrop-blur-lg bg-card/60 border-muted hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 relative">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" style={{
        background: 'linear-gradient(45deg, rgba(16, 128, 176, 0.1) 0%, rgba(251, 235, 91, 0.1) 50%, rgba(244, 114, 182, 0.1) 100%)',
        boxShadow: '0 0 20px rgba(16, 128, 176, 0.2), 0 0 20px rgba(251, 235, 91, 0.1), 0 0 20px rgba(244, 114, 182, 0.1)',
      }}></div>
      
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-muted text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-4 pt-2">
          {links.demo && (
            <a
              href={links.demo}
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
          
          {links.app && (
            <a
              href={links.app}
              className="text-xs text-pink-500 hover:underline flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="14" x2="23" y2="14" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="14" x2="4" y2="14" />
              </svg>
              App Store
            </a>
          )}
          
          {links.code && (
            <a
              href={links.code}
              className="text-xs text-muted-foreground hover:underline flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              View Code
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
