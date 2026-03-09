import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg text-foreground mb-6">{t('cta.title')}</h2>
          <p className="body-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            {/* Existing clients */}
            <div className="p-6 border border-primary/20 rounded-lg bg-primary-muted text-center">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">
                {t('cta.existing')}
              </p>
              <Link
                to="/contact"
                className="inline-block px-5 py-2.5 text-sm font-heading font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {t('cta.crosssell')}
              </Link>
            </div>

            {/* New prospects */}
            <div className="p-6 border border-border rounded-lg bg-card text-center">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {t('cta.new')}
              </p>
              <Link
                to="/contact"
                className="inline-block px-5 py-2.5 text-sm font-heading font-semibold border border-foreground text-foreground rounded-md hover:bg-foreground hover:text-background transition-colors"
              >
                {t('cta.demo')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
