import React from 'react'
import FloatingDecorativeCircle from '../FloatingDecorativeCircle'
import ProjectCard from '../ProjectCard'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function ProjectSection() {
  return (
    <>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
          
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A showcase of my latest work across various technologies and platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Analytics Dashboard"
                image="public/lovable-uploads/54bcc2be-3dc8-4212-b89b-8bc08041d5fb.png"
                description="Real-time data visualization platform with customizable widgets and interactive charts."
                tags={["React", "Node.js", "GraphQL"]}
                links={{
                  demo: "#",
                  code: "#"
                }}
              />
              
              <ProjectCard
                title="Fitness Tracker"
                image="public/lovable-uploads/9dcf1020-4c0d-4241-ad7d-8e46e950f62d.png"
                description="Mobile app for tracking workouts, nutrition, and personal fitness goals with AI recommendations."
                tags={["Flutter", "Firebase", "TensorFlow"]}
                links={{
                  demo: "#",
                  code: "#"
                }}
              />
              
              <ProjectCard
                title="E-Commerce Platform"
                image="public/lovable-uploads/3cfd058f-fc86-4e6d-b5e0-8bad63698bac.png"
                description="Modern e-commerce solution with real-time inventory, AI-powered recommendations, and seamless checkout."
                tags={["Next.js", "Stripe", "AWS"]}
                links={{
                  demo: "#",
                  code: "#"
                }}
              />
            </div>
            
            <div className="text-center mt-12">
              <Link to="/projects">
                <Button variant="outline" className="hover:scale-105 transition-all">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
    </>
  )
}

export default ProjectSection