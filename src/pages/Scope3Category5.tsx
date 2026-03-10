import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroImg from '@/assets/scope3-cat5-hero.png';
import {
  Leaf,
  Recycle,
  BarChart3,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Trash2,
  Factory,
  TrendingDown,
  Zap,
  ShieldCheck,
  CircleDot,
} from 'lucide-react';

const features = [
  {
    icon: Trash2,
    title: 'Waste Stream Mapping',
    desc: 'Automatically classify and quantify waste generated across all operational sites — from offices to factories.',
  },
  {
    icon: BarChart3,
    title: 'Emission Factor Engine',
    desc: 'Pre-loaded GHG emission factors for 50+ waste types aligned with IPCC and Thailand TGO methodologies.',
  },
  {
    icon: Recycle,
    title: 'Diversion vs. Disposal Tracking',
    desc: 'Real-time breakdown of recycled, composted, incinerated, and landfilled waste with CO₂e per pathway.',
  },
  {
    icon: FileCheck,
    title: 'GRI 306 Auto-Reporting',
    desc: 'Generate GRI 306:2020 compliant disclosures (306-3, 306-4, 306-5) with one click.',
  },
  {
    icon: ShieldCheck,
    title: 'Audit-Ready Data Trail',
    desc: 'Every data point timestamped, source-verified, and exportable for third-party assurance.',
  },
  {
    icon: TrendingDown,
    title: 'Reduction Scenario Modeling',
    desc: 'Simulate waste reduction strategies and project their Scope 3 impact before implementation.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Connect Your Waste Data',
    desc: 'Link existing GEPP waste management operations or upload historical data. Zero disruption to current workflows.',
  },
  {
    num: '02',
    title: 'Automatic Classification',
    desc: 'Our engine maps every waste stream to Category 5 emission factors and calculates CO₂e in real time.',
  },
  {
    num: '03',
    title: 'Report & Reduce',
    desc: 'Generate disclosure-ready reports and use scenario modeling to plan reduction targets.',
  },
];

const metrics = [
  { value: '50+', label: 'Waste Types', sub: 'Pre-mapped emission factors' },
  { value: 'GRI 306', label: 'Compliant', sub: '2020 standard aligned' },
  { value: '<5 min', label: 'Report Generation', sub: 'From data to disclosure' },
  { value: '100%', label: 'Traceability', sub: 'Full chain-of-custody' },
];

export default function Scope3Category5() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden section-dark">
          <div className="absolute inset-0 opacity-30">
            <img src={heroImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,30%,7%)] via-[hsl(150,30%,7%)/0.85] to-transparent" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/20 mb-6">
                <Zap size={14} className="text-primary" />
                <span className="text-xs font-heading font-semibold text-primary tracking-wide uppercase">New Feature</span>
              </div>
              <h1 className="heading-xl text-surface-dark-foreground mb-4">
                Scope 3 Category 5
              </h1>
              <p className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-6">
                Waste Generated in Operations
              </p>
              <p className="body-lg text-surface-dark-foreground/70 mb-8 max-w-xl">
                The latest addition to GEPP Intelligence — automatically calculate, track, and report GHG emissions from your operational waste. From data collection to GRI 306:2020 disclosure, fully automated.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <Leaf size={16} />
                  Activate Category 5 Module
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm text-surface-dark-foreground border border-surface-dark-foreground/20 rounded-lg hover:bg-surface-dark-foreground/5 transition-colors"
                >
                  See How It Works
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What is Category 5 */}
        <section className="py-14 lg:py-20 section-eco">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">Understanding the Impact</p>
              <h2 className="heading-lg text-foreground mb-6">What is Scope 3 Category 5?</h2>
              <p className="body-lg text-muted-foreground">
                Category 5 of the GHG Protocol covers emissions from <strong className="text-foreground">waste generated in operations</strong> — the disposal and treatment of waste produced at your facilities. This includes emissions from landfills, incineration, recycling processes, and composting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Factory, label: 'Upstream Emissions', desc: 'Waste transportation and processing by third-party vendors' },
                { icon: Trash2, label: 'Disposal Methods', desc: 'Landfill methane, incineration CO₂, and treatment emissions' },
                { icon: Recycle, label: 'Recovery Credits', desc: 'Offset calculations for recycled and composted materials' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="eco-card p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{label}</h3>
                  <p className="body-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map(({ value, label, sub }) => (
                <div key={label} className="text-center">
                  <p className="stat-number eco-gradient-text mb-1">{value}</p>
                  <p className="font-heading font-semibold text-foreground text-sm">{label}</p>
                  <p className="body-sm text-muted-foreground mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">Platform Capabilities</p>
              <h2 className="heading-lg text-foreground mb-4">Everything You Need for Category 5 Reporting</h2>
              <p className="body-md text-muted-foreground">
                Built on top of GEPP's waste data infrastructure — if you're already managing waste with us, Category 5 emissions are ready to report.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="eco-card p-6 group hover:glow-eco transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground">{title}</h3>
                  </div>
                  <p className="body-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-14 lg:py-20 section-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">Simple Activation</p>
              <h2 className="heading-lg text-surface-dark-foreground mb-4">How It Works</h2>
              <p className="body-md text-surface-dark-foreground/60">
                For existing GEPP clients, Category 5 requires zero additional data collection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map(({ num, title, desc }, i) => (
                <div key={num} className="relative">
                  <div className="text-6xl font-heading font-bold text-primary/15 mb-4">{num}</div>
                  <h3 className="font-heading font-semibold text-surface-dark-foreground text-lg mb-3">{title}</h3>
                  <p className="body-sm text-surface-dark-foreground/60">{desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8">
                      <ArrowRight size={20} className="text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Existing Clients */}
        <section className="py-14 lg:py-20 section-eco">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">For GEPP Clients</p>
                <h2 className="heading-lg text-foreground mb-6">Already Using GEPP?</h2>
                <p className="body-md text-muted-foreground mb-6">
                  Your waste data is already being captured through GEPP Intelligence. Activating Category 5 means your Scope 3 emissions report is ready — with no additional sensors, no manual data entry, no disruption.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Uses your existing waste stream data',
                    'Auto-mapped to GHG Protocol emission factors',
                    'GRI 306:2020 reports in under 5 minutes',
                    'Instant integration — no setup required',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="body-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <Leaf size={16} />
                  Activate Now
                </Link>
              </div>
              <div className="eco-card p-8 space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <CircleDot size={20} className="text-primary" />
                  <h3 className="font-heading font-semibold text-foreground">Sample Category 5 Output</h3>
                </div>
                {[
                  { label: 'General Waste → Landfill', value: '12.4 tCO₂e', pct: 58 },
                  { label: 'Plastic → Recycling', value: '2.1 tCO₂e', pct: 22 },
                  { label: 'Organic → Composting', value: '0.8 tCO₂e', pct: 10 },
                  { label: 'Paper → Recycling', value: '1.2 tCO₂e', pct: 15 },
                ].map(({ label, value, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="body-sm text-foreground font-medium">{label}</span>
                      <span className="body-sm text-primary font-heading font-semibold">{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                  Based on sample data · Emission factors: IPCC 2019 + TGO Thailand
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="heading-lg text-foreground mb-6">
                Start Reporting Category 5 Today
              </h2>
              <p className="body-md text-muted-foreground mb-8">
                Whether you're an existing GEPP client or new to the platform, get your Scope 3 Category 5 emissions quantified and disclosure-ready.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <Leaf size={16} />
                  Request a Demo
                </Link>
                <Link
                  to="/scope-3"
                  className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-sm border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
                >
                  Explore Full Scope 3 Suite
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
