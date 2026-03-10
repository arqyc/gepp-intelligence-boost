import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Wifi, Monitor, Shield, Weight, ClipboardCheck, Users, Settings, Check } from 'lucide-react';
import scaleImg from '@/assets/scale.png';
import howToScaleImg from '@/assets/how-to-scale.png';
import scalePackageImg from '@/assets/scale-package.png';

export default function TraceabilityPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="section-dark py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-4">GEPP Scale</p>
              <h1 className="heading-xl text-surface-dark-foreground mb-6">
                Automate Waste Weighing to Reporting — With One Device
              </h1>
              <p className="body-lg text-surface-dark-foreground/70 mb-8">
                GEPP Scale is a purpose-built digital weighing system that captures waste data at the source, syncs it in real-time to the GEPP Intelligence dashboard, and generates automated reports — eliminating manual logging entirely.
              </p>
              <Link to="/contact" className="inline-block px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        </section>

        {/* Scale Product Showcase */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid-two-col items-center">
              <div>
                <img
                  src={scaleImg}
                  alt="GEPP Digital Scale with Bluetooth, 4G, and Wi-Fi connectivity"
                  className="w-full rounded-xl"
                />
              </div>
              <div>
                <h2 className="heading-lg text-foreground mb-6">Built for Waste Rooms, Not Offices</h2>
                <p className="body-md text-muted-foreground mb-8">
                  Every component is designed for the harsh realities of waste management — from certified commercial-grade weighing to real-time cloud sync via Bluetooth, 4G, and Wi-Fi.
                </p>
                <div className="space-y-5">
                  {[
                    { icon: Wifi, title: 'Connectivity', desc: 'Bluetooth / 4G / Wi-Fi enabled for real-time API sync to your dashboard.' },
                    { icon: Monitor, title: 'Interface', desc: 'Xiaomi Redmi Pad for intuitive user interaction and waste category selection.' },
                    { icon: Shield, title: 'Durability', desc: 'Designed for waste room conditions with easy maintenance and long lifespan.' },
                    { icon: Weight, title: 'Capacity & Precision', desc: 'Digital scale maximum weight 150kg. Certified accuracy for commercial trading.' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">{title}</h3>
                        <p className="body-sm text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Easy Steps */}
        <section className="py-20 lg:py-28 section-eco">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">3 Simple Steps — Weighing to Reporting</h2>
              <p className="body-md text-muted-foreground max-w-2xl mx-auto">
                No complex setup. No spreadsheets. Just weigh, record, and receive your reports automatically.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xl mb-5">
                  1
                </div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border mb-5 flex items-center justify-center p-6">
                  <div className="space-y-3 text-left w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                        <ClipboardCheck size={16} className="text-primary" />
                      </div>
                      <span className="font-heading font-semibold text-sm text-foreground">Sort Your Waste</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {['Plastic', 'Paper', 'Glass', 'Organic'].map((type) => (
                        <div key={type} className="px-3 py-2 bg-primary/5 border border-primary/20 rounded-md text-xs font-heading font-medium text-foreground text-center">
                          {type}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">Not sorted? Measure as general waste — you can still track!</p>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Bring Your Sorted Waste</h3>
                <p className="body-sm text-muted-foreground">If your waste is not sorted, it's ok — you can still measure as landfill waste. But if you sort, you'll know your impact of recycling!</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xl mb-5">
                  2
                </div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-border mb-5">
                  <img
                    src={scaleImg}
                    alt="GEPP Digital Scale for waste weighing"
                    className="w-full h-full object-contain bg-card p-4"
                  />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Weigh and Record</h3>
                <p className="body-sm text-muted-foreground">Weigh your waste on GEPP Scale before you manage it (sale/disposal). Data syncs automatically to the cloud.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xl mb-5">
                  3
                </div>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border mb-5 flex items-center justify-center p-6">
                  <div className="space-y-3 w-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                        <Monitor size={16} className="text-primary" />
                      </div>
                      <span className="font-heading font-semibold text-sm text-foreground">Weekly Report</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: 'Recycled', pct: '72%', color: 'bg-primary' },
                        { label: 'Organic', pct: '18%', color: 'bg-accent' },
                        { label: 'Landfill', pct: '10%', color: 'bg-muted-foreground/30' },
                      ].map(({ label, pct, color }) => (
                        <div key={label} className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground w-16 text-left">{label}</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className={`h-full ${color} rounded-full`} style={{ width: pct }} />
                          </div>
                          <span className="text-xs font-heading font-semibold text-foreground w-8 text-right">{pct}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Sent to your email every Monday</p>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Get Your Report Weekly</h3>
                <p className="body-sm text-muted-foreground">Receive reports via email weekly, and free advising from the GEPP Sa-Ard team to optimize your waste operations!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation & Change Management */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">We Don't Just Deliver Hardware — We Drive Change</h2>
              <p className="body-md text-muted-foreground">
                GEPP provides end-to-end implementation support and change management to ensure your team adopts the system successfully and sustains results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Settings, title: 'Installation & Setup', desc: 'On-site hardware setup, network configuration, and system integration with your operations.' },
                { icon: Users, title: 'Staff Training', desc: 'Hands-on waste sorting workshops and scale operation training for up to 100 attendees per session.' },
                { icon: ClipboardCheck, title: 'Change Management', desc: 'Behavioral change programs, signage, and ongoing support to build waste sorting habits across your organization.' },
                { icon: Shield, title: 'Ongoing Support', desc: 'Maintenance, hardware swap, weekly reports, and free advising from the GEPP Sa-Ard team throughout the contract.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-8 bg-card border border-border rounded-lg">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{title}</h3>
                  <p className="body-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 lg:py-28 section-eco">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">Choose Your Package</h2>
              <p className="body-md text-muted-foreground max-w-2xl mx-auto">
                Flexible plans to match your waste management needs — from platform-only to full hardware ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Reporting Platform Only */}
              <div className="bg-card border border-border rounded-xl p-8 flex flex-col">
                <h3 className="font-heading font-bold text-xl text-foreground mb-6 text-center">Reporting Platform Only</h3>
                <div className="text-center mb-6">
                  <span className="font-heading font-bold text-4xl text-primary">5,200</span>
                  <p className="text-sm text-muted-foreground mt-1">THB/month</p>
                </div>
                <ul className="space-y-3 flex-1">
                  {['Use your scales', 'QR mobile entry', 'AI & dashboard', 'Up to 50 tenants, 2 times a day or up to 500 weighings a month'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={16} className={`mt-0.5 shrink-0 ${i === 3 ? 'text-destructive' : 'text-primary'}`} />
                      <span className={`body-sm ${i === 3 ? 'text-destructive font-medium' : 'text-foreground'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 block text-center px-5 py-2.5 text-sm font-heading font-semibold border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                  Get Started
                </Link>
              </div>

              {/* Full-Service Rental — Featured */}
              <div className="bg-surface-dark border-2 border-primary rounded-xl p-8 flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-heading font-semibold rounded-full">
                  Most Popular
                </div>
                <h3 className="font-heading font-bold text-xl text-surface-dark-foreground mb-6 text-center">Full-Service Rental</h3>
                <div className="text-center mb-6">
                  <span className="font-heading font-bold text-4xl text-primary">7,990</span>
                  <p className="text-sm text-surface-dark-foreground/60 mt-1">THB/month/unit</p>
                </div>
                <ul className="space-y-3 flex-1">
                  {['Zero upfront cost', 'Scale included', 'Maintenance & swap', '12 months platform'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="body-sm text-surface-dark-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 block text-center px-5 py-2.5 text-sm font-heading font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Get Started
                </Link>
              </div>

              {/* Buy GEPP Scale */}
              <div className="bg-card border-2 border-primary rounded-xl p-8 flex flex-col">
                <h3 className="font-heading font-bold text-xl text-primary mb-6 text-center">Buy GEPP Scale</h3>
                <div className="text-center mb-6">
                  <span className="font-heading font-bold text-4xl text-primary">138,485</span>
                  <p className="text-sm text-muted-foreground mt-1">THB per unit</p>
                </div>
                <ul className="space-y-3 flex-1">
                  {['Own the hardware', 'Free 12mo platform', 'First year maintenance', 'Long-term savings'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="body-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 block text-center px-5 py-2.5 text-sm font-heading font-semibold border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                  Get Started
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
