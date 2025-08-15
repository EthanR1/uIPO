import React, { useState } from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { Fund, mockAssets } from '../../data/mockData';
import Sparkline from '../UI/Sparkline';
import Badge from '../UI/Badge';

interface MarketTapeProps {
  funds: Fund[];
}

const MarketTape: React.FC<MarketTapeProps> = ({ funds }) => {
  const [activeTab, setActiveTab] = useState<'funds' | 'assets'>('funds');

  const formatLastUpdate = () => {
    const now = new Date();
    const minutes = Math.floor(Math.random() * 10) + 1;
    return `${minutes}m ago`;
  };

  const getMilestoneTag = (ticker: string) => {
    const milestones: Record<string, string> = {
      'uCU-BIO': 'CLIA Validation',
      'uCU-CLIM': 'Pilot MOU',
      'uCU-QP': 'Stability 2×',
      'uCU-AERO': 'Flight Test',
      'uCU': 'Patent Filed'
    };
    return milestones[ticker] || 'Milestone';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
          <TrendingUp className="h-5 w-5" />
          <span>Market Tape</span>
        </h3>
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('funds')}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
              activeTab === 'funds' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Funds
          </button>
          <button
            onClick={() => setActiveTab('assets')}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
              activeTab === 'assets' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Assets
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {activeTab === 'funds' ? (
          // Funds View
          funds.map((fund) => (
            <div key={fund.ticker} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-semibold text-sm text-gray-900">{fund.ticker}</div>
                  <div className="text-xs text-gray-500">{fund.assets} assets</div>
                </div>
                <div className="flex items-center space-x-2">
                  {fund.sparkline && (
                    <Sparkline data={fund.sparkline} width={40} height={16} />
                  )}
                </div>
              </div>
              <div className="text-right space-y-1">
                <Badge variant="secondary" size="sm">
                  {getMilestoneTag(fund.ticker)}
                </Badge>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{formatLastUpdate()}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Assets View
          mockAssets.slice(0, 4).map((asset) => (
            <div key={asset.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div>
                <div className="font-semibold text-sm text-gray-900 truncate max-w-32">
                  {asset.name}
                </div>
                <div className="text-xs text-gray-500">TRL {asset.trl} • {asset.sector}</div>
              </div>
              <div className="text-right space-y-1">
                <div className="text-sm font-medium text-gray-900">{asset.rnpv_band}</div>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{formatLastUpdate()}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200 text-center">
        <div className="text-xs text-gray-500">
          Data updates every 15 minutes during market hours
        </div>
      </div>
    </div>
  );
};

export default MarketTape;