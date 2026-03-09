import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import geppLogo from '@/assets/gepp-logo.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={geppLogo} alt="GEPP" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="body-sm text-background/60 max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-background/80">{t('footer.platform')}</h4>
            <ul className="space-y-2">
              <li><Link to="/platform" className="body-sm text-background/50 hover:text-background transition-colors">GEPP Intelligence</Link></li>
              <li><Link to="/scope-3" className="body-sm text-background/50 hover:text-background transition-colors">Scope 3 & ESG</Link></li>
              <li><Link to="/traceability" className="body-sm text-background/50 hover:text-background transition-colors">Materials Traceability</Link></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-background/80">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="body-sm text-background/50 hover:text-background transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="body-sm text-background/50 hover:text-background transition-colors">{t('nav.contact')}</Link></li>
              <li><a href="https://geppdatasolutions.com/" target="_blank" rel="noopener noreferrer" className="body-sm text-background/50 hover:text-background transition-colors">{t('nav.login')}</a></li>
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-background/80">{t('footer.standards')}</h4>
            <ul className="space-y-2">
              <li className="body-sm text-background/50">ISO 29110 Certified</li>
              <li className="body-sm text-background/50">GRI 306:2020 Compliant</li>
              <li className="body-sm text-background/50">UN WSA 2018 Winner</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="body-sm text-background/40">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
