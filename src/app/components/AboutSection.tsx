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
      title: 'Market Leadership',
      description: 'Maintain and expand our leading positions in core markets across Africa and globally through licensed partnerships.',
      keyPoints: [
        'Top 3 market position in African AI and gaming technology',
        'Strategic partnerships with 50+ licensed operators',
        'Diversified revenue streams across five platforms',
        'Focus on high-growth emerging markets'
      ]
    },
    {
      icon: Zap,
      title: 'Technology Innovation',
      description: 'Invest in cutting-edge AI and platform technologies to deliver exceptional user experiences and competitive advantages.',
      keyPoints: [
        'Proprietary multimodal AI model (GRIO)',
        'Real-time analytics and prediction market technology',
        'Scalable cloud infrastructure',
        'AI-powered personalization across all platforms'
      ]
    },
    {
      icon: Users2,
      title: 'Customer-Centric Approach',
      description: 'Put customers at the heart of everything we do, delivering safe, fair, and engaging experiences.',
      keyPoints: [
        'Millions of active users across our platforms',
        'Industry-leading customer satisfaction scores',
        'Comprehensive responsible gaming tools',
        '24/7 customer support across all markets'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Operational Excellence',
      description: 'Drive efficiency and scalability through our asset-light business model and operational best practices.',
      keyPoints: [
        'Asset-light partnership model',
        'Best-in-class operational margins',
        '99.99% platform uptime',
        'Continuous process improvement'
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
      bio: 'Brings product and engineering vision to the board. As CEO, his track record spans civic-tech, public infrastructure, and digital platforms serving millions. Goitse has been instrumental in growing Suppple Group into a global leader in sports betting and iGaming technology.',
      expertise: ['Strategic Leadership', 'Market Expansion', 'Product Innovation'],
      image: goitseKonopiImg,
      linkedin: 'https://www.linkedin.com/in/goitsekonopi/',
    },
    {
      name: 'Phillip Chauke',
      position: 'Chief Financial Officer',
      bio: 'Phillip brings extensive financial expertise and has been key in navigating Suppple Group through its successful LUXSE listing. He oversees all financial operations and investor relations.',
      expertise: ['Financial Strategy', 'Public Markets', 'M&A'],
      image: phillipChaukeImg,
      linkedin: 'https://www.linkedin.com/in/phillipchauke/',
    },
    {
      name: 'Lea-Anne Moses',
      position: 'Chief Operating Officer',
      bio: 'Lea-Anne is responsible for the operational excellence across all Suppple Group brands, ensuring seamless customer experiences and operational efficiency at scale.',
      expertise: ['Operations', 'Technology', 'Customer Service'],
      image: leaAnneMosesImg,
      linkedin: 'https://www.linkedin.com/in/lea-anne-moses/',
    },
    {
      name: 'Ochechuku Okere',
      position: 'Head of AI Technology',
      bio: 'Ochechuku leads the technology vision and innovation strategy, driving the development of cutting-edge platforms that power millions of transactions daily.',
      expertise: ['Technology Innovation', 'Platform Development', 'Security'],
    },
    {
      name: 'B.',
      position: 'Chief Legal & Compliance Officer',
      bio: 'B. ensures Suppple Group maintains the highest standards of regulatory compliance across all jurisdictions, managing licensing and legal affairs globally.',
      expertise: ['Regulatory Compliance', 'Licensing', 'Corporate Governance'],
    },
    {
      name: 'Tamoledi',
      position: 'Head of Gaming',
      bio: 'Tamoledi drives the marketing strategy across all brands, building strong customer relationships and expanding market presence through innovative campaigns.',
      expertise: ['Brand Strategy', 'Digital Marketing', 'Customer Acquisition'],
    },
  ];

  // Board of Directors
  const boardMembers = [
    {
      name: 'Goitse Konopi',
      position: 'Executive Director',
      background: 'Brings product and engineering vision to the board. As CEO, his track record spans civic-tech, public infrastructure, and digital platforms serving millions. Goitse has been instrumental in growing Suppple Group into a global leader in sports betting and iGaming technology.',
      image: goitseKonopiImg,
      committees: [],
      since: '2022'
    },
    {
      name: 'Phillip Chauke',
      position: 'Executive Director & CFO',
      background: 'Phillip brings extensive financial expertise to the board and has been key in navigating Suppple Group through its successful LUXSE listing. He oversees all financial operations, investor relations, and ensures robust financial governance across the organization.',
      image: phillipChaukeImg,
      committees: ['Audit'],
      since: '2022'
    },
    {
      name: 'Pali Lehohla',
      position: 'Independent Non-Executive Chairman',
      background: 'South Africa\'s longest-serving Statistician-General and a global voice in public policy, data, and governance. He has chaired the UN Statistics Commission and co-chaired PARIS21. His systems-level insight anchors Suppple\'s institutional and policy alignment.',
      image: paliLehohlaImg,
      committees: ['Nomination', 'Governance'],
      since: '2023'
    },
    {
      name: 'Lwazi Manzi',
      position: 'Independent Non-Executive Director',
      background: 'Leads public health and strategy at continental scale as Head of the AU\'s COVID19 Secretariat. A physician by training, she guides Suppple\'s infrastructure work across health, data, and compliance.',
      image: lwaziManziImg,
      committees: ['ESG', 'Risk'],
      since: '2023'
    },
    {
      name: 'Randall Carolissen',
      position: 'Independent Non-Executive Director',
      background: 'Former Dean of Johannesburg Business School and past administrator of NSFAS. His expertise spans public finance, governance, and digital transformation in education.',
      image: randallCarolissenImg,
      committees: ['Audit', 'Compensation'],
      since: '2023'
    },
    {
      name: 'Marina Short',
      position: 'Independent Non-Executive Director',
      background: 'Former Chair of South Africa\'s Credit Bureau Association and Former CEO of the Consumer Profile Bureau. She brings regulatory, analytics, and financial system insight to Suppple\'s growth strategy.',
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
            Suppple Group is a LUXSE listed technology holding company of popular AI apps, and Sports and iGaming brands in Africa.
          </p>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-gray-50 p-2 rounded-xl border border-gray-200 mb-8">
            <TabsTrigger value="about" className="px-6 py-3">About</TabsTrigger>
            <TabsTrigger value="strategy" className="px-6 py-3">Our Strategy</TabsTrigger>
            <TabsTrigger value="responsibility" className="px-6 py-3">Responsible Technology</TabsTrigger>
            <TabsTrigger value="board" className="px-6 py-3">Board of Directors</TabsTrigger>
            <TabsTrigger value="executive" className="px-6 py-3">Executive Management</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="mt-8">
            <div className="space-y-8">
              {/* Our Story */}
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6">
                    Suppple Group is a LUXSE listed technology holding company of popular AI apps, and Sports and iGaming brands in Africa. 
                    The group provides the underlying technology, and partners with licensed operators in multiple jurisdictions, 
                    with leading positions in Africa.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Our portfolio includes five distinct AI-powered platforms: <strong>Prediction Market by Suppple</strong> (premier prediction market platform), 
                    <strong> Seeek.ai</strong> (AI-powered search and discovery), <strong>Makerrr.ai</strong> (creative AI platform for makers), 
                    <strong> GRIO</strong> (advanced multimodal AI model), and <strong>Digital Gaming</strong> (B2B gaming solutions).
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Suppple Group is led by a team of technology, AI, betting, and gaming software pioneers with decades of industry experience. 
                    They are responsible for a diverse workforce of colleagues who are located in 4 countries, serving millions of users across Africa and beyond.
                  </p>
                  <p className="text-lg text-gray-700">
                    With a market capitalization exceeding £250 million, we operate an asset-light business model through proprietary 
                    data science and technology, ensuring operational excellence and scalability while maintaining regulatory compliance 
                    across all markets.
                  </p>
                </div>
              </div>

              {/* As Featured In */}
              <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-200">
                <p className="text-sm font-bold text-gray-900 mb-4 text-center">As Featured In</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-items-center">
                  {[
                    { name: 'MoneyWeb', img: moneyWebLogo, isLogo: true },
                    { name: 'IOL', img: iolLogo, isLogo: true },
                    { name: 'Business Explainer', img: businessExplainerLogo, isLogo: true },
                    { name: 'TechFinancials', img: techFinancialsLogo, isLogo: true },
                    { name: 'Engineering News', img: engineeringNewsLogo, isLogo: true },
                    { name: 'ITWeb', img: itWebLogo, isLogo: true },
                    { name: 'Central News', img: centralNewsLogo, isLogo: true },
                  ].map((outlet, idx) => (
                    <div key={idx} className="group">
                      <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border hover:border-blue-300 transition-all flex items-center justify-center p-2 ${
                        outlet.name === 'MoneyWeb' 
                          ? 'bg-[#1e3a8a] border-[#1e3a8a]' 
                          : 'bg-white border-gray-200'
                      }`}>
                        {outlet.isLogo ? (
                          <img 
                            src={outlet.img}
                            alt={outlet.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                          />
                        ) : (
                          <ImageWithFallback 
                            src={outlet.img}
                            alt={outlet.name}
                            className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                          />
                        )}
                      </div>
                      <p className="text-xs text-center text-gray-600 mt-2 font-semibold">{outlet.name}</p>
                    </div>
                  ))}
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
                        Predict is the first Bet Exchange, and Financial Services Conduct Authority (FSCA) (approval pending) regulated exchange dedicated to trading on the outcome of future events. From Budget Votes, GDP, Inflation, to Sports, Elections, Cabinet composition, and more. Predict allows people to trade on a broad range of topics. This is a new asset class of "Future Event Contract," where you can buy <strong>Yes or No positions</strong> with respect to whether an event will happen or not. Predict's vision is to allow people to capitalise on their opinions, trade in the domain of every day, and hedge risks that relate to them.
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
                        Predict's Future Event Contracts give people the ability to trade based on their opinions about a specific <strong>yes-or-no questions</strong>. For example, if you have NSFAS debt and are worried about a "grace-period" not passing through parliament, you can purchase a contract and get a payout if it doesn't pass. Or if you're worried about the economic fallout of the South Africa – US relationship, you can place a trade to hedge against it. If you've developed a trading strategy on party political outcomes, you can profit from that.
                      </p>
                      <p className="text-lg text-gray-700 mb-4">
                        Future Event Contracts have an interesting side effect - the price that a given event contract trades at is actually a measure of the probability that the event will happen. Our inflation and SARB rate forecasts have been more accurate than economists, pundits, and traditional news outlets over the past year.
                      </p>
                      <p className="text-lg text-gray-700">
                        We offer Future Event Contracts on a wide range of topics, including politics, economics, culture, finance, business, technology, entertainment, weather, commodities, and science.
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
                      <strong>Predict by Suppple</strong> was born out of a deep, practical engagement with public opinion, governance, and future outcomes in Africa.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      Its founders, <strong>Goitse Konopi, Phillip Chauke and Eldrid Jordaan</strong> began working at the intersection of <strong>citizen engagement, data, and governance</strong> long before prediction markets were part of the mainstream conversation. As the co-founders of <strong>GovChat</strong>, South Africa's largest civic engagement platform, Goitse and Eldrid helped governments, municipalities, and public institutions engage millions of citizens through structured digital polling, sentiment analysis, and issue-based feedback.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      Over years of running large user <strong>national surveys, municipal polls, State of the Nation sentiment tracking, and real-time public opinion dashboards</strong>, a clear pattern emerged: people consistently <em>had strong, measurable expectations about future events</em> elections, policy outcomes, service delivery failures, leadership changes, economic shocks yet there was <strong>no formal, incentive-aligned mechanism</strong> to aggregate those expectations into a signal that decision-makers could rely on.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6 mb-4 border-l-4 border-blue-600">
                      <p className="text-gray-800 mb-2">Polls captured opinion.</p>
                      <p className="text-gray-800 mb-2">Forecasts captured expert views.</p>
                      <p className="text-gray-800 font-semibold">But no system captured conviction.</p>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      Goitse observed that many of the most important decisions by governments, investors, corporates, and citizens were ultimately driven by implicit predictions about the future, made without transparent price signals or accountability. Existing tools approximated expectations through surveys or financial proxies, but these were often blunt, slow, or distorted by incentives.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      This gap between <strong>what people believe will happen</strong> and <strong>how those beliefs are expressed and weighted</strong> became the conceptual foundation for Predict.
                    </p>

                    <h5 className="text-xl font-bold text-gray-900 mb-3">From Polls to Markets: The Core Insight</h5>
                    <p className="text-lg text-gray-700 mb-4">
                      The insight behind Predict by Suppple was simple but powerful:
                    </p>
                    <p className="text-lg text-gray-700 font-semibold mb-4">
                      Markets outperform polls when participants have skin in the game.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      Years of civic polling revealed that while public opinion is informative, <strong>confidence-weighted expectations</strong> are far more predictive of real-world outcomes. Prediction markets transform belief into signal by attaching economic consequence to accuracy.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      Rather than asking <em>"What do you think will happen?"</em>, Predict asks:<br />
                      <em>"What are you willing to stake on what will happen?"</em>
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      This transition from polling to probabilistic markets represents a natural evolution of the work begun at <strong>GovChat</strong>, moving from civic voice to <strong>collective intelligence</strong>.
                    </p>

                    <h5 className="text-xl font-bold text-gray-900 mb-3 mt-8">Formation of Predict by Suppple (2024–Present)</h5>
                    <p className="text-lg text-gray-700 mb-4">
                      Predict was incubated within <strong>Suppple Group</strong>, a technology and infrastructure company focused on regulated digital markets, data systems, and next-generation financial platforms across emerging markets.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      From inception, Predict was designed <strong>not as a gambling product</strong>, but as a <strong>regulated financial instrument platform</strong> aligned with derivatives law, market integrity principles, and global best practice.
                    </p>
                    <p className="text-lg text-gray-700 mb-3">Early development focused on:</p>
                    <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-1">
                      <li>Event-based contract design</li>
                      <li>Market microstructure suitable for low-liquidity emerging markets</li>
                      <li>Robust KYC, AML, and surveillance frameworks</li>
                      <li>Regulatory classification under financial, not gaming, legislation</li>
                    </ul>
                    <p className="text-lg text-gray-700 mb-6">
                      The platform drew conceptual inspiration from regulated futures and options markets, adapting them for <strong>discrete real-world events</strong> such as elections, policy decisions, macroeconomic indicators, and major societal outcomes.
                    </p>

                    <h5 className="text-xl font-bold text-gray-900 mt-8 mb-3">Predict's Values</h5>
                    <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-1">
                      <li>Climb the Steeper Mountain</li>
                      <li>Steep Mountains are Steep</li>
                      <li>Plan Deliberately, Climb Ferociously</li>
                      <li>No Free Lunch</li>
                      <li>It's Yours, Make it Work</li>
                      <li>Tough Love</li>
                    </ul>

                    <h5 className="text-xl font-bold text-gray-900 mt-8 mb-3">Key Milestones</h5>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li className="mb-2">2011: Konopi worked at the National Planning Commission (South Africa) on the "JAM" platform (crowd-sourcing information).</li>
                      <li className="mb-2">2016: Launch of GovChat, South Africa's largest civic engagement platform.</li>
                      <li className="mb-2">2018: Introduction of prediction/polling sentiment features within GovChat.</li>
                      <li className="mb-2">2024: Formation of Suppple Group to focus on AI and prediction markets.</li>
                      <li className="mb-2">2025: Launch of Prediction Market by Suppple, a dedicated prediction market platform.</li>
                      <li className="mb-2">2025: LUXSE and A2X listing of Suppple Group, raising capital for growth and expansion.</li>
                      <li className="mb-2">2026: Expansion into new African markets and global territories through strategic partnerships.</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Regulatory-First Philosophy */}
              <AccordionItem value="regulatory-first" className="border-b">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                Regulatory-First Philosophy
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-4">
                    A defining characteristic of Predict by Suppple is its <strong>regulatory-first approach</strong>.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Unlike offshore or crypto-native prediction platforms that operated in legal grey zones, Predict was architected from day one to operate within <strong>formal financial regulatory regimes</strong>, engaging proactively with regulators and policymakers.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    This approach reflects Goitse Konopi and Phillip Chauke's experience working directly with government, financial and public institutions, where trust, transparency, and compliance are non-negotiable.
                  </p>
                  <p className="text-lg text-gray-700 mb-3">Predict's long-term vision aligns with:</p>
                  <ul className="list-disc pl-8 mb-6 text-gray-700 space-y-1">
                    <li>Financial market licensing frameworks</li>
                    <li>Consumer protection standards</li>
                    <li>Market abuse and manipulation safeguards</li>
                    <li>Responsible participation and disclosure</li>
                  </ul>

                  <h5 className="text-xl font-bold text-gray-900 mt-8 mb-3">Vision: A Market for the Future</h5>
                  <p className="text-lg text-gray-700 mb-3">Predict by Suppple envisions a future where:</p>
                  <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
                    <li>Citizens can hedge against political, economic, and social risk</li>
                    <li>Institutions can access real-time probabilistic signals about public expectations</li>
                    <li>Policymakers can observe market-based forecasts as an input not a replacement to decision-making</li>
                    <li>Emerging markets gain tools long available only in developed financial systems</li>
                  </ul>
                  <p className="text-lg text-gray-700">
                    In this vision, <strong>prediction markets are not about speculation for its own sake</strong>, but about <strong>revealing truth through incentives</strong>, improving decision quality, and increasing societal resilience in the face of uncertainty.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Our Journey to Global Leadership */}
            <AccordionItem value="journey-leadership">
              <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                Our Journey to Global Leadership
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6">
                    From a single brand to a publicly-traded global powerhouse, Suppple Group has achieved remarkable milestones that shaped us into the industry leader we are today.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white mb-6">
                    <h4 className="text-2xl font-bold mb-4">10+ Years of Building Scalable Technology</h4>
                    <p className="text-white/90 mb-6">Building the future of AI-powered technology and iGaming</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-1">2+</div>
                        <div className="text-white/80 text-sm">Years Operating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-1">African</div>
                        <div className="text-white/80 text-sm">Countries</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-1">5+</div>
                        <div className="text-white/80 text-sm">Licensed partners</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-1">£250m+</div>
                        <div className="text-white/80 text-sm">Market Cap</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700">
                    Our journey has been marked by strategic expansion, technological innovation, and a commitment to excellence. Through licensed partnerships across Africa, we've established ourselves as a leading provider of AI-powered platforms and gaming technology, serving millions of users while maintaining the highest standards of regulatory compliance and corporate governance.
                  </p>
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
                  To be the leading AI-powered technology platform provider serving millions across Africa and beyond, 
                  delivering innovation, excellence, and sustainable growth through strategic partnerships.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-3xl font-bold mb-2">Vision</div>
                    <p className="text-white/80">Global leader in AI and gaming technology</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-3xl font-bold mb-2">Mission</div>
                    <p className="text-white/80">Empower users through innovative AI platforms</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-3xl font-bold mb-2">Values</div>
                    <p className="text-white/80">Innovation, integrity, and responsibility</p>
                  </div>
                </div>
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

              {/* Growth Strategy */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Growth Strategy</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-3">01</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Geographic Expansion</h4>
                    <p className="text-gray-600">
                      Expand our presence across new African markets and global territories through strategic partnerships and licensing.
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-3">02</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Platform Development</h4>
                    <p className="text-gray-600">
                      Continuous innovation in AI capabilities, launching new features and platforms to serve evolving customer needs.
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-3">03</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Strategic M&A</h4>
                    <p className="text-gray-600">
                      Pursue strategic acquisitions and partnerships to accelerate growth and expand our technology capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Responsible Technology Tab */}
          <TabsContent value="responsibility" className="mt-8">
            <div className="space-y-12">
              {/* Hero Section */}
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 text-white text-center">
                <Shield className="mx-auto mb-6 text-white" size={64} />
                <h3 className="text-4xl font-bold mb-6">Responsible Technology Commitment</h3>
                <p className="text-xl text-white/90 max-w-4xl mx-auto">
                  We are committed to developing and deploying AI and technology in a responsible, ethical, and sustainable manner. 
                  Our platforms prioritize user safety, privacy, and wellbeing while driving innovation.
                </p>
              </div>

              {/* Responsibility Principles */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Principles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {responsibilityPrinciples.map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                        <principle.icon className="text-blue-600" size={24} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h4>
                      <p className="text-gray-600 mb-4">{principle.description}</p>
                      <ul className="space-y-2">
                        {principle.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications & Compliance */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications & Compliance</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                    <Shield className="mx-auto mb-4 text-blue-600" size={40} />
                    <h4 className="font-bold text-gray-900 mb-2">ISO 27001</h4>
                    <p className="text-sm text-gray-600">Information Security</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                    <Lock className="mx-auto mb-4 text-green-600" size={40} />
                    <h4 className="font-bold text-gray-900 mb-2">GDPR</h4>
                    <p className="text-sm text-gray-600">Data Privacy</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                    <CheckCircle className="mx-auto mb-4 text-purple-600" size={40} />
                    <h4 className="font-bold text-gray-900 mb-2">POPIA</h4>
                    <p className="text-sm text-gray-600">Privacy Compliance</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                    <Award className="mx-auto mb-4 text-orange-600" size={40} />
                    <h4 className="font-bold text-gray-900 mb-2">SOC 2</h4>
                    <p className="text-sm text-gray-600">Security Standards</p>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Support & Resources</h3>
                <p className="text-gray-700 text-center mb-6 max-w-3xl mx-auto">
                  We provide comprehensive resources and support for users, developers, and partners to ensure responsible technology use.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Responsible AI Guidelines
                  </Button>
                  <Button variant="outline">
                    Privacy Policy
                  </Button>
                  <Button variant="outline">
                    Ethics Framework
                  </Button>
                  <Button variant="outline">
                    Support Resources
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Board of Directors Tab */}
          <TabsContent value="board" className="mt-8">
            <div className="space-y-12">
              {/* Board Overview */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Board of Directors</h3>
                <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
                  Our independent board members bring diverse perspectives and deep expertise to guide Suppple Group's strategic direction 
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