import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const NotificationBar = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    {
      text: t('notification.subsidy'),
      link: "/pm-subsidy",
      icon: Gift,
    },
    {
      text: t('notification.financing'),
      link: "/financing",
      icon: Gift,
    },
    {
      text: t('notification.scheme'),
      link: "/pm-subsidy",
      icon: Gift,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const MessageIcon = messages[currentMessage].icon;

  return (
    <div className="bg-gradient-energy text-foreground py-3 px-4 slide-down relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 relative z-10">
        <MessageIcon className="w-5 h-5 animate-float" />
        <Link
          to={messages[currentMessage].link}
          className="text-sm md:text-base font-semibold hover:underline transition-all"
        >
          {messages[currentMessage].text}
        </Link>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-black/10 rounded-full transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default NotificationBar;
