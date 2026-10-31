import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const { language } = useLanguage();
  const skillsData = portfolioData.skills[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-card/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-[#D18C62]/10 rounded-full blur-2xl opacity-10 -z-10" />

      {/* تم التعديل هنا ليكون العرض أوسع ويطابق الأقسام السابقة */}
      <div className="container max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {language === "ar" ? "المهارات" : "Skills"}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#477B78] to-[#D18C62]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // تم زيادة المسافات (gap) لتتناسب مع العرض الجديد
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-background border border-border hover:border-[#477B78]/50 transition-all group shadow-sm hover:shadow-md"
            >
              {/* تم زيادة المسافة السفلية هنا لتناسب الحجم الجديد */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#477B78] to-[#D18C62]" />
                <h3 className="text-xl font-bold text-foreground group-hover:text-[#477B78] transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              {/* تم زيادة المسافات بين المهارات */}
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: language === "ar" ? 10 : -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    {/* تكبير النقطة قليلاً */}
                    <span className="w-2 h-2 rounded-full bg-[#D18C62]/70" />
                    <span className="text-base text-foreground/80 group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
