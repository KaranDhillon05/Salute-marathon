'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-gray-800 to-primary-dark" />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <circle cx="800" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
          <circle cx="400" cy="600" r="80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <circle cx="1000" cy="100" r="120" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4"
        >
          <span className="block">
            <span className="text-accent-red">SALUTE</span>
          </span>
          <span className="block text-accent-gold">
            MARATHON
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
        >
          Run for a Safer Tomorrow
        </motion.p>

        {/* Event Details */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white mb-8"
        >
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-accent-gold" />
            <span className="text-lg font-medium">August 9, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent-gold" />
            <span className="text-lg font-medium">Island Grounds, Chennai</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-accent-gold" />
            <span className="text-lg font-medium">Youth Wing of Lions Clubs</span>
          </div>
        </motion.div>

        {/* Theme */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            A marathon dedicated to raising awareness for Women&apos;s Safety and Drug Awareness
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <motion.button
            onClick={() => scrollToSection('#race-details')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-red text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-accent-red/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Register Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          whileHover={{ scale: 1.1 }}
          className="text-white hover:text-accent-gold transition-colors duration-300 flex flex-col items-center gap-2"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-accent-gold rounded-full opacity-20" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-accent-red rounded-full opacity-20" />
      <div className="absolute top-1/2 left-5 w-12 h-12 border-2 border-accent-gold rounded-full opacity-15" />
      <div className="absolute top-1/3 right-5 w-14 h-14 border-2 border-accent-red rounded-full opacity-15" />
    </section>
  );
};

export default Hero;