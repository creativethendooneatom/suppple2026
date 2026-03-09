import { motion } from 'motion/react';
import { Trophy, Gamepad2, Star, Target, Globe, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import makerrrLogo from '../../assets/a43e4904f855e7ec564fd9161424505e0b04623c.png';
import grioLogo from '../../assets/096d4fc46974c6f935b21bbacbca7e805f856062.png';
import digitalGamingLogo from '../../assets/ec381205e8b0dcbb46f479c939b62f30bdbb5c03.png';
import predictionMarketLogo from '../../assets/d1816d16664454bc1d2bbbd5c2859f136c930066.png';

export function BrandsSection() {
  const brands = [
    {
      icon: TrendingUp,
      name: 'GRIO',
      description: 'A proprietary multimodal AI platform that forms the intelligence layer across Suppple Group products and institutional deployments, supporting text, voice, image, and video-based interaction.',
      color: 'from-cyan-500 to-cyan-700',
      markets: ['Global'],
      features: ['Multimodal Processing', 'Vision & Language', 'API Access'],
      customers: 'TBA',
      link: 'https://www.grio.cloud/',
      logo: grioLogo,
      performanceHighlights: [
        { label: 'Model Accuracy', value: '96%', color: 'green' },
        { label: 'API Calls/Month', value: '50M+', color: 'green' },
        { label: 'Response Time', value: '<100ms', color: 'blue' },
        { label: 'Supported Modalities', value: '10+', color: 'blue' },
      ],
    },
    {
      icon: Star,
      name: 'Makerrr.ai',
      description: 'An AI-enabled software creation platform that enables users and institutions to design, build, and deploy applications through natural language instructions.',
      color: 'from-orange-500 to-orange-700',
      markets: ['Africa', 'Europe', 'Asia'],
      features: ['AI Creation', 'Real-time Generation', 'Multi-format Export'],
      customers: 'TBA',
      link: 'https://www.makerrr.ai/projects/new',
      logo: makerrrLogo,
      performanceHighlights: [
        { label: 'Generations/Day', value: '500K+', color: 'green' },
        { label: 'User Satisfaction', value: '4.7/5', color: 'green' },
        { label: 'Avg. Speed', value: '<3s', color: 'blue' },
        { label: 'Content Formats', value: '50+', color: 'blue' },
      ],
    },
    {
      icon: Target,
      name: 'BetPlay Arena',
      description: 'A digital gaming platform developed by Suppple Group that enables interactive gameplay experiences and secure in-game transactions, designed for deployment by licensed operators and platform partners.',
      color: 'from-blue-500 to-blue-700',
      markets: ['Global'],
      features: ['B2B Platform', 'White Label', 'API Solutions'],
      customers: '50+ Partners',
      link: 'https://bet-play-pi.vercel.app/',
      logo: digitalGamingLogo,
      performanceHighlights: [
        { label: 'Platform Uptime', value: '99.95%', color: 'green' },
        { label: 'Partner Growth', value: '+40%', color: 'green' },
        { label: 'Integrations', value: '200+', color: 'blue' },
        { label: 'Partner Licenses', value: '50+', color: 'blue' },
      ],
    },
    {
      icon: TrendingUp,
      name: 'Predict',
      description: 'A prediction market platform developed by Suppple Group and deployed through licensed operators, with Suppple providing the core technology, infrastructure, and platform support.',
      color: 'from-green-500 to-green-700',
      markets: ['Africa', 'Europe', 'Asia'],
      features: ['Live Predictions', 'Real-time Analytics', '10,000+ Markets Monthly'],
      customers: '1M+',
      link: 'https://fact-market.vercel.app/',
      logo: predictionMarketLogo,
      performanceHighlights: [
        { label: 'Customer Satisfaction', value: '4.6/5', color: 'green' },
        { label: 'YoY Growth', value: '+35%', color: 'green' },
        { label: 'Market Position', value: 'Top 3', color: 'blue' },
        { label: 'Partner Licenses', value: '2', color: 'blue' },
      ],
    },
  ];

  return (
    <section id="brands" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            PLATFORMS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A portfolio of proprietary AI platforms developed and operated by Suppple Group, deployed through licensed partners and enterprise engagements across regulated markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => brand.link && window.open(brand.link, '_blank')}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {brand.logo ? (
                  <div className="flex items-center justify-center mb-6 w-full h-48 mx-auto">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center mb-6 mx-auto`}>
                    <brand.icon className="text-white" size={32} />
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-gray-600">{brand.description}</p>
                {brand.link && (
                  <div className="mt-4 text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Visit Site →
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Trusted by Millions in Africa</h3>
            <p className="text-white/90">
              Our platforms serve customers across multiple continents, providing best-in-class experiences
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-white/80">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6M+</div>
              <div className="text-white/80">Active Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-white/80">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}