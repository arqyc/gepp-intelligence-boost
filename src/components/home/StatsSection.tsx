import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, TrendingDown, Recycle } from 'lucide-react';

const stats = [
  { labelKey: 'stats.diversion.label', valueKey: 'stats.diversion.value', descKey: 'stats.diversion.desc', icon: Recycle },
  { labelKey: 'stats.cost.label', valueKey: 'stats.cost.value', descKey: 'stats.cost.desc', icon: TrendingDown },
  { labelKey: 'stats.ghg.label', valueKey: 'stats.ghg.value', descKey: 'stats.ghg.desc', icon: Leaf },
];

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-14 lg:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(150 30% 7%), hsl(152 40% 12%))' }}>
      {/* Subtle eco pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-primary" />
        <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full border border-primary" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full border border-eco-amber" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map(({ labelKey, valueKey, descKey, icon: Icon }) => (
            <div key={labelKey} className="text-center md:text-left group">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Icon size={16} className="text-primary" />
                </div>
                <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary">
                  {t(labelKey)}
                </p>
              </div>
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
