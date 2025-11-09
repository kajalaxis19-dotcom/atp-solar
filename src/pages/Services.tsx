import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Building2, Wrench, Sun, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import residentialInstall from "@/assets/residential-install.jpg";
import commercialInstall from "@/assets/commercial-install.jpg";
import maintenanceTeam from "@/assets/maintenance-team.jpg";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Home,
      title: t('services.residential.title'),
      description: t('services.residential.desc'),
      features: [
        t('services.residential.feature1'),
        t('services.residential.feature2'),
        t('services.residential.feature3'),
        t('services.residential.feature4'),
        t('services.residential.feature5')
      ],
      image: residentialInstall,
      link: "/services/residential",
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: Building2,
      title: t('services.commercial.title'),
      description: t('services.commercial.desc'),
      features: [
        t('services.commercial.feature1'),
        t('services.commercial.feature2'),
        t('services.commercial.feature3'),
        t('services.commercial.feature4'),
        t('services.commercial.feature5')
      ],
      image: commercialInstall,
      link: "/services/commercial",
      gradient: "from-secondary to-secondary-dark"
    },
    {
      icon: Wrench,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc'),
      features: [
        t('services.maintenance.feature1'),
        t('services.maintenance.feature2'),
        t('services.maintenance.feature3'),
        t('services.maintenance.feature4'),
        t('services.maintenance.feature5')
      ],
      image: maintenanceTeam,
      link: "/services/maintenance",
      gradient: "from-accent to-cta"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - Dynamic Grid Layout */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Sun className="w-5 h-5 text-primary animate-spin-slow" />
              <span className="text-sm font-semibold text-primary">{t('services.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('services.hero.title')} <span className="gradient-text">{t('services.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.hero.subtitle')}
            </p>
          </div>

          {/* Image Grid Showcase */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[residentialInstall, commercialInstall, maintenanceTeam].map((img, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
              >
                <img 
                  src={img} 
                  alt={`Service ${index + 1}`}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <p className="text-lg text-muted-foreground">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="cta" size="lg" asChild className="group">
                  <Link to={service.link}>
                    {t('common.learnMore')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-all`}></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('services.process.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('services.process.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: t('services.process.step1'), desc: t('services.process.step1.desc') },
              { step: "02", title: t('services.process.step2'), desc: t('services.process.step2.desc') },
              { step: "03", title: t('services.process.step3'), desc: t('services.process.step3.desc') },
              { step: "04", title: t('services.process.step4'), desc: t('services.process.step4.desc') }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">{t('common.getQuote')}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/pm-subsidy">{t('subsidy.hero.cta1')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
