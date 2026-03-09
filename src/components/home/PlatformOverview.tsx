import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import facilityImg from '@/assets/facility.jpg';

export default function PlatformOverview() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid-two-col items-center">
          {/* Left — metadata */}
          <div>
            <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">
              {t('platform.label')}
            </p>
            <h2 className="heading-lg text-foreground mb-6">
              {t('platform.title')}
            </h2>
            <p className="body-md text-muted-foreground mb-8">
              {t('platform.desc')}
            </p>

            {/* Feature bullets */}
            <ul className="space-y-3 mb-8">
              {['GEPP Waste Segregation Standard', 'Material Footprint Analysis', 'GHG Reduction Calculation', 'GRI 306:2020 Reporting', 'Real-time Dashboard & Auditing'].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="body-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/platform"
              className="inline-block px-5 py-2.5 text-sm font-heading font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {t('hero.cta2')}
            </Link>
          </div>

          {/* Right — image */}
          <div className="relative">
            <img
              src={facilityImg}
              alt="Modern waste management facility"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
