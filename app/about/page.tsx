"use client";
import { useState } from "react";
import SectionFadeIn from "../../components/SectionFadeIn";
import FluidHeroOverlay from "../../components/FluidHeroOverlay";
import { Github, Linkedin, Phone, Mail, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function About() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="relative min-h-screen py-16 xs:py-20 px-2 xs:px-3 sm:px-4 flex flex-col items-start bg-transparent">
      {/* Fluid Overlay */}
      <FluidHeroOverlay />

      {/* ABOUT SECTION */}
      <SectionFadeIn delay={0.14} className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-white/10 backdrop-blur-md border border-blue-900/40 shadow-2xl px-4 xs:px-6 sm:px-7 md:px-10 py-8 sm:py-11 mb-10 flex flex-col md:flex-row items-center gap-7 sm:gap-10">
          <div
            className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-full shadow-md flex items-center justify-center ring-2 ring-blue-400 overflow-hidden cursor-pointer shrink-0"
            onClick={() => setShowPopup(true)}
            tabIndex={0}
            aria-label="See larger profile photo"
          >
            <img
              src="/assets/prince.jpg"
              alt="Prince Kumar Jha"
              className="object-cover w-full h-full"
              draggable={false}
              loading="lazy"
              width={160}
              height={160}
            />
          </div>

          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-white drop-shadow-lg">
              About Prince Jha
            </h1>
            <p className="mb-5 text-base sm:text-lg text-white/90 max-w-2xl">
              B.Tech in Computer Science (HMRITM, IPU, 8.445 CGPA). Full-stack
              web (MERN) + cross-platform mobile (.NET MAUI) developer,
              architecture-centric and pixel-flawless UIs. Certified in DSA
              (Java) & IBM Data Science, live apps, published AI research,
              hackathon finalist.
            </p>
            <div className="flex gap-2 flex-wrap mt-3 mb-2">
              <a
                href="https://in.linkedin.com/in/prince-kumar-jha-77a0a5250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-blue-400/60 text-white px-3 py-2 rounded-md shadow hover:bg-blue-600/80 font-semibold transition text-[0.98rem]"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/PjAlgoMaster"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-gray-700/60 text-white px-3 py-2 rounded-md shadow hover:bg-black/80 font-semibold transition text-[0.98rem]"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="tel:9910283644"
                className="flex items-center gap-1 bg-green-500/50 text-white px-3 py-2 rounded-md shadow hover:bg-green-600/90 font-semibold transition text-[0.98rem]"
              >
                <Phone size={18} /> +91-9910283644
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jhaprince212001@gmail.com&su=I'm Interested in Working with You!&body=Hi%20Prince%2C..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-purple-400/60 text-white px-3 py-2 rounded-md shadow hover:bg-purple-600/90 font-semibold transition text-[0.98rem]"
              >
                <Mail size={18} /> Email Me
              </a>
            </div>
          </div>
        </div>

        {/* Fullscreen Image Popup */}
        {showPopup && (
          <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/80">
            <button
              className="absolute inset-0 w-full h-full p-0 m-0 cursor-zoom-out"
              onClick={() => setShowPopup(false)}
              aria-label="Close image modal"
              tabIndex={-1}
            />
            <img
              src="/assets/prince.jpg"
              alt="Fullscreen Prince"
              className="max-h-[88vh] max-w-[98vw] rounded-3xl shadow-2xl z-10"
              draggable={false}
            />
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-20 text-white text-2xl bg-black/60 px-3 py-1 rounded-full shadow hover:bg-black"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        )}
      </SectionFadeIn>

      {/* SKILLS */}
      <SectionFadeIn delay={0.21} className="w-full max-w-4xl mx-auto">
        <h2 className="text-lg sm:text-2xl font-bold text-white mb-3">Key Skills</h2>
        <div className="flex gap-2 flex-wrap">
          {[
            "JavaScript", "Python", "Java", "C++", "C#", ".NET MAUI", "React.js", "Express.js", "MongoDB", "HTML", "CSS",
            "Firebase", "REST APIs", "MVVM", "DSA", "Cybersecurity", "Git", "VS Code", "System Design"
          ].map(skill => (
            <span
              key={skill}
              className="bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-500 text-white px-4 py-1 my-1 rounded-full text-xs font-semibold shadow shadow-blue-900/25"
            >
              {skill}
            </span>
          ))}
        </div>
      </SectionFadeIn>

      {/* EXPERIENCE */}
      <SectionFadeIn delay={0.26} className="w-full max-w-4xl mx-auto mt-10">
        <h2 className="text-lg sm:text-2xl font-bold mb-4 text-white">Professional Experience</h2>
        <div className="border-l-4 border-cyan-500/60 pl-5 xs:pl-6 space-y-8">
          <ExperienceBlock
            title="Software Engineer Trainee"
            company="@ Increaditech Innovations"
            companyClass="text-blue-200"
            timeline="Feb 2025–Present (Bhopal)"
            tasks={[
              "Built 4+ cross-platform (.NET MAUI) apps for Android/iOS/Windows/macOS",
              "Reduced code duplication by 60% (MVVM), improved UI by +35% speed, -25% crash rate",
              "Integrated Firebase & SQLite for smooth data sync"
            ]}
          />
          <ExperienceBlock
            title="Web Developer Intern"
            company="@ Sparks Foundation"
            companyClass="text-blue-200"
            timeline="Nov 2023–Jan 2024 (Remote)"
            tasks={[
              "React, Node.js, MongoDB web apps (speed +30%)",
              "Modern front/back, RESTful APIs, async logic"
            ]}
          />
          <ExperienceBlock
            title="Cybersecurity Analyst Intern"
            company="@ Teachnook"
            companyClass="text-blue-200"
            timeline="Sep 2023–Oct 2023 (Remote)"
            tasks={[
              "Simulated MITM/Wi-Fi attacks, Kali Linux, Metasploit",
              "Authored security reports & solutions"
            ]}
          />
        </div>
      </SectionFadeIn>

      {/* EDUCATION */}
      <SectionFadeIn delay={0.34} className="w-full max-w-4xl mx-auto mt-10">
        <h2 className="text-lg sm:text-2xl font-bold mb-3 text-white flex items-center gap-2">
          <GraduationCap size={20} className="text-cyan-400" /> Education & Certifications
        </h2>
        <div className="flex flex-col md:flex-row gap-3 xs:gap-4">
          <EduBox title="B.Tech CSE" subtitle="HMRITM (IPU)" years="2021–2025" stat="CGPA: 8.445/10" />
          <EduBox title="12th CBSE" subtitle="Mata Sukhdevi Public School" years="2021" stat="84.28%" />
          <EduBox title="10th CBSE" subtitle="Mata Sukhdevi Public School" years="2018" stat="74%" />
        </div>
        <div className="mt-5 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-1.5">
          <CertBadge>DSA with Java</CertBadge>
          <CertBadge>IBM Data Science Pro</CertBadge>
          <CertBadge>SIH Finalist</CertBadge>
          <CertBadge>Published AI Research</CertBadge>
          <CertBadge>.NET MAUI Apps Launched</CertBadge>
        </div>
      </SectionFadeIn>
    </main>
  );
}

// Components
function ExperienceBlock({ title, company, companyClass, timeline, tasks }: {
  title: string, company: string, companyClass: string, timeline: string, tasks: string[]
}) {
  return (
    <div>
      <h3 className="text-base sm:text-lg font-semibold">
        {title} <span className={`ml-1 ${companyClass}`}>{company}</span>
      </h3>
      <span className="text-xs xs:text-sm text-blue-400/85">{timeline}</span>
      <ul className="list-disc pl-3 sm:pl-5 text-xs xs:text-sm sm:text-base text-white/90 mt-1">
        {tasks.map((task, i) => <li key={i}>{task}</li>)}
      </ul>
    </div>
  );
}

function EduBox({ title, subtitle, years, stat }: {
  title: string, subtitle: string, years: string, stat: string
}) {
  return (
    <div className="rounded-xl bg-black/60 p-4 xs:p-5 shadow-lg border border-indigo-900/50 flex-1 min-w-[100px]">
      <div className="font-bold text-sm sm:text-lg mb-1">{title}</div>
      <span className="text-blue-400 text-xs sm:text-base">{subtitle}</span>
      <div className="text-white/85 text-xs sm:text-base">{years}</div>
      <div className="text-white/65 text-xs sm:text-sm mb-1">{stat}</div>
    </div>
  );
}

function CertBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-fuchsia-500 to-orange-300 text-black font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs inline-flex items-center gap-1 shadow">
      {children}
    </span>
  );
}
