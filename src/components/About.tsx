'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, Users, Target } from 'lucide-react';

const About = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-primary-light to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark mb-8">
              A Run with a{' '}
              <span className="gradient-text">Resolute Purpose</span>
            </h2>
            <p className="text-xl sm:text-2xl text-text-gray max-w-4xl mx-auto leading-relaxed">
              On August 9th, we don&apos;t just run. We take a stand. The Salute Marathon is a 
              city-wide movement dedicated to two of the most critical issues facing our 
              community today.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Women's Safety Column */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div className="bg-accent-red/10 p-4 rounded-full mb-6 w-20 h-20 mx-auto flex items-center justify-center">
                  <Shield className="h-12 w-12 text-accent-red" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-primary-dark">
                  For Her Safety
                </h3>
              </div>
              <p className="text-text-gray text-lg leading-relaxed mb-8 text-center">
                We run to champion the right of every woman to feel safe in our city. 
                This is our collective voice, a powerful stride towards a future free from fear.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-text-gray">
                  <div className="w-3 h-3 bg-accent-red rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Raising awareness about women&apos;s safety</span>
                </div>
                <div className="flex items-center text-text-gray">
                  <div className="w-3 h-3 bg-accent-red rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Building a supportive community</span>
                </div>
                <div className="flex items-center text-text-gray">
                  <div className="w-3 h-3 bg-accent-red rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Promoting gender equality</span>
                </div>
              </div>
            </motion.div>

            {/* Drug Awareness Column */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div className="bg-accent-gold/10 p-4 rounded-full mb-6 w-20 h-20 mx-auto flex items-center justify-center">
                  <Heart className="h-12 w-12 text-accent-gold" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-primary-dark">
                  For Their Future
                </h3>
              </div>
              <p className="text-text-gray text-lg leading-relaxed mb-8 text-center">
                We run to protect our youth from the grip of drugs. This is our pledge 
                to foster a healthier, stronger generation and build a drug-free Chennai.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-text-gray">
                  <div className="w-3 h-3 bg-accent-gold rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Educating about drug prevention</span>
                </div>
                <div className="flex items-center text-text-gray">
                  <div className="w-3 h-3 bg-accent-gold rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Supporting rehabilitation efforts</span>
                </div>
                <div className="flex items-center text-text-gray">
                  <div className="w-3 h-3 bg-accent-gold rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg">Creating a healthier society</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Statistics/Impact Section */}
          <motion.div
            variants={containerVariants}
            className="bg-white rounded-2xl p-10 sm:p-16 text-black shadow-lg"
          >
            <div className="text-center mb-12">
              <motion.h3
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold mb-6 text-black"
              >
                Join the Movement
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-black text-xl sm:text-2xl"
              >
                Together, we can create lasting change in our community
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-accent-red/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-10 w-10 text-accent-red" />
                </div>
                <h4 className="text-2xl font-bold text-black mb-4">Community Unity</h4>
                <p className="text-black text-lg">
                  Bringing together people from all walks of life
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-accent-gold/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-10 w-10 text-accent-gold" />
                </div>
                <h4 className="text-2xl font-bold text-black mb-4">Clear Mission</h4>
                <p className="text-black text-lg">
                  Focused on creating real, measurable impact
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="bg-accent-red/10 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-accent-red" />
                </div>
                <h4 className="text-2xl font-bold text-black mb-4">Lasting Change</h4>
                <p className="text-black text-lg">
                  Building a safer tomorrow for future generations
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;