import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

export default function ContactPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    type: 'new',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.company.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setSubmitting(true);

    // Simulate submission (replace with actual backend when connected)
    setTimeout(() => {
      toast.success('Thank you! We\'ll be in touch within 24 hours.');
      setForm({ name: '', email: '', company: '', type: 'new', message: '' });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid-two-col">
              {/* Left — context */}
              <div>
                <h1 className="heading-xl text-foreground mb-6">{t('contact.title')}</h1>
                <p className="body-lg text-muted-foreground mb-10">{t('contact.subtitle')}</p>

                <div className="space-y-6">
                  <div className="p-6 border border-primary/20 rounded-lg bg-primary-muted">
                    <p className="text-xs font-heading font-semibold uppercase tracking-widest text-primary mb-2">{t('cta.existing')}</p>
                    <p className="body-sm text-foreground">Activate Scope 3 reporting, ESG modules, or expand traceability coverage for your existing GEPP account.</p>
                  </div>
                  <div className="p-6 border border-border rounded-lg">
                    <p className="text-xs font-heading font-semibold uppercase tracking-widest text-muted-foreground mb-2">{t('cta.new')}</p>
                    <p className="body-sm text-muted-foreground">Get a personalized demo of the GEPP Intelligence Platform. 30-day free trial available.</p>
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div className="bg-card border border-border rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t('contact.name')} *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-colors"
                      maxLength={100}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t('contact.email')} *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-colors"
                      maxLength={255}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t('contact.company')} *</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-2.5 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-colors"
                      maxLength={100}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t('contact.type')}</label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, type: 'existing' })}
                        className={`flex-1 px-4 py-2.5 border rounded-md text-sm font-medium transition-colors ${
                          form.type === 'existing'
                            ? 'border-primary bg-primary-muted text-primary'
                            : 'border-input text-muted-foreground hover:border-foreground/30'
                        }`}
                      >
                        {t('contact.type.existing')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, type: 'new' })}
                        className={`flex-1 px-4 py-2.5 border rounded-md text-sm font-medium transition-colors ${
                          form.type === 'new'
                            ? 'border-primary bg-primary-muted text-primary'
                            : 'border-input text-muted-foreground hover:border-foreground/30'
                        }`}
                      >
                        {t('contact.type.new')}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t('contact.message')}</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2.5 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-colors resize-none"
                      maxLength={1000}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-6 py-3 font-heading font-semibold text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    {submitting ? '...' : t('contact.submit')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
