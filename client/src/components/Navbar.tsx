import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = {
    ar: [
      { label: "الرئيسية", href: "#home" },
      { label: "عني", href: "#about" },
      { label: "المهارات", href: "#skills" },
      { label: "المشاريع", href: "#projects" },
      { label: "التواصل", href: "#contact" },
    ],
    en: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-sm"
    >
      <div className="container flex h-[4.25rem] items-center justify-between">
        <a href="#home" className="text-2xl font-semibold tracking-tight text-foreground">
          K<span className="text-[#477B78]">.</span>A
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems[language].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#477B78]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
            className="min-w-11 rounded-md border border-border px-3 py-2 text-xs font-semibold text-[#477B78] transition-colors hover:border-[#477B78]"
            aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            {language === "ar" ? "EN" : "عربي"}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="container flex flex-col gap-1 py-3">
              {navItems[language].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 text-sm text-muted-foreground transition-colors hover:text-[#477B78]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
