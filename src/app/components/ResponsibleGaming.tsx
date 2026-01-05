import { Shield, Clock, Users, Lock } from 'lucide-react';
import { Button } from './ui/button';

export function ResponsibleGaming() {
  const tools = [
    {
      icon: Clock,
      title: 'Deposit Limits',
      description: 'Set daily, weekly, or monthly deposit limits to control spending.',
    },
    {
      icon: Shield,
      title: 'Self-Exclusion',
      description: 'Take a break with temporary or permanent self-exclusion options.',
    },
    {
      icon: Lock,
      title: 'Reality Checks',
      description: 'Regular notifications to help you track your gaming time.',
    },
    {
      icon: Users,
      title: 'Support Network',
      description: '24/7 access to professional support and resources.',
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
            <Shield className="text-white" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Responsible Gaming Commitment
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We offer our customers a wide range of tools and services, coupled with a fair environment. Your safety and well-being are our top priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <tool.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
              <p className="text-white/80">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Our Commitment to Responsible Gaming
              </h3>
              <p className="text-white/90 mb-6">
                We are committed to providing a safe, fair, and transparent gaming environment. All our partners' platforms are fully licensed and regulated, ensuring the highest standards of player protection and fair play.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Fully licensed and regulated operations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Regular independent audits</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Age verification and player protection</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">Secure payment processing</span>
                </li>
              </ul>
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100"
                onClick={() => alert('Responsible Gaming Tools - This would provide more information about responsible gaming tools in a production environment')}
              >
                Learn More About Our Tools
              </Button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">18+</div>
                <div className="text-white/80 mb-6">Responsible Gaming</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">100%</div>
                    <div className="text-sm text-white/70">Verified Users</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm text-white/70">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}