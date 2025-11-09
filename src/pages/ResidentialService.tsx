import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Zap, TrendingDown, Shield, CheckCircle, Sun, Battery, Gauge } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import residentialInstall from "@/assets/residential-install.jpg";
import residentialHero from "@/assets/residential-hero.jpg";
import solarPanelCloseup from "@/assets/solar-panel-closeup.jpg";

const ResidentialService = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - Carousel Effect */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          <img 
            src={residentialHero} 
            alt="Residential Solar" 
            className="w-full h-full object-cover animate-[zoom_15s_ease-in-out_infinite]"
            style={{ animationDirection: 'alternate' }}
            loading="eager"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <Home className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-white">Residential Solar Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              {t('residential.hero.title')} <span className="text-accent">{t('residential.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-white/90">
              {t('residential.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">{t('residential.hero.cta1')}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <Link to="/pm-subsidy">{t('residential.hero.cta2')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid - Animated Cards */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('residential.benefits.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('residential.benefits.subtitle') || 'Multiple benefits that make solar the smart choice'}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingDown, title: t('residential.benefits.benefit1.title'), desc: t('residential.benefits.benefit1.desc'), color: "text-primary" },
              { icon: Sun, title: t('residential.benefits.benefit2.title'), desc: t('residential.benefits.benefit2.desc'), color: "text-secondary" },
              { icon: Shield, title: t('residential.benefits.benefit3.title'), desc: t('residential.benefits.benefit3.desc'), color: "text-accent" },
              { icon: Zap, title: t('residential.benefits.benefit4.title'), desc: t('residential.benefits.benefit4.desc'), color: "text-cta" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-solar flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Details - Split Layout with Sliding Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{t('residential.components.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('residential.components.subtitle') || 'Our residential solar systems include everything you need for clean, reliable power generation.'}
              </p>
              <div className="space-y-4">
                {[
                  { icon: Sun, title: t('residential.components.panel.title'), desc: t('residential.components.panel.desc') },
                  { icon: Battery, title: t('residential.components.inverter.title'), desc: t('residential.components.inverter.desc') },
                  { icon: Gauge, title: t('residential.components.monitoring.title'), desc: t('residential.components.monitoring.desc') },
                  { icon: Shield, title: t('residential.components.structure.title'), desc: t('residential.components.structure.desc') },
                  { icon: CheckCircle, title: t('residential.components.subsidy.title'), desc: t('residential.components.subsidy.desc') }
                ].map((component, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-solar flex items-center justify-center group-hover:scale-110 transition-transform">
                      <component.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{component.title}</h4>
                      <p className="text-sm text-muted-foreground">{component.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-solar rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative space-y-4">
                <img 
                  src={residentialInstall} 
                  alt="Solar Installation" 
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src={solarPanelCloseup} 
                  alt="Solar Panel Detail" 
                  className="w-3/4 ml-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  style={{ animationDelay: '200ms' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & ROI Section - On-Grid Systems */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('residential.pricing.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('residential.pricing.subtitle') || 'Choose the right system for your home'}</p>
          </div>
          
          {/* On-Grid Systems */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">{t('residential.pricing.ongrid')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { size: "3 kW", homes: t('residential.pricing.bhk2_3'), units: "12-18 " + t('residential.pricing.unitsPerDay'), price: "₹1.8 - 2.0 Lakhs", subsidy: "₹1,08,000", payback: "3-4 " + t('residential.pricing.years') },
                { size: "5 kW", homes: t('residential.pricing.bhk3_4'), units: "25-30 " + t('residential.pricing.unitsPerDay'), price: "₹3.0 - 3.25 Lakhs", subsidy: "₹1,08,000", payback: "4-5 " + t('residential.pricing.years') },
                { size: "10 kW", homes: t('residential.pricing.largeHomes'), units: "50-60 " + t('residential.pricing.unitsPerDay'), price: "₹6.0 - 6.5 Lakhs", subsidy: "₹1,08,000", payback: "4-5 " + t('residential.pricing.years') }
              ].map((plan, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold gradient-text mb-2">{plan.size}</div>
                  <div className="text-muted-foreground">{t('residential.pricing.systemSize')}</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t('residential.pricing.suitable')}</span>
                    <span className="font-semibold text-foreground">{plan.homes}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t('residential.pricing.generation')}</span>
                    <span className="font-semibold text-foreground">{plan.units}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t('residential.pricing.investment')}</span>
                    <span className="font-semibold text-foreground">{plan.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-primary">
                    <span>{t('residential.pricing.subsidy')}</span>
                    <span className="font-semibold">- {plan.subsidy}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="text-muted-foreground">{t('residential.pricing.payback')}</span>
                    <span className="font-semibold text-secondary">{plan.payback}</span>
                  </div>
                </div>
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/contact">{t('residential.pricing.quote')}</Link>
                </Button>
              </div>
            ))}
            </div>
          </div>
          
          {/* Hybrid Systems */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">{t('residential.pricing.hybrid')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { size: "3 kW", homes: t('residential.pricing.bhk2_3'), units: "12-18 " + t('residential.pricing.unitsPerDay'), price: "₹2.8 - 3.0 Lakhs", subsidy: "₹1,08,000", payback: "4-5 " + t('residential.pricing.years') },
                { size: "5 kW", homes: t('residential.pricing.bhk3_4'), units: "25-30 " + t('residential.pricing.unitsPerDay'), price: "₹4.5 - 5.0 Lakhs", subsidy: "₹1,08,000", payback: "5-6 " + t('residential.pricing.years') },
                { size: "10 kW", homes: t('residential.pricing.largeHomes'), units: "50-60 " + t('residential.pricing.unitsPerDay'), price: "₹9.0 - 10.0 Lakhs", subsidy: "₹1,08,000", payback: "5-6 " + t('residential.pricing.years') }
              ].map((plan, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-secondary"
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold gradient-text mb-2">{plan.size}</div>
                    <div className="text-muted-foreground">{t('residential.pricing.systemSize')}</div>
                  </div>
                  <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t('residential.pricing.suitable')}</span>
                    <span className="font-semibold text-foreground">{plan.homes}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t('residential.pricing.generation')}</span>
                    <span className="font-semibold text-foreground">{plan.units}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t('residential.pricing.investment')}</span>
                    <span className="font-semibold text-foreground">{plan.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-primary">
                    <span>{t('residential.pricing.subsidy')}</span>
                    <span className="font-semibold">- {plan.subsidy}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="text-muted-foreground">{t('residential.pricing.payback')}</span>
                    <span className="font-semibold text-secondary">{plan.payback}</span>
                  </div>
                  </div>
                  <Button variant="cta" className="w-full" asChild>
                    <Link to="/contact">{t('residential.pricing.quote')}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('residential.process.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('residential.process.subtitle') || 'From assessment to activation in 4 easy steps'}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "1", title: t('residential.process.step1.title'), desc: t('residential.process.step1.desc') },
              { num: "2", title: t('residential.process.step2.title'), desc: t('residential.process.step2.desc') },
              { num: "3", title: t('residential.process.step3.title'), desc: t('residential.process.step3.desc') },
              { num: "4", title: t('residential.process.step4.title'), desc: t('residential.process.step4.desc') }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-solar text-white flex items-center justify-center text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Solar Systems Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t('hybrid.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('hybrid.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                {t('hybrid.desc')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  t('hybrid.benefit1'),
                  t('hybrid.benefit2'),
                  t('hybrid.benefit3'),
                  t('hybrid.benefit4'),
                  t('hybrid.benefit5'),
                  t('hybrid.benefit6')
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition-all">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center gradient-text">{t('residential.comparison.title')}</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-bold text-lg mb-2">{t('residential.comparison.ongrid.title')}</h4>
                    <p className="text-sm text-muted-foreground">{t('residential.comparison.ongrid.desc')}</p>
                  </div>
                  <div className="border-b pb-4 bg-primary/5 -mx-4 px-4 py-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2 text-primary">{t('residential.comparison.hybrid.title')}</h4>
                    <p className="text-sm text-muted-foreground">{t('residential.comparison.hybrid.desc')}</p>
                  </div>
                  <div className="pb-2">
                    <h4 className="font-bold text-lg mb-2">{t('residential.comparison.offgrid.title')}</h4>
                    <p className="text-sm text-muted-foreground">{t('residential.comparison.offgrid.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get Hybrid System Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('residential.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('residential.cta.subtitle') || 'Get a free site assessment and customized solar solution today'}
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">{t('residential.cta.btn') || 'Schedule Free Visit'}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResidentialService;
