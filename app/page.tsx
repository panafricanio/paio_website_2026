import { FC } from 'react';
import Header from '@/components/Layout/Header';
import HeroSection from '@/components/Hero/HeroSection';
import Footer from '@/components/Layout/Footer';

const Home: FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
};

export default Home;
