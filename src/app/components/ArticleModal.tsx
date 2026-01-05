import { X, Clock, Eye, ThumbsUp, Share2, Bookmark } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: {
    title: string;
    content: {
      intro: string;
      sections: Array<{
        heading: string;
        content: string;
        points?: string[];
        subsections?: Array<{
          subheading: string;
          content: string;
        }>;
      }>;
      conclusion?: string;
    };
    category: string;
    views: string;
    readTime: string;
    lastUpdated: string;
  } | null;
}

export function ArticleModal({ isOpen, onClose, article }: ArticleModalProps) {
  if (!article) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 md:p-8 flex-shrink-0">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 pr-4">
                  <div className="text-sm text-blue-200 mb-2">{article.category}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{article.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{article.readTime} read</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye size={16} />
                      <span>{article.views} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Updated: {article.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg flex items-center gap-2 text-sm transition-colors">
                  <ThumbsUp size={16} />
                  Helpful
                </button>
                <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg flex items-center gap-2 text-sm transition-colors">
                  <Bookmark size={16} />
                  Save
                </button>
                <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg flex items-center gap-2 text-sm transition-colors">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                {/* Introduction */}
                <div className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {article.content.intro}
                </div>

                {/* Sections */}
                <div className="space-y-10">
                  {article.content.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h3>
                      <div className="text-gray-700 leading-relaxed mb-4">{section.content}</div>
                      
                      {section.points && section.points.length > 0 && (
                        <ul className="space-y-3 my-6">
                          {section.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold text-sm">
                                {idx + 1}
                              </span>
                              <span className="text-gray-700 flex-1">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.subsections && section.subsections.length > 0 && (
                        <div className="space-y-6 mt-6">
                          {section.subsections.map((subsection, subIdx) => (
                            <div key={subIdx} className="border-l-4 border-blue-300 pl-6">
                              <h4 className="text-xl font-bold text-gray-900 mb-3">{subsection.subheading}</h4>
                              <p className="text-gray-700 leading-relaxed">{subsection.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                {article.content.conclusion && (
                  <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Summary</h3>
                    <p className="text-gray-700 leading-relaxed">{article.content.conclusion}</p>
                  </div>
                )}

                {/* Related Articles */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all text-left">
                      <div className="font-semibold text-gray-900 mb-1">More about this topic</div>
                      <div className="text-sm text-gray-600">Explore related help articles</div>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all text-left">
                      <div className="font-semibold text-gray-900 mb-1">Contact Support</div>
                      <div className="text-sm text-gray-600">Still need help? Get in touch</div>
                    </button>
                  </div>
                </div>

                {/* Feedback Section */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl text-center">
                  <h4 className="font-bold text-gray-900 mb-3">Was this article helpful?</h4>
                  <div className="flex gap-3 justify-center">
                    <Button 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => alert('Thank you for your feedback!')}
                    >
                      Yes, it helped!
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => alert('We\'re sorry this didn\'t help. Our support team has been notified.')}
                    >
                      No, I need more help
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
