import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sun, Battery, Zap, Shield, Award, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import solarProducts from "@/assets/solar-products.jpg";
import solarPanelCloseup from "@/assets/solar-panel-closeup.jpg";
import commercialInstall from "@/assets/commercial-install.jpg";

const Products = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero - Product Showcase */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Sun className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-accent">{t('products.hero.badge')}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('products.hero.title')} <span className="gradient-text">{t('products.hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('products.hero.subtitle')}
              </p>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">{t('products.cta.btn')}</Link>
              </Button>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-solar rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <img 
                src={solarProducts} 
                alt="Solar Products" 
                className="relative w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solar Panels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-solar shadow-lg">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold">{t('products.panels.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('products.panels.desc')}
              </p>
              <div className="space-y-3">
                {[
                  t('products.panels.feature1'),
                  t('products.panels.feature2'),
                  t('products.panels.feature3'),
                  t('products.panels.feature4'),
                  t('products.panels.feature5'),
                  t('products.panels.feature6')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold gradient-text">{t('products.panels.stat1.value')}</div>
                  <div className="text-sm text-muted-foreground">{t('products.panels.stat1.label')}</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold gradient-text">{t('products.panels.stat2.value')}</div>
                  <div className="text-sm text-muted-foreground">{t('products.panels.stat2.label')}</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold gradient-text">{t('products.panels.stat3.value')}</div>
                  <div className="text-sm text-muted-foreground">{t('products.panels.stat3.label')}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src={solarPanelCloseup} 
                  alt="Solar Panel" 
                  className="w-full transform group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inverters */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={commercialInstall} 
                  alt="Inverter Installation" 
                  className="w-full transform hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-dark shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold">{t('products.inverters.title')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('products.inverters.desc')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: t('products.inverters.type1.title'), desc: t('products.inverters.type1.desc') },
                  { title: t('products.inverters.type2.title'), desc: t('products.inverters.type2.desc') },
                  { title: t('products.inverters.type3.title'), desc: t('products.inverters.type3.desc') },
                  { title: t('products.inverters.type4.title'), desc: t('products.inverters.type4.desc') }
                ].map((type, index) => (
                  <div key={index} className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all">
                    <h4 className="font-bold text-foreground mb-2">{type.title}</h4>
                    <p className="text-sm text-muted-foreground">{type.desc}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 pt-4">
                {[
                  t('products.inverters.feature1'),
                  t('products.inverters.feature2'),
                  t('products.inverters.feature3'),
                  t('products.inverters.feature4'),
                  t('products.inverters.feature5'),
                  t('products.inverters.feature6')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batteries & Storage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('products.storage.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('products.storage.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Battery,
                title: t('products.storage.battery1.title'),
                capacity: t('products.storage.battery1.capacity'),
                cycles: t('products.storage.battery1.cycles'),
                warranty: t('products.storage.battery1.warranty'),
                features: [
                  t('products.storage.battery1.feature1'),
                  t('products.storage.battery1.feature2'),
                  t('products.storage.battery1.feature3'),
                  t('products.storage.battery1.feature4')
                ]
              },
              {
                icon: Battery,
                title: t('products.storage.battery2.title'),
                capacity: t('products.storage.battery2.capacity'),
                cycles: t('products.storage.battery2.cycles'),
                warranty: t('products.storage.battery2.warranty'),
                features: [
                  t('products.storage.battery2.feature1'),
                  t('products.storage.battery2.feature2'),
                  t('products.storage.battery2.feature3'),
                  t('products.storage.battery2.feature4')
                ]
              },
              {
                icon: Shield,
                title: t('products.storage.battery3.title'),
                capacity: t('products.storage.battery3.capacity'),
                cycles: t('products.storage.battery3.cycles'),
                warranty: t('products.storage.battery3.warranty'),
                features: [
                  t('products.storage.battery3.feature1'),
                  t('products.storage.battery3.feature2'),
                  t('products.storage.battery3.feature3'),
                  t('products.storage.battery3.feature4')
                ]
              }
            ].map((battery, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-solar flex items-center justify-center mb-6">
                  <battery.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{battery.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{t('products.storage.capacity')}</span>
                    <span className="font-semibold text-foreground">{battery.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{t('products.storage.cycles')}</span>
                    <span className="font-semibold text-foreground">{battery.cycles}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{t('products.storage.warranty')}</span>
                    <span className="font-semibold text-foreground">{battery.warranty}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {battery.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('products.certifications.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('products.certifications.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: t('products.certifications.cert1.title'), desc: t('products.certifications.cert1.desc') },
              { title: t('products.certifications.cert2.title'), desc: t('products.certifications.cert2.desc') },
              { title: t('products.certifications.cert3.title'), desc: t('products.certifications.cert3.desc') },
              { title: t('products.certifications.cert4.title'), desc: t('products.certifications.cert4.desc') }
            ].map((cert, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('products.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('products.cta.subtitle')}
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">{t('products.cta.btn')}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
