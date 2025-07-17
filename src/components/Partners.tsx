'use client';

import { motion } from 'framer-motion';
import { Building, Heart, Users, Award } from 'lucide-react';

const Partners = () => {
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

  // Placeholder sponsor data
  const titleSponsors = [
    {
      name: "Title Sponsor",
      description: "Main Event Partner",
      icon: <Award className="h-8 w-8" />,
      tier: "title",
    },
    {
      name: "Co-Title Sponsor",
      description: "Supporting Partner",
      icon: <Building className="h-8 w-8" />,
      tier: "title",
    },
  ];

  const goldSponsors = [
    {
      name: "Gold Sponsor 1",
      description: "Premium Partner",
      icon: <Heart className="h-6 w-6" />,
      tier: "gold",
    },
    {
      name: "Gold Sponsor 2",
      description: "Premium Partner",
      icon: <Users className="h-6 w-6" />,
      tier: "gold",
    },
    {
      name: "Gold Sponsor 3",
      description: "Premium Partner",
      icon: <Building className="h-6 w-6" />,
      tier: "gold",
    },
  ];

  const silverSponsors = [
    {
      name: "Silver Partner 1",
      description: "Supporting Partner",
      icon: <Users className="h-5 w-5" />,
      tier: "silver",
    },
    {
      name: "Silver Partner 2",
      description: "Supporting Partner",
      icon: <Heart className="h-5 w-5" />,
      tier: "silver",
    },
    {
      name: "Silver Partner 3",
      description: "Supporting Partner",
      icon: <Building className="h-5 w-5" />,
      tier: "silver",
    },
    {
      name: "Silver Partner 4",
      description: "Supporting Partner",
      icon: <Award className="h-5 w-5" />,
      tier: "silver",
    },
  ];

  const communityPartners = [
    {
      name: "Community Partner 1",
      description: "Local Support",
      icon: <Users className="h-4 w-4" />,
      tier: "community",
    },
    {
      name: "Community Partner 2",
      description: "Local Support",
      icon: <Heart className="h-4 w-4" />,
      tier: "community",
    },
    {
      name: "Community Partner 3",
      description: "Local Support",
      icon: <Building className="h-4 w-4" />,
      tier: "community",
    },
    {
      name: "Community Partner 4",
      description: "Local Support",
      icon: <Award className="h-4 w-4" />,
      tier: "community",
    },
    {
      name: "Community Partner 5",
      description: "Local Support",
      icon: <Users className="h-4 w-4" />,
      tier: "community",
    },
    {
      name: "Community Partner 6",
      description: "Local Support",
      icon: <Heart className="h-4 w-4" />,
      tier: "community",
    },
  ];

  interface Sponsor {
    name: string;
    description: string;
    icon: React.ReactNode;
    tier: string;
  }

  const SponsorCard = ({ sponsor, size = "default" }: { sponsor: Sponsor; size?: "large" | "default" | "small" }) => {
    const sizeClasses = {
      large: "h-32 text-lg",
      default: "h-24 text-base",
      small: "h-20 text-sm",
    };

    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.05, y: -5 }}
        className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center text-center border-2 border-gray-100 ${sizeClasses[size]}`}
      >
        <div className="bg-accent-red/10 p-3 rounded-full text-accent-red mb-3">
          {sponsor.icon}
        </div>
        <h4 className={`font-bold text-primary-dark mb-1 ${size === 'large' ? 'text-lg' : size === 'small' ? 'text-sm' : 'text-base'}`}>
          {sponsor.name}
        </h4>
        <p className="text-text-gray text-xs">
          {sponsor.description}
        </p>
      </motion.div>
    );
  };

  return (
    <section id="partners" className="py-24 bg-white">
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
              Our Pillars of{' '}
              <span className="gradient-text">Support</span>
            </h2>
            <p className="text-xl sm:text-2xl text-text-gray max-w-4xl mx-auto leading-relaxed">
              We&apos;re grateful to our partners who share our vision of creating a safer tomorrow. 
              Together, we&apos;re making this marathon a reality.
            </p>
          </motion.div>

          {/* Title Sponsors */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-12 text-center">
              Title Sponsors
            </h3>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {titleSponsors.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} size="large" />
              ))}
            </div>
          </motion.div>

          {/* Gold Sponsors */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-12 text-center">
              Gold Partners
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {goldSponsors.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} />
              ))}
            </div>
          </motion.div>

          {/* Silver Sponsors */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-12 text-center">
              Silver Partners
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {silverSponsors.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} />
              ))}
            </div>
          </motion.div>

          {/* Community Partners */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-12 text-center">
              Community Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {communityPartners.map((sponsor, index) => (
                <SponsorCard key={index} sponsor={sponsor} size="small" />
              ))}
            </div>
          </motion.div>

          {/* Become a Partner CTA */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary-dark to-gray-800 rounded-2xl p-10 sm:p-16 text-white text-center"
          >
            <motion.div
              variants={containerVariants}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="mb-12">
                <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                  Become a Partner
                </h3>
                <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed">
                  Join us in making a difference in our community. Partner with the Salute Marathon 
                  and help us create a safer tomorrow while gaining valuable brand exposure.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <Users className="h-12 w-12 text-accent-gold mx-auto mb-4" />
                  <h4 className="font-bold text-xl mb-4">Community Impact</h4>
                  <p className="text-gray-300 text-lg">
                    Support meaningful causes and make a real difference
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <Award className="h-12 w-12 text-accent-gold mx-auto mb-4" />
                  <h4 className="font-bold text-xl mb-4">Brand Visibility</h4>
                  <p className="text-gray-300 text-lg">
                    High-exposure marketing opportunities
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <Heart className="h-12 w-12 text-accent-gold mx-auto mb-4" />
                  <h4 className="font-bold text-xl mb-4">CSR Excellence</h4>
                  <p className="text-gray-300 text-lg">
                    Enhance your corporate social responsibility profile
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-red text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-accent-red/90 transition-colors duration-300"
                >
                  Partner With Us
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;