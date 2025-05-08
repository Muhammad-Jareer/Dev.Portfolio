import React, { useEffect, useState } from 'react';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';

// Wrap Button with framer-motion for animation
const MotionButton = motion(Button);

// Animation containers
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const contactDetails = [
  {
    type: 'Phone',
    value: '(123) 456-7890',
    icon: <FiPhone className="text-primary" size={20} aria-hidden="true" />,
  },
  {
    type: 'Email',
    value: 'contact@example.com',
    icon: <FiMail className="text-primary" size={20} aria-hidden="true" />,
  },
  {
    type: 'Location',
    value: 'San Francisco, CA',
    icon: <FiMapPin className="text-primary" size={20} aria-hidden="true" />,
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourprofile',
    icon: <FiGithub size={24} aria-hidden="true" />,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    icon: <FiLinkedin size={24} aria-hidden="true" />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourprofile',
    icon: <FiTwitter size={24} aria-hidden="true" />,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/yourprofile',
    icon: <FiInstagram size={24} aria-hidden="true" />,
  },
];

const ContactSections: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [inView, controls]);

  // For client-side validation (basic)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.values(newErrors).every(err => !err);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Submit logic here
      console.log(formData);
    }
  };

  return (
    <div className="relative py-16" lang="en">
      {!isSmallDevice && (
       <>
        <FloatingDecorativeCircle className="absolute top-24 right-10 w-64 h-64" />
        <FloatingDecorativeCircle className="absolute bottom-24 left-10 w-48 h-48" />
       </>
      )}

      <motion.div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 sm:p-8 backdrop-blur-lg bg-card/60 border-muted hover:shadow-xl transition-shadow">
              <form
                role="form"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4 sm:space-y-6"
              >
                {['name', 'email'].map((field) => (
                  <motion.div key={field} variants={itemVariants}>
                    <label htmlFor={field} className="block text-sm font-medium mb-1">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      aria-required="true"
                      aria-invalid={!!errors[field]}
                      aria-describedby={`${field}-error`}
                      placeholder={
                        field === 'email' ? 'you@example.com' : 'Your name'
                      }
                      value={formData[field as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className={`w-full px-4 py-2 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all ${
                        errors[field] ? 'border-red-500' : ''
                      }`}
                    />
                    {errors[field] && (
                      <p id={`${field}-error`} className="text-sm text-red-600 mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby="message-error"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-4 py-2 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-red-600 mt-1">
                      {errors.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants} className="pt-2">
                  <MotionButton
                    type="submit"
                    className="w-full py-3 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    Send Message
                  </MotionButton>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <Card className="p-6 sm:p-8 backdrop-blur-lg bg-card/60 border-muted hover:shadow-xl transition-shadow">
              {contactDetails.map(({ type, value, icon }) => (
                <motion.div
                  key={type}
                  variants={itemVariants}
                  className="flex items-start gap-4 mb-6"
                >
                  <span className="mt-1">{icon}</span>
                  <div>
                    <h4 className="text-sm font-medium">{type}</h4>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                </motion.div>
              ))}

              <motion.h3 variants={itemVariants} className="text-sm font-medium mb-4">
                Connect on Social Media
              </motion.h3>

              <div className="flex gap-4">
                {socialLinks.map(({ name, href, icon }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${name} page`}
                    title={name}
                    className="text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
                    variants={itemVariants}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSections;
