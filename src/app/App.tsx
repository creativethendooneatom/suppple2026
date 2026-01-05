import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BrandsSection } from './components/BrandsSection';
import { GlobalPresence } from './components/GlobalPresence';
import { ResponsibleGaming } from './components/ResponsibleGaming';
import { InvestorSection } from './components/InvestorSection';
import { CareersSection } from './components/CareersSection';
import { Footer } from './components/Footer';
import { LeadershipSection } from './components/LeadershipSection';
import { HistoryTimeline } from './components/HistoryTimeline';
import { TechnologySection } from './components/TechnologySection';
import { ESGSection } from './components/ESGSection';
import { PartnershipsSection } from './components/PartnershipsSection';
import { NewsRoom } from './components/NewsRoom';
import { PublishedAnnouncements } from './components/PublishedAnnouncements';
import { ReportingSection } from './components/ReportingSection';
import { HelpSection } from './components/HelpSection';
import { RegulatoryPage } from './components/RegulatoryPage';

// Suppple Group Corporate Website
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <HistoryTimeline />
        <BrandsSection />
        <GlobalPresence />
        <TechnologySection />
        <PartnershipsSection />
        <InvestorSection />
        <LeadershipSection />
        <ESGSection />
        <PublishedAnnouncements />
        <ReportingSection />
        <ResponsibleGaming />
        <NewsRoom />
        <HelpSection />
        <RegulatoryPage />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
}