import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  BarChart3,
  Zap,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  TrendingDown,
  Building2,
  Globe,
  Users,
  Clock,
  Leaf,
  Star,
  Download,
  Lock,
  PieChart,
  AlertTriangle,
  Landmark,
  FileText,
  Scale,
} from 'lucide-react';
import geppLogo from '@/assets/gepp-logo.png';

export default function BankingLanding() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const bankingPainPoints = [
    {
      num: '01',
      icon: AlertTriangle,
      title: 'Financed Emissions Blind Spots',
      desc: 'Banks face growing scrutiny on Scope 3 Category 15 — financed emissions from loan portfolios. Without reliable data from borrowers, your climate disclosures carry material risk.',
    },
    {
      num: '02',
      icon: FileText,
      title: 'SEC / BOT Regulatory Pressure',
      desc: 'Thailand\'s SEC and Bank of Thailand are tightening ESG disclosure requirements. Manual data collection across hundreds of borrowers doesn\'t scale — and auditors know it.',
    },
    {
      num: '03',
      icon: Scale,
      title: 'Green Loan Verification Gap',
      desc: 'Green and sustainability-linked loans require verifiable environmental KPIs. Without automated waste and carbon data, banks can\'t validate borrower ESG claims.',
    },
  ];

  const capabilities = [
    { icon: BarChart3, title: 'Portfolio Carbon Screening', desc: 'Screen your loan portfolio\'s Scope 3 exposure with automated emissions data from borrower waste operations.' },
    { icon: PieChart, title: 'Borrower ESG Data Platform', desc: 'Give your corporate borrowers a turnkey waste data solution — GEPP handles data capture, they get ESG-ready reports.' },
    { icon: FileCheck, title: 'GRI 306:2020 Compliant Reporting', desc: 'Auto-generate audit-ready waste disclosures (306-3, 306-4, 306-5) for each borrower in your portfolio.' },
    { icon: Globe, title: 'TCFD & PCAF Alignment', desc: 'Map borrower emissions data to TCFD recommendations and PCAF methodology for financed emissions reporting.' },
    { icon: Lock, title: 'Audit-Grade Data Trail', desc: 'Every data point is timestamped, source-verified with IoT hardware, and exportable for third-party assurance.' },
    { icon: TrendingDown, title: 'Decarbonisation Tracking', desc: 'Monitor borrower reduction progress against sustainability-linked loan covenants with real-time dashboards.' },
  ];

  const testimonials = [
    {
      quote: 'GEPP helped us achieve 58% landfill diversion within 10 months — and now our Scope 3 reports are fully automated.',
      role: 'Sustainability Director',
      industry: 'Energy Sector',
      stars: 5,
    },
    {
      quote: 'The data was already there from our waste management. Activating Scope 3 reporting required zero additional effort.',
      role: 'ESG Manager',
      industry: 'Consumer Goods',
      stars: 5,
    },
    {
      quote: 'We went from spreadsheet chaos to board-ready ESG dashboards in weeks. The CBAM readiness review alone saved us months.',
      role: 'Head of Operations',
      industry: 'Manufacturing',
      stars: 5,
    },
  ];

  const stats = [
    { value: '8+', label: 'Years in Operation', sub: 'Real-world waste data expertise' },
    { value: '100+', label: 'Enterprise Clients', sub: 'Across 6 industries' },
    { value: '58%', label: 'Diversion Rate', sub: 'Achieved in 10 months' },
    { value: '77.5M+', label: 'Trees Equivalent', sub: 'Annual GHG offset' },
  ];

  const trustLogos = ['SET-listed Companies', 'Energy', 'Real Estate', 'Consumer Goods', 'Food & Beverage', 'Manufacturing'];

  const howItWorks = [
    { num: '01', title: 'Portfolio Assessment', desc: 'We analyse your loan portfolio to identify ESG data gaps and Scope 3 exposure across borrower segments.' },
    { num: '02', title: 'Borrower Onboarding', desc: 'Your corporate borrowers get access to GEPP\'s waste data platform — IoT hardware, mobile entry, and dashboards.' },
    { num: '03', title: 'Automated Reporting', desc: 'Borrower data flows into your portfolio-level ESG dashboard with TCFD, GRI, and PCAF-aligned outputs.' },
  ];

  const pdfBenefits = [
    'How banks can reduce Scope 3 Category 15 exposure',
    'TCFD & PCAF alignment strategies for Thai banks',
    'Real case studies from enterprise waste-to-carbon programs',
    'BOT regulatory readiness checklist for ESG disclosure',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <img src={geppLogo} alt="GEPP" className="h-8 w-auto" />
          </Link>
          <a
            href="#get-started"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-heading font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Download Free Guide
          </a>
        </div>
      </header>

      <main className="pt-14">
        {/* Hero */}
        <section className="relative overflow-hidden section-dark">
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full border border-primary" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-primary" />
          </div>

          <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left — copy */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/20 mb-6">
                  <Landmark size={14} className="text-primary" />
                  <span className="text-xs font-heading font-semibold text-primary tracking-wide uppercase">
                    ESG for Banking
                  </span>
                </div>
                <h1 className="heading-xl text-surface-dark-foreground mb-5">
                  Your Borrowers' Waste Is
                  <span className="block eco-gradient-text">Your Scope 3 Risk</span>
                </h1>
                <p className="body-lg text-surface-dark-foreground/70 mb-8 max-w-lg">
                  Banks face mounting pressure to report financed emissions. GEPP Intelligence gives your corporate borrowers a turnkey waste data platform — so you get audit-ready Scope 3 data without chasing spreadsheets.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { icon: ShieldCheck, text: 'GRI 306:2020 Aligned' },
                    { icon: FileCheck, text: 'TCFD & PCAF Ready' },
                    { icon: Users, text: '100+ Enterprise Clients' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-surface-dark-foreground/60">
                      <Icon size={16} className="text-primary shrink-0" />
                      <span className="text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Trust logos */}
                <div className="pt-6 border-t border-surface-dark-foreground/10">
                  <p className="text-xs font-heading uppercase tracking-widest text-surface-dark-foreground/40 mb-4">Trusted across industries</p>
                  <div className="flex flex-wrap gap-3">
                    {trustLogos.map((s) => (
                      <span key={s} className="px-3 py-1.5 text-xs font-medium text-surface-dark-foreground/50 border border-surface-dark-foreground/10 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — lead magnet form */}
              <div id="get-started" className="eco-card p-8 lg:p-10 scroll-mt-20" style={{ background: 'hsl(0 0% 100%)' }}>
                {!submitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Download size={22} className="text-primary" />
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-foreground text-lg">Free Guide: ESG for Banking</h2>
                        <p className="text-xs text-muted-foreground">PDF download · No commitment</p>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 mb-6 border border-primary/10">
                      <p className="text-sm font-heading font-semibold text-foreground mb-2">What you'll learn:</p>
                      <ul className="space-y-1.5">
                        {pdfBenefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Work Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="you@bank.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Bank / Institution</label>
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Institution name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Your Role</label>
                        <select
                          required
                          value={form.role}
                          onChange={(e) => setForm({ ...form, role: e.target.value })}
                          className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        >
                          <option value="">Select your role</option>
                          <option value="sustainability">Sustainability / ESG</option>
                          <option value="risk">Risk Management</option>
                          <option value="credit">Credit / Lending</option>
                          <option value="compliance">Compliance / Regulatory</option>
                          <option value="executive">C-Suite / Executive</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3.5 font-heading font-bold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                      >
                        <Download size={16} />
                        Download Free ESG Banking Guide
                      </button>
                      <p className="text-xs text-muted-foreground text-center">
                        Instant PDF download · We respect your privacy
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">Your Guide Is Ready!</h3>
                    <p className="body-sm text-muted-foreground mb-4">
                      Check your email for the "ESG for Banking" PDF. Our team will also reach out within 24 hours to discuss your portfolio's Scope 3 readiness.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-heading font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mb-3"
                    >
                      <Download size={14} />
                      Download PDF Now
                    </a>
                    <br />
                    <Link to="/" className="text-sm text-primary font-medium hover:underline">
                      ← Back to Homepage
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-10 border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(({ value, label, sub }) => (
                <div key={label} className="text-center">
                  <p className="stat-number eco-gradient-text text-3xl md:text-4xl mb-1">{value}</p>
                  <p className="font-heading font-semibold text-foreground text-sm">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why banks need this */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">The Challenge</p>
              <h2 className="heading-lg text-foreground mb-4">Why Banks Can't Ignore Scope 3 Anymore</h2>
              <p className="body-md text-muted-foreground">
                From BOT regulatory mandates to investor expectations — Thai banks face unique ESG data challenges that traditional consulting can't solve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {bankingPainPoints.map(({ num, icon: Icon, title, desc }) => (
                <div key={num} className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className="text-3xl font-heading font-bold text-primary/10">{num}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{title}</h3>
                  <p className="body-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-14 lg:py-20 section-eco">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">GEPP for Banking</p>
              <h2 className="heading-lg text-foreground mb-4">
                Built for Financial Institutions
              </h2>
              <p className="body-md text-muted-foreground">
                One platform that equips your borrowers with data capture and delivers portfolio-level ESG intelligence to your team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {capabilities.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="eco-card p-6 group hover:glow-eco transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-sm">{title}</h3>
                  </div>
                  <p className="body-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">Results That Speak</p>
              <h2 className="heading-lg text-foreground mb-4">Trusted by Enterprise Leaders</h2>
              <p className="body-md text-muted-foreground">
                These results are achieved by enterprise clients using GEPP Intelligence — the same platform available to your borrowers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map(({ quote, role, industry, stars }) => (
                <div key={role} className="eco-card p-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} size={16} className="text-[hsl(var(--eco-amber))] fill-[hsl(var(--eco-amber))]" />
                    ))}
                  </div>
                  <blockquote className="body-sm text-foreground mb-5 italic leading-relaxed">
                    "{quote}"
                  </blockquote>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-heading font-semibold text-foreground">{role}</p>
                    <p className="text-xs text-muted-foreground">{industry}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-14 lg:py-20 section-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">How It Works</p>
              <h2 className="heading-lg text-surface-dark-foreground mb-4">From Portfolio Assessment to ESG Dashboard</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {howItWorks.map(({ num, title, desc }) => (
                <div key={num} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-heading font-bold text-primary">{num}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-surface-dark-foreground text-lg mb-2">{title}</h3>
                  <p className="body-sm text-surface-dark-foreground/60">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <Landmark size={16} className="text-primary" />
                <span className="text-xs font-heading font-semibold uppercase tracking-widest text-primary">Get Started</span>
              </div>
              <h2 className="heading-lg text-foreground mb-4">
                Ready to Close Your Portfolio's ESG Data Gap?
              </h2>
              <p className="body-md text-muted-foreground mb-8 max-w-2xl mx-auto">
                Download our free "ESG for Banking" guide or schedule a portfolio assessment with our team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <Download size={16} />
                  Download Free Guide
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm border border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors"
                >
                  Schedule Assessment
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Trust strip */}
              <div className="mt-10 pt-8 border-t border-border flex flex-wrap items-center justify-center gap-6">
                {[
                  { icon: ShieldCheck, text: 'ISO 29110 Certified' },
                  { icon: Leaf, text: 'UN WSA 2018 Winner' },
                  { icon: FileCheck, text: 'GRI 306:2020 Compliant' },
                  { icon: Clock, text: 'Reports in < 5 min' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-muted-foreground">
                    <Icon size={14} className="text-primary shrink-0" />
                    <span className="text-xs font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={geppLogo} alt="GEPP" className="h-6 w-auto" />
            <span className="text-sm text-muted-foreground">© 2025 GEPP Sa-Ard Co., Ltd.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
