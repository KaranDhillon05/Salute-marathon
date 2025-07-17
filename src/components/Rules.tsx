'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, Users, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const Rules = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const rules = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Age Requirements",
      description: "Minimum age 16 years for 10K, 12 years for 5K (with adult supervision)",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Cut-off Time",
      description: "10K: 90 minutes, 5K: 60 minutes from start time",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bib Number",
      description: "Must be worn prominently on the front throughout the race",
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Medical Certificate",
      description: "Required for all participants above 45 years",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Start Time",
      description: "10K: 6:00 AM, 5K: 6:30 AM sharp",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety Protocol",
      description: "Follow marshals' instructions and stay within designated areas",
    },
  ];

  const faqs = [
    {
      question: "When and where can I collect my race kit?",
      answer: "Race kit collection will be available at Island Grounds from 4:00 PM to 8:00 PM on August 8th, 2025. You can also collect it on race day from 5:00 AM to 5:45 AM.",
    },
    {
      question: "What should I bring on race day?",
      answer: "Bring a valid photo ID, your registration confirmation, and wear comfortable running gear. We recommend bringing a water bottle and energy snacks if needed.",
    },
    {
      question: "Are there water stations along the route?",
      answer: "Yes, water stations will be available every 2.5 KM along the route. Medical support will also be stationed at regular intervals.",
    },
    {
      question: "Can I participate if I'm not a runner?",
      answer: "Absolutely! The 5K Safety Loop is designed for walkers, joggers, and families. It's about participation and supporting the cause, not just running.",
    },
    {
      question: "Is there a baggage drop facility?",
      answer: "Yes, we provide secure baggage drop facilities at the start/finish area. Please ensure your belongings are clearly labeled.",
    },
    {
      question: "What happens if it rains on race day?",
      answer: "The marathon will proceed rain or shine. In case of severe weather conditions, we will communicate any changes via email and social media.",
    },
    {
      question: "Are pets allowed on the race route?",
      answer: "For safety reasons, pets are not allowed on the race route. We appreciate your understanding.",
    },
    {
      question: "Can I change my race category after registration?",
      answer: "Category changes are possible until 48 hours before the race, subject to availability. Please contact our support team for assistance.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="rules" className="py-24 bg-gradient-to-br from-primary-light to-gray-50">
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
              Rules &{' '}
              <span className="gradient-text">Guidelines</span>
            </h2>
            <p className="text-xl sm:text-2xl text-text-gray max-w-4xl mx-auto leading-relaxed">
              Important information to ensure a safe and enjoyable race experience for everyone
            </p>
          </motion.div>

          {/* Rules Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-12 text-center">
              Race Rules
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rules.map((rule) => (
                <motion.div
                  key={rule.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex flex-col items-center mb-6">
                    <div className="bg-accent-red/10 p-4 rounded-full text-accent-red mb-4">
                      {rule.icon}
                    </div>
                    <h4 className="font-bold text-xl text-primary-dark mb-4">
                      {rule.title}
                    </h4>
                    <p className="text-text-gray text-lg leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants} id="faq">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-12 text-center">
              Frequently Asked Questions
            </h3>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    whileHover={{ backgroundColor: '#f8f9fa' }}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-primary-dark text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-6 w-6 text-text-gray" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-text-gray text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            variants={itemVariants}
            className="mt-20 bg-accent-red/10 border border-accent-red/20 rounded-lg p-10 text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <AlertCircle className="h-10 w-10 text-accent-red mr-4" />
              <h4 className="text-2xl sm:text-3xl font-bold text-accent-red">
                Important Notice
              </h4>
            </div>
            <p className="text-text-gray text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
              All participants run at their own risk. By registering, you acknowledge that you are 
              physically fit to participate and agree to follow all race rules and safety guidelines. 
              Medical support will be available throughout the event.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rules;