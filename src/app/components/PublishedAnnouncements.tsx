import { Bell, Calendar, FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function PublishedAnnouncements() {
  const announcements = [
    {
      date: 'December 20, 2024',
      category: 'Financial Results',
      title: 'Q3 2024 Financial Results Announcement',
      description: 'Suppple Group reports strong Q3 2024 performance with 18% revenue growth YoY.',
      type: 'Regulatory',
      downloadUrl: '#',
    },
    {
      date: 'December 15, 2024',
      category: 'Strategic Partnership',
      title: 'Strategic Partnership Expansion in African Markets',
      description: 'New partnership agreements secured across multiple jurisdictions, expanding market reach.',
      type: 'Corporate',
      downloadUrl: '#',
    },
    {
      date: 'November 28, 2024',
      category: 'Market Update',
      title: 'LUXSE Trading Update',
      description: 'Update on trading activity and market capitalization performance.',
      type: 'Market',
      downloadUrl: '#',
    },
    {
      date: 'November 15, 2024',
      category: 'Product Launch',
      title: 'Launch of GRIO Multimodal AI Model',
      description: 'Suppple Group unveils advanced multimodal AI technology platform for enhanced user experiences.',
      type: 'Product',
      downloadUrl: '#',
    },
    {
      date: 'November 1, 2024',
      category: 'Corporate Governance',
      title: 'Board of Directors Appointment',
      description: 'Announcement of new independent director joining the board.',
      type: 'Governance',
      downloadUrl: '#',
    },
    {
      date: 'October 20, 2024',
      category: 'Financial Results',
      title: 'Half-Year Results 2024',
      description: 'H1 2024 results show continued growth across all key metrics and business segments.',
      type: 'Regulatory',
      downloadUrl: '#',
    },
    {
      date: 'October 5, 2024',
      category: 'ESG',
      title: 'Annual Sustainability Report Published',
      description: 'Comprehensive ESG report highlighting commitments to responsible business practices.',
      type: 'ESG',
      downloadUrl: '#',
    },
    {
      date: 'September 15, 2024',
      category: 'Technology',
      title: 'AI Platform Infrastructure Expansion',
      description: 'Major investment in AI infrastructure to support growing customer demand.',
      type: 'Corporate',
      downloadUrl: '#',
    },
  ];

  const categoryColors: Record<string, string> = {
    'Financial Results': 'bg-blue-100 text-blue-700 border-blue-200',
    'Strategic Partnership': 'bg-purple-100 text-purple-700 border-purple-200',
    'Market Update': 'bg-green-100 text-green-700 border-green-200',
    'Product Launch': 'bg-orange-100 text-orange-700 border-orange-200',
    'Corporate Governance': 'bg-gray-100 text-gray-700 border-gray-200',
    'ESG': 'bg-teal-100 text-teal-700 border-teal-200',
    'Technology': 'bg-indigo-100 text-indigo-700 border-indigo-200',
  };

  const typeIcons: Record<string, any> = {
    Regulatory: FileText,
    Corporate: Bell,
    Market: ExternalLink,
    Product: ExternalLink,
    Governance: FileText,
    ESG: FileText,
  };

  return (
    <section id="announcements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-3 bg-blue-100 rounded-xl">
            <Bell className="text-blue-600" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Published Announcements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest regulatory announcements, corporate updates, and market news.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Regulatory', 'Corporate', 'Market', 'Product', 'Governance', 'ESG'].map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 transition-all text-sm font-medium"
              onClick={() => {
                // Placeholder for filter functionality
                console.log(`Filter by: ${filter}`);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.map((announcement, index) => {
            const Icon = typeIcons[announcement.type] || FileText;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Icon */}
                  <div className="hidden lg:flex w-12 h-12 bg-blue-100 rounded-lg items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        {announcement.date}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          categoryColors[announcement.category] || 'bg-gray-100 text-gray-700 border-gray-200'
                        }`}
                      >
                        {announcement.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                        {announcement.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{announcement.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      onClick={() => {
                        alert('View full announcement - This would open the announcement in a production environment');
                      }}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 hover:text-blue-600"
                      onClick={() => {
                        alert('Download PDF - This would download the announcement in a production environment');
                      }}
                    >
                      <Download size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <Bell size={48} className="mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/90 mb-6">
              Subscribe to receive instant notifications about new announcements, regulatory filings, and corporate updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg text-gray-900 placeholder:text-gray-500 flex-1 max-w-md"
              />
              <Button
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => {
                  alert('Subscription feature - This would subscribe users to announcements in a production environment');
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
