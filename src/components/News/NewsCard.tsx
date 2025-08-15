import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { NewsArticle } from '../../data/mockData';
import Badge from '../UI/Badge';

interface NewsCardProps {
  article: NewsArticle;
  onClick: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onClick }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const getImpactVariant = (impact: string) => {
    switch (impact) {
      case 'High': return 'impact-high';
      case 'Medium': return 'impact-medium';
      case 'Low': return 'impact-low';
      default: return 'secondary';
    }
  };

  return (
    <motion.article
      whileHover={{ y: -2, boxShadow: '0 8px 25px -8px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:border-gray-300 transition-all duration-200"
      onClick={onClick}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight hover:text-black transition-colors duration-200">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {article.dek}
          </p>
        </div>

        {/* Tags and Impact */}
        <div className="flex flex-wrap items-center gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" size="sm">
              {tag}
            </Badge>
          ))}
          <Badge variant={getImpactVariant(article.impact)} size="sm">
            Impact: {article.impact}
          </Badge>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{formatDate(article.published_at)}</span>
            </div>
          </div>
          <div className="text-xs">
            {article.related_funds.length > 0 && (
              <span>Related: {article.related_funds.join(', ')}</span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default NewsCard;