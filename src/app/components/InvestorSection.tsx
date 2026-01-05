import { TrendingUp, FileText, Calendar, DollarSign, BarChart3, Download, Shield, Building2, Users, Globe2, Award, ArrowUpRight, BookOpen, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useState } from 'react';
import goitseKonopiImg from 'figma:asset/1991109401c94ed7cf0b3f3064a5c1c6ea670ff4.png';
import phillipChaukeImg from 'figma:asset/cc0b9900d37fc28609838772433a1e58f0663428.png';
import leaAnneMosesImg from 'figma:asset/22ae7a4b8de1afffe70b6ec1a19f0332a3710d5c.png';
import paliLehohlaImg from 'figma:asset/fcdb6b7157f45fb37ab58704980f77b0ae54a4bb.png';
import lwaziManziImg from 'figma:asset/82a33862dcddcab8b3e9ac7960dc24d6577d122d.png';
import marinaShortImg from 'figma:asset/e2632e7dfe34966fabf1db2227321ed1111381bd.png';
import randallCarolissenImg from 'figma:asset/9736a521df3514cbe5baa43be8950201687822f1.png';
import investorRelationsImg from 'figma:asset/1695d71da28cdc7f25b2f76b1e24c511550c5caf.png';

export function InvestorSection() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [teamFilter, setTeamFilter] = useState<'all' | 'executive' | 'board'>('all');

  const stats = [
    { value: '£250m+', label: 'Market Capitalization', sublabel: 'LUXSE: SUPPA' },
    { value: 'Global', label: 'Reach', sublabel: 'Worldwide' },
    { value: 'Expert', label: 'Employees Worldwide', sublabel: 'Expert Team' },
    { value: 'Millions', label: 'Active Customers', sublabel: 'Trusted Platform' },
  ];

  const financialHighlights = [
    { label: 'Revenue Growth', value: 'Strong', trend: '+15%' },
    { label: 'Market Cap', value: '£250m+', trend: 'LUXSE Listed' },
    { label: 'Global Markets', value: 'Hyper Growth', trend: '' },
    { label: 'Employees', value: 'Rapidly Expanding', trend: '' },
  ];

  // Helper function to get color classes
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, any> = {
      blue: {
        gradient: 'from-blue-50 to-white',
        border: 'border-blue-200',
        text: 'text-blue-600',
        bg: 'bg-blue-100',
        bgLight: 'bg-blue-50',
        textDark: 'text-blue-700',
        placeholder: 'from-blue-100 to-blue-200'
      },
      green: {
        gradient: 'from-green-50 to-white',
        border: 'border-green-200',
        text: 'text-green-600',
        bg: 'bg-green-100',
        bgLight: 'bg-green-50',
        textDark: 'text-green-700',
        placeholder: 'from-green-100 to-green-200'
      },
      purple: {
        gradient: 'from-purple-50 to-white',
        border: 'border-purple-200',
        text: 'text-purple-600',
        bg: 'bg-purple-100',
        bgLight: 'bg-purple-50',
        textDark: 'text-purple-700',
        placeholder: 'from-purple-100 to-purple-200'
      },
      orange: {
        gradient: 'from-orange-50 to-white',
        border: 'border-orange-200',
        text: 'text-orange-600',
        bg: 'bg-orange-100',
        bgLight: 'bg-orange-50',
        textDark: 'text-orange-700',
        placeholder: 'from-orange-100 to-orange-200'
      },
      red: {
        gradient: 'from-red-50 to-white',
        border: 'border-red-200',
        text: 'text-red-600',
        bg: 'bg-red-100',
        bgLight: 'bg-red-50',
        textDark: 'text-red-700',
        placeholder: 'from-red-100 to-red-200'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  // Combined Leadership & Governance Team
  const leadershipTeam = [
    {
      name: 'Pali Lehohla',
      position: 'Independent Non-Executive Chairman',
      type: 'Board',
      bio: 'South Africa\'s longest-serving Statistician-General and a global voice in public policy, data, and governance. He has chaired the UN Statistics Commission and co-chaired PARIS21.',
      committees: ['Nomination Committee', 'Governance Committee'],
      expertise: ['Public Policy', 'Data Governance', 'International Relations'],
      since: '2023',
      image: paliLehohlaImg,
      color: 'blue'
    },
    {
      name: 'Goitse Konopi',
      position: 'Group Chief Executive Officer & Executive Director',
      type: 'Executive & Board',
      bio: 'Brings product and engineering vision to the board. As CEO, his track record spans civic-tech, public infrastructure, and digital platforms serving millions.',
      expertise: ['Strategic Leadership', 'Market Expansion', 'Product Innovation'],
      since: '2022',
      image: goitseKonopiImg,
      color: 'green'
    },
    {
      name: 'Phillip Chauke',
      position: 'Chief Financial Officer',
      type: 'Executive',
      bio: 'Brings extensive financial expertise and has been key in navigating Suppple Group through its successful LUXSE listing.',
      expertise: ['Financial Strategy', 'Public Markets', 'M&A'],
      image: phillipChaukeImg,
      color: 'purple'
    },
    {
      name: 'Lea-Anne Moses',
      position: 'Chief Operating Officer',
      type: 'Executive',
      bio: 'Responsible for operational excellence across all Suppple Group brands, ensuring seamless customer experiences.',
      expertise: ['Operations', 'Technology', 'Customer Service'],
      image: leaAnneMosesImg,
      color: 'orange'
    },
    {
      name: 'Dr. Lwazi Manzi',
      position: 'Independent Non-Executive Director',
      type: 'Board',
      bio: 'Leads public health and strategy at continental scale as Head of the AU\'s COVID19 Secretariat. A physician by training, she guides Suppple\'s infrastructure work.',
      committees: ['ESG Committee', 'Risk Committee'],
      expertise: ['Public Health', 'Strategy', 'Continental Leadership'],
      since: '2023',
      image: lwaziManziImg,
      color: 'red'
    },
    {
      name: 'Randall Carolissen',
      position: 'Independent Non-Executive Director',
      type: 'Board',
      bio: 'Former Dean of Johannesburg Business School and past administrator of NSFAS. Expertise spans public finance, governance, and digital transformation.',
      committees: ['Audit Committee', 'Compensation Committee'],
      expertise: ['Finance', 'Governance', 'Digital Transformation'],
      since: '2023',
      image: randallCarolissenImg,
      color: 'blue'
    },
    {
      name: 'Marina Short',
      position: 'Independent Non-Executive Director',
      type: 'Board',
      bio: 'Former Chair of South Africa\'s Credit Bureau Association and Former CEO of the Consumer Profile Bureau. Brings regulatory and financial system insight.',
      committees: ['Audit Committee', 'Risk Committee'],
      expertise: ['Regulatory Affairs', 'Financial Systems', 'Risk Management'],
      since: '2024',
      image: marinaShortImg,
      color: 'green'
    },
    {
      name: 'Ochechuku Okere',
      position: 'Head of AI Technology',
      type: 'Executive',
      bio: 'Leads the technology vision and innovation strategy, driving the development of cutting-edge platforms.',
      expertise: ['Technology Innovation', 'Platform Development', 'Security'],
      image: null,
      color: 'purple',
      committees: []
    },
    {
      name: 'B.',
      position: 'Chief Legal & Compliance Officer',
      type: 'Executive',
      bio: 'Ensures Suppple Group maintains the highest standards of regulatory compliance across all jurisdictions.',
      expertise: ['Regulatory Compliance', 'Licensing', 'Corporate Governance'],
      image: null,
      color: 'orange',
      committees: []
    }
  ];

  // Filter team members
  const filteredTeam = leadershipTeam.filter(member => {
    if (teamFilter === 'all') return true;
    if (teamFilter === 'executive') return member.type.includes('Executive');
    if (teamFilter === 'board') return member.type.includes('Board');
    return true;
  });

  return (
    <section id="investors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-3 bg-blue-100 rounded-xl">
            <TrendingUp className="text-blue-600" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Investor Relations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suppple Group is publicly traded on the Luxembourg Stock Exchange (LUXSE: SUPPA), committed to delivering value to our shareholders.
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stock Ticker Style Section */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-sm text-white/80 mb-2">{item.label}</div>
                <div className="text-3xl font-bold mb-1">{item.value}</div>
                <div className="text-sm text-green-300">{item.trend}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            
            {/* Investor Relations Overview */}
            <AccordionItem value="investor-relations" className="border-b">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                Investor Relations Overview
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="pt-4">
                  <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                    <img
                      src={investorRelationsImg}
                      alt="Investor Relations Overview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-end">
                      <div className="p-8 md:p-12 text-white">
                        <h3 className="text-4xl font-bold mb-4">Investor Relations</h3>
                        <p className="text-xl text-white/90 max-w-3xl">
                          Suppple Group Third Quarter 2025 Earnings Webcast & Conference Call
                        </p>
                        <p className="text-white/80 mt-2">November 4, 2025 9:45 AM ET</p>
                        <Button 
                          className="mt-6 bg-white text-gray-900 hover:bg-gray-100"
                          onClick={() => {
                            const financialsElement = document.querySelector('[value="financials"]');
                            if (financialsElement) {
                              financialsElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              // Trigger click to open the accordion
                              setTimeout(() => {
                                const trigger = financialsElement.querySelector('button');
                                if (trigger && !trigger.getAttribute('data-state')?.includes('open')) {
                                  trigger.click();
                                }
                              }, 500);
                            }
                          }}
                        >
                          Read more
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                      <Building2 className="text-blue-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 mb-2">Global Presence</h4>
                      <p className="text-gray-700">Operating across 2+ countries with millions of active users</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                      <Award className="text-purple-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 mb-2">Market Leader</h4>
                      <p className="text-gray-700">Top 3 position in African AI and gaming technology</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                      <TrendingUp className="text-green-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 mb-2">Strong Growth</h4>
                      <p className="text-gray-700">Consistent revenue growth and market expansion</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Corporate Overview */}
            <AccordionItem value="corporate-overview" className="border-b">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                Corporate Overview
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="pt-4">
                  <div className="bg-white rounded-xl p-8 border border-gray-200">
                    <div className="prose max-w-none">
                      <p className="text-lg text-gray-700 mb-6">
                        Suppple Group is a LUXSE listed holding company of popular AI apps and 
                        the global sports and iGaming platforms. The group operates through licensed partnerships 
                        in multiple jurisdictions, with leading positions in Africa and growing presence worldwide.
                      </p>
                      <p className="text-lg text-gray-700 mb-6">
                        Our portfolio includes five distinct platforms: Prediction Market by Suppple, Seeek.ai (AI-powered search), 
                        Makerrr.ai (creative AI platform), GRIO (advanced multimodal AI model), and Digital Gaming (B2B gaming solutions). 
                        Together, these platforms serve millions of users across Africa and beyond.
                      </p>
                      <p className="text-lg text-gray-700">
                        With a market capitalization exceeding £250 million, Suppple Group operates an asset-light business 
                        model through proprietary data science and technology, ensuring operational excellence and scalability 
                        while maintaining regulatory compliance across all markets.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                      <Building2 className="text-blue-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 mb-2">Five Platforms</h4>
                      <p className="text-gray-700">Prediction Market, Seeek.ai, Makerrr.ai, GRIO, and Digital Gaming</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                      <Award className="text-purple-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 mb-2">Asset-Light Model</h4>
                      <p className="text-gray-700">Proprietary technology and data science driving operational excellence</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                      <Shield className="text-green-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 mb-2">Regulatory Compliance</h4>
                      <p className="text-gray-700">Licensed partnerships across multiple jurisdictions</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Leadership & Governance - COMBINED */}
            <AccordionItem value="leadership-governance" className="border-b">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                Leadership & Governance
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="pt-4">
                  <p className="text-lg text-gray-700 mb-8">
                    Our experienced leadership team and board of directors bring together decades of expertise in technology, finance, operations, public policy, and governance.
                  </p>

                  {/* Filter tabs */}
                  <div className="flex gap-4 mb-8 flex-wrap">
                    <Button
                      variant={teamFilter === 'all' ? 'default' : 'outline'}
                      onClick={() => setTeamFilter('all')}
                    >
                      All
                    </Button>
                    <Button
                      variant={teamFilter === 'executive' ? 'default' : 'outline'}
                      onClick={() => setTeamFilter('executive')}
                    >
                      Executive Team
                    </Button>
                    <Button
                      variant={teamFilter === 'board' ? 'default' : 'outline'}
                      onClick={() => setTeamFilter('board')}
                    >
                      Board Members
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTeam.map((member, index) => {
                      const colors = getColorClasses(member.color);
                      return (
                        <div 
                          key={index}
                          className={`bg-gradient-to-br ${colors.gradient} rounded-xl overflow-hidden border ${colors.border} hover:shadow-lg transition-all`}
                        >
                          {member.image && (
                            <div className="h-48 overflow-hidden">
                              <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          {!member.image && (
                            <div className={`h-48 bg-gradient-to-br ${colors.placeholder} flex items-center justify-center`}>
                              <div className="text-6xl font-bold text-white opacity-50">
                                {member.name.charAt(0)}
                              </div>
                            </div>
                          )}
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                                <p className={`${colors.text} font-semibold text-sm mb-2`}>{member.position}</p>
                                <span className={`inline-block px-3 py-1 ${colors.bg} ${colors.textDark} rounded-full text-xs font-semibold`}>
                                  {member.type}
                                </span>
                              </div>
                              {member.since && (
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                  Since {member.since}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-700 mb-4 text-sm">{member.bio}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {member.expertise.map((skill, idx) => (
                                <span key={idx} className={`px-2 py-1 ${colors.bgLight} ${colors.textDark} rounded-full text-xs`}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                            {member.committees && member.committees.length > 0 && (
                              <div className="pt-3 border-t border-gray-200">
                                <p className="text-xs text-gray-500 mb-2">Committee Memberships:</p>
                                <div className="flex flex-wrap gap-1">
                                  {member.committees.map((committee, idx) => (
                                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                      {committee}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-3">Board Committees</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Audit Committee</h5>
                        <p className="text-sm text-gray-700">Oversees financial reporting, internal controls, and audit processes</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Risk Committee</h5>
                        <p className="text-sm text-gray-700">Monitors enterprise risk management and regulatory compliance</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">ESG Committee</h5>
                        <p className="text-sm text-gray-700">Guides environmental, social, and governance initiatives</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Compensation Committee</h5>
                        <p className="text-sm text-gray-700">Determines executive compensation and equity programs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Environmental, Social & Governance */}
            <AccordionItem value="esg" className="border-b">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                Environmental, Social & Governance
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="pt-4">
                  <p className="text-lg text-gray-700 mb-8">
                    Suppple Group is committed to sustainable business practices, social responsibility, and strong corporate governance.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Globe2 className="text-green-600" size={24} />
                        Environmental
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>Carbon-neutral cloud infrastructure</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>Sustainable data center operations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>Paperless operations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>Green technology initiatives</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Users className="text-blue-600" size={24} />
                        Social
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Responsible gaming programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Community development initiatives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Digital inclusion programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Employee wellbeing focus</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Shield className="text-purple-600" size={24} />
                        Governance
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Independent board majority</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Transparent reporting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Strong compliance framework</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>Ethical business conduct</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">ESG Reports & Policies</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <button className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                        <div>
                          <h5 className="font-semibold text-gray-900">2024 ESG Report</h5>
                          <p className="text-sm text-gray-600">Annual sustainability report</p>
                        </div>
                        <Download className="text-blue-600" size={20} />
                      </button>
                      <button className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                        <div>
                          <h5 className="font-semibold text-gray-900">Environmental Policy</h5>
                          <p className="text-sm text-gray-600">Climate and sustainability commitments</p>
                        </div>
                        <Download className="text-blue-600" size={20} />
                      </button>
                      <button className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                        <div>
                          <h5 className="font-semibold text-gray-900">Diversity & Inclusion Policy</h5>
                          <p className="text-sm text-gray-600">Workplace equality initiatives</p>
                        </div>
                        <Download className="text-blue-600" size={20} />
                      </button>
                      <button className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                        <div>
                          <h5 className="font-semibold text-gray-900">Code of Conduct</h5>
                          <p className="text-sm text-gray-600">Business ethics and compliance</p>
                        </div>
                        <Download className="text-blue-600" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Published Announcements */}
            <AccordionItem value="announcements" className="border-b">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                Published Announcements
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="pt-4">
                  <p className="text-lg text-gray-700 mb-8">
                    Latest regulatory announcements, earnings releases, and corporate updates from Suppple Group.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-1">Q3 2025 Earnings Release</h5>
                          <p className="text-sm text-gray-600">Third Quarter Financial Results and Business Update</p>
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">Nov 4, 2025</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText size={16} className="mr-2" />
                        View Release
                      </Button>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-1">Board Appointment Announcement</h5>
                          <p className="text-sm text-gray-600">Marina Short Joins as Independent Non-Executive Director</p>
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">Oct 15, 2024</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText size={16} className="mr-2" />
                        View Release
                      </Button>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900 mb-1">LUXSE Listing Announcement</h5>
                          <p className="text-sm text-gray-600">Successful Listing on Luxembourg Stock Exchange</p>
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">Mar 12, 2024</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText size={16} className="mr-2" />
                        View Release
                      </Button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Financial Reporting */}
            <AccordionItem value="financials" className="border-b">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                Financial Reporting
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="pt-4">
                  <p className="text-lg text-gray-700 mb-8">
                    Access quarterly earnings reports, annual reports, and financial statements.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Quarterly Reports</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                          <div>
                            <h5 className="font-semibold text-gray-900">Q3 2025 Report</h5>
                            <p className="text-sm text-gray-600">July - September 2025</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                        <button className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                          <div>
                            <h5 className="font-semibold text-gray-900">Q2 2025 Report</h5>
                            <p className="text-sm text-gray-600">April - June 2025</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                        <button className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                          <div>
                            <h5 className="font-semibold text-gray-900">Q1 2025 Report</h5>
                            <p className="text-sm text-gray-600">January - March 2025</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                        <button className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                          <div>
                            <h5 className="font-semibold text-gray-900">Q4 2024 Report</h5>
                            <p className="text-sm text-gray-600">October - December 2024</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Annual Reports</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                          <div>
                            <h5 className="font-semibold text-gray-900">2024 Annual Report</h5>
                            <p className="text-sm text-gray-600">Full year financial results</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                        <button className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left">
                          <div>
                            <h5 className="font-semibold text-gray-900">2023 Annual Report</h5>
                            <p className="text-sm text-gray-600">Full year financial results</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Regulatory Documents - NEW SECTION */}
            <AccordionItem value="regulatory-documents" className="border-b">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                Regulatory Documents
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="pt-4">
                  <p className="text-lg text-gray-700 mb-8">
                    Comprehensive regulatory and compliance documentation for Suppple Group's operations across all jurisdictions.
                  </p>

                  <div className="space-y-8">
                    {/* LUXSE Listing Documents */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Building2 className="text-blue-600" size={20} />
                        LUXSE Listing Documents
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: LUXSE Admission Document\nDate: March 2024\nStatus: Current\n\nThis would download the official admission document for Suppple Group\'s listing on the Luxembourg Stock Exchange.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">LUXSE Admission Document</h5>
                            <p className="text-sm text-gray-600">Official listing prospectus - March 2024</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: CSSF Approval Certificate\nIssuer: Commission de Surveillance du Secteur Financier\nDate: March 2024\n\nThis would download the regulatory approval from Luxembourg\'s financial regulator.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">CSSF Approval Certificate</h5>
                            <p className="text-sm text-gray-600">Luxembourg financial regulator approval</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Articles of Association\nLast Updated: March 2024\nLanguage: English\n\nThis would download the company\'s articles of association as filed with LUXSE.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Articles of Association</h5>
                            <p className="text-sm text-gray-600">Company constitution and bylaws</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Memorandum of Association\nDate: 2022\nJurisdiction: Luxembourg\n\nThis would download the company\'s memorandum of association.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Memorandum of Association</h5>
                            <p className="text-sm text-gray-600">Founding charter and objectives</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Corporate Governance */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Shield className="text-purple-600" size={20} />
                        Corporate Governance
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Corporate Governance Code\nVersion: 2024\nCompliance Level: Full Compliance\n\nThis would download the company\'s comprehensive corporate governance framework aligned with LUXSE requirements.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Corporate Governance Code</h5>
                            <p className="text-sm text-gray-600">Governance framework and principles</p>
                          </div>
                          <Download className="text-purple-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Board Charter\nLast Updated: 2024\nPages: 45\n\nThis would download the board of directors charter outlining responsibilities, composition, and operating procedures.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Board Charter</h5>
                            <p className="text-sm text-gray-600">Board composition and responsibilities</p>
                          </div>
                          <Download className="text-purple-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Committee Charters\nIncludes: Audit, Risk, ESG, Compensation, Nomination\nDate: 2024\n\nThis would download all board committee charters and terms of reference.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Committee Charters</h5>
                            <p className="text-sm text-gray-600">Audit, Risk, ESG, and other committees</p>
                          </div>
                          <Download className="text-purple-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Director Independence Standards\nBased on: LUXSE Corporate Governance Code\nVersion: 2024\n\nThis would download the standards and criteria for director independence.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Director Independence Standards</h5>
                            <p className="text-sm text-gray-600">Independence criteria and assessment</p>
                          </div>
                          <Download className="text-purple-600" size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Licensing & Regulatory Compliance */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <FileText className="text-green-600" size={20} />
                        Licensing & Regulatory Compliance
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Partnership Licensing Framework\nScope: Africa & Global Markets\nStatus: Active\n\nThis would download the framework outlining our partnership-based licensing model across jurisdictions.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Partnership Licensing Framework</h5>
                            <p className="text-sm text-gray-600">Licensed partnership structure overview</p>
                          </div>
                          <Download className="text-green-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Regulatory Compliance Policy\nScope: All Platforms\nLast Updated: December 2024\n\nThis would download the comprehensive compliance policy covering all regulatory requirements.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Regulatory Compliance Policy</h5>
                            <p className="text-sm text-gray-600">Group-wide compliance framework</p>
                          </div>
                          <Download className="text-green-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Gaming Regulations Summary\nJurisdictions: Multiple African Markets\nType: Summary Document\n\nThis would download a summary of gaming regulations applicable to our gaming platforms.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Gaming Regulations Summary</h5>
                            <p className="text-sm text-gray-600">Gaming compliance across jurisdictions</p>
                          </div>
                          <Download className="text-green-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Data Protection & Privacy Policy\nCompliance: GDPR, POPIA, Local Laws\nVersion: 3.0 (2024)\n\nThis would download our comprehensive data protection and privacy compliance documentation.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Data Protection & Privacy Policy</h5>
                            <p className="text-sm text-gray-600">GDPR, POPIA compliance framework</p>
                          </div>
                          <Download className="text-green-600" size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Financial Regulations */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BarChart3 className="text-orange-600" size={20} />
                        Financial Regulations
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Audited Financial Statements 2024\nAuditor: [Major Audit Firm]\nOpinion: Unqualified\n\nThis would download the full audited financial statements with notes.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Audited Financial Statements 2024</h5>
                            <p className="text-sm text-gray-600">Complete audited accounts</p>
                          </div>
                          <Download className="text-orange-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Internal Controls Framework\nStandard: COSO Framework\nLast Assessment: 2024\n\nThis would download documentation of internal financial controls and risk management.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Internal Controls Framework</h5>
                            <p className="text-sm text-gray-600">Financial controls and risk management</p>
                          </div>
                          <Download className="text-orange-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Anti-Money Laundering (AML) Policy\nCompliance: FATF Recommendations\nVersion: 2024\n\nThis would download the comprehensive AML and counter-terrorist financing policy.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Anti-Money Laundering Policy</h5>
                            <p className="text-sm text-gray-600">AML/CTF compliance framework</p>
                          </div>
                          <Download className="text-orange-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Transfer Pricing Documentation\nCompliance: OECD Guidelines\nYear: 2024\n\nThis would download transfer pricing policies and country-by-country reporting.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Transfer Pricing Documentation</h5>
                            <p className="text-sm text-gray-600">OECD compliant transfer pricing</p>
                          </div>
                          <Download className="text-orange-600" size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Shareholder Documents */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Users className="text-red-600" size={20} />
                        Shareholder Documents
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Shareholder Rights Policy\nLast Updated: 2024\nLanguages: English, French\n\nThis would download the policy outlining shareholder rights, voting, and engagement procedures.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Shareholder Rights Policy</h5>
                            <p className="text-sm text-gray-600">Voting rights and engagement</p>
                          </div>
                          <Download className="text-red-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Dividend Policy\nApproved: 2024 AGM\nType: Progressive Dividend\n\nThis would download the company\'s dividend distribution policy and framework.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Dividend Policy</h5>
                            <p className="text-sm text-gray-600">Dividend distribution framework</p>
                          </div>
                          <Download className="text-red-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Share Buyback Program\nAuthorized Amount: £25m\nDuration: 2024-2025\n\nThis would download details of the authorized share buyback program.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Share Buyback Program</h5>
                            <p className="text-sm text-gray-600">Authorized repurchase framework</p>
                          </div>
                          <Download className="text-red-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Related Party Transactions Policy\nCompliance: LUXSE Standards\nVersion: 2024\n\nThis would download the policy governing related party transactions and disclosures.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Related Party Transactions Policy</h5>
                            <p className="text-sm text-gray-600">RPT framework and disclosures</p>
                          </div>
                          <Download className="text-red-600" size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Disclosure & Transparency */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="text-blue-600" size={20} />
                        Disclosure & Transparency
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Disclosure & Transparency Policy\nBased on: EU Transparency Directive\nVersion: 2024\n\nThis would download the comprehensive disclosure and transparency framework.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Disclosure & Transparency Policy</h5>
                            <p className="text-sm text-gray-600">Public disclosure framework</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Insider Trading Policy\nScope: All Directors & Officers\nLast Updated: 2024\n\nThis would download the policy governing insider trading and share dealing.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Insider Trading Policy</h5>
                            <p className="text-sm text-gray-600">Market abuse prevention</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Major Shareholdings Register\nAs of: December 2024\nThreshold: >3%\n\nThis would download the register of major shareholdings above disclosure thresholds.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Major Shareholdings Register</h5>
                            <p className="text-sm text-gray-600">Significant shareholders disclosure</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                        <button 
                          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left"
                          onClick={() => alert('Document: Continuous Disclosure Obligations\nJurisdiction: LUXSE\nGuide: Regulatory Requirements\n\nThis would download the guide to continuous disclosure obligations under LUXSE rules.')}
                        >
                          <div>
                            <h5 className="font-semibold text-gray-900">Continuous Disclosure Obligations</h5>
                            <p className="text-sm text-gray-600">Ongoing reporting requirements</p>
                          </div>
                          <Download className="text-blue-600" size={20} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-start gap-4">
                      <Shield className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">Regulatory Compliance Statement</h5>
                        <p className="text-sm text-gray-700 mb-3">
                          Suppple Group maintains full compliance with all applicable regulations across its operating jurisdictions. 
                          Our regulatory framework is regularly reviewed and updated to reflect evolving legal requirements and best practices.
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Regulatory Oversight:</strong> Luxembourg Stock Exchange (LUXSE), Commission de Surveillance du Secteur Financier (CSSF), 
                          and relevant gaming and financial authorities in operating territories.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="mt-6 bg-white rounded-xl p-6 border border-gray-200">
                    <h5 className="font-semibold text-gray-900 mb-3">Document Requests</h5>
                    <p className="text-sm text-gray-700 mb-4">
                      For additional regulatory documents or information not available for download, please contact our Investor Relations team.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => window.location.href = 'mailto:compliance@suppple.co.uk?subject=Regulatory Document Request'}
                    >
                      <FileText className="mr-2" size={16} />
                      Contact Compliance Team
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Responsible Gaming Commitment */}
            <AccordionItem value="responsible-gaming" className="border-b">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                Responsible Gaming Commitment
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="pt-4">
                  <p className="text-lg text-gray-700 mb-8">
                    Our comprehensive responsible gaming programs protect users and promote safe, healthy engagement with our gaming platforms.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <Shield className="text-blue-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 mb-3">Player Protection</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Deposit limits and session reminders</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Self-exclusion tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Reality checks and timeout features</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <Users className="text-green-600 mb-4" size={32} />
                      <h4 className="font-bold text-gray-900 mb-3">Education & Support</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>24/7 support helplines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>Educational resources</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>Partnerships with responsible gaming organizations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* News & Media Center */}
            <AccordionItem value="news" className="border-b">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                News & Media Center
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="pt-4">
                  <p className="text-lg text-gray-700 mb-8">
                    Latest news, press releases, and media coverage of Suppple Group.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <p className="text-center text-gray-700">
                      <a href="#news" className="text-blue-600 font-semibold hover:underline">Visit News & Media Center for latest updates →</a>
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Access Full Investor Portal
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get comprehensive access to financial data, exchange filings, governance documents, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8"
              onClick={() => {
                alert('Investor Portal - In a production environment, this would direct you to the full investor portal with comprehensive financial data and reports.');
              }}
            >
              Investor Portal
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8"
              onClick={() => {
                window.location.href = 'mailto:ir@suppple.co.uk?subject=Investor Relations Inquiry';
              }}
            >
              Contact IR Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}