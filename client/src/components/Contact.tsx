import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
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

  const socialLinks = [
    {
      icon: Linkedin,
      href: data.linkedin,
      label: "LinkedIn",
      color: "#6366F1",
    },
    {
      icon: Github,
      href: data.github,
      label: "GitHub",
      color: "#22D3EE",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
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

      <div className="container max-w-5xl">
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
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-lg text-foreground/80">
              {language === "ar"
                ? "أنا مهتم بالفرص الجديدة والتعاون. لا تتردد في التواصل معي!"
                : "I'm interested in new opportunities and collaborations. Feel free to reach out!"}
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    variants={itemVariants}
                    whileHover={{ x: language === "ar" ? -5 : 5 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border hover:border-[#6366F1]/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6366F1]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#6366F1]" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">{info.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-[#6366F1] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-foreground/70 mb-4">
                {language === "ar" ? "تابعني على" : "Follow Me"}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-lg bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] hover:bg-[#6366F1]/20 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
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
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "الاسم" : "Name"}
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-[#6366F1] focus:outline-none transition-colors"
                placeholder={language === "ar" ? "أدخل اسمك" : "Enter your name"}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "البريد الإلكتروني" : "Email"}
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-[#6366F1] focus:outline-none transition-colors"
                placeholder={
                  language === "ar"
                    ? "أدخل بريدك الإلكتروني"
                    : "Enter your email"
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "الرسالة" : "Message"}
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-[#6366F1] focus:outline-none transition-colors resize-none"
                placeholder={
                  language === "ar"
                    ? "أدخل رسالتك هنا"
                    : "Enter your message here"
                }
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              {language === "ar" ? "إرسال الرسالة" : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
