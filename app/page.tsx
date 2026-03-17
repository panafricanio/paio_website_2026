import { FC } from 'react';
import Header from '@/components/Layout/Header';
import HeroSection from '@/components/Hero/HeroSection';
import TimelineSection from '@/components/Timeline/TimelineSection';
import FormatSection from '@/components/Format/FormatSection';
import VenueSection from '@/components/Venue/VenueSection';
import SponsorsSection from '@/components/Sponsors/SponsorsSection';
import CallForTasksSection from '@/components/CallForTasks/CallForTasksSection';
import RegistrationSection from '@/components/Registration/RegistrationSection';
import Footer from '@/components/Layout/Footer';

const Home: FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TimelineSection />
      <FormatSection />
      <VenueSection />
      <SponsorsSection />
      <CallForTasksSection />
      <RegistrationSection />
      <Footer />
    </main>
  );
};

export default Home;
