import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Eye, Droplets, Activity, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import maintenanceTeam from "@/assets/maintenance-team.jpg";
import customerConsultation from "@/assets/customer-consultation.jpg";

const Maintenance = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Split Layout for Maintenance */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="grid md:grid-cols-2 h-full">
          {/* Left: Content */}
          <div className="bg-gradient-to-br from-secondary via-primary to-accent p-8 md:p-16 flex items-center">
            <div className="max-w-xl animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Wrench className="w-5 h-5 text-white" />
                <span className="text-sm font-semibold text-white">{t('maintenance.hero.badge')}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t('maintenance.hero.title')}
                <span className="block text-white/90 mt-2">{t('maintenance.hero.subtitle')}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {t('maintenance.hero.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/contact">
                    {t('maintenance.cta.btn')} <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">{t('common.getQuote')}</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right: Animated Image Collage */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
              <div className="overflow-hidden rounded-2xl animate-fade-in-up">
                <img src={maintenanceTeam} alt="Solar maintenance" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <img src={customerConsultation} alt="Panel cleaning" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <img src={maintenanceTeam} alt="Monitoring" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-2xl animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <img src={customerConsultation} alt="Support" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('maintenance.why.title')} <span className="gradient-text">{t('maintenance.why.titleHighlight')}</span> {t('maintenance.why.titleEnd')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('maintenance.why.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>{t('maintenance.why.output.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('maintenance.why.output.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>{t('maintenance.why.lifespan.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('maintenance.why.lifespan.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>{t('maintenance.why.downtime.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('maintenance.why.downtime.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('maintenance.services.title')} <span className="gradient-text">{t('maintenance.services.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover-lift">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Droplets className="w-6 h-6" />
                  {t('maintenance.services.cleaning.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground">
                  {t('maintenance.services.cleaning.desc')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.cleaning.feat1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.cleaning.feat2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.cleaning.feat3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.cleaning.feat4')}</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm font-semibold">{t('maintenance.services.cleaning.price')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover-lift">
              <CardHeader className="bg-secondary text-secondary-foreground">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Eye className="w-6 h-6" />
                  {t('maintenance.services.monitoring.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground">
                  {t('maintenance.services.monitoring.desc')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{t('maintenance.services.monitoring.feat1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{t('maintenance.services.monitoring.feat2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{t('maintenance.services.monitoring.feat3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{t('maintenance.services.monitoring.feat4')}</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm font-semibold">{t('maintenance.services.monitoring.price')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover-lift">
              <CardHeader className="bg-accent text-accent-foreground">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Wrench className="w-6 h-6" />
                  {t('maintenance.services.checkup.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground">
                  {t('maintenance.services.checkup.desc')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.checkup.feat1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.checkup.feat2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.checkup.feat3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.checkup.feat4')}</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm font-semibold">{t('maintenance.services.checkup.price')}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover-lift">
              <CardHeader className="bg-cta text-cta-foreground">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Activity className="w-6 h-6" />
                  {t('maintenance.services.repair.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground">
                  {t('maintenance.services.repair.desc')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.repair.feat1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.repair.feat2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.repair.feat3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span>{t('maintenance.services.repair.feat4')}</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm font-semibold">{t('maintenance.services.repair.price')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AMC Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('maintenance.amc.title')} <span className="gradient-text">{t('maintenance.amc.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('maintenance.amc.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover-lift">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t('maintenance.packages.basic.title')}</CardTitle>
                <p className="text-3xl font-bold text-primary mt-2">{t('maintenance.packages.basic.price')}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground text-center mb-4">{t('maintenance.packages.basic.desc')}</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.basic.feat1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.basic.feat2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.basic.feat3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.basic.feat4')}</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/contact">{t('maintenance.packages.basic.btn')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary hover-lift relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                {t('maintenance.packages.standard.badge')}
              </div>
              <CardHeader className="text-center pt-6">
                <CardTitle className="text-2xl">{t('maintenance.packages.standard.title')}</CardTitle>
                <p className="text-3xl font-bold text-primary mt-2">{t('maintenance.packages.standard.price')}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground text-center mb-4">{t('maintenance.packages.standard.desc')}</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.standard.feat1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.standard.feat2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.standard.feat3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.standard.feat4')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.standard.feat5')}</span>
                  </li>
                </ul>
                <Button variant="cta" className="w-full mt-4" asChild>
                  <Link to="/contact">{t('maintenance.packages.standard.btn')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover-lift">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t('maintenance.packages.premium.title')}</CardTitle>
                <p className="text-3xl font-bold text-primary mt-2">{t('maintenance.packages.premium.price')}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground text-center mb-4">{t('maintenance.packages.premium.desc')}</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.premium.feat1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.premium.feat2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.premium.feat3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.premium.feat4')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.premium.feat5')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">✓</span>
                    <span className="text-sm">{t('maintenance.packages.premium.feat6')}</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/contact">{t('maintenance.packages.premium.btn')}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Request Form CTA */}
      <section className="py-20 bg-gradient-solar">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wrench className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('maintenance.cta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t('maintenance.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">
                {t('maintenance.cta.btn')} <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contact">{t('maintenance.cta.phone')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maintenance;
