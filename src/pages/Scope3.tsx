import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { FileText, TrendingDown, Globe, CheckCircle } from 'lucide-react';

export default function Scope3Page() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="section-dark py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-4">ESG Intelligence</p>
              <h1 className="heading-xl text-surface-dark-foreground mb-6">{t('scope3.title')}</h1>
              <p className="body-lg text-surface-dark-foreground/70 mb-8">{t('scope3.subtitle')}</p>
              <Link to="/contact" className="inline-block px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                {t('cta.crosssell')}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid-two-col">
              <div>
                <h2 className="heading-lg text-foreground mb-6">Why Scope 3 Matters</h2>
                <p className="body-md text-muted-foreground mb-6">
                  Waste-related emissions represent a significant portion of Scope 3 for most enterprises. Landfills account for 13% of GHG emission sources in Thailand alone. GEPP Intelligence captures this data automatically from your waste operations.
                </p>
                <p className="body-md text-muted-foreground">
                  For existing GEPP clients, activating Scope 3 reporting requires zero additional data collection — your waste management data is already being captured.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: FileText, title: 'GRI 306:2020', desc: 'Automated waste-related disclosures in internationally recognized format' },
                  { icon: TrendingDown, title: 'Carbon Reduction', desc: 'Track and report GHG reductions from improved waste diversion' },
                  { icon: Globe, title: 'ESG Credits', desc: 'Generate verifiable ESG credits from waste management improvements' },
                  { icon: CheckCircle, title: 'Audit-Ready', desc: 'All data timestamped and traceable for third-party verification' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="p-6 bg-card border border-border rounded-lg">
                    <Icon size={20} className="text-primary mb-3" />
                    <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
                    <p className="body-sm text-muted-foreground">{desc}</p>
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
