import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Youtube, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";

export function Contact() {
  const { language } = useLanguage();
  const data = portfolioData.personal[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: language === "ar" ? "البريد الإلكتروني" : "Email",
      value: data.email,
      href: `mailto:${data.email}`,
    },
    {
      icon: Phone,
      label: language === "ar" ? "الهاتف" : "Phone",
      value: data.phone,
      href: `tel:${data.phone}`,
    },
    {
      icon: MapPin,
      label: language === "ar" ? "الموقع" : "Location",
      value: data.location,
      href: "#",
    },
  ];

  // تم إضافة جميع مواقع التواصل بما فيها يوتيوب
  const socialLinks = [
    {
      icon: Github,
      href: data.github || "#",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: data.linkedin || "#",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: data.x || "#",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: data.instagram || "#",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: data.youtube || "#",
      label: "YouTube",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      language === "ar" ? "رسالة جديدة من موقعي" : "New Message from My Portfolio"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

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
    <section id="contact" className="py-20 bg-card/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-1/2 left-0 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {language === "ar" ? "التواصل" : "Get In Touch"}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#6366F1] to-[#22D3EE]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8 lg:space-y-10">
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed">
              {language === "ar"
                ? "أنا مهتم بالفرص الجديدة والتعاون. لا تتردد في التواصل معي!"
                : "I'm interested in new opportunities and collaborations. Feel free to reach out!"}
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 lg:space-y-5">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    variants={itemVariants}
                    whileHover={{ x: language === "ar" ? -5 : 5 }}
                    className="flex items-start gap-4 lg:gap-5 p-5 lg:p-6 rounded-xl bg-background border border-border hover:border-[#6366F1]/50 hover:shadow-lg hover:shadow-[#6366F1]/5 transition-all group"
                  >
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6366F1]/20 transition-colors">
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-[#6366F1]" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm lg:text-base text-foreground/70 mb-1">{info.label}</p>
                      <p className="font-semibold text-base lg:text-lg text-foreground group-hover:text-[#6366F1] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-sm lg:text-base font-semibold text-foreground/70 mb-4 lg:mb-5">
                {language === "ar" ? "تابعني على" : "Follow Me"}
              </p>
              {/* إضافة flex-wrap لضمان الترتيب الجيد إذا زاد عدد الأيقونات */}
              <div className="flex flex-wrap gap-4 lg:gap-5">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] hover:bg-[#6366F1]/20 hover:shadow-md hover:shadow-[#6366F1]/10 transition-all"
                    >
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-5 lg:space-y-6 bg-background p-6 lg:p-8 rounded-2xl border border-border shadow-sm"
          >
            <div>
              <label className="block text-sm lg:text-base font-medium text-foreground mb-2 lg:mb-3">
                {language === "ar" ? "الاسم" : "Name"}
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-5 py-3.5 lg:py-4 rounded-xl bg-card border border-border focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] focus:outline-none transition-all"
                placeholder={language === "ar" ? "أدخل اسمك" : "Enter your name"}
              />
            </div>

            <div>
              <label className="block text-sm lg:text-base font-medium text-foreground mb-2 lg:mb-3">
                {language === "ar" ? "البريد الإلكتروني" : "Email"}
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-5 py-3.5 lg:py-4 rounded-xl bg-card border border-border focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] focus:outline-none transition-all"
                placeholder={
                  language === "ar"
                    ? "أدخل بريدك الإلكتروني"
                    : "Enter your email"
                }
              />
            </div>

            <div>
              <label className="block text-sm lg:text-base font-medium text-foreground mb-2 lg:mb-3">
                {language === "ar" ? "الرسالة" : "Message"}
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-5 py-3.5 lg:py-4 rounded-xl bg-card border border-border focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] focus:outline-none transition-all resize-none"
                placeholder={
                  language === "ar"
                    ? "أدخل رسالتك هنا"
                    : "Enter your message here"
                }
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-4 mt-2 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white rounded-xl font-bold text-base lg:text-lg hover:shadow-lg hover:shadow-[#6366F1]/25 transition-all"
            >
              {language === "ar" ? "إرسال الرسالة" : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
      }
          
