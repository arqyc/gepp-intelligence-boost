import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import facilityImg from '@/assets/facility.jpg';
import { Recycle, BarChart3, FileCheck, Eye, Leaf } from 'lucide-react';

const features = [
  { label: 'GEPP Waste Segregation Standard', icon: Recycle },
  { label: 'Material Footprint Analysis', icon: Leaf },
  { label: 'GHG Reduction Calculation', icon: BarChart3 },
  { label: 'GRI 306:2020 Reporting', icon: FileCheck },
  { label: 'Real-time Dashboard & Auditing', icon: Eye },
];

export default function PlatformOverview() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 section-eco">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid-two-col items-center">
          {/* Left — metadata */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1 h-6 rounded-full bg-primary" />
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary">
                {t('platform.label')}
              </p>
            </div>
            <h2 className="heading-lg text-foreground mb-6">
              {t('platform.title')}
            </h2>
            <p className="body-md text-muted-foreground mb-8">
              {t('platform.desc')}
            </p>

            {/* Feature bullets with icons */}
            <ul className="space-y-3 mb-8">
              {features.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3 group">
                  <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <span className="body-sm text-foreground">{label}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/platform"
              className="inline-block px-5 py-2.5 text-sm font-heading font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              {t('hero.cta2')}
            </Link>
          </div>

          {/* Right — image */}
          <div className="relative rounded-xl overflow-hidden glow-eco">
            <img
              src={facilityImg}
              alt="Modern waste management facility"
              className="w-full rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-primary/5 rounded-xl" />
            {/* Eco badge on image */}
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-surface-dark/80 backdrop-blur-sm rounded-full">
              <Leaf size={12} className="text-primary" />
              <span className="text-xs font-heading font-medium text-surface-dark-foreground">ISO 29110 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
