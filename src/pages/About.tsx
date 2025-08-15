import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { value: '$50M+', label: 'University IP Evaluated' },
    { value: '100+', label: 'Innovations Assessed' },
    { value: '15+', label: 'University Partners' },
    { value: '95%', label: 'Investor Satisfaction' }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former Goldman Sachs VP with 12+ years in structured finance and university partnerships.',
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Chief Technology Officer', 
      bio: 'PhD in Computer Science, former CTO at two successful tech transfer startups.',
    },
    {
      name: 'Jennifer Liu',
      role: 'Head of Research',
      bio: 'Former McKinsey partner specializing in innovation economics and IP valuation.',
    },
    {
      name: 'David Thompson',
      role: 'Head of Investor Relations',
      bio: '15+ years managing institutional relationships at Blackstone and KKR.',
    }
  ];

  const advisors = [
    {
      name: 'Dr. Robert Kim',
      role: 'University Relations',
      affiliation: 'Former VP, MIT Technology Transfer'
    },
    {
      name: 'Lisa Martinez',
      role: 'Capital Markets',
      affiliation: 'Former MD, J.P. Morgan Private Bank'
    },
    {
      name: 'Professor James Wilson',
      role: 'Academic Advisory',
      affiliation: 'Stanford Technology Ventures Program'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <Building2 className="h-16 w-16 text-black" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bloomberg Terminal + Nasdaq for university research
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the capital markets infrastructure that connects breakthrough 
              university research with institutional investment, creating sustainable funding 
              for innovation while delivering defined returns to investors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                University research is underfunded and undervalued. Brilliant innovations 
                sit in labs for years without the capital needed for development and 
                commercialization. Meanwhile, investors lack access to professionally 
                curated university IP with transparent risk assessment.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We solve both problems by creating Innovation Funds that package university 
                IP into investable instruments, providing immediate non-dilutive funding 
                to researchers while offering institutional investors diversified exposure 
                to breakthrough technology with defined upside rights.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-200">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Three pillars that differentiate our platform and methodology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rigorous Evaluation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proprietary modeling combines technical assessment, patent analysis, 
                market sizing, and regulatory pathway evaluation to generate defensible valuations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Professional Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experienced team from leading investment banks, consulting firms, 
                and technology transfer offices ensures institutional-grade execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Transparent Operations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Regular reporting, standardized documentation, and clear governance 
                provide the transparency institutional investors require.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600">
              Experienced professionals from finance, technology, and academia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-200"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <p className="text-gray-600">
              Strategic guidance from industry leaders and academic experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200"
              >
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {advisor.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium mb-2">
                  {advisor.role}
                </p>
                <p className="text-sm text-gray-500">
                  {advisor.affiliation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Ready to join the future of university innovation?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a researcher, investor, or university administrator, 
              we'd love to discuss how our platform can help.
            </p>
            <button className="bg-white text-black px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;