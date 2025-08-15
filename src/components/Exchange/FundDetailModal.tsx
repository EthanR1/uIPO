import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { Fund, mockAssets } from '../../data/mockData';
import Badge from '../UI/Badge';

interface FundDetailModalProps {
  fund: Fund | null;
  isOpen: boolean;
  onClose: () => void;
}

const FundDetailModal: React.FC<FundDetailModalProps> = ({ fund, isOpen, onClose }) => {
  if (!fund) return null;

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

  // Mock assets for the fund
  const fundAssets = mockAssets.filter(asset => 
    asset.sector.toLowerCase().includes(fund.sector?.toLowerCase() || 'flagship') ||
    fund.ticker === 'uCU' // Flagship fund includes all assets
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={onClose}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {fund.name}
                    </h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="default">{fund.ticker}</Badge>
                      <span className="text-gray-500 text-sm">{fund.thesis}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                    Request Access
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    aria-label="Close fund details"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Snapshot Bar */}
                <div className="p-6 bg-gray-50 border-b border-gray-200">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Assets</div>
                      <div className="text-lg font-bold text-gray-900">{fund.assets}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">TRL Mix</div>
                      <div className="text-lg font-bold text-gray-900">{fund.trl_mix}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Patents</div>
                      <div className="text-lg font-bold text-gray-900">
                        {fund.patent_mix.issued}I / {fund.patent_mix.pct}P
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Modeled rNPV</div>
                      <div className="text-lg font-bold text-gray-900">
                        {formatCurrency(fund.rnpv_range_usd[0])}-{formatCurrency(fund.rnpv_range_usd[1])}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Rights</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {fund.rights.slice(0, 2).map((right) => (
                          <Badge key={right} variant="outline" size="sm">
                            {rightsLabels[right]?.split(' ')[0] || right}
                          </Badge>
                        ))}
                        {fund.rights.length > 2 && (
                          <span className="text-xs text-gray-500">+{fund.rights.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Holdings Table */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Holdings</h3>
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        <Download className="h-4 w-4" />
                        <span>Sample Asset Sheet</span>
                      </button>
                      <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        <Download className="h-4 w-4" />
                        <span>Methodology</span>
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                          <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">TRL</th>
                          <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Patent Status</th>
                          <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
                          <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">rNPV Band</th>
                          <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Key Risks</th>
                          <th className="text-left p-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Rights</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {fundAssets.map((asset, index) => (
                          <tr key={asset.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="p-3 text-sm font-medium text-gray-900">
                              {asset.name}
                            </td>
                            <td className="p-3 text-sm text-gray-900">
                              {asset.trl}
                            </td>
                            <td className="p-3 text-sm text-gray-900">
                              {asset.patent_status}
                            </td>
                            <td className="p-3 text-sm text-gray-900">
                              {asset.sector}
                            </td>
                            <td className="p-3 text-sm font-medium text-gray-900">
                              {asset.rnpv_band}
                            </td>
                            <td className="p-3 text-sm text-gray-600">
                              {asset.key_risks}
                            </td>
                            <td className="p-3">
                              <div className="flex flex-wrap gap-1">
                                {asset.rights_structure.slice(0, 2).map((right) => (
                                  <Badge key={right} variant="outline" size="sm">
                                    {rightsLabels[right]?.split(' ')[0] || right}
                                  </Badge>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Rights Structure Diagram */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Rights Structure</h3>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <strong>Investor</strong>
                      </div>
                      <div className="text-gray-400">→</div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <strong>Fund (Syndicate)</strong>
                      </div>
                      <div className="text-gray-400">→</div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <strong>University/Lab</strong>
                      </div>
                      <div className="text-gray-400">→</div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <strong>Commercialization</strong>
                      </div>
                      <div className="text-gray-400">→</div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <strong>Distributions</strong>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4 text-xs text-gray-600">
                    Returns via Royalty, Milestones, Spinout Equity, and Revenue Sharing
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FundDetailModal;