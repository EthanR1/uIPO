import React from 'react';
import { motion } from 'framer-motion';
import { Fund } from '../../data/mockData';
import Sparkline from '../UI/Sparkline';

interface TickerStripProps {
  funds: Fund[];
  onFundClick: (fund: Fund) => void;
}

const TickerStrip: React.FC<TickerStripProps> = ({ funds, onFundClick }) => {
  return (
    <div className="bg-gray-50 border-y border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6 overflow-x-auto">
          <div className="flex-shrink-0 text-sm font-medium text-gray-700">
            Innovation Funds
          </div>
          <div className="flex space-x-6">
            {funds.map((fund) => (
              <motion.button
                key={fund.ticker}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onFundClick(fund)}
                className="flex-shrink-0 flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200 min-w-[200px]"
              >
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-900">
                    {fund.ticker}
                  </div>
                  <div className="text-xs text-gray-500">
                    {fund.assets} assets
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {fund.sparkline && (
                    <Sparkline data={fund.sparkline} width={40} height={16} />
                  )}
                  <div className="text-xs text-gray-500">
                    Updated 2m ago
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerStrip;