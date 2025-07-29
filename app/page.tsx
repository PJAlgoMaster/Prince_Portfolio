"use client";
import BackgroundVideo from "../components/BackgroundVideo";
import SectionFadeIn from "../components/SectionFadeIn";
import ServicesCard from "../components/ServicesCard";
import HandImage from "../components/HandImage";
import ProjectsGrid from "../components/ProjectsGrid";
import ThreeDBoard from "../components/ThreeDBoard";
import FluidHeroOverlay from "../components/FluidHeroOverlay";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#08090D] pb-8">
      <FluidHeroOverlay />

      {/* HERO with responsive video */}
      <section className="relative w-full min-h-[70vh] h-[94svh] sm:h-[88vh] flex items-center overflow-hidden bg-black">
        <BackgroundVideo />
        <div className="relative z-10 w-full flex flex-col justify-center px-4 sm:px-8 lg:px-28 h-full max-w-[100vw]">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, type: "spring" }}
            className="text-[2.1rem] xs:text-4xl md:text-[3.6rem] font-black text-white mt-20 sm:mt-0 mb-5 drop-shadow-2xl leading-tight"
          >
            <TypeAnimation
              sequence={[
                "Hi, I'm Prince.",
                2000,
                "Full Stack Developer.",
                2000,
                "UI/UX Lover & Problem Solver.",
                2000,
              ]}
              wrapper="span"
              speed={52}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.63, delay: 0.18 }}
          >
            <div className="text-base xs:text-xl md:text-2xl font-semibold text-white mb-2">
              Full‑stack engineer for web, mobile, and security.
            </div>
            <div className="text-sm xs:text-lg md:text-xl text-blue-400 font-semibold tracking-wide mb-7">
              .NET MAUI | MERN | Cybersecurity
            </div>
            <div className="flex gap-3 flex-wrap">
              <ActionButton href="#projects" text="View Projects" />
              <ActionButton href="/PrinceJha_Resume.pdf" text="Resume" download />
              <ActionButton href="#contact" text="Contact" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DARK, NON-VIDEO BACKGROUND FOR ALL OTHER SECTIONS */}
      <div className="w-full bg-[#08090D]">
        {/* What I do & 3D Board */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start w-full pt-10 md:pt-20 pb-4 px-4 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: "spring" }}
            className="md:w-[50%] w-full flex flex-col justify-center items-start"
          >
            <h2 className="text-[2rem] xs:text-3xl md:text-[3rem] font-black text-white mb-7 leading-tight tracking-tighter drop-shadow-xl">
              What I do
            </h2>
            <div className="w-full bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-200 rounded-3xl shadow-xl px-4 xs:px-6 py-8 xs:py-10 md:py-12 text-[#112240] text-[1.15rem] xs:text-[1.4rem] md:text-[2rem] font-extrabold tracking-tight leading-snug whitespace-pre-line break-words">
              <span>
                I create memorable websites
                <span className="block">with smooth animations</span>
                <span className="block">and interactive experiences.</span>
              </span>
            </div>
          </motion.div>

          <div className="md:w-[50%] w-full flex items-center justify-end pt-8 md:pt-0">
            <ThreeDBoard imageUrl="/assets/image2.png" />
          </div>
        </div>

        {/* PROJECTS */}
        <SectionFadeIn
          delay={0.14}
          className="max-w-7xl mx-auto mb-8 px-4"
          id="projects"
        >
          <h2 className="text-[2.05rem] xs:text-[2.5rem] md:text-[3rem] font-black text-white mb-7 leading-tight tracking-tighter drop-shadow-xl">
            Projects
          </h2>
          <ProjectsGrid />
        </SectionFadeIn>

        {/* SERVICES */}
        <SectionFadeIn delay={0.15} className="max-w-7xl mx-auto px-4 pt-8 pb-8">
          <div className="flex flex-col md:flex-row gap-7 items-start">
            <h2 className="text-[1.5rem] xs:text-2xl md:text-[2.6rem] font-extrabold mb-8 md:mb-0 flex-shrink-0 text-white drop-shadow-lg">
              Services
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 flex-1 min-w-0">
              <ServicesCard num="01." title="Web Design" desc="I design clean, elegant websites..." />
              <ServicesCard num="02." title="Web Development" desc="Clean, maintainable code..." />
              <ServicesCard num="03." title="Software Development" desc="Scalable systems, automation..." />
              <ServicesCard num="04." title="Hosting & Cloudflare" desc="Fast, secure deployments..." />
            </div>
          </div>
          <div className="mt-9 text-base xs:text-xl md:text-2xl font-semibold text-white/90">
            I offer a range of solutions from brand‑building to work automation.
          </div>
        </SectionFadeIn>

        {/* CONTACT */}
        <SectionFadeIn
          delay={0.14}
          id="contact"
          className="max-w-7xl mx-auto px-4 pt-12 flex md:flex-row flex-col gap-5 items-end"
        >
          <div className="flex-1 flex flex-col justify-between">
            <h2 className="text-[2rem] xs:text-[2.5rem] md:text-[3.2rem] font-black text-white mb-2 select-none">
              Get in touch
            </h2>
            <div className="space-y-1 text-base xs:text-lg font-medium">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jhaprince212001@gmail.com&su=I'm Interested in Working with You!&body=Hi%20Prince%2C..."
                className="block text-neutral-200/80 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                email: <span className="opacity-80 text-sm font-mono">jhaprince212001@gmail.com</span>
              </a>
              <a
                href="https://wa.me/919910283644"
                className="block text-neutral-200/80 hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                whatsapp: <span className="opacity-80 text-sm font-mono">+91 9910283644</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto flex items-center justify-end pt-7 md:pt-0">
            <HandImage className="max-h-[140px] xs:max-h-[220px] md:max-h-[340px]" />
          </div>
        </SectionFadeIn>
      </div>
    </main>
  );
}

// For hero section action buttons
function ActionButton({ href, text, download = false }: { href: string; text: string; download?: boolean }) {
  return (
    <Link
      href={href}
      {...(download ? { download: true } : {})}
      className="rounded-lg px-6 py-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-fuchsia-700 text-white font-semibold shadow-lg transition hover:scale-105 whitespace-nowrap"
      style={{ zIndex: 1 }}
    >
      <span className="relative z-10">{text}</span>
    </Link>
  );
}
