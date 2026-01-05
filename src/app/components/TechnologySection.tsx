import { motion } from 'motion/react';
import { Cpu, Shield, Zap, Smartphone, Cloud, Lock, BarChart3, Bot } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function TechnologySection() {
  const technologies = [
    {
      icon: Cpu,
      title: 'Advanced Platform Architecture',
      description: 'Scalable microservices architecture handling millions of transactions per second with 99.99% uptime.',
      features: ['Microservices', 'Auto-scaling', 'Load Balancing', 'Real-time Processing'],
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Multi-layered security infrastructure with advanced encryption and fraud detection systems.',
      features: ['256-bit Encryption', 'DDoS Protection', 'Fraud Detection', 'Secure Payments'],
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description: 'AI-powered personalization, risk management, and customer support for enhanced experiences.',
      features: ['Personalization', 'Risk Models', 'Chatbots', 'Predictive Analytics'],
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Native apps and responsive web platforms optimized for seamless mobile experiences.',
      features: ['Native Apps', 'PWA Support', 'Touch Optimization', 'Offline Mode'],
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Global cloud infrastructure ensuring low latency and high availability across all markets.',
      features: ['Multi-Region', 'CDN', 'Edge Computing', '24/7 Monitoring'],
    },
    {
      icon: Zap,
      title: 'Real-time Data',
      description: 'Live betting and gaming powered by real-time data feeds and instant settlement systems.',
      features: ['Live Odds', 'Instant Updates', 'Real-time Analytics', 'Fast Settlements'],
    },
  ];

  const innovations = [
    {
      category: 'Platform',
      title: 'Next-Gen Prediction Market Engine',
      description: 'Our proprietary prediction market processes millions of bets daily with sub-second response times.',
      stats: [
        { label: 'Bets/Day', value: '10M+' },
        { label: 'Response Time', value: '<500ms' },
        { label: 'Uptime', value: '99.99%' },
      ],
    },
    {
      category: 'Mobile',
      title: 'Award-Winning Apps',
      description: 'Industry-leading mobile applications with millions of downloads and top ratings.',
      stats: [
        { label: 'Downloads', value: '5M+' },
        { label: 'App Rating', value: '4.5/5' },
        { label: 'Daily Active Users', value: '500K+' },
      ],
    },
    {
      category: 'Security',
      title: 'Advanced Protection',
      description: 'State-of-the-art security systems protecting customer data and transactions.',
      stats: [
        { label: 'Transactions Secured', value: '100M+' },
        { label: 'Security Certifications', value: '15+' },
        { label: 'Fraud Detection Rate', value: '99.9%' },
      ],
    },
  ];

  return (
    <section id="technology" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4 p-3 bg-blue-500/20 backdrop-blur-sm rounded-xl">
              <Cpu className="text-blue-400" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology & Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology powering world-class gaming experiences for millions of customers globally.
            </p>
          </motion.div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <tech.icon className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Innovation Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Tabs defaultValue="platform" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/5 p-1">
              <TabsTrigger value="platform" className="data-[state=active]:bg-blue-600">
                Platform
              </TabsTrigger>
              <TabsTrigger value="mobile" className="data-[state=active]:bg-blue-600">
                Mobile
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-blue-600">
                Security
              </TabsTrigger>
            </TabsList>

            {innovations.map((innovation, index) => (
              <TabsContent key={index} value={innovation.category.toLowerCase()} className="mt-0">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{innovation.title}</h3>
                      <p className="text-gray-300 mb-6">{innovation.description}</p>
                      <div className="grid grid-cols-3 gap-4">
                        {innovation.stats.map((stat, idx) => (
                          <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                      <img
                        src={innovation.category === 'Platform' ? 'https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZGV2ZWxvcGVycyUyMGNvZGluZyUyMHRlYW18ZW58MXx8fHwxNzY2NTc3NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' : 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzY2NTIyMDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'}
                        alt="Technology"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Built with Industry-Leading Technology</h3>
            <p className="text-white/90">
              Our technology stack combines the best tools and frameworks for performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React & Node.js', category: 'Frontend/Backend' },
              { name: 'Kubernetes', category: 'Orchestration' },
              { name: 'PostgreSQL', category: 'Database' },
              { name: 'Redis', category: 'Caching' },
              { name: 'AWS & Azure', category: 'Cloud' },
              { name: 'TensorFlow', category: 'AI/ML' },
              { name: 'Kafka', category: 'Messaging' },
              { name: 'GraphQL', category: 'API' },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center hover:bg-white/15 transition-colors"
              >
                <div className="font-bold mb-1">{tech.name}</div>
                <div className="text-sm text-white/70">{tech.category}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Zap, label: 'API Response Time', value: '<100ms', color: 'yellow' },
            { icon: Lock, label: 'Security Score', value: 'A+', color: 'green' },
            { icon: BarChart3, label: 'Platform Uptime', value: '99.99%', color: 'blue' },
            { icon: Cloud, label: 'Daily Transactions', value: '10M+', color: 'purple' },
          ].map((metric, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
            >
              <metric.icon className={`text-${metric.color}-400 mx-auto mb-3`} size={32} />
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}