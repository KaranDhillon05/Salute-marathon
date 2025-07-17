'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Trophy, Medal, Shirt, IdCard, Award, Coffee } from 'lucide-react';

const RaceDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const raceCategories = [
    {
      name: "10K Pledge Run",
      price: "₹555",
      description: "For serious runners and fitness enthusiasts ready to lead the charge for a safer tomorrow.",
      duration: "~45-60 mins",
      difficulty: "Challenging",
      color: "accent-red",
      bgColor: "bg-accent-red",
      borderColor: "border-accent-red",
      icon: <Trophy className="h-8 w-8" />,
    },
    {
      name: "5K Safety Loop",
      price: "₹333",
      description: "Perfect for families, first-time runners, and everyone who wants to run or walk to show their support.",
      duration: "~25-40 mins",
      difficulty: "Moderate",
      color: "accent-gold",
      bgColor: "bg-accent-gold",
      borderColor: "border-accent-gold",
      icon: <Users className="h-8 w-8" />,
    },
  ];

  const entitlements = [
    {
      icon: <Shirt className="h-6 w-6" />,
      title: "Official Dry-Fit T-Shirt",
      description: "Premium quality athletic wear",
    },
    {
      icon: <IdCard className="h-6 w-6" />,
      title: "Timed Race Bib",
      description: "Professional timing system",
    },
    {
      icon: <Medal className="h-6 w-6" />,
      title: "Finisher&apos;s Medal",
      description: "Commemorative achievement medal",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Digital Certificate",
      description: "Shareable completion certificate",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Post-Race Refreshments",
      description: "Healthy snacks and beverages",
    },
  ];

  return (
    <section id="race-details" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark mb-8">
              Choose Your{' '}
              <span className="gradient-text">Distance</span>
            </h2>
            <p className="text-xl sm:text-2xl text-text-gray max-w-4xl mx-auto leading-relaxed">
              Whether you&apos;re a seasoned runner or taking your first step, there&apos;s a perfect distance for you to make a difference.
            </p>
          </motion.div>

          {/* Race Categories */}
          <div className="grid md:grid-cols-2 gap-12 mb-24 justify-center items-center">
            {raceCategories.map((race) => (
              <motion.div
                key={race.name}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${race.borderColor} relative overflow-hidden text-center`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`${race.bgColor} rounded-full w-full h-full transform translate-x-8 -translate-y-8`} />
                </div>

                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                  <div className={`${race.bgColor}/10 p-4 rounded-full text-${race.color} mb-6`}>
                    {race.icon}
                  </div>
                  <div className="text-center">
                    <div className={`text-4xl sm:text-5xl font-bold text-${race.color} mb-2`}>
                      {race.price}
                    </div>
                    <div className="text-lg text-text-gray">per person</div>
                  </div>
                </div>

                {/* Race Name */}
                <h3 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-6">
                  {race.name}
                </h3>

                {/* Description */}
                <p className="text-text-gray text-lg sm:text-xl mb-8 leading-relaxed">
                  {race.description}
                </p>

                {/* Race Details */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center justify-center text-text-gray">
                    <Clock className="h-5 w-5 mr-4 text-accent-gold" />
                    <span className="text-lg">Duration: {race.duration}</span>
                  </div>
                  <div className="flex items-center justify-center text-text-gray">
                    <Trophy className="h-5 w-5 mr-4 text-accent-gold" />
                    <span className="text-lg">Difficulty: {race.difficulty}</span>
                  </div>
                </div>

                {/* Register Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${race.bgColor} text-white py-5 rounded-lg font-bold text-xl hover:opacity-90 transition-all duration-300`}
                >
                  Register for {race.name}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Entitlements Section */}
          <motion.div
            variants={containerVariants}
            className="bg-gradient-to-br from-primary-dark to-gray-800 rounded-2xl p-10 sm:p-16 text-white"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Runner&apos;s Entitlements
              </h3>
              <p className="text-gray-300 text-xl sm:text-2xl">
                Every registered participant receives these exclusive benefits
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {entitlements.map((item) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-accent-gold/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center text-accent-gold">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-gray-300 text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Important Note */}
            <motion.div
              variants={itemVariants}
              className="mt-16 bg-accent-red/20 border border-accent-red/30 rounded-lg p-8 text-center"
            >
              <h4 className="text-2xl font-bold text-accent-gold mb-4">
                Important Information
              </h4>
              <p className="text-gray-300 text-lg">
                Registration includes all the above benefits. Additional amenities include water stations, 
                medical support, and professional photography throughout the race.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RaceDetails;