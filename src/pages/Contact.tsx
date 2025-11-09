import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import customerConsultation from "@/assets/customer-consultation.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

const Contact = () => {
  const { t } = useLanguage();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Residential Solar Installation",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just show the confirmation popup
    setShowConfirmation(true);
    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "Residential Solar Installation",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Images */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 hidden lg:block">
          <img src={customerConsultation} alt="" className="w-full h-full object-cover animate-[float_8s_ease-in-out_infinite]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Send className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">{t('contact.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('contact.hero.title')} <span className="gradient-text">{t('contact.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-solar rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
            <h2 className="text-3xl font-bold mb-2 relative">{t('contact.form.title')}</h2>
            <p className="text-muted-foreground mb-8 relative">{t('contact.form.subtitle')}</p>
            <form className="space-y-6 relative" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-foreground">{t('contact.form.name')} *</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="border-2 focus:border-primary transition-colors" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-foreground">{t('contact.form.phone')} *</label>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210" 
                    type="tel" 
                    className="border-2 focus:border-primary transition-colors" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">{t('contact.form.email')} *</label>
                <Input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  type="email" 
                  className="border-2 focus:border-primary transition-colors" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">{t('contact.form.service')} *</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border-2 border-input bg-background focus:border-primary transition-colors"
                  required
                >
                  <option>Residential Solar Installation</option>
                  <option>Commercial Solar Solution</option>
                  <option>Maintenance & Support</option>
                  <option>PM Subsidy Consultation</option>
                  <option>Financing Options</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">{t('contact.form.message')} *</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your solar requirements, roof size, current electricity bill, etc..." 
                  rows={5} 
                  className="border-2 focus:border-primary transition-colors" 
                  required
                />
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full group">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                {t('contact.form.submit')}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                {t('contact.form.privacy')}
              </p>
            </form>
          </div>

          {/* Contact Information with Image */}
          <div className="space-y-8">
            {/* Image Card */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img 
                src={teamCollaboration} 
                alt="Our Team" 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{t('contact.experts.title')}</h3>
                  <p className="text-white/90">{t('contact.experts.subtitle')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                  <div className="w-14 h-14 bg-gradient-solar rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-glow transition-all">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">{t('contact.info.address')}</h4>
                    <p className="text-muted-foreground">K-2, DLF Phase 2, Sector 25,<br />Gurugram, Sarhol, Haryana 122002</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">{t('contact.info.phone')}</h4>
                    <p className="text-muted-foreground">+91 73806 07555</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-cta rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">{t('contact.info.email')}</h4>
                    <p className="text-muted-foreground">info@atpinfratech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">{t('contact.info.hours')}</h4>
                    <p className="text-muted-foreground">{t('contact.info.hoursValue')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-solar text-white p-8 rounded-2xl shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <h3 className="text-2xl font-bold mb-6 relative">{t('contact.why.title')}</h3>
              <ul className="space-y-4 relative">
                <li className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg">{t('contact.why.point1')}</span>
                </li>
                <li className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg">{t('contact.why.point2')}</span>
                </li>
                <li className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg">{t('contact.why.point3')}</span>
                </li>
                <li className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg">{t('contact.why.point4')}</span>
                </li>
                <li className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg">{t('contact.why.point5')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <AlertDialogTitle className="text-2xl text-center">
              {t('contact.confirmation.title')}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base">
              {t('contact.confirmation.message')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center">
            <Button 
              variant="cta" 
              onClick={() => setShowConfirmation(false)}
              className="w-full sm:w-auto px-8"
            >
              {t('contact.confirmation.button')}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default Contact;
