import { useLanguage } from '@/contexts/LanguageContext';

const stats = [
  { labelKey: 'stats.diversion.label', valueKey: 'stats.diversion.value', descKey: 'stats.diversion.desc' },
  { labelKey: 'stats.cost.label', valueKey: 'stats.cost.value', descKey: 'stats.cost.desc' },
  { labelKey: 'stats.ghg.label', valueKey: 'stats.ghg.value', descKey: 'stats.ghg.desc' },
];

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map(({ labelKey, valueKey, descKey }) => (
            <div key={labelKey} className="text-center md:text-left">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">
                {t(labelKey)}
              </p>
              <p className="stat-number text-surface-dark-foreground mb-2">
                {t(valueKey)}
              </p>
              <p className="body-sm text-surface-dark-foreground/50">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
