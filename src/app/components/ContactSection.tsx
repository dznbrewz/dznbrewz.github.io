import * as React from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, ArrowUpRight, Instagram } from "lucide-react";

export function ContactSection() {
  const links = [
    {
      id: "email",
      label: "Email",
      value: "hpj675@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:hpj675@gmail.com",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: " ",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/ls-harsh/",
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@harsh_chopdaa",
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/harsh_chopdaa/",
    },
    {
      id: "behance",
      label: "Behance",
      value: " ",
      icon: (
        <span className="text-lg font-bold tracking-tight leading-none">
          Be
        </span>
      ),
      href: "https://www.behance.net/gallery/245122855/Industrial-design-portfolio-IITG-2026",
    },
  ];

  return (
    <section id="contact" className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 bg-[#111111] text-white rounded-t-[3rem] md:rounded-t-[5rem] mt-24 relative z-30 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#0066CC]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-32">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-5 py-2.5 rounded-full bg-white/10 text-[12px] font-semibold tracking-widest text-white/80 uppercase mb-10 border border-white/5 backdrop-blur-md">
              Get in touch
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] leading-[1.05] font-semibold tracking-[-0.04em] text-white mb-8">
              Let's build <br className="hidden md:block"/>
              <span className="text-white/60 italic font-['Playfair_Display'] font-normal">something beautiful.</span>
            </h2>
            <p className="text-white/50 text-xl md:text-2xl font-normal leading-relaxed tracking-tight max-w-xl">
              Open to collaborations in industrial design, automotive concepts, UX engineering, and digital experiences.
            </p>
          </motion.div>

          <motion.a
            href="mailto:hpj675@gmail.com"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex items-center justify-center w-32 h-32 md:w-48 md:h-48 rounded-full bg-white text-[#111111] hover:bg-[#0066CC] hover:text-white transition-colors duration-500"
          >
            <span className="text-lg md:text-2xl font-semibold tracking-tight">Let's Talk</span>
            <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          </motion.a>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-16">
          {links.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-6 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#0066CC] transition-all duration-500">
                {link.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-1">{link.label}</h3>
                <p className="text-sm font-medium tracking-wide text-white/50 group-hover:text-white/80 transition-colors">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm font-medium tracking-wide uppercase"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4" />
            <span>Designed in Bangalore, India</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Harsh P. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
