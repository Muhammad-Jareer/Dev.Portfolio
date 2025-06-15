import React, { useEffect, useState } from 'react'
import FloatingDecorativeCircle from '../FloatingDecorativeCircle'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import ProfileStats from '../ProfileStats'
import ParticlesBackground from '../ParticlesBackground'
import { motion, AnimatePresence } from 'framer-motion' // Added AnimatePresence
import { useInView } from 'react-intersection-observer'
import { useMediaQuery } from 'react-responsive'
import { useData } from '@/hooks/useData'

export default function Home() {
  // Fetch profile data (adjust the endpoint as needed)
  const { data, loading, error } = useData('profile')
  const [currentTagIndex, setCurrentTagIndex] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 })
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' })

  // Rotate through tag lines every 3 seconds
  useEffect(() => {
    if (!data || !data.tag_lines) return;
    const interval = setInterval(() => {
      setCurrentTagIndex((prev) => (prev + 1) % data.tag_lines.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading profile.</p>

  const { name, tag_lines, short_description, photo } = data
  const currentTag = tag_lines?.[currentTagIndex]?.text || ''

  return (
    <>
      {!isSmallDevice && (
        <FloatingDecorativeCircle className="absolute top-24 left-10 w-48 h-48 border-b" />
      )}
      {!isSmallDevice && (
        <ParticlesBackground
          direction="top"
          particleColors={["#107EAD"]}
          speed={3}
          number={15}
          opacity={0.4}
          shape="circle"
        />
      )}
      {!isSmallDevice && (
        <FloatingDecorativeCircle className="absolute bottom-24 right-10 w-48 h-48 border-t" />
      )}

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6 order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {name}
            <span className="block text-xl md:text-2xl text-primary font-normal mt-2 h-10 md:h-12 overflow-hidden relative">
              <AnimatePresence mode='wait'>
                <motion.span
                  key={currentTagIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute"
                >
                  {currentTag}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-muted-foreground text-lg max-w-md">
            {short_description}
          </p>

          <div className="flex gap-4 mt-4">
            <a href={data.resume_url || '#'} target="_blank" rel="noopener noreferrer">
              <Button className="px-6 hover:scale-105 transition-all">
                Download Resume
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" className="px-6 hover:scale-105 transition-all">
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <Avatar className="w-64 lg:w-80 h-64 lg:h-80 border-4 border-primary/20">
            <AvatarImage src={photo} alt={name} className="object-cover" />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>

      <ProfileStats />
    </>
  )
}