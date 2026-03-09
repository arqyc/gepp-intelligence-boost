import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { MapPin, Route, FileSearch, Truck } from 'lucide-react';

export default function TraceabilityPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="section-dark py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-4">Chain of Custody</p>
              <h1 className="heading-xl text-surface-dark-foreground mb-6">{t('trace.title')}</h1>
              <p className="body-lg text-surface-dark-foreground/70 mb-8">{t('trace.subtitle')}</p>
              <Link to="/contact" className="inline-block px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-lg text-foreground mb-14">End-to-End Tracking</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: MapPin, title: 'Point of Origin', desc: 'Capture waste at source with location, type, and weight data.' },
                { icon: Truck, title: 'Collection Tracking', desc: 'Fixed schedule collection with real-time GPS tracking and verification.' },
                { icon: Route, title: 'Waste Journey', desc: 'Full visibility into the path from disposal to final processing destination.' },
                { icon: FileSearch, title: 'Compliance Reports', desc: 'Auto-generated traceability reports for regulatory and stakeholder audits.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-8 bg-card border border-border rounded-lg">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-muted text-primary mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{title}</h3>
                  <p className="body-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
