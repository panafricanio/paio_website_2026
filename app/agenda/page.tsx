import { FC } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Layout/Header';
import AgendaSection from '@/components/Agenda/AgendaSection';
import Footer from '@/components/Layout/Footer';

export const metadata: Metadata = {
  title: 'Agenda - PAIO 2026',
  description: 'Full 7-day schedule for the Pan-African Informatics Olympiad 2026. August 2-8, Kigali.',
};

const AgendaPage: FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <AgendaSection />
      </div>
      <Footer />
    </main>
  );
};

export default AgendaPage;
