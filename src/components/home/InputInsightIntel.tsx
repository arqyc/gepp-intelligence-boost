import scaleCleanImg from '@/assets/scale-clean.jpg';
import platformImg from '@/assets/platform-dashboard.png';
import activeDataImg from '@/assets/active-data.png';
import { ArrowRight } from 'lucide-react';

const pillars = [
  {
    label: 'Input',
    title: 'Digital Scale',
    desc: 'Effortless data capture at the source. GEPP Scale automates waste weighing and syncs data in real-time — no spreadsheets, no manual entry.',
    img: scaleCleanImg,
    alt: 'GEPP Digital Scale for automated waste weighing',
  },
  {
    label: 'Insight',
    title: 'GEPP Platform',
    desc: 'All your waste and carbon data in one dashboard. Analyze trends, track KPIs, and generate ESG reports automatically.',
    img: platformImg,
    alt: 'GEPP Intelligence platform dashboard',
  },
  {
    label: 'Intel',
    title: 'Mobile Access',
    desc: 'Data in your hands, wherever you are. Monitor performance, receive alerts, and share reports on the go.',
    img: activeDataImg,
    alt: 'GEPP mobile app for on-the-go waste data intelligence',
  },
];

export default function InputInsightIntel() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-3">
            How It Works
          </p>
          <h2 className="heading-lg text-foreground mb-4">
            From Input to Insight to Intel
          </h2>
          <p className="body-md text-muted-foreground">
            Three integrated components that turn raw waste data into actionable intelligence — effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <div key={pillar.label} className="group relative">
              {/* Image */}
              <div className="aspect-square rounded-xl overflow-hidden border border-border mb-5 bg-white flex items-center justify-center">
                <img
                  src={pillar.img}
                  alt={pillar.alt}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Label + Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2.5 py-0.5 text-xs font-heading font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
                  {pillar.label}
                </span>
                {i < pillars.length - 1 && (
                  <ArrowRight size={14} className="text-muted-foreground hidden md:block" />
                )}
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{pillar.title}</h3>
              <p className="body-sm text-muted-foreground">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}