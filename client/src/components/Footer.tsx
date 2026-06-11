import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-background border-t border-border"
    >
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#6366F1] to-[#22D3EE] bg-clip-text text-transparent mb-2">
              K.A Portfolio
            </h3>
            <p className="text-sm text-foreground/70">
              {language === "ar"
                ? "مطور ويب وطالب ذكاء اصطناعي"
                : "Web Developer & AI Student"}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">
              {language === "ar" ? "الروابط السريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              {[
                { label: language === "ar" ? "الرئيسية" : "Home", href: "#home" },
                { label: language === "ar" ? "عني" : "About", href: "#about" },
                {
                  label: language === "ar" ? "المشاريع" : "Projects",
                  href: "#projects",
                },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-[#6366F1] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">
              {language === "ar" ? "التواصل" : "Contact"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:khwyld.a.alsharabi@gmail.com"
                  className="text-sm text-foreground/70 hover:text-[#6366F1] transition-colors"
                >
                  khwyld.a.alsharabi@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+967735452441"
                  className="text-sm text-foreground/70 hover:text-[#6366F1] transition-colors"
                >
                  +967 735452441
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between text-sm text-foreground/70"
        >
          <p>
            {language === "ar"
              ? `© ${currentYear} خالد أمين. جميع الحقوق محفوظة.`
              : `© ${currentYear} Khaled Ameen. All rights reserved.`}
          </p>
          <p className="mt-4 md:mt-0">
            {language === "ar"
              ? "مصنوع بـ React و Tailwind CSS"
              : "Built with React & Tailwind CSS"}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
