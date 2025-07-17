'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Race Details', href: '#race-details' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Partners', href: '#partners' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl lg:text-3xl font-bold">
              <span className="text-accent-red">SALUTE</span>{' '}
              <span className="text-accent-gold">MARATHON</span>
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <motion.button
              onClick={() => scrollToSection('#about')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'text-sm font-medium transition-colors duration-200 px-6 py-2 mr-8',
                isScrolled 
                  ? 'text-primary-dark hover:text-accent-red' 
                  : 'text-white hover:text-accent-gold'
              )}
            >
              About
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#race-details')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'text-sm font-medium transition-colors duration-200 px-6 py-2 mr-8',
                isScrolled 
                  ? 'text-primary-dark hover:text-accent-red' 
                  : 'text-white hover:text-accent-gold'
              )}
            >
              Race Details
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#faq')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'text-sm font-medium transition-colors duration-200 px-6 py-2 mr-8',
                isScrolled 
                  ? 'text-primary-dark hover:text-accent-red' 
                  : 'text-white hover:text-accent-gold'
              )}
            >
              FAQ
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#partners')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'text-sm font-medium transition-colors duration-200 px-6 py-2 mr-12',
                isScrolled 
                  ? 'text-primary-dark hover:text-accent-red' 
                  : 'text-white hover:text-accent-gold'
              )}
            >
              Partners
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#race-details')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-red text-white px-8 py-3 rounded-full font-medium hover:bg-accent-red/90 transition-colors duration-200"
            >
              Register Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'p-2 rounded-md transition-colors duration-200',
                isScrolled 
                  ? 'text-primary-dark hover:text-accent-red' 
                  : 'text-white hover:text-accent-gold'
              )}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 5 }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:text-accent-red hover:bg-accent-red/10 transition-colors duration-200"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                <motion.button
                  onClick={() => scrollToSection('#race-details')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full mt-4 bg-accent-red text-white px-3 py-2 rounded-md text-base font-medium hover:bg-accent-red/90 transition-colors duration-200"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;