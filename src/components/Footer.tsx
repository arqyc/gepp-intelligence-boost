import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import geppLogo from '@/assets/gepp-logo.png';
import { Leaf, Recycle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ background: 'linear-gradient(135deg, hsl(150 30% 7%), hsl(152 35% 10%))' }} className="text-surface-dark-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={geppLogo} alt="GEPP" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="body-sm text-surface-dark-foreground/60 max-w-xs mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Leaf size={14} />
              <span className="text-xs font-heading font-medium">Committed to Zero Waste</span>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-surface-dark-foreground/80">{t('footer.platform')}</h4>
            <ul className="space-y-2">
              <li><Link to="/platform" className="body-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">GEPP Intelligence</Link></li>
              <li><Link to="/scope-3" className="body-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">Scope 3 & ESG</Link></li>
              <li><Link to="/traceability" className="body-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">Materials Traceability</Link></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-surface-dark-foreground/80">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="body-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="body-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
              <li><a href="https://geppdatasolutions.com/" target="_blank" rel="noopener noreferrer" className="body-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">{t('nav.login')}</a></li>
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-surface-dark-foreground/80">{t('footer.standards')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Recycle size={12} className="text-primary shrink-0" />
                <span className="body-sm text-surface-dark-foreground/50">ISO 29110 Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <Recycle size={12} className="text-primary shrink-0" />
                <span className="body-sm text-surface-dark-foreground/50">GRI 306:2020 Compliant</span>
              </li>
              <li className="flex items-center gap-2">
                <Recycle size={12} className="text-primary shrink-0" />
                <span className="body-sm text-surface-dark-foreground/50">UN WSA 2018 Winner</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-dark-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="body-sm text-surface-dark-foreground/40">{t('footer.copyright')}</p>
          <div className="flex items-center gap-2 text-surface-dark-foreground/30">
            <Leaf size={12} className="text-primary" />
            <span className="text-xs font-heading">Built for a sustainable future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
