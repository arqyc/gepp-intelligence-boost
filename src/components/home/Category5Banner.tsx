import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';

export default function Category5Banner() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(152 68% 36%), hsl(152 50% 28%))' }}>
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full border-2 border-white" />
        <div className="absolute -bottom-8 left-20 w-40 h-40 rounded-full border border-white" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-5 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/20 rounded-full shrink-0">
              <Zap size={12} className="text-white" />
              <span className="text-[11px] font-heading font-bold text-white uppercase tracking-wider">New</span>
            </div>
            <p className="text-sm md:text-base font-medium text-white">
              <span className="font-heading font-semibold">Carbon Scope 3 Category 5</span>
              <span className="text-white/75 ml-2 hidden sm:inline">— Automatically report GHG emissions from waste generated in operations</span>
            </p>
          </div>
          <Link
            to="/scope-3/category-5"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-heading font-semibold bg-white text-primary rounded-lg hover:bg-white/90 transition-colors shrink-0"
          >
            Learn More
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
