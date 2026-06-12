import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FolderGit2, Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { FolderGit2, Cpu, Download } from "lucide-react";

// مكون فرعي لصناعة العداد المتحرك
function AnimatedCounter({ from, to, duration = 0.8 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      // تم تقليل الـ duration الافتراضي إلى 0.8 ثانية ليعطي حركة سريعة وخاطفة للعين
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

export function About() {
  const { language } = useLanguage();
  const data = portfolioData.personal[language];
  const experienceData = portfolioData.experience[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: language === "ar" ? 20 : -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl opacity-20 -z-10" />

      {/* تم التعديل هنا ليكون العرض أوسع ويطابق الـ Hero */}
      <div className="container max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {language === "ar" ? "عني" : "About Me"}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // تم التعديل هنا لاستخدام نظام 12 عمود
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 items-center"
        >
          {/* تأخذ 6 أعمدة في الشاشات الكبيرة */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {data.bio}
            </p>

            
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {data.bio}
            </p>

            <motion.a
              href={data.cv}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#22D3EE] text-[#22D3EE] rounded-2xl font-bold text-lg hover:bg-[#22D3EE]/10 transition-all"
            >
              <Download className="w-5 h-5" />
              {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
            </motion.a>

            {/* Stat Cards تم تصحيح مكان الإغلاق هنا */}
            <div className="grid grid-cols-2 gap-4 pt-4">
               {/* ... محتوى الكاردات كما هو */}
            </div>
          </motion.div>
            

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-5 rounded-xl bg-[#6366F1]/5 border border-[#6366F1]/20 hover:border-[#6366F1]/50 transition-all flex flex-col justify-center relative overflow-hidden group"
              >
                {/* تم تعديل الاتجاه: top-0 left-0 في العربية، و top-0 right-0 في الإنجليزية */}
                <div className={`absolute top-0 p-3 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all ${
                  language === "ar" ? "left-0" : "right-0"
                }`}>
                  <FolderGit2 className="w-12 h-12 text-[#6366F1]" />
                </div>
                
                {/* اتجاه النص يتغير حسب اللغة لضمان بقاء إشارة الـ + متناسقة مع الرقم */}
                <p className={`text-3xl font-bold text-[#6366F1] flex items-center mb-1 ${
                  language === "ar" ? "flex-row-reverse justify-end" : "flex-row"
                }`}>
                  <span>+</span>
                  <AnimatedCounter from={0} to={4} duration={0.6} />
                </p>
                <p className="text-sm font-medium text-foreground/70">
                  {language === "ar" ? "مشاريع منجزة" : "Completed Projects"}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-5 rounded-xl bg-[#22D3EE]/5 border border-[#22D3EE]/20 hover:border-[#22D3EE]/50 transition-all flex flex-col justify-center relative overflow-hidden group"
              >
                {/* محاذاة الأيقونة تتجاوب مع اتجاه اللغة بشكل كامل */}
                <div className={`absolute top-0 p-3 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all ${
                  language === "ar" ? "left-0" : "right-0"
                }`}>
                  <Cpu className="w-12 h-12 text-[#22D3EE]" />
                </div>
                
                <p className={`text-3xl font-bold text-[#22D3EE] flex items-center mb-1 ${
                  language === "ar" ? "flex-row-reverse justify-end" : "flex-row"
                }`}>
                  <span>+</span>
                  <AnimatedCounter from={0} to={6} duration={0.8} />
                </p>
                <p className="text-sm font-medium text-foreground/70">
                  {language === "ar" ? "مجالات تقنية" : "Technical Skills"}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Process - تأخذ 6 أعمدة في الشاشات الكبيرة */}
          <motion.div variants={itemVariants} className="space-y-4 lg:col-span-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ x: language === "ar" ? -5 : 5, scale: 1.02 }}
                className="p-4 rounded-xl bg-card border border-border hover:border-[#6366F1]/50 hover:shadow-lg hover:shadow-[#6366F1]/5 transition-all cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-inner">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-foreground mb-1.5 tracking-wide">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education & Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // استخدام الشبكة الواسعة هنا أيضاً
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
        >
          {/* Education */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              {language === "ar" ? "التعليم" : "Education"}
            </h3>
            <div className="space-y-4">
              {portfolioData.education[language].map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: language === "ar" ? -5 : 5 }}
                  className="p-4 rounded-lg bg-[#6366F1]/5 border border-[#6366F1]/20 hover:border-[#6366F1]/50 transition-all"
                >
                  <p className="font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-sm text-foreground/70 mt-1">{edu.school}</p>
                  <p className="text-xs text-[#6366F1] mt-2">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              {language === "ar" ? "اللغات" : "Languages"}
            </h3>
            <div className="space-y-4">
              {portfolioData.languages[language].map((lang, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: language === "ar" ? -5 : 5 }}
                  className="p-4 rounded-lg bg-[#22D3EE]/5 border border-[#22D3EE]/20 hover:border-[#22D3EE]/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{lang.name}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#22D3EE]/20 text-[#22D3EE]">
                      {lang.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
