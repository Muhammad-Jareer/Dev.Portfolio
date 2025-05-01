import React from 'react'
import { Link } from 'react-router-dom'

const sections = [
  {
    path: '/education',
    title: 'Education',
    description: 'Academic background',
  },
  {
    path: '/certifications',
    title: 'Certifications',
    description: 'Professional credentials',
  },
  {
    path: '/skills',
    title: 'Skills',
    description: 'Technical expertise',
  },
  {
    path: '/platforms',
    title: 'Platforms',
    description: 'Working profiles',
  },
]

function NavigationSection() {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Explore My Portfolio</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {sections.map((section, index) => (
          <Link to={section.path} key={index}>
            <div className="p-6 bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="font-bold">{section.title}</h3>
              <p className="text-sm text-muted-foreground">{section.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavigationSection
