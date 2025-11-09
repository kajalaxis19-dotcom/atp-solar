import { Link } from "react-router-dom";
import { ArrowRight, Sun, Shield, Zap, TrendingDown, Leaf, Home as HomeIcon, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import NotificationBar from "@/components/NotificationBar";
import SubsidyPopup from "@/components/SubsidyPopup";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";
import heroHome from "@/assets/hero-home.jpg";
import residentialHero from "@/assets/residential-hero.jpg";
import commercialHero from "@/assets/hero-commercial.jpg";
import maintenanceTeam from "@/assets/maintenance-team.jpg";
import governmentScheme from "@/assets/government-scheme.jpg";
import savingsBenefits from "@/assets/savings-benefits.jpg";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <NotificationBar />
      <Navbar />
      <SubsidyPopup />

      {/* Hero Section with Better Image */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroHome}
            alt="Solar panels installation"
            className="w-full h-full object-cover animate-[scale_20s_ease-in-out_infinite]"
            style={{ animationDirection: 'alternate' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              {t('home.hero.title')}
              <span className="block text-accent mt-2">{t('home.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button variant="cta" size="lg" asChild className="group">
                <Link to="/contact">
                  {t('home.hero.cta1')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm">
                <Link to="/pm-subsidy">{t('home.hero.cta2')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Solar - Animated Cards with Images */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.whyChoose.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('home.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.whyChoose.saveMoney')}</h3>
                <p className="text-muted-foreground">{t('home.whyChoose.saveMoneyDesc')}</p>
              </CardContent>
            </Card>

            <Card className="hover:-translate-y-2 transition-all duration-300 border-2 hover:border-secondary hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.whyChoose.govSubsidy')}</h3>
                <p className="text-muted-foreground">{t('home.whyChoose.govSubsidyDesc')}</p>
              </CardContent>
            </Card>

            <Card className="hover:-translate-y-2 transition-all duration-300 border-2 hover:border-accent hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-cta rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.whyChoose.ecoFriendly')}</h3>
                <p className="text-muted-foreground">{t('home.whyChoose.ecoFriendlyDesc')}</p>
              </CardContent>
            </Card>

            <Card className="hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.whyChoose.increaseValue')}</h3>
                <p className="text-muted-foreground">{t('home.whyChoose.increaseValueDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Solutions with Sliding Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.solutions.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0">
                <img 
                  src={residentialHero} 
                  alt="Residential Solar" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>
              <div className="relative p-8 min-h-[400px] flex flex-col justify-end text-white">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('home.solutions.residential')}</h3>
                <p className="text-white/90 mb-4">{t('home.solutions.residentialDesc')}</p>
                <Button variant="secondary" asChild className="group/btn">
                  <Link to="/services/residential">
                    {t('home.solutions.learnMore')} <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Commercial */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0">
                <img 
                  src={commercialHero} 
                  alt="Commercial Solar" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>
              <div className="relative p-8 min-h-[400px] flex flex-col justify-end text-white">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('home.solutions.commercial')}</h3>
                <p className="text-white/90 mb-4">{t('home.solutions.commercialDesc')}</p>
                <Button variant="secondary" asChild className="group/btn">
                  <Link to="/services/commercial">
                    {t('home.solutions.learnMore')} <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Maintenance */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0">
                <img 
                  src={maintenanceTeam} 
                  alt="Maintenance" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>
              <div className="relative p-8 min-h-[400px] flex flex-col justify-end text-white">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('home.solutions.maintenance')}</h3>
                <p className="text-white/90 mb-4">{t('home.solutions.maintenanceDesc')}</p>
                <Button variant="secondary" asChild className="group/btn">
                  <Link to="/services/maintenance">
                    {t('home.solutions.learnMore')} <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PM Subsidy CTA with Government Scheme Image */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={governmentScheme} 
            alt="Government Scheme" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-accent/10 to-cta/10 rounded-3xl p-8 md:p-12 border-2 border-accent/20 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 mb-6">
                  <Sun className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">{t('home.subsidy.badge')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {t('home.subsidy.title')} <span className="gradient-text">{t('home.subsidy.titleHighlight')}</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('home.subsidy.desc')}
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t('home.subsidy.point1')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t('home.subsidy.point2')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{t('home.subsidy.point3')}</span>
                  </div>
                </div>
                <Button variant="cta" size="lg" asChild>
                  <Link to="/pm-subsidy">{t('home.subsidy.cta')} <ArrowRight className="ml-2" /></Link>
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={savingsBenefits} 
                  alt="Savings Benefits" 
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-solar text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('home.cta.subtitle')}
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-2xl hover:shadow-3xl">
            <Link to="/contact">{t('home.cta.button')}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
