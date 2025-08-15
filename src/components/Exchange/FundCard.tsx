import React from 'react';
import { motion } from 'framer-motion';
import { Fund } from '../../data/mockData';
import Badge from '../UI/Badge';

interface FundCardProps {
  fund: Fund;
  onClick: () => void;
}

const FundCard: React.FC<FundCardProps> = ({ fund, onClick }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      notation: 'compact'
    }).format(amount);
  };

  const rightsLabels: Record<string, string> = {
    royalty: 'Royalty',
    milestones: 'Milestones',
    spinout_equity: 'Spinout Equity',
    revenue_share: 'Revenue Share'
  };

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer hover:border-gray-300 transition-colors duration-200"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {fund.name}
          </h3>
          <Badge variant="default" size="sm">
            {fund.ticker}
          </Badge>
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-3 mb-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">TRL Mix:</span>
            <span className="ml-2 font-medium text-gray-900">{fund.trl_mix}</span>
          </div>
          <div>
            <span className="text-gray-500">Assets:</span>
            <span className="ml-2 font-medium text-gray-900">{fund.assets}</span>
          </div>
        </div>
        
        <div className="text-sm">
          <span className="text-gray-500">Patents:</span>
          <span className="ml-2 font-medium text-gray-900">
            {fund.patent_mix.issued} Issued / {fund.patent_mix.pct} PCT
          </span>
        </div>

        <div className="text-sm">
          <span className="text-gray-500">Modeled rNPV:</span>
          <span className="ml-2 font-medium text-gray-900">
            {formatCurrency(fund.rnpv_range_usd[0])}–{formatCurrency(fund.rnpv_range_usd[1])}
          </span>
        </div>
      </div>

      {/* Thesis */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {fund.thesis}
      </p>

      {/* Rights Structure */}
      <div className="space-y-2">
        <div className="text-xs text-gray-500 font-medium">Rights Structure</div>
        <div className="flex flex-wrap gap-2">
          {fund.rights.map((right) => (
            <Badge key={right} variant="outline" size="sm">
              {rightsLabels[right] || right}
            </Badge>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-900 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
          View Fund
        </button>
      </div>
    </motion.div>
  );
};

export default FundCard;