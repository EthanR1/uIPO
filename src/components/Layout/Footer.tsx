import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-sm text-gray-600 space-y-4">
          <div className="max-w-4xl">
            <strong className="text-gray-900">Important Disclaimer:</strong> This website and its contents are for informational purposes only and do not constitute an offer or solicitation of securities. Any offering will be made solely to qualified and accredited investors through definitive offering documents. Past performance is not indicative of future results. All investments involve risk of loss. Forward-looking statements are not guarantees of future performance.
          </div>
          <div className="pt-4 border-t border-gray-300 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="text-gray-500">
              © 2025 uIPO. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-gray-700 transition-colors duration-200">Risk Disclosures</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;