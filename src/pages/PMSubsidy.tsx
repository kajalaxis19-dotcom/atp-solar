import { Link } from "react-router-dom";
import { ArrowRight, Gift, CheckCircle, FileText, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import subsidyHero from "@/assets/subsidy-hero.jpg";

const PMSubsidy = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Diagonal Split Layout for PM Subsidy */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent via-cta to-secondary"></div>
        
        {/* Diagonal image overlay */}
        <div className="absolute inset-0" style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }}>
          <img
            src={subsidyHero}
            alt="PM Solar Subsidy"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-[600px]">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 animate-pulse-glow">
              <Gift className="w-6 h-6 text-white" />
              <span className="text-base font-bold text-white">{t('subsidy.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t('subsidy.hero.title')}
              <span className="block mt-3">
                <span className="bg-white text-accent px-6 py-2 inline-block rounded-xl shadow-glow">{t('subsidy.hero.titleHighlight')}</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-4 font-light">
              {t('subsidy.hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              {t('subsidy.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  {t('subsidy.hero.cta1')} <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10" asChild>
                <Link to="/financing">
                  {t('subsidy.hero.cta2')}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-8 right-8 hidden lg:flex gap-4">
          <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl text-white animate-float">
            <div className="text-3xl font-bold">60%</div>
            <div className="text-sm">{t('subsidy.hero.stat1')}</div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl text-white animate-float" style={{ animationDelay: "1s" }}>
            <div className="text-3xl font-bold">₹1.08L</div>
            <div className="text-sm">{t('subsidy.hero.stat2')}</div>
          </div>
        </div>
      </section>

      {/* Subsidy Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">{t('subsidy.benefits.title')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subsidy.benefits.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover-lift border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>{t('subsidy.benefits.card1.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('subsidy.benefits.card1.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>{t('subsidy.benefits.card2.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('subsidy.benefits.card2.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>{t('subsidy.benefits.card3.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('subsidy.benefits.card3.desc')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Subsidy Breakdown Table */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-2xl">{t('subsidy.table.title')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">{t('subsidy.table.capacity')}</th>
                      <th className="px-6 py-4 text-left font-semibold">{t('subsidy.table.rate')}</th>
                      <th className="px-6 py-4 text-left font-semibold">{t('subsidy.table.max')}</th>
                      <th className="px-6 py-4 text-left font-semibold">{t('subsidy.table.investment')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">1 kW</td>
                      <td className="px-6 py-4">₹60,000/kW</td>
                      <td className="px-6 py-4 text-secondary font-semibold">₹60,000</td>
                      <td className="px-6 py-4">~₹90,000</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">2 kW</td>
                      <td className="px-6 py-4">₹90,000/kW</td>
                      <td className="px-6 py-4 text-secondary font-semibold">₹90,000</td>
                      <td className="px-6 py-4">~₹1,20,000</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors bg-accent/5">
                      <td className="px-6 py-4 font-medium">3 kW ({t('subsidy.table.popular')})</td>
                      <td className="px-6 py-4">₹1,08,000/kW (avg)</td>
                      <td className="px-6 py-4 text-secondary font-semibold">₹1,08,000</td>
                      <td className="px-6 py-4">~₹1,80,000</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">4 kW</td>
                      <td className="px-6 py-4">₹1,08,000/kW (avg)</td>
                      <td className="px-6 py-4 text-secondary font-semibold">₹1,08,000</td>
                      <td className="px-6 py-4">~₹2,40,000</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">5 kW & above</td>
                      <td className="px-6 py-4">₹1,08,000/kW (avg)</td>
                      <td className="px-6 py-4 text-secondary font-semibold">₹1,08,000</td>
                      <td className="px-6 py-4">~₹3,00,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-accent/10 border border-accent/30 rounded-xl">
            <p className="text-sm text-foreground">
              <strong>Note:</strong> {t('subsidy.table.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('subsidy.eligibility.title')} <span className="gradient-text">{t('subsidy.eligibility.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  {t('subsidy.eligibility.whocan.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{t('subsidy.eligibility.whocan.point1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{t('subsidy.eligibility.whocan.point2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{t('subsidy.eligibility.whocan.point3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{t('subsidy.eligibility.whocan.point4')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  {t('subsidy.eligibility.docs.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('subsidy.eligibility.docs.point1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('subsidy.eligibility.docs.point2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('subsidy.eligibility.docs.point3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('subsidy.eligibility.docs.point4')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t('subsidy.eligibility.docs.point5')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('subsidy.apply.title')} <span className="gradient-text">{t('subsidy.apply.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subsidy.apply.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: 1, title: t('subsidy.apply.step1.title'), desc: t('subsidy.apply.step1.desc') },
              { step: 2, title: t('subsidy.apply.step2.title'), desc: t('subsidy.apply.step2.desc') },
              { step: 3, title: t('subsidy.apply.step3.title'), desc: t('subsidy.apply.step3.desc') },
              { step: 4, title: t('subsidy.apply.step4.title'), desc: t('subsidy.apply.step4.desc') },
              { step: 5, title: t('subsidy.apply.step5.title'), desc: t('subsidy.apply.step5.desc') },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-glow">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                {t('subsidy.apply.cta')} <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              {t('subsidy.apply.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Combined Benefits */}
      <section className="py-20 bg-gradient-energy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('subsidy.combine.title')}
            </h2>
            <p className="text-lg text-foreground/90 mb-8 max-w-2xl mx-auto">
              {t('subsidy.combine.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/financing">
                  {t('subsidy.combine.cta1')} <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-white">
                <Link to="/contact">{t('subsidy.combine.cta2')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PMSubsidy;
