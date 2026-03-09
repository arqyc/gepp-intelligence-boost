import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Database, BarChart3, Recycle, Truck } from 'lucide-react';

const services = [
  { key: 'platform', icon: Database, link: '/platform' },
  { key: 'training', icon: BarChart3, link: '/platform' },
  { key: 'implementation', icon: Recycle, link: '/platform' },
  { key: 'collection', icon: Truck, link: '/traceability' },
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-14">
          <h2 className="heading-lg text-foreground mb-4">{t('services.title')}</h2>
        </div>

        <div className="grid-services">
          {services.map(({ key, icon: Icon, link }) => (
            <Link
              key={key}
              to={link}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-muted text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon size={20} />
              </div>
              <h3 className="heading-sm text-foreground mb-3">
                {t(`services.${key}.title`)}
              </h3>
              <p className="body-sm text-muted-foreground">
                {t(`services.${key}.desc`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
