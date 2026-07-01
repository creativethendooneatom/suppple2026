import { motion } from 'motion/react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import predictionMarketLogo from '../../assets/d1816d16664454bc1d2bbbd5c2859f136c930066.png';

export function FeaturedPlatformSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left Column - Predict Info */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                FEATURED PLATFORM
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Predict
                </h2>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white">
              Back your insight.
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              Predict is a real-time prediction market platform where participants trade on future events across politics, business, sport, technology and culture.
            </p>

            <p className="text-lg text-gray-400">
              Built in partnership with licensed operator <span className="font-semibold text-gray-300">Ansino</span>.
            </p>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://fact-market.vercel.app/', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                Register Interest <ArrowRight size={20} />
              </motion.button>
            </div>

            <p className="text-gray-400 italic">
              Launching soon.
            </p>

            {/* Ansino Logo */}
            <div className="pt-4">
              <p className="text-gray-400 text-sm mb-2">Powered by</p>
              <div className="w-32">
                <div className="text-2xl font-bold text-yellow-400">
                  ⊙ ansino
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Market Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl bg-slate-800/50 border border-slate-700 p-6 backdrop-blur-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <span className="font-bold text-white">predict</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Markets</span>
                  <span>Activity</span>
                  <span>Portfolio</span>
                  <span>Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-gray-300">Log in</button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Sign up
                  </button>
                </div>
              </div>

              {/* Market Question */}
              <div className="mb-6">
                <h4 className="text-white font-semibold text-lg mb-2">
                  What will South Africa's inflation rate be in Q4 2025?
                </h4>
                <div className="flex gap-4 text-sm">
                  <span className="text-gray-400">Regulated Market</span>
                  <span className="text-gray-400">Powered by Predict</span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="mb-6 h-48 bg-slate-900/50 rounded-lg p-4 flex items-center justify-center">
                <div className="w-full h-full flex items-end justify-between gap-1">
                  {/* Simple line chart representation */}
                  {[2, 3.5, 4.2, 4.8, 5.1, 5.3, 5.8, 6, 5.5, 4.8, 4.2, 3.5].map((val, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-70"
                      style={{ height: `${(val / 6) * 100}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Market Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Market Expectation</p>
                  <p className="text-2xl font-bold text-white">4.2%</p>
                  <p className="text-green-400 text-sm">↓ 0.3% (24h)</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Volume</p>
                  <p className="text-2xl font-bold text-white">R1.2M</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Participants</p>
                  <p className="text-2xl font-bold text-white">1,842</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
