import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockNews, mockFunds, NewsArticle } from '../data/mockData';
import NewsCard from '../components/News/NewsCard';
import MarketTape from '../components/News/MarketTape';

const News: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const handleArticleClick = (article: NewsArticle) => {
    setSelectedArticle(article);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-6 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            ← Back to News
          </button>
          
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {selectedArticle.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-600 mb-6">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>{formatDate(selectedArticle.published_at)}</span>
                {selectedArticle.related_funds.length > 0 && (
                  <>
                    <span>•</span>
                    <span>Related: {selectedArticle.related_funds.join(', ')}</span>
                  </>
                )}
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {selectedArticle.dek}
              </p>
            </div>

            <div className="prose prose-gray max-w-none">
              <p>
                {selectedArticle.content || `This is a detailed analysis of the breakthrough mentioned in the headline. The research team at the University of Colorado has made significant progress in their field, representing a major step forward for the technology's commercial viability.`}
              </p>

              <h3>What Changed</h3>
              <p>
                The latest developments represent a significant milestone in the technology's maturation. Key performance metrics have improved substantially, moving the innovation closer to commercial deployment.
              </p>

              <h3>Why It Matters</h3>
              <p>
                This advancement has important implications for both the research timeline and potential market applications. The improved performance characteristics address previous technical limitations and enhance the technology's competitive positioning.
              </p>

              <h3>Next Milestone</h3>
              <p>
                The research team is now focused on the next phase of development, which includes further validation studies and potential pilot program implementations. These next steps are critical for advancing the technology toward commercialization.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Disclosure & Methodology</h4>
                <p className="text-sm text-gray-600 mb-0">
                  This analysis is based on publicly available information and uIPO's proprietary research methodology. 
                  Investment decisions should not be based solely on this analysis. All investments carry risk of loss. 
                  Forward-looking statements are not guarantees of future performance.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-2">News & Research</h1>
              <p className="text-gray-600">
                Latest developments in university innovation and technology transfer
              </p>
            </motion.div>

            <div className="space-y-6">
              {mockNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <NewsCard article={article} onClick={() => handleArticleClick(article)} />
                </motion.div>
              ))}
            </div>

            {mockNews.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-500 text-lg">
                  No articles yet—stay tuned as pilots go live.
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MarketTape funds={mockFunds} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;