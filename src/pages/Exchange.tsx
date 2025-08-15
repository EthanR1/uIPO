import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { mockFunds, Fund } from '../data/mockData';
import FundCard from '../components/Exchange/FundCard';
import TickerStrip from '../components/Exchange/TickerStrip';
import FundDetailModal from '../components/Exchange/FundDetailModal';

const Exchange: React.FC = () => {
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFundClick = (fund: Fund) => {
    setSelectedFund(fund);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFund(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Syndicating the IPO for{' '}
              <span className="text-black">University Intellectual Property</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We package university IP into investable Innovation Funds so labs get funding now 
              and investors get defined upside rights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <button className="bg-black text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Browse Funds
              </button>
              <button className="border border-gray-300 text-gray-900 px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                See How It Works
              </button>
            </div>
            <p className="text-sm text-gray-500 italic">
              For illustration only; not an offer of securities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ticker Strip */}
      <TickerStrip funds={mockFunds} onFundClick={handleFundClick} />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:space-x-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Innovation Funds</h2>
              </div>

              {/* Fund Cards Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {mockFunds.map((fund, index) => (
                  <motion.div
                    key={fund.ticker}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <FundCard fund={fund} onClick={() => handleFundClick(fund)} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 mt-8 lg:mt-0 space-y-6">
              {/* Search */}
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search funds..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sector</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200">
                      <option>All Sectors</option>
                      <option>Biosciences</option>
                      <option>Aerospace</option>
                      <option>Climate/Energy</option>
                      <option>Quantum/Photonics</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">TRL Range</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200">
                      <option>All TRL Levels</option>
                      <option>1-3 (Early)</option>
                      <option>4-6 (Development)</option>
                      <option>7-9 (Advanced)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Patent Status</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-black transition-colors duration-200">
                      <option>All Patent Types</option>
                      <option>Issued</option>
                      <option>PCT Filed</option>
                      <option>Provisional</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Watchlist */}
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Watchlist</h3>
                <div className="text-sm text-gray-500 text-center py-8">
                  No funds in watchlist yet.<br />
                  Click the star icon on fund cards to add them.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Detail Modal */}
      <FundDetailModal
        fund={selectedFund}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Exchange;