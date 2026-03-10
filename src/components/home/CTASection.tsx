import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Recycle, ArrowRight } from 'lucide-react';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-14 lg:py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-eco-amber" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Recycle size={16} className="text-primary" />
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-primary">Get Started</span>
          </div>
          <h2 className="heading-lg text-foreground mb-6">{t('cta.title')}</h2>
          <p className="body-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            {/* Existing clients */}
            <div className="eco-card p-6 text-center hover:shadow-lg transition-all">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-4">
                {t('cta.existing')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-heading font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                {t('cta.crosssell')}
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* New prospects */}
            <div className="eco-card p-6 text-center hover:shadow-lg transition-all">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {t('cta.new')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-heading font-semibold border border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors"
              >
                {t('cta.demo')}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
