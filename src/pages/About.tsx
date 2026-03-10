import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import founderMam from '@/assets/founder-mam.png';
import founderDome from '@/assets/founder-dome.png';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="heading-xl text-foreground mb-6">{t('about.title')}</h1>
              <p className="body-lg text-muted-foreground italic">
                {t('about.quote')}
              </p>
            </div>
          </div>
        </section>

        {/* Founders — per design brief: portrait left, quote right */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Mam */}
              <div className="grid-two-col items-start">
                <div>
                  <img src={founderMam} alt="Mayuree Aroonwaranon" className="w-full rounded-lg" />
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">Co-Founder & CEO</p>
                  <h3 className="heading-md text-foreground mb-4">Mayuree Aroonwaranon</h3>
                  <p className="body-md text-muted-foreground">
                    Mam drives GEPP's vision of making waste management data-driven and transparent. Under her leadership, GEPP has become the leading digital waste platform in Thailand, trusted by enterprises across energy, real estate, and consumer goods sectors.
                  </p>
                </div>
              </div>

              {/* Dome */}
              <div className="grid-two-col items-start">
                <div>
                  <img src={founderDome} alt="Dome Boonyanurak" className="w-full rounded-lg" />
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">Co-Founder & CMO</p>
                  <h3 className="heading-md text-foreground mb-4">Dome Boonyanurak</h3>
                  <p className="body-md text-muted-foreground">
                    Dome shapes GEPP's market strategy and partnerships, building bridges between waste operations and ESG intelligence. His focus on enterprise cross-selling has accelerated Scope 3 adoption among existing clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 border border-border rounded-lg">
                <h3 className="heading-sm text-foreground mb-4">{t('about.mission.title')}</h3>
                <p className="body-md text-muted-foreground">{t('about.mission.desc')}</p>
              </div>
              <div className="p-8 border border-border rounded-lg">
                <h3 className="heading-sm text-foreground mb-4">{t('about.vision.title')}</h3>
                <p className="body-md text-muted-foreground">{t('about.vision.desc')}</p>
              </div>
            </div>

            {/* Awards */}
            <div className="mt-16">
              <h3 className="heading-sm text-foreground mb-8">Recognition</h3>
              <div className="flex flex-wrap gap-6">
                {[
                  'DEPA Accelerator Program 2018',
                  'UN WSA 2018 — Green Technology',
                  'Delta Angel Startup Fund',
                  'ISO 29110 Certified',
                ].map((award) => (
                  <div key={award} className="px-5 py-3 border border-border rounded-full text-sm font-heading font-medium text-muted-foreground">
                    {award}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
