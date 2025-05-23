import PageLayout from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedPage from '@/components/AnimatedPage';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const inputVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  };

  const contactInfoVariants = {
    initial: { opacity: 0, x: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + custom * 0.1,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  };

  const contactCards = [
      {
        type: 'Phone',
        value: '(123) 456-7890',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        ),
        animateProps: { whileHover: { rotate: 15 } }
      },
      {
        type: 'Email',
        value: 'contact@example.com',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        ),
        animateProps: { whileHover: { scale: 1.2 } }
      },
      {
        type: 'Location',
        value: 'San Francisco, CA',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
        animateProps: { animate: { y: [0, -3, 0] }, transition: { repeat: Infinity, duration: 2 } }
      }
]

const inputFields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' }
  ]

  const socialIcons = [
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'LinkedIn', icon: <FaLinkedin /> },
    { name: 'Twitter', icon: <FaTwitter /> },
    { name: 'Instagram', icon: <FaInstagram /> }
  ];

  return (
    <PageLayout
      title="Get In Touch"
      description="Have a project in mind or want to collaborate? Feel free to reach out!"
      showBackButton
    >
      <AnimatedPage>
        <FloatingDecorativeCircle className="hidden md:block absolute top-24 right-10 w-64 h-64" aria-hidden="true" />
        <FloatingDecorativeCircle className="hidden md:block absolute bottom-24 left-10 w-48 h-48" aria-hidden="true" />

        {/* Add horizontal padding on mobile to prevent overflow */}
        <div className="px-0 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <Card className="w-full max-w-full p-6 sm:p-8 backdrop-blur-lg bg-card/60 border-muted hover:shadow-xl transition-shadow">
                <form className="space-y-6">
                  {inputFields.map((field, idx) => (
                    <motion.div
                      key={field.id}
                      className="space-y-2"
                      variants={inputVariants}
                      initial="initial"
                      animate="animate"
                      custom={idx + 1}
                    >
                      <label htmlFor={field.id} className="block text-sm font-medium">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        className="w-full box-border px-4 py-2 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                        placeholder={field.placeholder}
                        aria-required="true"
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    className="space-y-2"
                    variants={inputVariants}
                    initial="initial"
                    animate="animate"
                    custom={3}
                  >
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full box-border px-4 py-2 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="Write your message here..."
                      aria-required="true"
                    />
                  </motion.div>

                  <motion.div
                    variants={inputVariants}
                    initial="initial"
                    animate="animate"
                    custom={4}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                      <Button type="submit" className="w-full hover:scale-105 transition-all">
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card className="w-full max-w-full p-6 sm:p-8 backdrop-blur-lg bg-card/60 border-muted hover:shadow-xl transition-shadow">
                <div className="space-y-6">
                  <motion.h3
                    className="text-xl font-bold mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Contact Information
                  </motion.h3>

                  {/* Contact items */}
                  {contactCards.map((item, idx) => (
                    <motion.div
                      key={item.type}
                      className="flex items-start gap-4"
                      variants={contactInfoVariants}
                      initial="initial"
                      animate="animate"
                      custom={idx + 1}
                    >
                      <motion.span className="text-primary mt-1" {...item.animateProps} aria-hidden="true">
                        {item.icon}
                      </motion.span>
                      <div>
                        <h4 className="text-sm font-medium">{item.type}</h4>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Social Icons */}
                  <motion.div
                    className="pt-6"
                    variants={contactInfoVariants}
                    initial="initial"
                    animate="animate"
                    custom={4}
                  >
                    <h4 className="text-sm font-medium mb-4">Connect on Social Media</h4>
                    <div className="flex gap-4 items-center flex-wrap">
                      {socialIcons.map((social, idx) => (
                        <motion.a
                          key={social.name}
                          href="#"
                          aria-label={`Visit our ${social.name}`}
                          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                          whileHover={{ y: -5, scale: 1.2 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                        >
                          {social.icon}
                          <span className="ml-2 text-sm">{social.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedPage>
    </PageLayout>
  );
};

export default Contact;
