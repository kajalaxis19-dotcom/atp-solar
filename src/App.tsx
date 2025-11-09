import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ResidentialService from "./pages/ResidentialService";
import CommercialService from "./pages/CommercialService";
import Products from "./pages/Products";
import PMSubsidy from "./pages/PMSubsidy";
import Financing from "./pages/Financing";
import Maintenance from "./pages/Maintenance";
import Contact from "./pages/Contact";
import SolarCalculator from "./pages/SolarCalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential" element={<ResidentialService />} />
          <Route path="/services/commercial" element={<CommercialService />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pm-subsidy" element={<PMSubsidy />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<SolarCalculator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
