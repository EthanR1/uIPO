import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calculator, 
  Package, 
  TrendingUp, 
  DollarSign,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const HowItWorks: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      icon: FileText,
      title: 'Researchers Complete Survey',
      description: 'Complete a comprehensive 25-30 question survey about your innovation, including technical details, market potential, and development status.'
    },
    {
      icon: Calculator,
      title: 'Valuation Modeling',
      description: 'Our model calculates a ranked, defensible valuation using probability-adjusted returns and sector-specific risk factors.'
    },
    {
      icon: Package,
      title: 'Fund Creation',
      description: 'uIPO packages complementary assets into themed Innovation Funds, creating diversified investment syndicates for institutional investors.'
    },
    {
      icon: TrendingUp,
      title: 'Live Offering',
      description: 'Qualified investors can access the Innovation Funds, with capital directly funding research milestones and commercialization activities.'
    },
    {
      icon: DollarSign,
      title: 'Rights & Returns',
      description: 'Investors receive defined upside rights while universities get immediate non-dilutive funding for continued research and development.'
    }
  ];

  const faqs = [
    {
      question: 'How is IP ownership and confidentiality protected?',
      answer: 'Universities retain full ownership of their intellectual property. All submissions are protected by comprehensive confidentiality agreements, and only aggregate, anonymized data is used in fund marketing materials unless specifically authorized.'
    },
    {
      question: 'What types of rights structures are available?',
      answer: 'We offer four primary rights structures: (1) Royalty payments from licensing deals, (2) Milestone payments tied to development progress, (3) Equity in spinout companies, and (4) Revenue sharing from commercialization activities. Most funds use a combination of these structures.'
    },
    {
      question: 'How are valuations computed?',
      answer: 'Our proprietary model uses Monte Carlo simulations incorporating technology readiness levels, patent strength, market size, regulatory pathways, and historical sector outcomes. All valuations are probability-adjusted and peer-reviewed by independent experts.'
    },
    {
      question: 'What is the milestone reporting cadence?',
      answer: 'Research teams provide quarterly updates on technical progress, patent filings, partnership developments, and commercialization activities. Major milestones trigger immediate reporting to investors.'
    },
    {
      question: 'How can my university participate?',
      answer: 'University technology transfer offices can register their institution on our platform. Individual researchers can then submit innovations through their TTO, ensuring proper institutional oversight and compliance with university policies.'
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A new capital markets model that connects university research with institutional investment, 
              creating sustainable funding for innovation while providing defined returns for investors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-12 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about our platform and process
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you're a researcher with groundbreaking technology or an investor 
              looking for curated innovation exposure, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                For Researchers
              </button>
              <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                For Investors
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;