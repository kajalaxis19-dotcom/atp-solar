import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-solar rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text hidden sm:block">
                ATP Infratech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-foreground/80"
                }`}
              >
                {t('nav.home')}
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      {t('nav.services')}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-popover border border-border shadow-lg p-4 min-w-[300px]">
                      <div className="grid gap-2">
                        <Link
                          to="/services"
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-semibold text-sm text-foreground">{t('nav.allServices')}</div>
                          <div className="text-xs text-muted-foreground">{t('nav.allServicesDesc')}</div>
                        </Link>
                        <Link
                          to="/services/residential"
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-semibold text-sm text-foreground">{t('nav.residential')}</div>
                          <div className="text-xs text-muted-foreground">{t('nav.residentialDesc')}</div>
                        </Link>
                        <Link
                          to="/services/commercial"
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-semibold text-sm text-foreground">{t('nav.commercial')}</div>
                          <div className="text-xs text-muted-foreground">{t('nav.commercialDesc')}</div>
                        </Link>
                        <Link
                          to="/services/maintenance"
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-semibold text-sm text-foreground">{t('nav.maintenance')}</div>
                          <div className="text-xs text-muted-foreground">{t('nav.maintenanceDesc')}</div>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                      {t('nav.resources')}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-popover border border-border shadow-lg p-4 min-w-[300px]">
                      <div className="grid gap-2">
                        <Link
                          to="/calculator"
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-semibold text-sm text-foreground">{t('nav.calculator') || 'Solar Calculator'}</div>
                          <div className="text-xs text-muted-foreground">{t('nav.calculatorDesc') || 'Calculate your savings'}</div>
                        </Link>
                        <Link
                          to="/financing"
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-semibold text-sm text-foreground">{t('nav.financing')}</div>
                          <div className="text-xs text-muted-foreground">{t('nav.financingDesc')}</div>
                        </Link>
                        <Link
                          to="/pm-subsidy"
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-semibold text-sm text-foreground bg-accent/10 border border-accent/30">
                            {t('nav.pmSubsidy')}
                          </div>
                          <div className="text-xs text-muted-foreground">{t('nav.pmSubsidyDesc')}</div>
                        </Link>
                        <Link
                          to="/products"
                          className="block p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="font-semibold text-sm text-foreground">{t('nav.products')}</div>
                          <div className="text-xs text-muted-foreground">{t('nav.productsDesc')}</div>
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                to="/about"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-foreground/80"
                }`}
              >
                {t('nav.about')}
              </Link>

              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-primary" : "text-foreground/80"
                }`}
              >
                {t('nav.contact')}
              </Link>

              <LanguageSwitcher />

              <Button variant="cta" size="sm" asChild>
                <Link to="/contact">{t('nav.getQuote')}</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <div className="space-y-2">
                <div className="py-2 text-sm font-medium text-foreground/80">{t('nav.services')}</div>
                <Link
                  to="/services"
                  className="block pl-4 py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.allServices')}
                </Link>
                <Link
                  to="/services/residential"
                  className="block pl-4 py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.residential')}
                </Link>
                <Link
                  to="/services/commercial"
                  className="block pl-4 py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.commercial')}
                </Link>
                <Link
                  to="/services/maintenance"
                  className="block pl-4 py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.maintenance')}
                </Link>
              </div>
              <div className="space-y-2">
                <div className="py-2 text-sm font-medium text-foreground/80">{t('nav.resources')}</div>
                <Link
                  to="/calculator"
                  className="block pl-4 py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.calculator') || 'Solar Calculator'}
                </Link>
                <Link
                  to="/financing"
                  className="block pl-4 py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.financing')}
                </Link>
                <Link
                  to="/pm-subsidy"
                  className="block pl-4 py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.pmSubsidy')}
                </Link>
                <Link
                  to="/products"
                  className="block pl-4 py-1 text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.products')}
                </Link>
              </div>
              <Link
                to="/about"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Button variant="cta" size="sm" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  {t('nav.getQuote')}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
