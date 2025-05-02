import React from 'react'
import FloatingDecorativeCircle from '../FloatingDecorativeCircle'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { HoverAnimatedAvatar } from '../HoverAnimatedAvatar'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import ProfileStats from '../ProfileStats'
import ParticlesBackground from '../ParticlesBackground'

function Home() {
  return (
    <>
    <FloatingDecorativeCircle className="absolute top-24 left-10 w-64 h-64 border-r" />
    <ParticlesBackground direction="top" particleColors={["#107EAD"]} speed={3} number={15} opacity={0.4} shape='circle' />
        <FloatingDecorativeCircle className="absolute bottom-24 right-10 w-48 h-48 border-t" />
        
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              John Anderson
              <span className="block text-xl md:text-2xl text-primary font-normal mt-2">
                Full Stack Developer
              </span>
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-md">
              Crafting digital experiences with code and creativity. 
              Specialized in building modern web applications with 
              cutting-edge technologies.
            </p>
            
            <div className="flex gap-4 mt-4">
              <Button className="px-6 hover:scale-105 transition-all">
                Download Resume
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="px-6 hover:scale-105 transition-all">
                  Contact Me 
                </Button>
              </Link>
            </div>
            
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <HoverAnimatedAvatar hoverImageSrc="https://i.ebayimg.com/images/g/jQQAAOSw8ExhBN2N/s-l400.jpg" hoverImageAlt="Overlay">
              <Avatar className="w-64 lg:w-80 h-64 lg:h-80 border-4 border-primary/20">
                <AvatarImage src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTj5CCclt9z38PpMbRnqFflmHpiMkbSJwMdaC9vFxsIWqVjQnJf" alt="John Anderson" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
            </HoverAnimatedAvatar>

          </div>
        </div>
        
        <ProfileStats />
    </>
  )
}

export default Home