import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Database, BarChart3, Recycle, Truck } from 'lucide-react';

const services = [
  { key: 'platform', icon: Database, link: '/platform', color: 'primary' },
  { key: 'training', icon: BarChart3, link: '/platform', color: 'primary' },
  { key: 'implementation', icon: Recycle, link: '/platform', color: 'primary' },
  { key: 'collection', icon: Truck, link: '/traceability', color: 'primary' },
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Recycle size={16} className="text-primary" />
            <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary">What we do</p>
          </div>
          <h2 className="heading-lg text-foreground mb-4">{t('services.title')}</h2>
        </div>

        <div className="grid-services">
          {services.map(({ key, icon: Icon, link }) => (
            <Link
              key={key}
              to={link}
              className="group eco-card p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Icon size={22} />
              </div>
              <h3 className="heading-sm text-foreground mb-3">
                {t(`services.${key}.title`)}
              </h3>
              <p className="body-sm text-muted-foreground">
                {t(`services.${key}.desc`)}
              </p>
              <div className="mt-4 flex items-center gap-1 text-primary text-sm font-heading font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
