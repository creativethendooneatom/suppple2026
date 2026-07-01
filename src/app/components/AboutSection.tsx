import { Award, Globe, Shield, TrendingUp, Target, Zap, Users2, Lightbulb, Clock, Lock, Linkedin, Mail, ChevronRight, CheckCircle, Brain, Cpu, Database, Leaf, Heart, Scale } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import goitseKonopiImg from '../../assets/1991109401c94ed7cf0b3f3064a5c1c6ea670ff4.png';
import phillipChaukeImg from '../../assets/cc0b9900d37fc28609838772433a1e58f0663428.png';
import leaAnneMosesImg from '../../assets/22ae7a4b8de1afffe70b6ec1a19f0332a3710d5c.png';
import paliLehohlaImg from '../../assets/fcdb6b7157f45fb37ab58704980f77b0ae54a4bb.png';
import lwaziManziImg from '../../assets/82a33862dcddcab8b3e9ac7960dc24d6577d122d.png';
import marinaShortImg from '../../assets/e2632e7dfe34966fabf1db2227321ed1111381bd.png';
import randallCarolissenImg from '../../assets/9736a521df3514cbe5baa43be8950201687822f1.png';
import engineeringNewsLogo from '../../assets/0a802024e10c5584c62c6363a5cce5783f480c71.png';
import itWebLogo from '../../assets/6347133e47320ea129b940a0c441a924de702c73.png';
import moneyWebLogo from '../../assets/fe4df6457224a7a5770646e1a43fd5a411e7e6e4.png';
import iolLogo from '../../assets/ea140f0bac37bc02591c3996c163544d6ae4837e.png';
import techFinancialsLogo from '../../assets/a59f68a642c10bdb458f2fbf6bb5356526936493.png';
import businessExplainerLogo from '../../assets/1d3c07e9e36bceec8978729c6521c200ee23db84.png';
import centralNewsLogo from '../../assets/e177ea7e24ee280a825212eade9c9990d259206d.png';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState('about');

  const values = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Licensed in multiple jurisdictions with leading positions across Europe, the Americas and Africa.',
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Home to the world\'s most popular global Sports and iGaming brands trusted by millions.',
    },
    {
      icon: Shield,
      title: 'Responsible Technology',
      description: 'We offer our customers a wide range of tools and services, coupled with a fair environment.',
    },
    {
      icon: TrendingUp,
      title: 'LUXSE Listed',
      description: 'A publicly traded holding company committed to transparency and shareholder value.',
    },
  ];

  // Strategic Pillars
  const strategicPillars = [
    {
      icon: Target,
      title: 'Platform-Led Model',
      description: 'At the core of Suppple Group\'s strategy is a platform-led approach. The Group invests in shared AI infrastructure, data science capabilities, and modular system architecture.',
      keyPoints: [
        'Shared AI infrastructure',
        'Reusable components across data & models',
        'Accelerated innovation',
        'Long-term platform defensibility'
      ]
    },
    {
      icon: Globe,
      title: 'Market Expansion and Partnerships',
      description: 'Suppple Group pursues growth through disciplined expansion across African markets and selected international opportunities. Market entry is primarily achieved through licensed partnerships.',
      keyPoints: [
        'Disciplined expansion across African markets',
        'Licensed partnerships & enterprise relationships',
        'Efficient scaling',
        'Regulatory consistency'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Strategic Development',
      description: 'The Group continuously evaluates opportunities to enhance its platform capabilities through product development, partnerships, and selective acquisitions. Strategic decisions are made with long-term value creation in mind.',
      keyPoints: [
        'Enhance platform capabilities',
        'Strengthen core technology',
        'Expand addressable markets',
        'Support long-term scalability'
      ]
    },
    {
      icon: Shield,
      title: 'Responsible Technology and Governance',
      description: 'Responsible technology is embedded within Suppple Group\'s strategy. The Group operates with a regulatory-first mindset, integrating governance considerations into the design.',
      keyPoints: [
        'Regulatory-first mindset',
        'Governance integration',
        'Transparency & accountability',
        'Operational resilience'
      ]
    }
  ];

  // Responsible Technology Principles
  const responsibilityPrinciples = [
    {
      icon: Shield,
      title: 'User Safety & Protection',
      description: 'Advanced AI-powered safety features to protect users and ensure ethical technology deployment.',
      features: [
        'AI content moderation and safety filters',
        'Age verification and identity protection',
        'Automated fraud detection systems',
        'Privacy-preserving data practices'
      ]
    },
    {
      icon: Brain,
      title: 'Ethical AI Development',
      description: 'Commitment to developing AI systems that are transparent, fair, and accountable.',
      features: [
        'Bias detection and mitigation in AI models',
        'Transparent AI decision-making processes',
        'Regular ethics reviews and audits',
        'Adherence to global AI ethics standards'
      ]
    },
    {
      icon: Lock,
      title: 'Data Privacy & Security',
      description: 'Industry-leading security practices to protect user data and maintain trust.',
      features: [
        'End-to-end encryption for sensitive data',
        'GDPR and POPIA compliance',
        'Regular security audits and penetration testing',
        'Secure cloud infrastructure'
      ]
    },
    {
      icon: Leaf,
      title: 'Sustainable Technology',
      description: 'Building environmentally responsible AI and technology infrastructure.',
      features: [
        'Energy-efficient data centers',
        'Carbon-neutral cloud operations',
        'Sustainable hardware lifecycle management',
        'Green technology partnerships'
      ]
    },
    {
      icon: Heart,
      title: 'Digital Wellbeing',
      description: 'Tools and features to promote healthy technology usage and user wellbeing.',
      features: [
        'Usage time tracking and alerts',
        'Digital wellbeing dashboard',
        'Self-exclusion and limit-setting tools',
        'Mental health support resources'
      ]
    },
    {
      icon: Scale,
      title: 'Regulatory Compliance',
      description: 'Maintaining the highest standards of regulatory compliance and corporate governance.',
      features: [
        'Fully licensed operations through partners',
        'Regular compliance audits',
        'Transparent reporting practices',
        'Proactive regulatory engagement'
      ]
    }
  ];

  // Executive Leadership
  const executiveTeam = [
    {
      name: 'Goitse Konopi',
      position: 'Group Chief Executive Officer',
      bio: 'Brings product and engineering vision to the board. As CEO, his track record spans civic-tech, public infrastructure, and digital platforms serving millions.',
      expertise: ['Strategic Leadership', 'Market Expansion', 'Product Innovation'],
      image: goitseKonopiImg,
      linkedin: 'https://www.linkedin.com/in/goitsekonopi/',
    },
    {
      name: 'Phillip Chauke',
      position: 'Chief Financial Officer',
      bio: 'Phillip brings extensive financial expertise and has been key in navigating Suppple Group through its successful LUXSE listing.',
      expertise: ['Financial Strategy', 'Public Markets', 'M&A'],
      image: phillipChaukeImg,
      linkedin: 'https://www.linkedin.com/in/phillipchauke/',
    },
    {
      name: 'Lea-Anne Moses',
      position: 'Chief Operating Officer',
      bio: 'Lea-Anne is responsible for the operational excellence across all Suppple Group brands, ensuring seamless customer experiences.',
      expertise: ['Operations', 'Technology', 'Customer Service'],
      image: leaAnneMosesImg,
      linkedin: 'https://www.linkedin.com/in/lea-anne-moses/',
    },
    {
      name: 'Ochechuku Okere',
      position: 'Head of AI Technology',
      bio: 'Ochechuku leads the technology vision and innovation strategy, driving the development of cutting-edge platforms.',
      expertise: ['Technology Innovation', 'Platform Development', 'Security'],
    },
    {
      name: 'B.',
      position: 'Chief Legal & Compliance Officer',
      bio: 'B. ensures Suppple Group maintains the highest standards of regulatory compliance across all jurisdictions.',
      expertise: ['Regulatory Compliance', 'Licensing', 'Corporate Governance'],
    },
    {
      name: 'Tamoledi',
      position: 'Head of Gaming',
      bio: 'Tamoledi drives the marketing strategy across all brands, building strong customer relationships and expanding market presence.',
      expertise: ['Brand Strategy', 'Digital Marketing', 'Customer Acquisition'],
    },
  ];

  // Board of Directors
  const boardMembers = [
    {
      name: 'Goitse Konopi',
      position: 'Executive Director',
      background: 'Brings product and engineering vision to the board. As CEO, his track record spans civic-tech, public infrastructure, and digital platforms.',
      image: goitseKonopiImg,
      committees: [],
      since: '2022'
    },
    {
      name: 'Phillip Chauke',
      position: 'Executive Director & CFO',
      background: 'Phillip brings extensive financial expertise to the board and has been key in navigating Suppple Group through its successful LUXSE listing.',
      image: phillipChaukeImg,
      committees: ['Audit'],
      since: '2022'
    },
    {
      name: 'Pali Lehohla',
      position: 'Independent Non-Executive Chairman',
      background: 'South Africa\'s longest-serving Statistician-General and a global voice in public policy, data, and governance.',
      image: paliLehohlaImg,
      committees: ['Nomination', 'Governance'],
      since: '2023'
    },
    {
      name: 'Lwazi Manzi',
      position: 'Independent Non-Executive Director',
      background: 'Leads public health and strategy at continental scale as Head of the AU\'s COVID19 Secretariat. A physician by training.',
      image: lwaziManziImg,
      committees: ['ESG', 'Risk'],
      since: '2023'
    },
    {
      name: 'Randall Carolissen',
      position: 'Independent Non-Executive Director',
      background: 'Former Dean of Johannesburg Business School and past administrator of NSFAS. His expertise spans public finance, governance, and digital transformation.',
      image: randallCarolissenImg,
      committees: ['Audit', 'Compensation'],
      since: '2023'
    },
    {
      name: 'Marina Short',
      position: 'Independent Non-Executive Director',
      background: 'Former Chair of South Africa\'s Credit Bureau Association and Former CEO of the Consumer Profile Bureau.',
      image: marinaShortImg,
      committees: ['Audit', 'Risk'],
      since: '2024'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Suppple
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suppple Group is a LUXSE listed technology company focused on the development of AI-enabled digital platforms for regulated markets.
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-gray-50 p-2 rounded-xl border border-gray-200 mb-8">
            <TabsTrigger value="about" className="px-6 py-3">About</TabsTrigger>
            <TabsTrigger value="strategy" className="px-6 py-3">Strategy</TabsTrigger>
            <TabsTrigger value="governance" className="px-6 py-3">Governance</TabsTrigger>
            <TabsTrigger value="executive" className="px-6 py-3">Leadership</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="mt-8">
            <div className="space-y-8">
              {/* Our Story */}
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6">
                    Suppple Group was founded with a singular focus: to build scalable technology for regulated markets. The Group has grown from a civic-tech pioneer into a diversified technology and infrastructure company.
                  </p>
                  <p className="text-lg text-gray-700">
                    By combining proprietary data science, rigorous governance, and local market expertise, Suppple Group bridges the gap between complex regulation and digital innovation.
                  </p>
                </div>
              </div>

              {/* Accordion for About sections */}
              <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {/* About Predict */}
                <AccordionItem value="about-predict" className="border-b">
                  <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                    About Predict
                  </AccordionTrigger>
                  <AccordionContent className="px-6 md:px-8">
                    <div className="prose max-w-none">
                      <p className="text-lg text-gray-700">
                        Predict is a regulated exchange dedicated to trading on the outcome of future events through financial derivatives and prediction markets.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Future Event Contracts */}
                <AccordionItem value="future-event-contracts" className="border-b">
                  <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                    Future Event Contracts
                  </AccordionTrigger>
                  <AccordionContent className="px-6 md:px-8">
                    <div className="prose max-w-none">
                      <p className="text-lg text-gray-700 mb-4">
                        Predict\'s Future Event Contracts give people the ability to trade based on their opinions about specific yes-or-no questions.
                      </p>
                      <p className="text-lg text-gray-700 mb-4">
                        The price that a given event contract trades at is a measure of the probability that the event will happen.
                      </p>
                      <p className="text-lg text-gray-700">
                        We offer Future Event Contracts on a wide range of topics including politics, economics, culture, finance, business, technology, and entertainment.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Company History */}
                <AccordionItem value="company-history" className="border-b">
                  <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                    Company History
                  </AccordionTrigger>
                  <AccordionContent className="px-6 md:px-8">
                    <div className="prose max-w-none space-y-6">
                      <h5 className="text-xl font-bold text-gray-900 mb-3">Founding and Inspiration (2016–2023)</h5>
                      <p className="text-lg text-gray-700 mb-4">
                        Predict by Suppple was born out of a deep, practical engagement with public opinion, governance, and future outcomes in Africa.
                      </p>
                      <p className="text-lg text-gray-700 mb-4">
                        Its founders, Goitse Konopi, Phillip Chauke and Eldrid Jordaan began working at the intersection of citizen engagement, data, and governance.
                      </p>
                      <h5 className="text-xl font-bold text-gray-900 mt-8 mb-3">Key Milestones</h5>
                      <ul className="list-disc pl-6 text-gray-700">
                        <li className="mb-2">2016: Launch of GovChat, South Africa\'s largest civic engagement platform.</li>
                        <li className="mb-2">2024: Formation of Suppple Group to focus on AI and prediction markets.</li>
                        <li className="mb-2">2025: Launch of Prediction Market by Suppple, a dedicated prediction market platform.</li>
                        <li className="mb-2">2026: Expansion into new African markets and global territories through strategic partnerships.</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Core Values */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                        <value.icon className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Statistics */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-3xl font-bold mb-8 text-center">Our Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">£250m+</div>
                    <div className="text-white/80">Market Cap</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
                    <div className="text-white/80">Core Platforms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">Millions</div>
                    <div className="text-white/80">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">2+</div>
                    <div className="text-white/80">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Strategy Tab */}
          <TabsContent value="strategy" className="mt-8">
            <div className="space-y-12">
              {/* Strategic Vision */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Strategic Vision</h3>
                <p className="text-xl text-white/90 mb-6">
                  Suppple Group\'s strategy is focused on building scalable AI platforms for regulated digital markets, with an emphasis on long-term value creation.
                </p>
                <p className="text-xl text-white/90">
                  Our strategy combines proprietary platform development with a partnership-led operating model.
                </p>
              </div>

              {/* Strategic Pillars */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strategic Pillars</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {strategicPillars.map((pillar, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <pillar.icon className="text-blue-600" size={24} />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">{pillar.title}</h4>
                          <p className="text-gray-600">{pillar.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {pillar.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Governance Tab */}
          <TabsContent value="governance" className="mt-8">
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Board of Directors</h3>
                <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
                  Our independent board members bring diverse perspectives and deep expertise to guide Suppple Group\'s strategic direction 
                  and ensure robust corporate governance. The board comprises experienced leaders from technology, finance, healthcare, 
                  education, and public policy sectors.
                </p>
              </div>

              {/* Board Members */}
              <div className="grid md:grid-cols-2 gap-8">
                {boardMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800">
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-3xl font-bold text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                        <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                        <p className="text-sm text-gray-600 mb-3">Board Member Since: {member.since}</p>
                        {member.committees && member.committees.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {member.committees.map((committee, idx) => (
                              <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-semibold">
                                {committee} Committee
                              </span>
                            ))}
                          </div>
                        )}
                        <p className="text-gray-700">{member.background}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Board Committees */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Board Committees</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">Audit Committee</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Oversees financial reporting, internal controls, and audit processes to ensure accuracy and compliance.
                    </p>
                    <p className="text-xs text-gray-600">Members: Randall Carolissen (Chair), Marina Short</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">Nomination & Governance</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Identifies board candidates and oversees corporate governance policies and practices.
                    </p>
                    <p className="text-xs text-gray-600">Members: Pali Lehohla (Chair)</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">Risk & ESG Committee</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Monitors enterprise risks and environmental, social, and governance matters.
                    </p>
                    <p className="text-xs text-gray-600">Members: Lwazi Manzi (Chair), Marina Short</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">Compensation Committee</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Reviews and approves executive compensation and incentive programs.
                    </p>
                    <p className="text-xs text-gray-600">Members: Randall Carolissen (Chair)</p>
                  </div>
                </div>
              </div>

              {/* Governance Documents */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Corporate Governance</h4>
                    <p className="text-sm text-gray-600">
                      Learn more about our governance framework, board committees, and policies
                    </p>
                  </div>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
                    onClick={() => alert('Corporate Governance Documents - This would open governance documents in a production environment')}
                  >
                    View Governance Documents
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Executive Management Tab */}
          <TabsContent value="executive" className="mt-8">
            <div className="space-y-12">
              {/* Executive Overview */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Executive Leadership Team</h3>
                <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
                  Our experienced leadership team brings together decades of expertise in technology, finance, operations, and the gaming industry. 
                  They drive innovation, operational excellence, and strategic growth across all our platforms.
                </p>
              </div>

              {/* Executive Team */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {executiveTeam.map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Avatar */}
                    <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center overflow-hidden">
                      {leader.image ? (
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                          <span className="text-5xl font-bold text-white">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{leader.position}</p>
                      <p className="text-gray-600 mb-4 text-sm">{leader.bio}</p>
                      
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-gray-900 mb-2">Areas of Expertise:</div>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4 border-t border-gray-200">
                        {leader.linkedin ? (
                          <a 
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                          >
                            <Linkedin size={16} />
                            <span>LinkedIn</span>
                          </a>
                        ) : (
                          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                            <Linkedin size={16} />
                            <span>LinkedIn</span>
                          </button>
                        )}
                        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                          <Mail size={16} />
                          <span>Contact</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Leadership Philosophy */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-3xl font-bold mb-6 text-center">Our Leadership Philosophy</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🎯</div>
                    <h4 className="font-bold mb-2">Vision-Driven</h4>
                    <p className="text-white/80 text-sm">
                      Clear strategic direction aligned with long-term growth and innovation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl mb-4">🤝</div>
                    <h4 className="font-bold mb-2">Collaborative</h4>
                    <p className="text-white/80 text-sm">
                      Cross-functional teamwork and open communication across all levels
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl mb-4">⚡</div>
                    <h4 className="font-bold mb-2">Results-Oriented</h4>
                    <p className="text-white/80 text-sm">
                      Data-driven decision making and accountability for outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
