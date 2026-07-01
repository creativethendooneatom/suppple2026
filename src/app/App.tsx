import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BrandsSection } from './components/BrandsSection';
import { FeaturedPlatformSection } from './components/FeaturedPlatformSection';
import { ResponsibleGaming } from './components/ResponsibleGaming';
import { CareersSection } from './components/CareersSection';
import { Footer } from './components/Footer';
import { LeadershipSection } from './components/LeadershipSection';
import { ESGSection } from './components/ESGSection';
import { NewsRoom } from './components/NewsRoom';
import { PublishedAnnouncements } from './components/PublishedAnnouncements';
import { ReportingSection } from './components/ReportingSection';
import { RegulatoryPage } from './components/RegulatoryPage';

// Suppple Group Corporate Website
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <BrandsSection />
        <FeaturedPlatformSection />
        <LeadershipSection />
        <ESGSection />
        <PublishedAnnouncements />
        <ReportingSection />
        <ResponsibleGaming />
        <NewsRoom />
        <RegulatoryPage />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
}
