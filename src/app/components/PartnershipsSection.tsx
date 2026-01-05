import { motion } from 'motion/react';
import { Handshake, TrendingUp, Globe, Zap, Building2, Target, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PartnershipsSection() {
  const allianceHighlights = [
    {
      icon: Building2,
      title: 'Strategic Alliance',
      description: 'Partnership with Ansino, a leading African gaming operator',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Globe,
      title: 'Market Expansion',
      description: 'Expanding presence across African markets',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Zap,
      title: 'Technology Integration',
      description: 'AI-powered platforms driving innovation',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunity',
      description: 'Unlocking significant market potential',
      color: 'from-orange-500 to-orange-700',
    },
  ];

  const partnershipBenefits = [
    'Combined expertise in technology and local market knowledge',
    'Enhanced product offerings across sports betting and iGaming',
    'Shared resources and infrastructure optimization',
    'Regulatory compliance and licensing synergies',
    'Access to broader customer base and distribution channels',
    'Innovation through AI and machine learning technologies',
  ];

  const keyFacts = [
    { label: 'Partnership Announced', value: 'December 2025' },
    { label: 'Market Focus', value: 'African Markets' },
    { label: 'Partnership Type', value: 'Strategic Alliance' },
    { label: 'Technology Platform', value: 'AI-Powered' },
  ];

  return (
    <section id="partnerships" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              <Handshake className="text-blue-600" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building powerful alliances to drive growth and innovation across African markets.
            </p>
          </motion.div>
        </div>

        {/* Featured Partnership - Ansino Alliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Image/Visual */}
              <div className="relative h-96 lg:h-auto bg-gradient-to-br from-blue-700 to-blue-900">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto border-4 border-white/30">
                      <Handshake size={64} className="text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2">Suppple Group + Ansino</h3>
                    <p className="text-xl text-white/90">Strategic Alliance</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="p-8 md:p-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    FEATURED PARTNERSHIP
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Suppple Group PLC and Ansino Form Strategic Alliance
                </h3>
                <p className="text-lg text-white/90 mb-6">
                  In a groundbreaking move for the African gaming industry, Suppple Group has formed a strategic alliance with Ansino, combining cutting-edge AI technology with deep local market expertise to deliver world-class gaming experiences across the continent.
                </p>
                <p className="text-white/80 mb-8">
                  This partnership represents a significant milestone in our African expansion strategy, bringing together Suppple Group's advanced technology platforms and Ansino's established presence and regulatory relationships across key African markets.
                </p>
                <a 
                  href="https://businessexplainer.co.za/deals/2025/12/22/suppple-group-plc-and-ansino-form-strategic-alliance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-all"
                >
                  <span>Read Full Announcement</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Alliance Key Facts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all"
              >
                <div className="text-sm text-gray-600 mb-2">{fact.label}</div>
                <div className="text-xl font-bold text-gray-900">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alliance Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partnership Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allianceHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className={`bg-gradient-to-r ${highlight.color} p-6 text-white`}>
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <highlight.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                  <p className="text-white/90">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strategic Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200"
                >
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-6">"</div>
            <p className="text-xl md:text-2xl mb-6 italic">
              Suppple Group has been an exceptional partner, demonstrating professionalism, innovation, and a genuine commitment to our shared values. Their global reach and fan engagement capabilities are unmatched.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Target size={32} />
              </div>
              <div className="text-left">
                <div className="font-bold">Partnership Vision</div>
                <div className="text-white/80">Building the Future of African Gaming</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Partnership Opportunities?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for strategic partners who share our vision for innovation and growth in the gaming industry.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Contact Partnerships Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}