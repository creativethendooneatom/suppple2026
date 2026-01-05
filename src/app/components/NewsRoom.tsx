import { motion } from 'motion/react';
import { Newspaper, Calendar, ExternalLink, Download, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function NewsRoom() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // Function to open external link
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Function to download PDF
  const downloadPDF = (release: any) => {
    // Create a simple PDF content (in production, this would be actual PDF files)
    const pdfContent = `
Press Release
${release.title}

Date: ${release.date}
Category: ${release.category}

${release.excerpt}

For more information, visit: ${release.link}

© ${new Date().getFullYear()} Suppple Group PLC. All rights reserved.
    `.trim();

    // Create a Blob with the content
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary download link
    const link = document.createElement('a');
    link.href = url;
    link.download = `${release.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Function to download media kit files
  const downloadMediaKit = (item: any) => {
    // Create mock file content
    const content = `${item.name}\n\nFile Type: ${item.type}\nSize: ${item.size}\n\nThis is a placeholder for the ${item.name} file.\nIn a production environment, this would download the actual ${item.type} file.\n\n© ${new Date().getFullYear()} Suppple Group PLC. All rights reserved.`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Function to handle event registration
  const handleRegister = (event: any) => {
    setSelectedEvent(event);
    setShowRegisterModal(true);
  };

  const submitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registration submitted for ${selectedEvent.event}!\n\nYou will receive a confirmation email shortly with event details and access information.`);
    setShowRegisterModal(false);
    setSelectedEvent(null);
  };

  const pressReleases = [
    {
      id: '2',
      date: 'December 22, 2025',
      category: 'Partnership',
      title: 'Suppple Group PLC and Ansino Form Strategic Alliance',
      excerpt: 'Suppple Group announces strategic partnership with Ansino to expand AI technology capabilities and market presence across Africa.',
      featured: true,
      link: 'https://businessexplainer.co.za/deals/2025/12/22/suppple-group-plc-and-ansino-form-strategic-alliance/',
      image: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFsbGlhbmNlJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY2NTgyNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '3',
      date: 'December 2024',
      category: 'Partnership',
      title: 'Suppple Group and Ansino Team Up to Launch Groundbreaking Prediction Market Platform in South Africa',
      excerpt: 'Strategic collaboration brings innovative prediction market technology to South African markets through licensed partnerships.',
      featured: true,
      link: 'https://centralnews.co.za/suppple-group-and-ansino-team-up-to-launch-groundbreaking-prediction-market-platform-in-south-africa/',
      image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWkxfGVufDF8fHx8MTc2NjQ3Njk5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '4',
      date: 'May 14, 2024',
      category: 'Corporate',
      title: 'GovChat Founders List Tech Company Suppple on Luxembourg Stock Exchange for R4.6bn',
      excerpt: 'Suppple Group successfully lists on the Luxembourg Stock Exchange (LUXSE) with a market capitalisation of R4.6 billion, marking a major milestone for the AI-powered technology holding company.',
      featured: true,
      link: 'https://www.moneyweb.co.za/news/companies-and-deals/govchat-founders-list-tech-company-suppple-in-luxembourg-for-r4-6bn/',
      image: 'https://images.unsplash.com/photo-1693557174813-017c396e49bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXhlbWJvdXJnJTIwc3RvY2slMjBleGNoYW5nZSUyMGZpbmFuY2lhbHxlbnwxfHx8fDE3NjY1ODI1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '5',
      date: 'May 14, 2024',
      category: 'Market Expansion',
      title: 'GovChat Founder Lists Tech Firm Suppple on Luxembourg Stock Exchange',
      excerpt: 'The founders of GovChat have successfully listed their technology company Suppple on the Luxembourg Stock Exchange, positioning the company for international growth.',
      featured: false,
      link: 'https://iol.co.za/business-report/economy/2024-05-14-govchats-founder-lists-tech-firm-suppple-on-luxembourg-stock-exchange/',
      image: 'https://images.unsplash.com/photo-1659479749984-d48333116052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxpc3RpbmclMjBmaW5hbmNpYWx8ZW58MXx8fHwxNzY2NTgyNTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const mediaKit = [
    { name: 'Company Logo Package', type: 'ZIP', size: '5.2 MB' },
    { name: 'Brand Guidelines', type: 'PDF', size: '8.1 MB' },
    { name: 'Executive Photos', type: 'ZIP', size: '12.4 MB' },
    { name: 'Company Fact Sheet', type: 'PDF', size: '1.8 MB' },
  ];

  const mediaContacts = [
    {
      name: 'Nadia Jones',
      title: 'Head of Corporate Communications',
      email: 'press@suppple.co.uk',
      phone: '+44 20 7946 0958',
      region: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      title: 'Acting Head of Investor Relations',
      email: 'ir@suppple.co.uk',
      phone: '+44 20 7946 0959',
      region: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    },
  ];

  const upcomingEvents = [
    {
      date: 'Jan 15, 2025',
      event: 'Q4 2024 Earnings Call',
      description: 'Financial results and business update',
      type: 'Webcast',
    },
    {
      date: 'Feb 8, 2025',
      event: 'ICE London 2025',
      description: 'Gaming industry conference',
      type: 'Conference',
    },
    {
      date: 'Mar 12, 2025',
      event: 'Investor Day 2025',
      description: 'Strategic update for investors',
      type: 'Event',
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 p-3 bg-blue-100 rounded-xl">
              <Newspaper className="text-blue-600" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              News & Media Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest news, press releases, and media resources about Suppple Group.
            </p>
          </motion.div>
        </div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search news and press releases..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Financial Results</option>
              <option>Market Expansion</option>
              <option>Partnerships</option>
              <option>Technology</option>
              <option>Corporate</option>
            </select>
          </div>
        </motion.div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="releases" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="releases">Press Releases</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="media">Media Kit</TabsTrigger>
          </TabsList>

          {/* Press Releases */}
          <TabsContent value="releases" className="mt-0">
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-xl border-2 p-6 hover:shadow-lg transition-all ${
                    release.featured 
                      ? 'border-blue-300 bg-gradient-to-r from-blue-50 to-white' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar size={16} />
                          {release.date}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          release.featured 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {release.category}
                        </span>
                        {release.featured && (
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                      <p className="text-gray-600 mb-4">{release.excerpt}</p>
                      <div className="flex gap-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2"
                          onClick={() => openLink(release.link)}
                        >
                          <ExternalLink size={16} />
                          Read More
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="gap-2"
                          onClick={() => downloadPDF(release)}
                        >
                          <Download size={16} />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <ImageWithFallback
                        src={release.image}
                        alt={release.title}
                        className="w-40 h-40 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Events */}
          <TabsContent value="events" className="mt-0">
            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex flex-col items-center justify-center text-white">
                        <div className="text-sm">{event.date.split(' ')[0]}</div>
                        <div className="text-2xl font-bold">{event.date.split(' ')[1].replace(',', '')}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{event.event}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleRegister(event)}
                    >
                      Register
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Media Kit */}
          <TabsContent value="media" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Download Media Assets</h3>
                <div className="space-y-4">
                  {mediaKit.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-lg transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Download className="text-blue-600" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.type} • {item.size}</div>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => downloadMediaKit(item)}
                      >
                        Download
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Media Contacts</h3>
                <div className="space-y-4">
                  {mediaContacts.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200 p-6"
                    >
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{contact.name}</h4>
                      <p className="text-blue-600 font-semibold mb-3">{contact.title}</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>📧 {contact.email}</p>
                        <p>📞 {contact.phone}</p>
                        <p>🌍 {contact.region}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest news, press releases, and investor updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Register for {selectedEvent?.event}</h2>
            <form onSubmit={submitRegistration}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button
                  type="button"
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2"
                  onClick={() => setShowRegisterModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}