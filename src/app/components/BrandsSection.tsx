import { motion } from 'motion/react';
import { Trophy, Gamepad2, Star, Target, Globe, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import makerrrLogo from 'figma:asset/a43e4904f855e7ec564fd9161424505e0b04623c.png';
import seeekLogo from 'figma:asset/20ede8cda97ad2eb6b1a280de67e894930202cc0.png';
import grioLogo from 'figma:asset/096d4fc46974c6f935b21bbacbca7e805f856062.png';
import digitalGamingLogo from 'figma:asset/ec381205e8b0dcbb46f479c939b62f30bdbb5c03.png';
import predictionMarketLogo from 'figma:asset/d1816d16664454bc1d2bbbd5c2859f136c930066.png';

export function BrandsSection() {
  const brands = [
    {
      icon: TrendingUp,
      name: 'Prediction Market by Suppple',
      description: 'Premier prediction market platform',
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
    {
      icon: Gamepad2,
      name: 'Seeek.ai',
      description: 'AI-powered search and discovery',
      color: 'from-purple-500 to-purple-700',
      markets: ['Africa', 'Europe', 'Asia'],
      features: ['Intelligent Search', 'ML Recommendations', 'Visual Discovery'],
      customers: '500K+',
      link: 'https://www.seeek.ai/',
      logo: seeekLogo,
      performanceHighlights: [
        { label: 'Search Accuracy', value: '94%', color: 'green' },
        { label: 'Query Speed', value: '<50ms', color: 'green' },
        { label: 'API Uptime', value: '99.9%', color: 'blue' },
        { label: 'User Retention', value: '85%', color: 'blue' },
      ],
    },
    {
      icon: Star,
      name: 'Makerrr.ai',
      description: 'Creative AI platform for makers',
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
      icon: Globe,
      name: 'GRIO',
      description: 'Advanced multimodal AI model',
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
      icon: Target,
      name: 'Digital Gaming',
      description: 'Interactive gaming solutions',
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
  ];

  return (
    <section id="brands" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse ecosystem of world-class AI apps, sports betting and iGaming brands, each leaders in their respective markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className={`flex items-center justify-center mb-6 ${
                    brand.name === 'GRIO' ? 'w-56 h-56 bg-white rounded-lg p-4 mx-auto' :
                    brand.name === 'Digital Gaming' ? 'w-56 h-56 mx-auto' : 
                    brand.name === 'Seeek.ai' ? 'w-full h-72 p-6' : 
                    'w-48 h-48 mx-auto'
                  }`}>
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className={`${
                        brand.name === 'GRIO' ? 'w-full h-full object-contain' :
                        brand.name === 'Digital Gaming' ? 'w-full h-full object-contain' : 
                        brand.name === 'Seeek.ai' ? 'w-full h-full object-contain mx-auto' :
                        'w-full h-full object-contain'
                      }`}
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

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {brands.map((brand, index) => {
              // Simplified names for accordion triggers
              const accordionName = 
                brand.name === 'Prediction Market by Suppple' ? 'Predict' :
                brand.name === 'Seeek.ai' ? 'Seeek.AI' :
                brand.name === 'Makerrr.ai' ? 'Makerrr' :
                brand.name === 'Digital Gaming' ? 'BetPlay Arena' :
                brand.name;
              
              return (
                <AccordionItem key={index} value={brand.name.toLowerCase()} className="border-b">
                  <AccordionTrigger className="px-6 md:px-8 text-xl md:text-2xl font-bold hover:no-underline">
                    {accordionName}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 md:px-8">
                    <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          {brand.logo ? (
                            <div className={`flex items-center justify-center ${
                              brand.name === 'GRIO' || brand.name === 'Digital Gaming' ? 'w-48 h-48' : 
                              brand.name === 'Seeek.ai' ? 'w-48 h-48' : 
                              'w-40 h-40'
                            }`}>
                              <img 
                                src={brand.logo} 
                                alt={`${brand.name} logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center`}>
                              <brand.icon className="text-white" size={40} />
                            </div>
                          )}
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900">{accordionName}</h3>
                            <p className="text-gray-600">{brand.description}</p>
                          </div>
                        </div>

                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-3">
                            <Globe className="text-blue-600" size={20} />
                            <div>
                              <div className="font-semibold text-gray-900">Markets</div>
                              <div className="text-sm text-gray-600">{brand.markets.join(', ')}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <TrendingUp className="text-blue-600" size={20} />
                            <div>
                              <div className="font-semibold text-gray-900">Active Customers</div>
                              <div className="text-sm text-gray-600">{brand.customers}</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {brand.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {brand.link && (
                          <div className="mt-6">
                            <a 
                              href={brand.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                              Visit {accordionName} →
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-4">Performance Highlights</h4>
                        <div className="space-y-4">
                          {brand.performanceHighlights.map((highlight, idx) => (
                            <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200">
                              <span className="text-gray-600">{highlight.label}</span>
                              <span className={`font-bold text-${highlight.color}-600`}>{highlight.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
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