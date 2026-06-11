import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
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
      className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden"
    >
      {/* Background Neural Network Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#6366F1]/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#22D3EE]/20 rounded-full blur-3xl opacity-20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-4xl"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p
                className="text-[#22D3EE] font-semibold text-sm uppercase tracking-widest"
                variants={itemVariants}
              >
                {language === "ar" ? "مرحباً بك" : "Welcome"}
              </motion.p>

              <motion.h1
                className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
                variants={itemVariants}
              >
                {data.name}
              </motion.h1>

              <motion.p
                className="text-xl text-[#6366F1] font-semibold"
                variants={itemVariants}
              >
                {data.title}
              </motion.p>

              <motion.p
                className="text-lg text-foreground/70 leading-relaxed"
                variants={itemVariants}
              >
                {data.subtitle}
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6366F1] text-white rounded-lg font-semibold hover:bg-[#6366F1]/90 transition-all group cursor-pointer"
              >
                {language === "ar" ? "عرض المشاريع" : "View Projects"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href={data.cv}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#22D3EE] text-[#22D3EE] rounded-lg font-semibold hover:bg-[#22D3EE]/10 transition-all"
              >
                <Download className="w-4 h-4" />
                {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] hover:bg-[#6366F1]/20 transition-colors"
              >
                <span className="text-sm font-bold">in</span>
              </motion.a>
              <motion.a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-[#22D3EE]/10 flex items-center justify-center text-[#22D3EE] hover:bg-[#22D3EE]/20 transition-colors"
              >
                <span className="text-sm font-bold">GH</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Profile Card */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] via-[#020617] to-[#22D3EE] opacity-20" />
            <div className="absolute inset-0 backdrop-blur-3xl" />

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
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                K.A
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-[#6366F1]/20 rounded-2xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-[#22D3EE]/20 rounded-2xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#6366F1]/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-[#6366F1] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
