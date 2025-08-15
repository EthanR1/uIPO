import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  FileText, 
  DollarSign, 
  Clock, 
  Users, 
  ArrowRight
} from 'lucide-react';

const ForResearchers: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Immediate Funding',
      description: 'Get non-dilutive capital now, not years from now. Fund your research milestones without giving up equity or control.'
    },
    {
      icon: Users,
      title: 'Professional Validation',
      description: 'Institutional investors backing your work provides third-party validation of your innovation\'s commercial potential.'
    },
    {
      icon: Clock,
      title: 'Accelerated Timeline',
      description: 'Skip the lengthy grant application process. Get from initial submission to funding decision in weeks, not months.'
    }
  ];

  const eligibilityItems = [
    'Technology Readiness Level 3 or higher',
    'Clear intellectual property position (provisional patent minimum)',
    'Defined commercial application or market need',
    'University Technology Transfer Office approval',
    'Quantifiable development milestones'
  ];

  const submissionItems = [
    'Technical specification and current development status',
    'Intellectual property portfolio and filing strategy',
    'Market analysis and competitive landscape assessment',
    'Development roadmap with specific milestones',
    'Team qualifications and institutional support',
    'Financial requirements for next development phase'
  ];

  const receiveItems = [
    'Comprehensive valuation analysis with detailed methodology',
    'Professional investment memorandum for your technology',
    'Market positioning assessment and competitive analysis',
    'Funding package proposal with milestone-based disbursement',
    'Connection to relevant industry partners and potential licensees'
  ];

  const timelineSteps = [
    { stage: 'Initial Submission', duration: '1 week', description: 'Complete survey and submit supporting materials' },
    { stage: 'Technical Review', duration: '2-3 weeks', description: 'Deep-dive analysis by sector experts' },
    { stage: 'Valuation & Packaging', duration: '1-2 weeks', description: 'Financial modeling and fund integration' },
    { stage: 'Fund Launch', duration: '2-4 weeks', description: 'Marketing to institutional investors' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Immediate, non-dilutive funding for your lab
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Turn your breakthrough research into institutional investment. Get the funding you need 
              to advance your innovation without giving up ownership or control.
            </p>
            <button className="bg-black text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Start Survey</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose uIPO?
            </h2>
            <p className="text-gray-600">
              The advantages of our approach over traditional funding methods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Eligibility</h3>
              </div>
              <ul className="space-y-3">
                {eligibilityItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What You Submit */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">What You Submit</h3>
              </div>
              <ul className="space-y-3">
                {submissionItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <ArrowRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* What You Receive */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white rounded-2xl p-8 border border-gray-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <DollarSign className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">What You Receive</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {receiveItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-gray-600">
              From submission to funding in 6-10 weeks
            </p>
          </motion.div>

          <div className="space-y-6">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center space-x-6 p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.stage}
                    </h3>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Ready to fund your innovation?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join leading researchers who are already using our platform to 
              accelerate their path from lab to market.
            </p>
            <button className="bg-white text-black px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Start Your Submission</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForResearchers;