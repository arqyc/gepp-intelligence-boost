import { useLanguage } from '@/contexts/LanguageContext';

export default function ClientsSection() {
  const { t } = useLanguage();

  const sectors = ['Energy', 'Consumer Goods', 'Real Estate', 'Food & Beverage', 'Technology', 'Manufacturing'];

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="heading-lg text-foreground mb-4">{t('clients.title')}</h2>
        <p className="body-md text-muted-foreground max-w-2xl mx-auto mb-14">
          {t('clients.subtitle')}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="px-6 py-3 border border-border rounded-full text-sm font-heading font-medium text-muted-foreground"
            >
              {sector}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
