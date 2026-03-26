import { FC } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import TravelVisaSection from '@/components/Travel/TravelVisaSection';

export const metadata: Metadata = {
  title: 'Agenda - PAIO 2026',
  description: 'Full schedule for the Pan-African Informatics Olympiad 2026. July 23rd - 30th, Kigali.',
};

const AgendaPage: FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Header />
      <TravelVisaSection />
      <Footer />
    </main>
  );
};

export default AgendaPage;
