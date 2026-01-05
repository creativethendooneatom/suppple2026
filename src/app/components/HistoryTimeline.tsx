import { motion } from 'motion/react';
import { Calendar, TrendingUp, Globe, Award, Building2, Rocket } from 'lucide-react';

export function HistoryTimeline() {
  const milestones = [
    {
      year: '2024',
      title: 'Foundation',
      description: 'Prediction Market development, establishing our first gaming technology with a focus on customer experience.',
      icon: Rocket,
      color: 'from-blue-400 to-blue-600',
    },
    {
      year: '2024',
      title: 'Partnership Expansion',
      description: 'Secured key partnerships with licensed operators across South Africa markets.',
      icon: Globe,
      color: 'from-green-400 to-green-600',
    },
    {
      year: '2025',
      title: 'Gaming Launch',
      description: 'Introduced our gaming vertical, diversifying our product offering and establishing presence in the iGaming sector.',
      icon: Award,
      color: 'from-purple-400 to-purple-600',
    },
    {
      year: '2025',
      title: 'African Market Entry',
      description: 'Launched Predict Market and entered African markets, quickly establishing market leadership positions.',
      icon: TrendingUp,
      color: 'from-orange-400 to-orange-600',
    },
    {
      year: '2025',
      title: 'Suppple Group permanent listing',
      description: 'Suppple Group as the holding company, bringing together our portfolio of leading brands under unified management listed on the Luxembourg Stock Exchange (November 2025).',
      icon: Building2,
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      year: '2025',
      title: 'LUXSE Listing',
      description: 'Completed successful listing on the Luxembourg Stock Exchange (LUXSE: SUPPA), marking a major milestone in our growth journey.',
      icon: Calendar,
      color: 'from-blue-500 to-blue-700',
    },
    {
      year: '2025',
      title: 'South African Licensed Expansion',
      description: 'Secured partnerships with licensed operators in multiple South African markets.',
      icon: Globe,
    },
    {
      year: '2025',
      title: 'Global Scale',
      description: 'Reached £250m+ market cap, and millions of active customers worldwide.',
      icon: TrendingUp,
      color: 'from-green-500 to-green-700',
    },
    {
      year: '2025',
      title: 'Continued Innovation',
      description: 'Launched next-generation platforms with AI-powered features, mobile-first experiences, and enhanced responsible gaming tools.',
      icon: Rocket,
      color: 'from-cyan-400 to-cyan-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey to Global Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a single brand to a publicly-traded global powerhouse, discover the milestones that shaped Suppple Group into the industry leader we are today.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 transform -translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Left side (alternating) */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                  <div className={`inline-block lg:block ${index % 2 === 0 ? 'lg:ml-auto' : ''} max-w-md`}>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${milestone.color} text-white rounded-full mb-4`}>
                      <span className="font-bold">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Center icon */}
                <div className={`hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'lg:col-start-2' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
                    <milestone.icon className="text-white" size={28} />
                  </div>
                </div>

                {/* Mobile icon */}
                <div className="lg:hidden">
                  <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center`}>
                    <milestone.icon className="text-white" size={20} />
                  </div>
                </div>

                {/* Right side placeholder for layout */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">10+ Years of Building Scalable Technology</h3>
            <p className="text-white/90">Building the future of AI-powered technology and iGaming</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-white/80">Years Operating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">African</div>
              <div className="text-white/80">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-white/80">Licensed partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">£250m+</div>
              <div className="text-white/80">Market Cap</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}