import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Users, Building2 } from 'lucide-react';

export function GlobalPresence() {
  const regions = [
    {
      name: 'Europe',
      description: 'Establishing partnerships with parties with strong presence across UK, Germany, Spain, Italy and more',
      highlight: 'Partnership Growth',
    },
    {
      name: 'Americas',
      description: 'Establishing partnerships operations in North and South America',
      highlight: 'Expanding Reach',
    },
    {
      name: 'Africa',
      description: 'Dominant position across African markets',
      highlight: 'Market Leader',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Global Presence, Local Expertise
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Licensed and operating in multiple jurisdictions across three continents, we combine global scale with deep local market knowledge.
            </p>
            
            <div className="space-y-6">
              {regions.map((region, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{region.name}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {region.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600">{region.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619428602382-a370e5b73fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEFmcmljYSUyMHZvdGluZyUyMHBvbGxzJTIwZGVtb2NyYWN5fGVufDF8fHx8MTc2NjU3NzQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Prediction Markets and Voting Democracy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <Building2 className="text-blue-600 mb-2" size={24} />
                <div className="text-2xl font-bold text-gray-900">Multi</div>
                <div className="text-sm text-gray-600">Jurisdictions</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <Users className="text-blue-600 mb-2" size={24} />
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Employees across jurisdictions</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <MapPin className="text-blue-600 mb-2" size={24} />
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Open Markets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}