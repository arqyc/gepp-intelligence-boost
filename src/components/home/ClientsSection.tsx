import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf } from 'lucide-react';

export default function ClientsSection() {
  const { t } = useLanguage();

  const sectors = ['Energy', 'Consumer Goods', 'Real Estate', 'Food & Beverage', 'Technology', 'Manufacturing'];

  return (
    <section className="py-20 lg:py-28 section-eco">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Leaf size={16} className="text-primary" />
          <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary">Trusted Partners</p>
        </div>
        <h2 className="heading-lg text-foreground mb-4">{t('clients.title')}</h2>
        <p className="body-md text-muted-foreground max-w-2xl mx-auto mb-14">
          {t('clients.subtitle')}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="px-6 py-3 border border-primary/15 rounded-full text-sm font-heading font-medium text-foreground bg-card hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
            >
              {sector}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
