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
      className="min-h-screen flex items-center justify-center pt-28 pb-20 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#6366F1]/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#22D3EE]/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-7xl px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text Content - Spans 7 columns on large screens */}
          <div className="space-y-10 order-2 lg:order-1 lg:col-span-7 text-center lg:text-left rtl:lg:text-right">
            <motion.div variants={itemVariants} className="space-y-6">
             <motion.h1
  className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]"
  variants={itemVariants}
>
  <span className="text-foreground">
    {data.name}
  </span>
</motion.h1>

              <motion.p
                className="text-2xl md:text-3xl text-[#6366F1] font-bold tracking-wide"
                variants={itemVariants}
              >
                {data.title}
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                variants={itemVariants}
              >
                {data.subtitle}
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 pt-6 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, x: language === "ar" ? -5 : 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#6366F1] text-white rounded-2xl font-bold text-lg hover:bg-[#6366F1]/90 transition-all shadow-lg shadow-[#6366F1]/25 group cursor-pointer"
              >
                {language === "ar" ? "عرض المشاريع" : "View Projects"}
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${language === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </motion.a>

              

            {/* Social Links with enhanced styling */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5 pt-8 justify-center lg:justify-start"
            >
              {[
                { href: data.linkedin, icon: Linkedin, color: "text-[#6366F1]", bg: "bg-[#6366F1]/10", hover: "hover:bg-[#6366F1]/20 shadow-[#6366F1]/20" },
                { href: data.github, icon: Github, color: "text-[#22D3EE]", bg: "bg-[#22D3EE]/10", hover: "hover:bg-[#22D3EE]/20 shadow-[#22D3EE]/20" },
                { href: data.instagram, icon: Instagram, color: "text-[#6366F1]", bg: "bg-[#6366F1]/10", hover: "hover:bg-[#6366F1]/20 shadow-[#6366F1]/20" },
                { href: data.x, icon: Twitter, color: "text-[#22D3EE]", bg: "bg-[#22D3EE]/10", hover: "hover:bg-[#22D3EE]/20 shadow-[#22D3EE]/20" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${social.bg} ${social.color} ${social.hover}`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Visual Content - Spans 5 columns on large screens */}
          <motion.div
            variants={itemVariants}
            className="relative lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Animated Background Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10%] border-2 border-dashed border-[#6366F1]/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20%] border border-[#22D3EE]/10 rounded-full"
              />

              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-transparent to-[#22D3EE]/20 z-10" />
                <div className="absolute inset-0 backdrop-blur-[2px] z-0" />
                
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-20 h-full w-full flex items-center justify-center p-8"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <img 
                      src="/Profil.png" 
                      alt="Khaled Amin" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                  </div>
                </motion.div>

                {/* Decorative floating elements */}
                <motion.div 
                  animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-10 right-10 w-12 h-12 bg-[#6366F1]/20 backdrop-blur-xl rounded-xl border border-white/10 z-30"
                />
                <motion.div 
                  animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-20 left-10 w-16 h-16 bg-[#22D3EE]/20 backdrop-blur-xl rounded-2xl border border-white/10 z-30"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-7 h-12 border-2 border-[#6366F1]/30 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-gradient-to-b from-[#6366F1] to-[#22D3EE] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
