import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Database, BarChart3, Shield, Eye, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: Database, title: 'Waste Data Collection', desc: 'Micro-pinpoint data input across all waste streams. Capture weight, type, source, and destination at granular levels.' },
  { icon: Eye, title: 'Active Data Mode', desc: 'Real-time monitoring dashboard with live waste flow visualization. See your waste ecosystem update as operations happen.' },
  { icon: BarChart3, title: 'ESG Analytics', desc: 'Automated ESG metrics calculation from your waste data. Diversion rates, carbon footprint, and material recovery — always current.' },
  { icon: Shield, title: 'GRI 306:2020 Compliance', desc: 'Pre-formatted reporting aligned with international waste disclosure standards. Audit-ready at any moment.' },
  { icon: Zap, title: 'Carbon Accounting', desc: 'Scope 3 emissions from waste streams calculated automatically. Connect waste operations to your carbon strategy.' },
  { icon: FileText, title: 'Waste Data Auditing', desc: 'Third-party verifiable data trails. Every data point is timestamped, sourced, and traceable.' },
];

export default function PlatformPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="section-dark py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-4">The Platform</p>
              <h1 className="heading-xl text-surface-dark-foreground mb-6">{t('platformPage.title')}</h1>
              <p className="body-lg text-surface-dark-foreground/70 mb-8">{t('platformPage.subtitle')}</p>
              <Link to="/contact" className="inline-block px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-lg text-foreground mb-14">Platform Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map(({ icon: Icon, title, desc }) => (
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

        {/* How it works */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="heading-lg text-foreground mb-14">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: '01', title: 'Onboarding', desc: 'GEPP waste segregation standard setup' },
                { step: '02', title: 'Data Collection', desc: 'Micro-level waste data capture across sites' },
                { step: '03', title: 'Analysis', desc: 'Material footprint & GHG calculations' },
                { step: '04', title: 'Reporting', desc: 'GRI 306:2020 & Scope 3 reports generated' },
                { step: '05', title: 'Optimization', desc: 'Continuous improvement recommendations' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center md:text-left">
                  <span className="text-4xl font-heading font-bold text-primary/20">{step}</span>
                  <h3 className="font-heading font-semibold text-foreground mt-2 mb-2">{title}</h3>
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
