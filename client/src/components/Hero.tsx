import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github, Instagram, Twitter, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { language } = useLanguage();
  const data = portfolioData.personal[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-20 relative overflow-hidden"
    >
      {/* IMPROVED BACKGROUND - Larger and more visible */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient orbs - larger and more prominent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1]/15 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22D3EE]/15 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Grid background for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[50px_50px] opacity-50" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12"
      >
        {/* IMPROVED GRID - Better spacing for large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.3fr] gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT CONTENT - Text and buttons */}
          <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
            
            {/* Text Group */}
            <motion.div variants={itemVariants} className="space-y-4 lg:space-y-6">
              {/* Welcome text */}
              <motion.p
                className="text-sm lg:text-base text-[#22D3EE] font-semibold tracking-widest uppercase"
                variants={itemVariants}
              >
                {language === "ar" ? "أهلاً بك في موقعي" : "Welcome to my portfolio"}
              </motion.p>

              {/* Main Title - Larger on big screens */}
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight tracking-tight"
                variants={itemVariants}
              >
                {data.name}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-2xl sm:text-3xl lg:text-4xl text-[#6366F1] font-semibold"
                variants={itemVariants}
              >
                {data.title}
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                {data.subtitle}
              </motion.p>
            </motion.div>

            {/* CTA Buttons - Larger and better spaced */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, x: language === "ar" ? -8 : 8 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 lg:px-10 py-4 lg:py-5 bg-[#6366F1] text-white rounded-lg font-semibold hover:bg-[#6366F1]/90 transition-all group cursor-pointer text-lg lg:text-xl"
              >
                {language === "ar" ? "عرض المشاريع" : "View Projects"}
                <ArrowRight className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1 ${language === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </motion.a>

              <motion.a
                href={data.cv}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 lg:px-10 py-4 lg:py-5 border-2 border-[#22D3EE] text-[#22D3EE] rounded-lg font-semibold hover:bg-[#22D3EE]/10 transition-all text-lg lg:text-xl"
              >
                <Download className="w-5 h-5 lg:w-6 lg:h-6" />
                {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
              </motion.a>
            </motion.div>

            {/* Social Links - Larger icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 lg:gap-5 pt-6 lg:pt-8"
            >
              {[
                { href: data.linkedin, icon: Linkedin, color: "text-[#6366F1]", bg: "bg-[#6366F1]/10", hover: "hover:bg-[#6366F1]/20" },
                { href: data.github, icon: Github, color: "text-[#22D3EE]", bg: "bg-[#22D3EE]/10", hover: "hover:bg-[#22D3EE]/20" },
                { href: data.instagram, icon: Instagram, color: "text-[#6366F1]", bg: "bg-[#6366F1]/10", hover: "hover:bg-[#6366F1]/20" },
                { href: data.x, icon: Twitter, color: "text-[#22D3EE]", bg: "bg-[#22D3EE]/10", hover: "hover:bg-[#22D3EE]/20" },
                { href: data.telegram, icon: Send, color: "text-[#6366F1]", bg: "bg-[#6366F1]/10", hover: "hover:bg-[#6366F1]/20" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${social.bg} ${social.color} ${social.hover} hover:shadow-lg`}
                >
                  <social.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT VISUAL - Avatar with rings and animations */}
          <motion.div
            variants={itemVariants}
            className="relative w-full h-96 sm:h-[28rem] lg:h-[32rem] xl:h-[40rem] order-1 lg:order-2 flex items-center justify-center"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] via-[#020617] to-[#22D3EE] opacity-20 rounded-3xl" />
            <div className="absolute inset-0 backdrop-blur-3xl rounded-3xl" />

            {/* Main avatar with floating animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Avatar circle - Larger on big screens */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-br from-[#6366F1] to-[#22D3EE] shadow-2xl relative z-10">
                <img 
                  src="/Profil.png" 
                  alt="Khaled Amin" 
                  className="w-full h-full object-cover rounded-full bg-background"
                />
              </div>
            </motion.div>

            {/* Rotating rings - Larger and more visible */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-[#6366F1]/30 rounded-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border-2 border-[#22D3EE]/20 rounded-3xl"
            />
            
            {/* Additional decorative rings for large screens */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="hidden lg:block absolute inset-16 border border-[#6366F1]/10 rounded-3xl"
            />
          </motion.div>

        </div>
      </motion.div>

      {/* SCROLL INDICATOR - Improved visibility */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-7 h-12 border-2 border-[#6366F1]/60 rounded-full flex items-start justify-center p-2.5 hover:border-[#6366F1] transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-1.5 h-2.5 bg-[#6366F1] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
            }
