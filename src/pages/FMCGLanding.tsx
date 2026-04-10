import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  TrendingDown,
  Globe,
  Users,
  Clock,
  Leaf,
  Star,
  Download,
  Recycle,
  PackageCheck,
  AlertTriangle,
  FileText,
  Truck,
  Factory,
} from 'lucide-react';
import geppLogo from '@/assets/gepp-logo.png';

export default function FMCGLanding() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const painPoints = [
    {
      num: '01',
      icon: AlertTriangle,
      title: 'EPR Compliance Is Now Mandatory',
      desc: 'Thailand\'s Extended Producer Responsibility (EPR) legislation requires FMCG brands to take accountability for post-consumer packaging waste. Non-compliance risks fines and brand damage.',
    },
    {
      num: '02',
      icon: PackageCheck,
      title: 'No Visibility on Packaging Recovery',
      desc: 'You sell millions of units but have zero data on what happens to your packaging after point of sale. EPR auditors need chain-of-custody proof — not estimates.',
    },
    {
      num: '03',
      icon: FileText,
      title: 'Fragmented Recycling Partnerships',
      desc: 'Working with multiple collectors, recyclers, and MRFs means data comes in 15 different formats. Without aggregation, your EPR reporting is fragmented and audit-risky.',
    },
  ];

  const capabilities = [
    { icon: Recycle, title: 'EPR Data Management', desc: 'Track packaging placed on market vs. recovered — by material type, weight, and recovery channel — all in one platform.' },
    { icon: Truck, title: 'Collection Network Tracking', desc: 'Monitor collection partners, track material flows from consumer drop-off to recycler, with IoT-verified weights at every handoff.' },
    { icon: BarChart3, title: 'Scope 3 Category 5 Reporting', desc: 'Automatically calculate waste-in-operations emissions from your facilities aligned with GRI 306:2020 framework.' },
    { icon: Globe, title: 'CBAM & EU Packaging Readiness', desc: 'Prepare for EU Packaging and Packaging Waste Regulation (PPWR) with material-level traceability and recycled content tracking.' },
    { icon: FileCheck, title: 'Audit-Ready Disclosures', desc: 'Generate EPR compliance reports, GRI 306 disclosures, and recovery rate dashboards with one click — ready for regulators and investors.' },
    { icon: Factory, title: 'Multi-Site Consolidation', desc: 'Aggregate waste and packaging data across factories, DCs, and offices into a single corporate ESG dashboard.' },
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
    { value: '50%', label: 'Cost Reduction', sub: 'Waste management savings' },
  ];

  const howItWorks = [
    { num: '01', title: 'Packaging Audit', desc: 'We map your packaging portfolio — material types, volumes, and current recovery channels across all SKUs and facilities.' },
    { num: '02', title: 'Data Infrastructure', desc: 'Deploy GEPP\'s IoT scales and mobile data capture at collection points, MRFs, and recycling partners for real-time tracking.' },
    { num: '03', title: 'Compliance Dashboard', desc: 'Your EPR recovery rates, Scope 3 emissions, and GRI disclosures auto-update in a single corporate dashboard.' },
  ];

  const pdfBenefits = [
    'Thailand\'s EPR landscape and what it means for FMCG brands',
    'How to build a verifiable packaging recovery program',
    'Scope 3 Category 5 reporting for consumer goods companies',
    'EU PPWR readiness checklist for Thai exporters',
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
            Download EPR Guide
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
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/20 mb-6">
                  <PackageCheck size={14} className="text-primary" />
                  <span className="text-xs font-heading font-semibold text-primary tracking-wide uppercase">
                    EPR & Packaging Compliance
                  </span>
                </div>
                <h1 className="heading-xl text-surface-dark-foreground mb-5">
                  Your Packaging Leaves the Shelf.
                  <span className="block eco-gradient-text">Where Does It Go?</span>
                </h1>
                <p className="body-lg text-surface-dark-foreground/70 mb-8 max-w-lg">
                  EPR requires proof, not promises. GEPP Intelligence tracks your packaging from factory to recovery — giving you verifiable data for EPR compliance, Scope 3 reporting, and EU market access.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { icon: ShieldCheck, text: 'GRI 306:2020 Aligned' },
                    { icon: Recycle, text: 'EPR Compliance Ready' },
                    { icon: Users, text: '100+ Enterprise Clients' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-surface-dark-foreground/60">
                      <Icon size={16} className="text-primary shrink-0" />
                      <span className="text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-surface-dark-foreground/10">
                  <p className="text-xs font-heading uppercase tracking-widest text-surface-dark-foreground/40 mb-4">Trusted across industries</p>
                  <div className="flex flex-wrap gap-3">
                    {['Consumer Goods', 'Food & Beverage', 'Personal Care', 'Retail', 'Packaging'].map((s) => (
                      <span key={s} className="px-3 py-1.5 text-xs font-medium text-surface-dark-foreground/50 border border-surface-dark-foreground/10 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lead magnet form */}
              <div id="get-started" className="eco-card p-8 lg:p-10 scroll-mt-20" style={{ background: 'hsl(0 0% 100%)' }}>
                {!submitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Download size={22} className="text-primary" />
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-foreground text-lg">Free Guide: EPR for FMCG</h2>
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
                        <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Work Email</label>
                        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="you@company.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                        <input type="text" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Company name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Your Role</label>
                        <select required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors">
                          <option value="">Select your role</option>
                          <option value="sustainability">Sustainability / ESG</option>
                          <option value="packaging">Packaging / R&D</option>
                          <option value="supply-chain">Supply Chain / Operations</option>
                          <option value="compliance">Regulatory / Compliance</option>
                          <option value="executive">C-Suite / Executive</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <button type="submit" className="w-full py-3.5 font-heading font-bold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
                        <Download size={16} />
                        Download Free EPR Guide
                      </button>
                      <p className="text-xs text-muted-foreground text-center">Instant PDF download · We respect your privacy</p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">Your Guide Is Ready!</h3>
                    <p className="body-sm text-muted-foreground mb-4">Check your email for the "EPR for FMCG" guide. Our team will reach out within 24 hours.</p>
                    <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-heading font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mb-3">
                      <Download size={14} /> Download PDF Now
                    </a>
                    <br />
                    <Link to="/" className="text-sm text-primary font-medium hover:underline">← Back to Homepage</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
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

        {/* Pain points */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">The Challenge</p>
              <h2 className="heading-lg text-foreground mb-4">Why FMCG Brands Can't Afford EPR Gaps</h2>
              <p className="body-md text-muted-foreground">EPR is shifting from voluntary to mandatory across ASEAN. Brands without verifiable recovery data face regulatory, reputational, and market access risks.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {painPoints.map(({ num, icon: Icon, title, desc }) => (
                <div key={num} className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Icon size={20} className="text-primary" /></div>
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
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">GEPP for FMCG</p>
              <h2 className="heading-lg text-foreground mb-4">End-to-End EPR & Carbon Intelligence</h2>
              <p className="body-md text-muted-foreground">From packaging placed on market to verified recovery — one platform for compliance, carbon, and circularity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {capabilities.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="eco-card p-6 group hover:glow-eco transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><Icon size={20} className="text-primary" /></div>
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
              <p className="body-md text-muted-foreground">Results achieved by enterprise clients using the same GEPP Intelligence platform.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map(({ quote, role, industry, stars }) => (
                <div key={role} className="eco-card p-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star key={i} size={16} className="text-[hsl(var(--eco-amber))] fill-[hsl(var(--eco-amber))]" />
                    ))}
                  </div>
                  <blockquote className="body-sm text-foreground mb-5 italic leading-relaxed">"{quote}"</blockquote>
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
              <h2 className="heading-lg text-surface-dark-foreground mb-4">From Packaging Audit to EPR Compliance</h2>
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
                <Recycle size={16} className="text-primary" />
                <span className="text-xs font-heading font-semibold uppercase tracking-widest text-primary">Get Started</span>
              </div>
              <h2 className="heading-lg text-foreground mb-4">Ready to Close Your EPR Compliance Gap?</h2>
              <p className="body-md text-muted-foreground mb-8 max-w-2xl mx-auto">Download our free EPR guide or schedule a packaging audit with our team.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#get-started" className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <Download size={16} /> Download Free Guide
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm border border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors">
                  Schedule Assessment <ArrowRight size={14} />
                </Link>
              </div>
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
