import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import geppLogo from '@/assets/gepp-logo.png';
import { Menu, X, Leaf, ChevronDown, Landmark, PackageCheck, Factory } from 'lucide-react';

const navLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.platform', to: '/platform' },
  { key: 'nav.scope3', to: '/scope-3' },
  { key: 'nav.traceability', to: '/traceability' },
];

const industryLinks = [
  { label: 'Banking', to: '/industries/banking', icon: Landmark, desc: 'Financed emissions & ESG portfolio data' },
  { label: 'FMCG', to: '/industries/fmcg', icon: PackageCheck, desc: 'EPR compliance & packaging recovery' },
  { label: 'Manufacturing', to: '/industries/manufacturing', icon: Factory, desc: 'CBAM readiness & factory waste intelligence' },
];

const secondaryLinks = [
  { key: 'nav.about', to: '/about' },
  { key: 'nav.contact', to: '/contact' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isIndustryActive = location.pathname.startsWith('/industries');

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustryOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
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
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === to
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {t(key)}
            </Link>
          ))}

          {/* Industries dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIndustryOpen(!industryOpen)}
              onMouseEnter={() => setIndustryOpen(true)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                isIndustryActive
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Industries
              <ChevronDown size={14} className={`transition-transform ${industryOpen ? 'rotate-180' : ''}`} />
            </button>

            {industryOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-72 bg-card border border-border rounded-xl shadow-lg py-2 animate-fade-in"
                onMouseLeave={() => setIndustryOpen(false)}
              >
                {industryLinks.map(({ label, to, icon: Icon, desc }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setIndustryOpen(false)}
                    className={`flex items-start gap-3 px-4 py-3 hover:bg-muted transition-colors ${
                      location.pathname === to ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-heading font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {secondaryLinks.map(({ key, to }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === to
                  ? 'text-primary bg-primary/10'
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
            className="px-2.5 py-1 text-xs font-heading font-semibold border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
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
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            <Leaf size={14} />
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
              className={`block px-3 py-2 text-sm font-medium rounded-lg ${
                location.pathname === to ? 'text-primary bg-primary/10' : 'text-muted-foreground'
              }`}
            >
              {t(key)}
            </Link>
          ))}

          {/* Mobile Industries accordion */}
          <button
            onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
            className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg ${
              isIndustryActive ? 'text-primary bg-primary/10' : 'text-muted-foreground'
            }`}
          >
            Industries
            <ChevronDown size={14} className={`transition-transform ${mobileIndustryOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileIndustryOpen && (
            <div className="ml-3 border-l-2 border-primary/20 pl-3 space-y-1">
              {industryLinks.map(({ label, to, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
                    location.pathname === to ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                  }`}
                >
                  <Icon size={14} />
                  {label}
                </Link>
              ))}
            </div>
          )}

          {secondaryLinks.map(({ key, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-lg ${
                location.pathname === to ? 'text-primary bg-primary/10' : 'text-muted-foreground'
              }`}
            >
              {t(key)}
            </Link>
          ))}

          <div className="flex items-center gap-3 mt-3 px-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
              className="px-2.5 py-1 text-xs font-heading font-semibold border border-border rounded-lg text-muted-foreground"
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
            className="flex items-center justify-center gap-1.5 mt-3 mx-3 px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg text-center"
          >
            <Leaf size={14} />
            {t('nav.demo')}
          </Link>
        </div>
      )}
    </nav>
  );
}
