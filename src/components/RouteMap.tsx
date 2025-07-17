'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Flag } from 'lucide-react';

const RouteMap = () => {
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

  const routePoints = [
    {
      id: 1,
      name: "Start Point",
      location: "Island Grounds",
      description: "Race begins at the main entrance",
      icon: <Flag className="h-5 w-5" />,
      color: "bg-green-500",
    },
    {
      id: 2,
      name: "Checkpoint 1",
      location: "Napier Bridge",
      description: "First major landmark crossing",
      icon: <Navigation className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "Checkpoint 2",
      location: "Fort St. George",
      description: "Historic fort complex",
      icon: <MapPin className="h-5 w-5" />,
      color: "bg-purple-500",
    },
    {
      id: 4,
      name: "Finish Line",
      location: "Island Grounds",
      description: "Return to starting point",
      icon: <Flag className="h-5 w-5" />,
      color: "bg-accent-red",
    },
  ];

  const routeDetails = [
    {
      step: "Start",
      description: "Begin your journey at Island Grounds main entrance",
      distance: "0 KM",
      time: "00:00",
    },
    {
      step: "Head North",
      description: "Exit Island Grounds and proceed towards Napier Bridge",
      distance: "1.5 KM",
      time: "~10 min",
    },
    {
      step: "Cross Bridge",
      description: "Traverse the iconic Napier Bridge with scenic views",
      distance: "3 KM",
      time: "~20 min",
    },
    {
      step: "Fort Complex",
      description: "Enter the historic Fort St. George area",
      distance: "4.5 KM",
      time: "~30 min",
    },
    {
      step: "Return Journey",
      description: "Complete the loop back to Island Grounds",
      distance: "7.5 KM",
      time: "~45 min",
    },
    {
      step: "Finish",
      description: "Cross the finish line at Island Grounds",
      distance: "10 KM",
      time: "~60 min",
    },
  ];

  return (
    <section id="route" className="py-24 bg-gradient-to-br from-primary-dark to-gray-800 text-white">
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              The Historic{' '}
              <span className="gradient-text">Fort Circuit</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience Chennai&apos;s most iconic landmarks as you run through history, 
              culture, and the heart of the city.
            </p>
          </motion.div>

          {/* Route Visualization */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* SVG Route Map */}
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-10"
            >
              <h3 className="text-3xl font-bold mb-8 text-center">Route Overview</h3>
              
              <div className="relative">
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  {/* Background Grid */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Route Path */}
                  <path
                    d="M 100 200 Q 150 150 200 100 Q 250 80 300 120 Q 320 160 280 200 Q 200 240 100 200"
                    fill="none"
                    stroke="url(#routeGradient)"
                    strokeWidth="4"
                    strokeDasharray="5,5"
                  />
                  
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a4202c" />
                      <stop offset="50%" stopColor="#f7c53b" />
                      <stop offset="100%" stopColor="#a4202c" />
                    </linearGradient>
                  </defs>
                  
                  {/* Route Points */}
                  <motion.circle
                    cx="100" cy="200" r="8"
                    fill="#10b981"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                  <motion.circle
                    cx="200" cy="100" r="6"
                    fill="#3b82f6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 }}
                  />
                  <motion.circle
                    cx="300" cy="120" r="6"
                    fill="#8b5cf6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 }}
                  />
                  <motion.circle
                    cx="100" cy="200" r="8"
                    fill="#a4202c"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1 }}
                  />
                  
                  {/* Labels */}
                  <text x="70" y="185" fill="white" fontSize="12" fontWeight="bold">Start/Finish</text>
                  <text x="165" y="90" fill="white" fontSize="10">Napier Bridge</text>
                  <text x="250" y="110" fill="white" fontSize="10">Fort St. George</text>
                </svg>
              </div>
            </motion.div>

            {/* Route Points List */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl font-bold mb-8 text-center">Key Landmarks</h3>
              
              {routePoints.map((point) => (
                <motion.div
                  key={point.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center space-x-6"
                >
                  <div className={`${point.color} p-3 rounded-full text-white`}>
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{point.name}</h4>
                    <p className="text-accent-gold text-lg">{point.location}</p>
                    <p className="text-gray-300">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Detailed Route Description */}
          <motion.div
            variants={containerVariants}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Step-by-Step Guide</h3>
              <p className="text-gray-300 text-xl">
                Follow this detailed breakdown of your journey through Chennai&apos;s historic circuit
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {routeDetails.map((detail) => (
                <motion.div
                  key={detail.step}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-lg p-8 border border-white/10 text-center"
                >
                  <div className="flex flex-col items-center mb-4">
                    <h4 className="font-bold text-xl text-accent-gold mb-2">{detail.step}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Clock className="h-4 w-4" />
                      <span>{detail.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-lg">{detail.description}</p>
                  <div className="text-accent-red font-bold text-lg">{detail.distance}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-accent-red/20 border border-accent-red/30 rounded-lg p-8 text-center"
          >
            <h4 className="text-2xl font-bold text-accent-gold mb-4">
              Route Information
            </h4>
            <p className="text-gray-300 text-lg">
              Water stations will be available every 2.5 KM. Medical support and volunteers 
              will be stationed at all major checkpoints. The route is fully marshalled for your safety.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RouteMap;