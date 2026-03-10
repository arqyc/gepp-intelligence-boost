import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Category5Banner from '@/components/home/Category5Banner';
import HeroSection from '@/components/home/HeroSection';
import PlatformOverview from '@/components/home/PlatformOverview';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import ClientsSection from '@/components/home/ClientsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Category5Banner />
        <HeroSection />
        <StatsSection />
        <PlatformOverview />
        <ServicesSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
