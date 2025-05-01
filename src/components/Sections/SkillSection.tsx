import React from 'react'
import FloatingDecorativeCircle from '../FloatingDecorativeCircle'
import SkillBar from '../SkillBar'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

function SkillSection() {
  return (
    <>
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-64 h-64" />
          
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skill Set</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive overview of technical expertise and soft skills developed through years of professional experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-10">
                <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-yellow-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l1.8 5.8h5.9l-4.7 3.5 1.8 5.8-4.8-3.5-4.7 3.5 1.8-5.8L4 7.8h5.9L12 2z" />
                        </svg>
                      </span>
                      <h4 className="text-lg font-medium">Leadership</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Team management & project coordination</p>
                    <SkillBar value={85} color="#3498db" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-pink-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                        </svg>
                      </span>
                      <h4 className="text-lg font-medium">Communication</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Clear & effective communication</p>
                    <SkillBar value={90} color="#e74c3c" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
                          <path d="M12 3v2" />
                          <path d="M12 19v2" />
                          <path d="M3 12h2" />
                          <path d="M19 12h2" />
                          <path d="m18.364 5.636-1.414 1.414" />
                          <path d="m5.636 18.364 1.414-1.414" />
                          <path d="m18.364 18.364-1.414-1.414" />
                          <path d="m5.636 5.636 1.414 1.414" />
                        </svg>
                      </span>
                      <h4 className="text-lg font-medium">Problem Solving</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Analytical & creative solutions</p>
                    <SkillBar value={80} color="#f1c40f" />
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Link to="/skills">
                    <Button variant="outline" className="hover:scale-105 transition-all">
                      View All Skills
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="space-y-10">
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium mb-4">Frontend Development</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>React</span>
                          <span>95%</span>
                        </div>
                        <SkillBar value={95} color="#61dafb" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Vue.js</span>
                          <span>85%</span>
                        </div>
                        <SkillBar value={85} color="#42b883" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">Backend Development</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Node.js</span>
                          <span>90%</span>
                        </div>
                        <SkillBar value={90} color="#68a063" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Python</span>
                          <span>80%</span>
                        </div>
                        <SkillBar value={80} color="#3572A5" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-[#333] text-white px-3 py-1">Git</Badge>
                      <Badge variant="secondary" className="bg-[#2496ED] text-white px-3 py-1">Docker</Badge>
                      <Badge variant="secondary" className="bg-[#FF9900] text-white px-3 py-1">AWS</Badge>
                      <Badge variant="secondary" className="bg-[#326CE5] text-white px-3 py-1">Kubernetes</Badge>
                      <Badge variant="secondary" className="bg-[#D24939] text-white px-3 py-1">Jenkins</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default SkillSection