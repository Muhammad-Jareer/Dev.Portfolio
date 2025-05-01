
import React from 'react';
import { Badge } from '@/components/ui/badge';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 h-full w-1 bg-gradient-to-b from-primary via-pink-500 to-yellow-400"></div>
      
      {/* Timeline Items */}
      <div className="space-y-16">
        {/* Experience 1 */}
        <div className="relative grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Timeline Node */}
          <div className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] w-4 h-4 rounded-full bg-primary glow-primary"></div>

          {/* Content */}
          <div className="md:text-right ml-6 md:ml-0 md:pr-10">
            <span className="inline-block text-pink-500">TechCorp Solutions</span>
            <h3 className="text-xl font-bold flex md:justify-end items-center gap-2">
              <span>Senior Frontend Developer</span>
              <span className="text-primary">{'</'}</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">2024 - Present</p>
            <p className="mt-4 text-sm">
              Led frontend development for enterprise applications, improving performance by 40% through optimization techniques.
            </p>
            <div className="flex gap-2 mt-4 flex-wrap md:justify-end">
              <Badge className="bg-pink-500/20 text-pink-500 hover:bg-pink-500/30">React</Badge>
              <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">TypeScript</Badge>
              <Badge className="bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/30">Next.js</Badge>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
        
        {/* Experience 2 */}
        <div className="relative grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Timeline Node */}
          <div className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] w-4 h-4 rounded-full bg-pink-500 glow-pink"></div>

          {/* Content */}
          <div className="hidden md:block"></div>
          <div className="ml-6 md:ml-0 md:pl-10">
            <span className="inline-block text-primary">InnovateTech Inc</span>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="hidden md:inline text-primary">{'/>'}</span>
              <span>Full Stack Developer</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">2022 - 2024</p>
            <p className="mt-4 text-sm">
              Developed and maintained multiple web applications, implementing new features and optimizing database performance.
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">Node.js</Badge>
              <Badge className="bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30">Vue.js</Badge>
              <Badge className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30">MongoDB</Badge>
            </div>
          </div>
        </div>
        
        {/* Experience 3 */}
        <div className="relative grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Timeline Node */}
          <div className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] w-4 h-4 rounded-full bg-yellow-400 glow-yellow"></div>

          {/* Content */}
          <div className="md:text-right ml-6 md:ml-0 md:pr-10">
            <span className="inline-block text-yellow-400">StartUp Labs</span>
            <h3 className="text-xl font-bold flex md:justify-end items-center gap-2">
              <span>Junior Developer</span>
              <span className="text-yellow-400">🚀</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">2021 - 2022</p>
            <p className="mt-4 text-sm">
              Started career developing responsive websites and contributing to mobile app development projects.
            </p>
            <div className="flex gap-2 mt-4 flex-wrap md:justify-end">
              <Badge className="bg-orange-500/20 text-orange-500 hover:bg-orange-500/30">JavaScript</Badge>
              <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">React Native</Badge>
              <Badge className="bg-gray-500/20 text-gray-500 hover:bg-gray-500/30">CSS</Badge>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
