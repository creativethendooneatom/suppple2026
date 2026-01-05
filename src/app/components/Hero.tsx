import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-x-hidden pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1714978444234-de9b393e51eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGRldmVsb3BlcnMlMjBtdWx0aWN1bHR1cmFsfGVufDF8fHx8MTc2NjU3Mjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Suppple diverse multicultural development team collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/75 to-blue-800/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 text-white text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
            LUXSE Listed Company • Ticker: SUPPA
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto"
        >
          A Leading Technology Company
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm md:text-base text-white/90 mb-12 max-w-3xl mx-auto"
        >
          A global technology powerhouse of popular AI powered Sports and iGaming brands, in partnership with licensed operators across multiple jurisdictions with leading positions in Africa.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white hover:bg-gray-50 border-2 border-gray-200"
            onClick={() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Platforms
          </Button>
          <Button 
            size="lg" 
            className="border-2 border-white bg-transparent text-white hover:bg-white/10 px-8 font-semibold"
            onClick={() => document.getElementById('investors')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Investor Relations
          </Button>
          <Button 
            size="lg" 
            className="border-2 border-white bg-transparent text-white hover:bg-white/10 px-8 font-semibold"
            onClick={() => document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Careers
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-white animate-bounce" size={32} />
      </motion.div>
    </section>
  );
}