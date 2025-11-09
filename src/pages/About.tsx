import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Zap, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import companyBuilding from "@/assets/company-building.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import residentialHero from "@/assets/residential-hero.jpg";

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - Unique Parallax Design */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="absolute inset-0">
          <img 
            src={companyBuilding} 
            alt="ATP Infratech Building" 
            className="w-full h-full object-cover opacity-20 animate-[scale_20s_ease-in-out_infinite]"
            style={{ animationDirection: 'alternate' }}
            loading="eager"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm font-semibold text-primary">{t('about.hero.badge')}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('about.hero.title')} <span className="gradient-text">{t('about.hero.titleHighlight')}</span> {t('about.hero.titleEnd')}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t('about.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">{t('about.hero.cta1')}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">{t('about.hero.cta2')}</Link>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-solar rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-all"></div>
              <img 
                src={teamCollaboration} 
                alt="Our Team" 
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-white/10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Numbers */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "8+", label: t('about.stats.experience'), icon: Award },
              { number: "10,000+", label: t('about.stats.customers'), icon: Users },
              { number: "50 MW+", label: t('about.stats.power'), icon: Zap },
              { number: "98%", label: t('about.stats.satisfaction'), icon: TrendingUp },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center space-y-2 hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-solar text-white shadow-glow mb-3">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision with Flip Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">{t('about.purpose.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.purpose.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group perspective-1000">
              <div className="relative preserve-3d transition-transform duration-700 hover:rotate-y-180">
                <div className="backface-hidden bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 shadow-2xl text-white min-h-[300px] flex flex-col justify-center">
                  <Target className="w-16 h-16 mb-4" />
                  <h3 className="text-3xl font-bold mb-4">{t('about.mission.title')}</h3>
                  <p className="text-lg opacity-90">{t('about.mission.desc')}</p>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl border-2 border-primary min-h-[300px] flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4 text-primary">{t('about.mission.deliver')}</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('about.mission.point1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('about.mission.point2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{t('about.mission.point3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group perspective-1000">
              <div className="relative preserve-3d transition-transform duration-700 hover:rotate-y-180">
                <div className="backface-hidden bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-8 shadow-2xl text-white min-h-[300px] flex flex-col justify-center">
                  <Zap className="w-16 h-16 mb-4" />
                  <h3 className="text-3xl font-bold mb-4">{t('about.vision.title')}</h3>
                  <p className="text-lg opacity-90">{t('about.vision.desc')}</p>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl border-2 border-secondary min-h-[300px] flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4 text-secondary">{t('about.vision.goals')}</h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{t('about.vision.goal1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{t('about.vision.goal2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{t('about.vision.goal3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Sliding Image Gallery */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('about.why.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('about.why.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t('about.why.feature1.title'),
                description: t('about.why.feature1.desc'),
                image: residentialHero
              },
              {
                icon: Users,
                title: t('about.why.feature2.title'),
                description: t('about.why.feature2.desc'),
                image: teamCollaboration
              },
              {
                icon: Shield,
                title: t('about.why.feature3.title'),
                description: t('about.why.feature3.desc'),
                image: companyBuilding
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                </div>
                <div className="relative p-8 min-h-[350px] flex flex-col justify-end text-white">
                  <feature.icon className="w-12 h-12 mb-4 transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('about.cta.subtitle')}
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-xl hover:shadow-2xl">
            <Link to="/contact">{t('about.cta.btn')}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
