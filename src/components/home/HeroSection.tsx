import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroViz from '@/assets/hero-viz.png';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroViz} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-surface-dark/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full animate-fade-in">
            <span className="text-xs font-heading font-medium text-primary">GEPP Intelligence Platform</span>
          </div>

          <h1 className="heading-xl text-surface-dark-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')}
          </h1>

          <p className="body-lg text-surface-dark-foreground/70 max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/contact"
              className="px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {t('hero.cta')}
            </Link>
            <Link
              to="/platform"
              className="px-6 py-3 font-heading font-semibold text-sm border border-surface-dark-foreground/30 text-surface-dark-foreground rounded-md hover:bg-surface-dark-foreground/10 transition-colors"
            >
              {t('hero.cta2')}
            </Link>
          </div>

          {/* Data labels floating */}
          <div className="hidden lg:flex gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {['CO₂e Tracking', 'Diversion Rate', 'Scope 3 Input', 'GRI 306:2020'].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-heading font-medium text-surface-dark-foreground/50">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
