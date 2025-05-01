import React from 'react'
import ExperienceTimeline from '../ExperienceTimeline'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import FloatingDecorativeCircle from '../FloatingDecorativeCircle'
import ParticlesBackground from '../ParticlesBackground'

function ExperienceSection() {
  return (
    <>
        <FloatingDecorativeCircle className="absolute top-24 left-10 w-48 h-48" />
        <FloatingDecorativeCircle className="absolute bottom-24 right-10 w-48 h-48" />
        <ParticlesBackground direction="top" particleColors={["#107EAD"]} speed={3} number={15} opacity={0.4} shape='circle' />
          
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A journey through my professional career highlighting key roles and achievements.
              </p>
            </div>
            
            <ExperienceTimeline />
            
            <div className="text-center mt-12">
              <Link to="/experience">
                <Button className="hover:scale-105 transition-all">
                  View Full Experience
                </Button>
              </Link>
            </div>
          </div>
    </>
  )
}

export default ExperienceSection