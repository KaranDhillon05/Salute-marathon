'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <div className="h-5 w-5 bg-white rounded-sm flex items-center justify-center text-xs font-bold text-gray-800">f</div>, href: '#' },
    { name: 'Twitter', icon: <div className="h-5 w-5 bg-white rounded-sm flex items-center justify-center text-xs font-bold text-gray-800">t</div>, href: '#' },
    { name: 'Instagram', icon: <div className="h-5 w-5 bg-white rounded-sm flex items-center justify-center text-xs font-bold text-gray-800">i</div>, href: '#' },
    { name: 'LinkedIn', icon: <div className="h-5 w-5 bg-white rounded-sm flex items-center justify-center text-xs font-bold text-gray-800">in</div>, href: '#' },
  ];

  const quickLinks = [
    { name: 'About the Marathon', href: '#about' },
    { name: 'Race Details', href: '#race-details' },
    { name: 'Route Map', href: '#route' },
    { name: 'Rules & FAQ', href: '#rules' },
    { name: 'Partners', href: '#partners' },
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'info@salutemarathon.com',
      href: 'mailto:info@salutemarathon.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Venue',
      value: 'Island Grounds, Chennai',
      href: '#',
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-gray-900 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2 text-center">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-4xl font-bold mb-6"
              >
                <span className="text-accent-red">SALUTE</span>{' '}
                <span className="text-accent-gold">MARATHON</span>
              </motion.h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Every Step Towards Safety. Join us on August 9th, 2025, for a marathon 
                dedicated to raising awareness for Women&apos;s Safety and Drug Awareness. 
                Together, we run for a safer tomorrow.
              </p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/10 p-4 rounded-full hover:bg-accent-red/20 transition-colors duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center">
              <h4 className="text-2xl font-bold mb-8 text-accent-gold">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-accent-gold transition-colors duration-200 text-lg"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center">
              <h4 className="text-2xl font-bold mb-8 text-accent-gold">Contact Info</h4>
              <div className="space-y-6">
                {contactInfo.map((contact) => (
                  <motion.div
                    key={contact.label}
                    whileHover={{ x: 5 }}
                    className="flex items-start justify-center space-x-4"
                  >
                    <div className="text-accent-red mt-1">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      {contact.href && contact.href !== '#' ? (
                        <a
                          href={contact.href}
                          className="text-gray-300 hover:text-accent-gold transition-colors duration-200 text-lg"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-lg">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Organizer Information */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-white/20 pt-12 mb-12"
          >
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">Event Organizer</h4>
              <p className="text-gray-300 mb-6 text-xl">
                Organized by the Youth Wing of Lions Clubs International
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg text-gray-400">
                <span>Event Coordinator: Leo Paul Jeevanesan</span>
                <span className="hidden sm:block">|</span>
                <span>Phone: +91 98765 43210</span>
                <span className="hidden sm:block">|</span>
                <span>Email: leo.paul@example.com</span>
              </div>
            </div>
          </motion.div>

          {/* VIP Guests */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-lg p-10 mb-12"
          >
            <h4 className="text-2xl font-bold mb-8 text-center text-accent-gold">
              Distinguished Guests
            </h4>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <p className="font-semibold text-white text-xl">Thiru Ma. Subramanian</p>
                <p className="text-gray-400 text-lg">Hon&apos;ble Minister for Health and Family Welfare</p>
                <p className="text-accent-gold text-sm">Confirmed</p>
              </div>
              <div>
                <p className="font-semibold text-white text-xl">Thiru Udhayanidhi Stalin</p>
                <p className="text-gray-400 text-lg">Hon&apos;ble Deputy Chief Minister</p>
                <p className="text-accent-gold text-sm">Invited</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-white/20 pt-12 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-gray-400 text-lg">
                © 2025 Salute Marathon. All rights reserved.
              </p>
              <div className="flex items-center gap-3 text-lg text-gray-400">
                <span>Made with</span>
                <Heart className="h-5 w-5 text-accent-red" />
                <span>for a safer tomorrow</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;