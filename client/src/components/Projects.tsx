import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function Projects() {
  const { language } = useLanguage();
  const projectsData = portfolioData.projects[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#477B78]/10 rounded-full blur-2xl opacity-10 -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#D18C62]/10 rounded-full blur-2xl opacity-10 -z-10" />

      {/* تم توسيع الحاوية لتطابق باقي الأقسام */}
      <div className="container max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {language === "ar" ? "المشاريع" : "Projects"}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#477B78] to-[#D18C62]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // زيادة المسافات بين البطاقات في الشاشات الكبيرة
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-[#477B78]/50 transition-all bg-card shadow-sm hover:shadow-xl hover:shadow-[#477B78]/5"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#477B78]/5 via-transparent to-[#D18C62]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content - زيادة الـ padding والمسافات الداخلية */}
              <div className="relative p-6 lg:p-8 space-y-5 lg:space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-[#477B78] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm lg:text-base text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#477B78]/10 text-[#477B78] border border-[#477B78]/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: language === "ar" ? 10 : -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 text-sm lg:text-base text-foreground/80"
                    >
                      {/* تكبير النقطة قليلاً */}
                      <span className="w-2 h-2 rounded-full bg-[#D18C62] mt-1.5 flex-shrink-0 shadow-sm shadow-[#D18C62]/50" />
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 mt-2 border-t border-border/50">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#477B78]/10 text-[#477B78] hover:bg-[#477B78]/20 transition-colors text-sm font-bold"
                  >
                    <Github className="w-4 h-4 lg:w-5 lg:h-5" />
                    {language === "ar" ? "الكود" : "Code"}
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D18C62]/10 text-[#D18C62] hover:bg-[#D18C62]/20 transition-colors text-sm font-bold"
                    >
                      <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" />
                      {language === "ar" ? "معاينة" : "Demo"}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
