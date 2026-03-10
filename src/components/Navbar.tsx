import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import geppLogo from '@/assets/gepp-logo.png';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.platform', to: '/platform' },
  { key: 'nav.scope3', to: '/scope-3' },
  { key: 'nav.traceability', to: '/traceability' },
  { key: 'nav.about', to: '/about' },
  { key: 'nav.contact', to: '/contact' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={geppLogo} alt="GEPP" className="h-9 w-auto" />
          
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ key, to }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === to
                  ? 'text-primary bg-primary-muted'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {t(key)}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
            className="px-2 py-1 text-xs font-heading font-semibold border border-border rounded text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === 'en' ? 'TH' : 'EN'}
          </button>
          <a
            href="https://geppdatasolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('nav.login')}
          </a>
          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {t('nav.demo')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          {navLinks.map(({ key, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md ${
                location.pathname === to ? 'text-primary bg-primary-muted' : 'text-muted-foreground'
              }`}
            >
              {t(key)}
            </Link>
          ))}
          <div className="flex items-center gap-3 mt-3 px-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
              className="px-2 py-1 text-xs font-heading font-semibold border border-border rounded text-muted-foreground"
            >
              {lang === 'en' ? 'TH' : 'EN'}
            </button>
            <a
              href="https://geppdatasolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground"
            >
              {t('nav.login')}
            </a>
          </div>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 mx-3 px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-md text-center"
          >
            {t('nav.demo')}
          </Link>
        </div>
      )}
    </nav>
  );
}
