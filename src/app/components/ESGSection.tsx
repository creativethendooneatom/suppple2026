import { motion } from 'motion/react';
import { Leaf, Users, Building, Heart, BookOpen, Recycle, Sun, Droplet } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function ESGSection() {
  const esgPillars = [
    {
      icon: Leaf,
      title: 'Environmental',
      description: 'Committed to reducing our carbon footprint and promoting sustainable operations.',
      initiatives: [
        'Carbon Neutral Operations by 2030',
        'Renewable Energy Usage',
        'Paperless Digital Operations',
        'Green Office Certifications',
      ],
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Users,
      title: 'Social',
      description: 'Dedicated to responsible gaming, community engagement, and employee wellbeing.',
      initiatives: [
        'Responsible Gaming Programs',
        'Community Partnerships',
        'Employee Development',
        'Diversity & Inclusion',
      ],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Building,
      title: 'Governance',
      description: 'Maintaining the highest standards of corporate governance and ethical business practices.',
      initiatives: [
        'Independent Board Oversight',
        'Regulatory Compliance',
        'Transparent Reporting',
        'Ethics & Anti-Corruption',
      ],
      color: 'from-purple-500 to-purple-700',
    },
  ];

  const communityPrograms = [
    {
      icon: Heart,
      title: 'Free Software for Community Support',
      amount: '$5M+',
      description: 'Annual contributions to communities where we operate through partnerships with the government',
    },
    {
      icon: BookOpen,
      title: 'AI Assistant for Education',
      amount: '1,000,000+ users',
      description: 'Students supported through our multi-modal AI Assistant GRIO, as part of an education initiative with the department of Higher Education',
    },
    {
      icon: Users,
      title: 'Employment',
      amount: 'Teams',
      description: 'Operating globally, with focus on local',
    },
    {
      icon: Recycle,
      title: 'Sustainability',
      amount: '50%',
      description: 'Reduction in carbon emissions since 2020',
    },
  ];

  const sustainabilityMetrics = [
    { label: 'Renewable Energy', value: '65%', target: '100% by 2030' },
    { label: 'Female Leadership', value: '42%', target: '50% by 2026' },
    { label: 'Employee Satisfaction', value: '4.5/5', target: 'Top 10% Industry' },
    { label: 'Community Investment', value: '$5M+', target: 'Annual Commitment' },
  ];

  return (
    <section id="esg" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 p-3 bg-green-100 rounded-xl">
              <Leaf className="text-green-600" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Environmental, Social & Governance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a sustainable future through responsible business practices, community engagement, and environmental stewardship.
            </p>
          </motion.div>
        </div>

        {/* ESG Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {esgPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className={`bg-gradient-to-r ${pillar.color} p-6 text-white`}>
                <pillar.icon className="mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-white/90">{pillar.description}</p>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-4">Key Initiatives:</h4>
                <ul className="space-y-3">
                  {pillar.initiatives.map((initiative, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1528122819723-9dca3a31295d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGVudmlyb25tZW50JTIwZ3JlZW58ZW58MXx8fHwxNzY2NDc3MTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Sustainability"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Our 2030 Vision</h3>
              <p className="text-white/90">Carbon neutral, fully sustainable operations</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Sustainability Commitments
            </h3>
            <div className="space-y-6">
              {sustainabilityMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-gray-900">{metric.label}</span>
                    <span className="text-2xl font-bold text-green-600">{metric.value}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Sun size={14} />
                    <span>Target: {metric.target}</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-600" style={{ width: '70%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Community Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Impact
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Making a positive difference in the communities where we operate through meaningful partnerships and programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <program.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{program.amount}</div>
                <h4 className="font-bold text-gray-900 mb-2">{program.title}</h4>
                <p className="text-sm text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Reports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Transparency & Accountability
              </h3>
              <p className="text-white/90 mb-6">
                We publish comprehensive annual ESG reports detailing our progress, challenges, and commitments to stakeholders.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Annual ESG Disclosure Report</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>GRI Standards Alignment</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>UN Sustainable Development Goals</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Third-Party ESG Ratings</span>
                </li>
              </ul>
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100"
                onClick={() => alert('ESG Report 2024 - This would download the ESG report in a production environment')}
              >
                Download ESG Report 2024
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'ISO 14001', sub: 'Environmental' },
                { label: 'ISO 27001', sub: 'Security' },
                { label: 'B Corp', sub: 'Certified' },
                { label: 'Carbon Trust', sub: 'Standard' },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="text-green-400" size={24} />
                  </div>
                  <div className="font-bold mb-1">{cert.label}</div>
                  <div className="text-sm text-white/70">{cert.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}