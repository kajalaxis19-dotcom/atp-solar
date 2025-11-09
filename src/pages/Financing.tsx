import { Link } from "react-router-dom";
import { ArrowRight, CreditCard, TrendingDown, Calculator, CheckCircle, Building2, Gift, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import financingHero from "@/assets/financing-hero.jpg";
import residentialHero from "@/assets/residential-hero.jpg";
import subsidyHero from "@/assets/subsidy-hero.jpg";

const Financing = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Unique Multi-Image Layout for Financing */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        {/* Floating animated images */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full overflow-hidden animate-float">
            <img src={financingHero} alt="Solar panels" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-xl overflow-hidden animate-float" style={{ animationDelay: "1s" }}>
            <img src={residentialHero} alt="Home solar" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-lg overflow-hidden animate-float" style={{ animationDelay: "2s" }}>
            <img src={subsidyHero} alt="Solar benefits" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 animate-pulse-glow">
            <CreditCard className="w-6 h-6 text-white" />
            <span className="text-base font-bold text-white">Zero Down Payment • Easy EMIs</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            {t('financing.hero.title')}
            <span className="block mt-3 bg-white text-primary px-6 py-2 inline-block rounded-xl shadow-glow">{t('financing.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl md:text-3xl text-white mb-10 max-w-4xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t('financing.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="cta" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Get Financing Quote <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white hover:bg-white/90 text-primary border-0" asChild>
              <Link to="/pm-subsidy">
                <Gift className="mr-2" /> View PM Subsidy
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PM Subsidy Promotion Banner */}
      <section className="py-4 bg-gradient-energy animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Gift className="w-10 h-10 text-white animate-float" />
              <div>
                <h3 className="text-xl font-bold text-white">{t('financing.banner.title')}</h3>
                <p className="text-white/90 text-sm">{t('financing.banner.subtitle')}</p>
              </div>
            </div>
            <Button variant="default" className="bg-white text-primary hover:bg-white/90 font-semibold" asChild>
              <Link to="/pm-subsidy">
                {t('financing.banner.cta')} <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Finance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('financing.benefits.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('financing.benefits.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>{t('financing.benefits.benefit1.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('financing.benefits.benefit1.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle>{t('financing.benefits.benefit2.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('financing.benefits.benefit2.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>{t('financing.benefits.benefit3.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('financing.benefits.benefit3.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('financing.partners.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('financing.partners.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover-lift">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl">{t('financing.partners.bank.title')}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t('financing.partners.bank.interest')}</p>
                    <p className="text-sm text-muted-foreground">{t('financing.partners.bank.interestDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t('financing.partners.bank.tenure')}</p>
                    <p className="text-sm text-muted-foreground">{t('financing.partners.bank.tenureDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t('financing.partners.bank.processingFee')}</p>
                    <p className="text-sm text-muted-foreground">{t('financing.partners.bank.processingFeeDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t('financing.partners.bank.partners')}</p>
                    <p className="text-sm text-muted-foreground">{t('financing.partners.bank.partnersDesc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover-lift">
              <CardHeader className="bg-secondary text-secondary-foreground">
                <CardTitle className="text-2xl">{t('financing.partners.nbfc.title')}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t('financing.partners.nbfc.interest')}</p>
                    <p className="text-sm text-muted-foreground">{t('financing.partners.nbfc.interestDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t('financing.partners.nbfc.tenure')}</p>
                    <p className="text-sm text-muted-foreground">{t('financing.partners.nbfc.tenureDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t('financing.partners.nbfc.documentation')}</p>
                    <p className="text-sm text-muted-foreground">{t('financing.partners.nbfc.documentationDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t('financing.partners.nbfc.partners')}</p>
                    <p className="text-sm text-muted-foreground">{t('financing.partners.nbfc.partnersDesc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EMI Calculator Example */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('financing.emi.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('financing.emi.subtitle')}
            </p>
          </div>

          <Card className="overflow-hidden max-w-5xl mx-auto">
            <CardHeader className="bg-gradient-solar text-white">
              <CardTitle className="text-2xl">{t('financing.emi.tableTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">{t('financing.emi.tenure')}</th>
                      <th className="px-6 py-4 text-left font-semibold">{t('financing.emi.systemCost')}</th>
                      <th className="px-6 py-4 text-left font-semibold">{t('financing.emi.afterSubsidy')}</th>
                      <th className="px-6 py-4 text-left font-semibold">{t('financing.emi.monthlyEmi')}</th>
                      <th className="px-6 py-4 text-left font-semibold">{t('financing.emi.savings')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{t('financing.emi.years3')}</td>
                      <td className="px-6 py-4">₹3,00,000</td>
                      <td className="px-6 py-4">₹1,08,000</td>
                      <td className="px-6 py-4 text-secondary font-semibold">₹5,500/mo</td>
                      <td className="px-6 py-4 text-accent font-semibold">₹4,500/mo</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors bg-primary/5">
                      <td className="px-6 py-4 font-medium">{t('financing.emi.years5')}</td>
                      <td className="px-6 py-4">₹3,00,000</td>
                      <td className="px-6 py-4">₹1,08,000</td>
                      <td className="px-6 py-4 text-secondary font-semibold">₹3,500/mo</td>
                      <td className="px-6 py-4 text-accent font-semibold">₹7,000/mo</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{t('financing.emi.years7')}</td>
                      <td className="px-6 py-4">₹3,00,000</td>
                      <td className="px-6 py-4">₹1,08,000</td>
                      <td className="px-6 py-4 text-secondary font-semibold">₹2,500/mo</td>
                      <td className="px-6 py-4 text-accent font-semibold">₹8,000/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-accent/10 border border-accent/30 rounded-xl max-w-5xl mx-auto">
            <p className="text-sm text-foreground">
              {t('financing.emi.example')}
            </p>
          </div>
        </div>
      </section>

      {/* PM Subsidy + Financing Benefits */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Gift className="w-16 h-16 text-accent mx-auto mb-4 animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('financing.combo.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('financing.combo.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover-lift text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-accent mx-auto mb-2" />
                <CardTitle>{t('financing.combo.subsidy.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('financing.combo.subsidy.desc')}
                </p>
                <Button variant="outline" asChild>
                  <Link to="/pm-subsidy">{t('financing.combo.subsidy.btn')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-secondary hover-lift text-center">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-secondary mx-auto mb-2" />
                <CardTitle>{t('financing.combo.interest.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('financing.combo.interest.desc')}
                </p>
                <Button variant="cta" asChild>
                  <Link to="/contact">{t('financing.combo.interest.btn')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover-lift text-center">
              <CardHeader>
                <TrendingDown className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>{t('financing.combo.lowestEmi.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('financing.combo.lowestEmi.desc')}
                </p>
                <Button variant="outline" asChild>
                  <Link to="/contact">{t('financing.combo.lowestEmi.btn')}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-accent/10 border-2 border-accent rounded-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Example: 3kW System</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span><strong>Total Cost:</strong> ₹3,00,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span><strong>PM Subsidy:</strong> -₹1,08,000 (60%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span><strong>Your Cost:</strong> ₹1,92,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span><strong>EMI (5 years):</strong> Only ₹3,500/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="font-bold text-accent">Your monthly savings: ₹7,000+ from day one!</span>
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">
                    Get Your Custom Quote <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-gradient-energy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('financing.comparison.title')}
              </h2>
              <div className="space-y-6">
                <div className="bg-white/90 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-destructive">{t('financing.comparison.without.title')}</h3>
                  <p className="text-3xl font-bold text-destructive mb-2">{t('financing.comparison.without.bill')}</p>
                  <p className="text-muted-foreground">{t('financing.comparison.without.current')}</p>
                  <p className="text-sm font-semibold mt-4">{t('financing.comparison.without.total')}</p>
                </div>
                <div className="bg-white/90 p-6 rounded-xl border-4 border-secondary">
                  <h3 className="text-xl font-bold mb-4 text-secondary">{t('financing.comparison.with.title')}</h3>
                  <p className="text-3xl font-bold text-secondary mb-2">{t('financing.comparison.with.emi')}</p>
                  <p className="text-muted-foreground">{t('financing.comparison.with.desc')}</p>
                  <p className="text-sm font-semibold mt-4 text-accent">{t('financing.comparison.with.total')}</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-4 border-secondary">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">{t('financing.comparison.totalSavings')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-5xl font-bold text-secondary mb-4">{t('financing.comparison.amount')}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>{t('financing.comparison.points.p1')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>{t('financing.comparison.points.p2')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>{t('financing.comparison.points.p3')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  {t('financing.comparison.points.btn')} <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('financing.process.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: t('financing.process.step1.number'), title: t('financing.process.step1.title'), desc: t('financing.process.step1.desc') },
              { step: t('financing.process.step2.number'), title: t('financing.process.step2.title'), desc: t('financing.process.step2.desc') },
              { step: t('financing.process.step3.number'), title: t('financing.process.step3.title'), desc: t('financing.process.step3.desc') },
              { step: t('financing.process.step4.number'), title: t('financing.process.step4.title'), desc: t('financing.process.step4.desc') },
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

          <div className="mt-12 text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  {t('financing.process.applyBtn')} <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pm-subsidy">{t('financing.process.subsidyBtn')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Financing;
