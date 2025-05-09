import React from 'react'
import FloatingDecorativeCircle from '../FloatingDecorativeCircle'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import ProfileStats from '../ProfileStats'
import ParticlesBackground from '../ParticlesBackground'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useMediaQuery } from 'react-responsive'

function Home() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  
  // Check if the screen width is less than 768px (small devices)
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
    {!isSmallDevice && (
        <FloatingDecorativeCircle className="absolute top-24 left-10 w-24 h-24 border-r" />
    )}
      
      {!isSmallDevice && (
        <ParticlesBackground 
          direction="top" 
          particleColors={["#107EAD"]} 
          speed={3} 
          number={15} 
          opacity={0.4} 
          shape='circle' 
        />
      )}
      
      {!isSmallDevice && (
        <FloatingDecorativeCircle className="absolute bottom-24 right-10 w-48 h-48 border-t" />
      )}
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6 order-2 md:order-1"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <Avatar className="w-64 lg:w-80 h-64 lg:h-80 border-4 border-primary/20">
            <AvatarImage
              src="/lovable-uploads/jerry-768.avif"
              srcSet="/lovable-uploads/jerry-512.avif 512w, /lovable-uploads/jerry-768.avif 768w, /lovable-uploads/jerry-1024.avif 1024w"
              sizes="(max-width: 640px) 512px, (max-width: 1024px) 768px, 1024px"
              alt="John Anderson"
              fetchPriority="high"
              className="object-cover"
            />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>

      <ProfileStats />
    </>
  )
}

export default Home
