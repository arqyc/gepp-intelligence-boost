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
  Factory,
  Globe,
  Users,
  Clock,
  Leaf,
  Star,
} from 'lucide-react';

export default function ESGLanding() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const painPoints = [
    {
      num: '01',
      title: 'Data logistics, not calculation',
      desc: 'Organizations know what to measure but lack a system to centralise data across departments. GEPP solves the coordination layer — aggregating data automatically.',
    },
    {
      num: '02',
      title: 'EU ETS / CBAM financial risk',
      desc: 'EU-export companies face immediate carbon tariffs from CBAM. Non-compliance erodes margins — Scope 3 readiness is no longer optional.',
    },
    {
      num: '03',
      title: 'Reporting fatigue → checkbox compliance',
      desc: 'Without an actionable intelligence layer, ESG reports gather dust. GEPP turns data into decisions that drive real reduction.',
    },
  ];

  const capabilities = [
    { icon: BarChart3, title: 'Scope 3 Baseline Assessment', desc: 'Full category mapping and gap analysis against GRI 306:2020 and TCFD frameworks' },
    { icon: Factory, title: 'Data Capture Technology', desc: 'IoT scales, mobile QR entry, and ERP connectors (SAP, Oracle, PEAK) — zero manual entry' },
    { icon: TrendingDown, title: 'Decarbonisation Roadmap', desc: 'Prioritised reduction strategy with milestones and scenario modelling' },
    { icon: Globe, title: 'CBAM Readiness Review', desc: 'Gap analysis for EU Carbon Border Adjustment Mechanism compliance' },
    { icon: FileCheck, title: 'GRI 306:2020 Auto-Reporting', desc: 'Generate audit-ready disclosures (306-3, 306-4, 306-5) with one click' },
    { icon: ShieldCheck, title: 'Audit-Ready Data Trail', desc: 'Every data point timestamped, source-verified, and exportable for assurance' },
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
    { value: '8+', label: 'Years Experience', sub: 'Real-world waste operations' },
    { value: '11→58%', label: 'Diversion Rate', sub: 'Achieved in 10 months' },
    { value: '50%', label: 'Cost Reduction', sub: 'Waste management savings' },
    { value: '77.5M+', label: 'Trees Equivalent', sub: 'Annual GHG offset' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Leaf size={16} className="text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-foreground text-lg">GEPP</span>
          </Link>
          <a
            href="#get-started"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-heading font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </header>

      <main className="pt-14">
        {/* Hero — value prop + form side by side */}
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
                  <Zap size={14} className="text-primary" />
                  <span className="text-xs font-heading font-semibold text-primary tracking-wide uppercase">
                    Free Scope 3 Assessment
                  </span>
                </div>
                <h1 className="heading-xl text-surface-dark-foreground mb-5">
                  Turn Waste Data Into
                  <span className="block eco-gradient-text">Scope 3 Compliance</span>
                </h1>
                <p className="body-lg text-surface-dark-foreground/70 mb-8 max-w-lg">
                  GEPP Intelligence automates your Scope 3 Category 5 emissions — from data collection to GRI 306:2020 disclosure. Built on 8 years of real-world waste operations across Thailand.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { icon: ShieldCheck, text: 'GRI 306:2020 Aligned' },
                    { icon: Clock, text: 'Reports in < 5 min' },
                    { icon: Users, text: '100+ Enterprise Clients' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-surface-dark-foreground/60">
                      <Icon size={16} className="text-primary shrink-0" />
                      <span className="text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Social proof logos */}
                <div className="pt-6 border-t border-surface-dark-foreground/10">
                  <p className="text-xs font-heading uppercase tracking-widest text-surface-dark-foreground/40 mb-4">Trusted by leaders in</p>
                  <div className="flex flex-wrap gap-3">
                    {['Energy', 'Consumer Goods', 'Real Estate', 'Food & Beverage', 'Manufacturing'].map((s) => (
                      <span key={s} className="px-3 py-1.5 text-xs font-medium text-surface-dark-foreground/50 border border-surface-dark-foreground/10 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — lead form */}
              <div id="get-started" className="eco-card p-8 lg:p-10 scroll-mt-20" style={{ background: 'hsl(0 0% 100%)' }}>
                {!submitted ? (
                  <>
                    <h2 className="font-heading font-bold text-foreground text-xl mb-2">Get Your Free Scope 3 Assessment</h2>
                    <p className="body-sm text-muted-foreground mb-6">
                      Our ESG specialists will map your emissions baseline and identify your biggest carbon reduction levers — at no cost.
                    </p>
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
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">What's your biggest ESG challenge?</label>
                        <textarea
                          rows={3}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                          placeholder="e.g. Scope 3 reporting, CBAM compliance, data collection..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3.5 font-heading font-bold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                      >
                        Get Free Assessment →
                      </button>
                      <p className="text-xs text-muted-foreground text-center">
                        No commitment required · Response within 24 hours
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-2">Thank You!</h3>
                    <p className="body-sm text-muted-foreground mb-4">
                      Our ESG team will contact you within 24 hours with your personalised Scope 3 assessment plan.
                    </p>
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

        {/* Pain points */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">The Problem</p>
              <h2 className="heading-lg text-foreground mb-4">What's Really Blocking Your Scope 3 Progress?</h2>
              <p className="body-md text-muted-foreground">
                From direct conversations with Thai enterprises and global ESG practitioners — the structural pain points GEPP is built to solve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {painPoints.map(({ num, title, desc }) => (
                <div key={num} className="relative">
                  <div className="text-5xl font-heading font-bold text-primary/10 mb-3">{num}</div>
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
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">GEPP Solution</p>
              <h2 className="heading-lg text-foreground mb-4">
                Complete ESG & Carbon Scope 3 Consultation
              </h2>
              <p className="body-md text-muted-foreground">
                No rip-and-replace — just a layer of intelligence on top of what you already do.
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
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">Social Proof</p>
              <h2 className="heading-lg text-foreground mb-4">Trusted by Enterprise Leaders</h2>
              <p className="body-md text-muted-foreground">
                See what sustainability leaders across Thailand say about GEPP Intelligence.
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
              <h2 className="heading-lg text-surface-dark-foreground mb-4">From Assessment to Action in 3 Steps</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { num: '01', title: 'Free Baseline Assessment', desc: 'We map your current waste data, identify Scope 3 categories, and benchmark against your industry.' },
                { num: '02', title: 'Automated Data Capture', desc: 'Connect GEPP Scale, mobile apps, or ERP integrations. Your waste data flows automatically into the platform.' },
                { num: '03', title: 'Report & Reduce', desc: 'Generate GRI-compliant reports, model reduction scenarios, and track progress against targets.' },
              ].map(({ num, title, desc }, i) => (
                <div key={num} className="relative text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading font-bold text-primary text-lg">{num}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-surface-dark-foreground text-lg mb-2">{title}</h3>
                  <p className="body-sm text-surface-dark-foreground/60">{desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-7 -right-4">
                      <ArrowRight size={18} className="text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-foreground mb-4">Ready to Act on Scope 3?</h2>
              <p className="body-md text-muted-foreground mb-8 max-w-xl mx-auto">
                Let GEPP run your Scope 3 baseline assessment — identify your biggest carbon levers and build a roadmap in weeks, not months.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 px-8 py-4 font-heading font-bold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <Leaf size={16} />
                  Get Free Consultation
                </a>
                <Link
                  to="/scope-3"
                  className="inline-flex items-center gap-2 px-8 py-4 font-heading font-semibold text-sm border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                >
                  Explore Full Platform
                  <ArrowRight size={16} />
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-4">No commitment · No credit card · Free assessment</p>
            </div>
          </div>
        </section>

        {/* Minimal footer */}
        <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2025 GEPP Sa-Ard Co., Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Homepage</Link>
              <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
