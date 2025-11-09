import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calculator, Sun, TrendingDown, Zap, Leaf, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolarCalculator = () => {
  const { t } = useLanguage();
  const [monthlyBill, setMonthlyBill] = useState("");
  const [roofArea, setRoofArea] = useState("");
  const [systemType, setSystemType] = useState("hybrid");
  const [showResults, setShowResults] = useState(false);

  const calculateSavings = () => {
    if (monthlyBill && roofArea) {
      setShowResults(true);
    }
  };

  // Calculations based on monthly bill
  const bill = parseFloat(monthlyBill) || 0;
  const systemSize = Math.ceil(bill / 1000); // Rough estimate: 1kW per ₹1000 bill
  
  // Pricing: 1KW=₹30,000, 2-3KW=₹60,000, 3KW+=₹108,000
  let totalCost = 0;
  if (systemSize === 1) {
    totalCost = 30000;
  } else if (systemSize === 2 || systemSize === 3) {
    totalCost = 60000;
  } else {
    totalCost = 108000;
  }

  // Subsidy calculation
  let subsidy = 0;
  if (systemSize === 1) {
    subsidy = 30000;
  } else if (systemSize === 2 || systemSize === 3) {
    subsidy = 60000;
  } else {
    subsidy = 108000;
  }

  const finalCost = totalCost - subsidy;
  const monthlySavings = bill * 0.8; // 80% savings
  const yearlySavings = monthlySavings * 12;
  const paybackYears = Math.ceil(finalCost / yearlySavings);
  const lifetimeSavings = yearlySavings * 25;
  const co2Reduction = systemSize * 1.5; // Tons per year

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
              <Calculator className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent">{t('calculator.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('calculator.hero.title')} <span className="gradient-text">{t('calculator.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('calculator.hero.subtitle')}
            </p>
          </div>

          {/* Calculator Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Sun className="w-7 h-7 text-primary" />
                  {t('calculator.form.title')}
                </h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyBill">{t('calculator.form.monthlyBill')}</Label>
                    <Input
                      id="monthlyBill"
                      type="number"
                      placeholder="e.g., 5000"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="roofArea">{t('calculator.form.roofArea')}</Label>
                    <Input
                      id="roofArea"
                      type="number"
                      placeholder="e.g., 500"
                      value={roofArea}
                      onChange={(e) => setRoofArea(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="systemType">{t('calculator.form.systemType')}</Label>
                    <Select value={systemType} onValueChange={setSystemType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="onGrid">{t('calculator.form.systemType.onGrid')}</SelectItem>
                        <SelectItem value="hybrid">{t('calculator.form.systemType.hybrid')}</SelectItem>
                        <SelectItem value="offGrid">{t('calculator.form.systemType.offGrid')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    onClick={calculateSavings}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    {t('calculator.form.calculate')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 gradient-text">
                {t('calculator.results.title')}
              </h2>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Sun className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{t('calculator.results.systemSize')}</p>
                  <p className="text-3xl font-bold">{systemSize} kW</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <TrendingDown className="w-10 h-10 text-secondary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{t('calculator.results.subsidy')}</p>
                  <p className="text-3xl font-bold text-secondary">₹{subsidy.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Zap className="w-10 h-10 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{t('calculator.results.finalCost')}</p>
                  <p className="text-3xl font-bold text-accent">₹{finalCost.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Leaf className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{t('calculator.results.payback')}</p>
                  <p className="text-3xl font-bold">{paybackYears} {t('calculator.hero.badge').includes('Years') ? 'Years' : 'वर्ष'}</p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Cost Breakdown</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">{t('calculator.results.totalCost')}</span>
                      <span className="font-bold text-lg">₹{totalCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b text-green-600">
                      <span>{t('calculator.results.subsidy')}</span>
                      <span className="font-bold text-lg">- ₹{subsidy.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 bg-primary/5 px-4 rounded-lg">
                      <span className="font-bold">{t('calculator.results.finalCost')}</span>
                      <span className="font-bold text-2xl text-primary">₹{finalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Savings Projection</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">{t('calculator.results.monthlySavings')}</span>
                      <span className="font-bold text-lg">₹{Math.round(monthlySavings).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                      <span className="text-muted-foreground">{t('calculator.results.yearlySavings')}</span>
                      <span className="font-bold text-lg">₹{Math.round(yearlySavings).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 bg-secondary/5 px-4 rounded-lg">
                      <span className="font-bold">{t('calculator.results.lifetimeSavings')}</span>
                      <span className="font-bold text-2xl text-secondary">₹{Math.round(lifetimeSavings).toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Environmental Impact */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{t('calculator.results.co2Reduction')}</h3>
                  <p className="text-4xl font-bold text-green-600 mb-2">{co2Reduction.toFixed(1)} tons/year</p>
                  <p className="text-muted-foreground">Equivalent to planting {Math.round(co2Reduction * 50)} trees annually</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('calculator.benefits.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-start gap-3 bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition-all">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{t(`calculator.benefits.point${i}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-solar text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('calculator.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('calculator.cta.subtitle')}
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-2xl">
            <Link to="/contact">
              {t('calculator.cta.button')} <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarCalculator;
