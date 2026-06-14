import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  const { language } = useLanguage();
  const experienceData = portfolioData.experience[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section id="experience" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {language === "ar" ? "عملية العمل" : "My Process"}
          </h2>
          <div className="w-12 h-1.5 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full" />
        </motion.div>

        {/* Experience Grid - IMPROVED FOR LARGE SCREENS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="h-full p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#6366F1]/20 flex flex-col">
                
                {/* Step Number Circle */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <span className="text-white font-bold text-lg lg:text-xl">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Connector Line - Only show on lg screens between items */}
                  {index < experienceData.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-[#6366F1]/30 to-transparent -z-10 transform -translate-y-1/2" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 group-hover:text-[#6366F1] transition-colors">
                  {exp.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-foreground/70 leading-relaxed flex-grow">
                  {exp.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 pt-4 border-t border-border/50 group-hover:border-[#6366F1]/30 transition-colors">
                  <div className="w-8 h-1 bg-gradient-to-r from-[#22D3EE] to-transparent rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline View - Alternative for smaller screens */}
        <div className="lg:hidden mt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4"
              >
                {/* Timeline Dot and Line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  {index < experienceData.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-[#6366F1]/30 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
