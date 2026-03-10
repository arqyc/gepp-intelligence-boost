import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroViz from '@/assets/hero-viz.png';
import { Leaf, ArrowRight, Clock, Building2, BarChart3 } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroViz} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark/95 via-surface-dark/80 to-primary/15" />
      </div>

      {/* Eco decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary/10 animate-pulse-eco hidden xl:block" />
      <div className="absolute bottom-32 right-40 w-40 h-40 rounded-full border border-eco-amber/10 animate-pulse-eco hidden xl:block" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-24">
        <div className="max-w-3xl">
          {/* Credibility badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-primary/10 border border-primary/20 rounded-full animate-fade-in backdrop-blur-sm">
            <Clock size={14} className="text-primary" />
            <span className="text-xs font-heading font-medium text-primary">8 Years of Waste Management Expertise</span>
          </div>

          <h1 className="heading-xl text-surface-dark-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')}
          </h1>

          <p className="text-lg md:text-xl font-heading font-medium text-primary/90 mb-4 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {t('hero.origin')}
          </p>

          <p className="body-lg text-surface-dark-foreground/65 max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <Leaf size={16} />
              {t('hero.cta')}
            </Link>
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm border border-surface-dark-foreground/30 text-surface-dark-foreground rounded-lg hover:bg-surface-dark-foreground/10 transition-colors"
            >
              {t('hero.cta2')}
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
