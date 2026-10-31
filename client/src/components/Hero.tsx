import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { language } = useLanguage();
  const data = portfolioData.personal[language];

  const socialLinks = [
    { href: data.github, label: "GitHub", icon: Github },
    { href: data.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: data.instagram, label: "Instagram", icon: Instagram },
    { href: data.x, label: "X", icon: Twitter },
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-border/70 pt-24 pb-16 lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-y-0 end-[8%] hidden w-px bg-border/50 lg:block" />
        <div className="absolute start-0 top-[22%] h-px w-24 bg-[#477B78]/70" />
        <div className="absolute bottom-0 end-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full border border-[#477B78]/10" />
      </div>

      <div className="container relative z-10 max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.58fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-2 space-y-7 text-center lg:order-1 lg:text-start"
          >
            <div className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-muted-foreground">
              <span className="h-px w-8 bg-[#477B78]" />
              {language === "ar" ? "مرحباً، أنا" : "HELLO, I'M"}
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-semibold leading-[1.18] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {data.name}
              </h1>
              <p className="max-w-2xl text-xl font-medium leading-relaxed text-[#477B78] sm:text-2xl">
                {data.title}
              </p>
              <p className="mx-auto max-w-xl text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0">
                {data.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-md bg-[#477B78] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3c6967]"
              >
                {language === "ar" ? "استكشف مشاريعي" : "Explore my work"}
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-[#D18C62]/70 hover:text-[#D18C62]"
              >
                {language === "ar" ? "المزيد عني" : "More about me"}
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 lg:justify-start">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-[#477B78] hover:text-[#477B78]"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="order-1 mx-auto w-full max-w-[190px] sm:max-w-[220px] lg:order-2 lg:max-w-[310px]"
          >
            <div className="relative">
              <div className="absolute -inset-3 -z-10 translate-x-3 translate-y-3 border border-[#D18C62]/45" />
              <div className="aspect-[4/5] overflow-hidden bg-[#17242A]">
                <img
                  src="/Profil.png"
                  alt="Khaled Ameen"
                  className="h-full w-full object-cover object-[center_24%]"
                />
              </div>
              <span className="absolute -bottom-5 -start-5 bg-background px-3 py-2 text-xs font-medium tracking-[0.18em] text-[#D18C62]">
                K.A / 01
              </span>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-5 start-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-widest text-muted-foreground transition-colors hover:text-[#477B78] lg:flex"
        >
          {language === "ar" ? "اكتشف المزيد" : "SCROLL TO EXPLORE"}
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
