import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  BarChart3, 
  FileText, 
  Download,
  ArrowRight,
  Target,
  Clock,
  Users
} from 'lucide-react';

const ForInvestors: React.FC = () => {
  const rightsStructures = [
    {
      type: 'Royalty Payments',
      description: 'Percentage of revenue from licensing agreements and product sales',
      example: '3-8% of net revenues from licensed products'
    },
    {
      type: 'Milestone Payments',
      description: 'Fixed payments tied to specific development and commercial milestones',
      example: '$500K upon FDA approval, $1M upon first commercial sale'
    },
    {
      type: 'Spinout Equity',
      description: 'Equity stakes in companies formed around the university technology',
      example: '15-25% equity in exchange for commercialization funding'
    },
    {
      type: 'Revenue Sharing',
      description: 'Direct participation in commercialization revenues',
      example: '20% of licensing revenues after cost recovery'
    }
  ];

  const riskFactors = [
    'Technology development risk and regulatory approval timelines',
    'Market adoption uncertainty for early-stage innovations',
    'Competitive landscape changes and alternative technology emergence',
    'University commercialization capabilities and partnership execution',
    'Intellectual property validity and potential infringement claims',
    'Liquidity constraints and limited secondary market availability'
  ];

  const reportingItems = [
    'Quarterly technical progress reports with milestone tracking',
    'Patent filing updates and IP portfolio developments',
    'Partnership and licensing negotiation status',
    'Financial performance metrics and milestone achievement',
    'Market analysis updates and competitive intelligence',
    'Annual third-party technology assessment reviews'
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
              Curated exposure to university innovation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access professionally managed Innovation Funds that provide diversified exposure 
              to breakthrough university research with defined upside rights and transparent reporting.
            </p>
            <button className="bg-black text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Request Access</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Investment Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investment Advantages
            </h2>
            <p className="text-gray-600">
              Why institutional investors choose uIPO Innovation Funds
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
                Professional Curation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expert evaluation and selection of university innovations with rigorous due diligence 
                and independent third-party validation of commercial potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Diversified Exposure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Balanced portfolios across sectors, development stages, and universities, 
                reducing single-asset risk while maintaining upside potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Transparent Structure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Clear rights structures, regular reporting, and standardized documentation 
                provide institutional-grade transparency and governance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rights Structures */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rights Structures
            </h2>
            <p className="text-gray-600">
              Multiple pathways to returns aligned with technology development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rightsStructures.map((structure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {structure.type}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {structure.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <span className="text-sm font-medium text-gray-500">Example:</span>
                  <div className="text-sm text-gray-700 mt-1">
                    {structure.example}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Risk Factors
            </h2>
            <p className="text-gray-600">
              Important considerations for potential investors
            </p>
          </motion.div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <ul className="space-y-4">
              {riskFactors.map((risk, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{risk}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Reporting Cadence
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Regular, comprehensive reporting keeps you informed of portfolio progress 
                and milestone achievement across all fund holdings.
              </p>
              
              <div className="space-y-4">
                {reportingItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Sample Materials
              </h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-gray-500" />
                    <span className="font-medium text-gray-900">Sample Asset Sheet</span>
                  </div>
                  <Download className="h-5 w-5 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-5 w-5 text-gray-500" />
                    <span className="font-medium text-gray-900">Quarterly Report Example</span>
                  </div>
                  <Download className="h-5 w-5 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-gray-500" />
                    <span className="font-medium text-gray-900">Risk Assessment Framework</span>
                  </div>
                  <Download className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </motion.div>
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
              Ready to explore Innovation Funds?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join qualified investors who are already accessing curated university 
              innovation through our professional platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-black px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2">
                <span>Request Access</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-900 transition-colors duration-200 inline-flex items-center justify-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Schedule Demo</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForInvestors;