import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import popupHero from "@/assets/popup-hero.jpg";

const SubsidyPopup = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("subsidyPopupSeen");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("subsidyPopupSeen", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            {t('popup.title')}
          </DialogTitle>
          <DialogDescription className="text-base">
            {t('popup.subtitle')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src={popupHero} 
              alt="Solar Subsidy Benefits" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">{t('popup.benefits')}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>{t('popup.point1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>{t('popup.point2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>{t('popup.point3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">✓</span>
                <span>{t('popup.point4')}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" className="flex-1" asChild>
              <Link to="/pm-subsidy">{t('popup.cta1')}</Link>
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <Link to="/financing">{t('popup.cta2')}</Link>
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            {t('popup.note')}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubsidyPopup;
