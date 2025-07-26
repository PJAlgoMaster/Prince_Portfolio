"use client";

import BackgroundVideo from "../components/BackgroundVideo";
import SectionFadeIn from "../components/SectionFadeIn";
import ServicesCard from "../components/ServicesCard";
import HandImage from "../components/HandImage";
import ProjectsGrid from "../components/ProjectsGrid";
import ThreeDBoard from "../components/ThreeDBoard";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#08090D] pb-8">
      {/* HERO */}
      <div className="relative w-full h-[100vh] min-h-[680px] flex items-center overflow-hidden bg-black">
        <BackgroundVideo />
        <section className="relative z-10 w-full flex flex-col justify-center pl-8 md:pl-28 h-full max-w-[100vw]">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, type: "spring" }}
            className="text-[2.7rem] md:text-[4.15rem] font-black text-white mt-40 sm:mt-0 mb-5 drop-shadow-2xl leading-tight"
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
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.63, delay: 0.18 }}
          >
            <div className="text-lg md:text-2xl font-semibold text-white mb-3">
              Full‑stack engineer for web, mobile, and security.
            </div>
            <div className="text-base md:text-xl text-blue-400 font-semibold tracking-wide mb-8">
              .NET MAUI | MERN | Cybersecurity
            </div>
            <div className="flex gap-6">
              <ActionButton href="#projects" text="View Projects" />
              <ActionButton href="/PrinceJha_Resume.pdf" text="Resume" download />
              <ActionButton href="#contact" text="Contact" />
            </div>
          </motion.div>
        </section>
      </div>

      {/* WHAT I DO + 3D BOARD */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row w-full pt-24 md:pt-36 pb-14 px-6 items-start">
        <motion.div
          initial={{ opacity: 0, x: -65 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="w-full md:w-[43%] max-w-[520px] pr-0 md:pr-10 flex flex-col justify-center"
        >
          <h2 className="text-[2.6rem] md:text-[3.6rem] font-black text-white mb-12 leading-tight tracking-tighter drop-shadow-xl">
            What I do
          </h2>
          <div className="w-full bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-200 rounded-3xl shadow-xl px-7 py-10 md:py-14 text-[#112240] text-[2.13rem] md:text-[2.3rem] font-extrabold tracking-tight leading-snug">
            <span className="block text-balance leading-tight max-w-full">
              I create memorable websites
              <span className="block mt-1">with smooth animations</span>
              <span className="block mt-1">and interactive experiences.</span>
            </span>
          </div>
        </motion.div>
        <div className="w-full md:w-[56%] flex items-center justify-end pt-12 md:pt-0">
          <ThreeDBoard imageUrl="/assets/image2.png" />
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[2.6rem] md:text-[3.6rem] font-black text-white mb-12 leading-tight tracking-tighter drop-shadow-xl">
          Projects
        </h2>
        <SectionFadeIn delay={0.13} className="mb-10" id="projects">
          <ProjectsGrid />
        </SectionFadeIn>
      </div>

      {/* SERVICES SECTION */}
      <SectionFadeIn delay={0.14} className="max-w-7xl mx-auto px-6 pt-12 pb-18">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <h2 className="text-[2.12rem] md:text-[3rem] font-extrabold text-white mb-10 md:mb-0 drop-shadow-lg">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 flex-1">
            <ServicesCard num="01." title="Web Design" desc="I design clean, elegant websites..." />
            <ServicesCard num="02." title="Web Development" desc="Clean, maintainable code..." />
            <ServicesCard num="03." title="Software Development" desc="Scalable systems, automation..." />
            <ServicesCard num="04." title="Hosting & Cloudflare" desc="Fast, secure deployments..." />
          </div>
        </div>
        <div className="mt-12 text-xl md:text-2xl font-semibold text-white/90">
          I offer a range of solutions from brand‑building to work automation.
        </div>
      </SectionFadeIn>

      {/* CONTACT SECTION */}
      <SectionFadeIn
        delay={0.14}
        id="contact"
        className="max-w-7xl mx-auto px-6 pt-20 flex md:flex-row flex-col gap-8 pb-10"
      >
        <div className="flex-1 flex flex-col justify-between">
          <h2 className="text-[2.45rem] md:text-[3.7rem] font-black text-white mb-3">
            Get in touch
          </h2>
          <div className="space-y-3 text-lg font-medium">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jhaprince212001@gmail.com&su=I'm Interested in Working with You!&body=Hi%20Prince%2C..."
              className="block text-neutral-200 hover:text-pink-400 transition-colors text-[1.09rem]"
              target="_blank"
              rel="noopener noreferrer"
            >
              email: <span className="opacity-80 text-sm font-mono">jhaprince212001@gmail.com</span>
            </a>
            <a
              href="https://wa.me/919910283644"
              className="block text-neutral-200 hover:text-green-400 transition-colors text-[1.09rem]"
              target="_blank"
              rel="noopener noreferrer"
            >
              whatsapp: <span className="opacity-80 text-sm font-mono">+91 9910283644</span>
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-end md:items-center justify-end h-[330px]">
          <HandImage className="h-[320px] md:h-[440px] min-w-[110px] md:min-w-[340px] mr-[-90px]" />
        </div>
      </SectionFadeIn>
    </main>
  );
}

function ActionButton({ href, text, download = false }: { href: string; text: string; download?: boolean }) {
  return (
    <Link
      href={href}
      {...(download ? { download: true } : {})}
      className="relative group rounded-lg px-7 py-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-fuchsia-700 text-white font-semibold shadow-lg transition hover:scale-105"
      style={{ zIndex: 1 }}
    >
      <span className="relative z-10">{text}</span>
    </Link>
  );
}
