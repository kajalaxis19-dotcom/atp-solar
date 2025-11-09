import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, TrendingDown, Zap, Award, CheckCircle, BarChart3, Settings, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import commercialInstall from "@/assets/commercial-install.jpg";
import commercialHero from "@/assets/hero-commercial.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const CommercialService = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero - Multiple Images Collage */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 opacity-20">
          <img src={commercialHero} alt="" className="w-full h-full object-cover rounded-lg animate-[float_6s_ease-in-out_infinite]" loading="lazy" />
          <img src={commercialInstall} alt="" className="w-full h-full object-cover rounded-lg animate-[float_7s_ease-in-out_infinite]" loading="lazy" />
          <img src={teamCollaboration} alt="" className="w-full h-full object-cover rounded-lg animate-[float_8s_ease-in-out_infinite]" loading="lazy" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <Building2 className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold text-foreground">{t('commercial.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              {t('commercial.hero.title')} <span className="gradient-text">{t('commercial.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('commercial.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">{t('commercial.cta.btn')}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/financing">{t('commercial.cta.financingBtn')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Commercial Solar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('commercial.why.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('commercial.why.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: TrendingDown, 
                title: t('commercial.why.benefit1.title'), 
                desc: t('commercial.why.benefit1.desc'),
                stat: t('commercial.why.benefit1.stat'),
                color: "from-primary to-primary-dark"
              },
              { 
                icon: BarChart3, 
                title: t('commercial.why.benefit2.title'), 
                desc: t('commercial.why.benefit2.desc'),
                stat: t('commercial.why.benefit2.stat'),
                color: "from-secondary to-secondary-dark"
              },
              { 
                icon: Award, 
                title: t('commercial.why.benefit3.title'), 
                desc: t('commercial.why.benefit3.desc'),
                stat: t('commercial.why.benefit3.stat'),
                color: "from-accent to-cta"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4">{benefit.desc}</p>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${benefit.color} text-white font-semibold text-sm`}>
                  {benefit.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions - Flip Images on Hover */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('commercial.industries.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('commercial.industries.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('commercial.industries.manufacturing.title'), desc: t('commercial.industries.manufacturing.desc'), icon: Settings },
              { title: t('commercial.industries.warehouses.title'), desc: t('commercial.industries.warehouses.desc'), icon: Building2 },
              { title: t('commercial.industries.hotels.title'), desc: t('commercial.industries.hotels.desc'), icon: Building2 },
              { title: t('commercial.industries.offices.title'), desc: t('commercial.industries.offices.desc'), icon: Zap }
            ].map((industry, index) => (
              <div 
                key={index}
                className="group relative bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all perspective-1000"
              >
                <div className="relative preserve-3d transition-transform duration-500 group-hover:rotate-y-12">
                  <industry.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Sizes & Configurations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <img 
                src={commercialInstall} 
                alt="Commercial Installation" 
                className="relative w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{t('commercial.packages.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('commercial.packages.subtitle')}
              </p>
              <div className="space-y-4">
                {[
                  { size: t('commercial.packages.small.size'), type: t('commercial.packages.small.title'), load: t('commercial.packages.small.generation'), price: t('commercial.packages.small.cost') },
                  { size: t('commercial.packages.medium.size'), type: t('commercial.packages.medium.title'), load: t('commercial.packages.medium.generation'), price: t('commercial.packages.medium.cost') },
                  { size: t('commercial.packages.large.size'), type: t('commercial.packages.large.title'), load: t('commercial.packages.large.generation'), price: t('commercial.packages.large.cost') },
                  { size: t('commercial.packages.mega.size'), type: t('commercial.packages.mega.title'), load: t('commercial.packages.mega.generation'), price: t('commercial.packages.mega.cost') }
                ].map((config, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all border-l-4 border-primary group">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-foreground">{config.size} - {config.type}</h4>
                        <span className="text-sm font-semibold text-primary">{config.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t('commercial.packages.dailyGen')} {config.load}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">{t('commercial.packages.customBtn')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Timeline */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('commercial.complete.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('commercial.complete.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: t('commercial.complete.audit.title'), desc: t('commercial.complete.audit.desc') },
              { icon: Settings, title: t('commercial.complete.design.title'), desc: t('commercial.complete.design.desc') },
              { icon: Shield, title: t('commercial.complete.quality.title'), desc: t('commercial.complete.quality.desc') },
              { icon: Zap, title: t('commercial.complete.grid.title'), desc: t('commercial.complete.grid.desc') },
              { icon: TrendingDown, title: t('commercial.complete.monitoring.title'), desc: t('commercial.complete.monitoring.desc') },
              { icon: Award, title: t('commercial.complete.support.title'), desc: t('commercial.complete.support.desc') }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-solar flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={commercialHero} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('commercial.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('commercial.cta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">{t('commercial.cta.btn')}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/financing">{t('commercial.cta.financingBtn')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialService;
