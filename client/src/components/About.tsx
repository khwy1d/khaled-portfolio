import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function About() {
  const { language } = useLanguage();
  const data = portfolioData.personal[language];
  const experienceData = portfolioData.experience[language];

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
    hidden: { opacity: 0, x: language === "ar" ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container max-w-5xl">
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
          className="grid md:grid-cols-2 gap-12 mb-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {data.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/20"
              >
                <p className="text-2xl font-bold text-[#6366F1]">4+</p>
                <p className="text-sm text-foreground/70">
                  {language === "ar" ? "مشاريع" : "Projects"}
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/20"
              >
                <p className="text-2xl font-bold text-[#22D3EE]">6+</p>
                <p className="text-sm text-foreground/70">
                  {language === "ar" ? "مجالات مهارة" : "Skill Areas"}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Process */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ x: language === "ar" ? -5 : 5 }}
                className="p-4 rounded-lg bg-card border border-border hover:border-[#6366F1]/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-foreground/70">
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
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">
              {language === "ar" ? "التعليم" : "Education"}
            </h3>
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

          {/* Languages */}
          <div>
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
