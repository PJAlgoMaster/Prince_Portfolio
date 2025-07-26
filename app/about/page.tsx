"use client";

import { useState } from "react";
import SectionFadeIn from "../../components/SectionFadeIn";
import { Github, Linkedin, Phone, Mail, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function About() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="relative min-h-screen py-24 px-4 sm:px-10 flex flex-col items-start bg-transparent">
      {/* ABOUT SECTION */}
      <SectionFadeIn delay={0.14} className="max-w-5xl w-full mx-auto">
        <div className="relative rounded-3xl bg-white/10 backdrop-blur-md border border-blue-900/40 shadow-2xl p-10 md:p-14 mb-10 flex flex-col md:flex-row items-center gap-12">
          {/* Clickable Profile Picture */}
          <div
            className="w-32 h-32 rounded-full shadow-md flex items-center justify-center ring-2 ring-blue-400 overflow-hidden cursor-pointer"
            onClick={() => setShowPopup(true)}
            tabIndex={0}
          >
            <img
              src="/assets/prince.jpg"
              alt="Prince Kumar Jha"
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-white drop-shadow-lg">
              About Prince Jha
            </h1>
            <p className="mb-5 text-lg text-white/90 max-w-2xl">
              B.Tech in Computer Science (HMRITM, IPU, 8.445 CGPA). Full-stack
              web (MERN) + cross-platform mobile (.NET MAUI) developer,
              architecture-centric and pixel-flawless UIs. Certified in DSA
              (Java) & IBM Data Science, live apps, published AI research,
              hackathon finalist.
            </p>

            <div className="flex gap-4 flex-wrap mt-3 mb-2">
              <a
                href="https://in.linkedin.com/in/prince-kumar-jha-77a0a5250"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-blue-400/60 text-white px-3 py-2 rounded-lg shadow hover:bg-blue-600/70 font-semibold transition"
                title="LinkedIn"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://github.com/PjAlgoMaster"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-gray-700/60 text-white px-3 py-2 rounded-lg shadow hover:bg-black/80 font-semibold transition"
                title="GitHub"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href="tel:9910283644"
                className="flex items-center gap-1 bg-green-500/50 text-white px-3 py-2 rounded-lg shadow hover:bg-green-600/70 font-semibold transition"
                title="Phone"
              >
                <Phone size={20} /> +91-9910283644
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jhaprince212001@gmail.com&su=I'm Interested in Working with You!&body=Hi%20Prince%2C%0A%0AI%20saw%20your%20portfolio%2C%20and%20would%20love%20to%20connect%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-purple-400/60 text-white px-3 py-2 rounded-lg shadow hover:bg-purple-600/80 font-semibold transition"
                title="Email"
              >
                <Mail size={20} /> Email Me
              </a>
            </div>
          </div>
        </div>

        {/* Fullscreen Image Popup */}
        {showPopup && (
          <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/70">
            <div
              className="absolute inset-0"
              onClick={() => setShowPopup(false)}
            />
            <img
              src="/assets/prince.jpg"
              alt="Fullscreen Prince"
              className="max-h-[92vh] max-w-full rounded-3xl shadow-2xl z-10"
              draggable={false}
            />
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-20 text-white text-2xl bg-black/60 px-3 py-1 rounded-full shadow hover:bg-black"
            >
              ×
            </button>
          </div>
        )}
      </SectionFadeIn>

      {/* SKILLS */}
      <SectionFadeIn delay={0.24} className="max-w-5xl w-full mx-auto">
        <h2 className="text-2xl font-bold text-white mb-3">Key Skills</h2>
        <div className="flex gap-2 flex-wrap">
          {[
            "JavaScript",
            "Python",
            "Java",
            "C++",
            "C#",
            ".NET MAUI",
            "React.js",
            "Express.js",
            "MongoDB",
            "HTML",
            "CSS",
            "Firebase",
            "REST APIs",
            "MVVM",
            "DSA",
            "Cybersecurity",
            "Git",
            "VS Code",
            "System Design",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-500 text-white px-4 py-1 my-1 rounded-full text-sm font-semibold shadow shadow-blue-900/25"
            >
              {skill}
            </span>
          ))}
        </div>
      </SectionFadeIn>

      {/* EXPERIENCE */}
      <SectionFadeIn delay={0.32} className="max-w-5xl w-full mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-5 text-white">
          Professional Experience
        </h2>
        <div className="border-l-4 border-cyan-500/60 pl-7 space-y-9">
          <div>
            <h3 className="text-lg font-semibold">
              Software Engineer Trainee{" "}
              <span className="ml-2 text-blue-200">
                @ Increaditech Innovations
              </span>
            </h3>
            <span className="text-sm text-blue-400/85">
              Feb 2025–Present (Bhopal)
            </span>
            <ul className="list-disc pl-5 text-base text-white/90 mt-2">
              <li>
                Built 4+ cross-platform (.NET MAUI) apps for
                Android/iOS/Windows/macOS
              </li>
              <li>
                Reduced code duplication by 60% (MVVM), improved UI by +35%
                speed, -25% crash rate
              </li>
              <li>Integrated Firebase & SQLite for smooth data sync</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Web Developer Intern{" "}
              <span className="ml-2 text-blue-200">@ Sparks Foundation</span>
            </h3>
            <span className="text-sm text-blue-400/85">
              Nov 2023–Jan 2024 (Remote)
            </span>
            <ul className="list-disc pl-5 text-base text-white/90 mt-2">
              <li>React, Node.js, MongoDB web apps (speed +30%)</li>
              <li>Modern front/back, RESTful APIs, async logic</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Cybersecurity Analyst Intern{" "}
              <span className="ml-2 text-blue-200">@ Teachnook</span>
            </h3>
            <span className="text-sm text-blue-400/85">
              Sep 2023–Oct 2023 (Remote)
            </span>
            <ul className="list-disc pl-5 text-base text-white/90 mt-2">
              <li>Simulated MITM/Wi-Fi attacks, Kali Linux, Metasploit</li>
              <li>Authored security reports & solutions</li>
            </ul>
          </div>
        </div>
      </SectionFadeIn>

      {/* EDUCATION */}
      <SectionFadeIn delay={0.4} className="max-w-5xl w-full mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
          <GraduationCap size={20} className="text-cyan-400" /> Education &
          Certifications
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="rounded-xl bg-black/60 p-6 shadow-lg border border-indigo-900/50 flex-1">
            <div className="font-bold text-lg mb-2">B.Tech CSE</div>
            <span className="text-blue-400">HMRITM (IPU)</span>
            <div className="text-white/85 text-base">2021–2025</div>
            <div className="text-white/65 text-sm mb-1">CGPA: 8.445/10</div>
          </div>
          <div className="rounded-xl bg-black/60 p-6 shadow-lg border border-indigo-900/50 flex-1">
            <div className="font-bold text-lg mb-2">12th CBSE</div>
            <span className="text-blue-400">
              Mata Sukhdevi Public School
            </span>
            <div className="text-white/85 text-base">2021</div>
            <div className="text-white/65 text-sm mb-1">84.28%</div>
          </div>
          <div className="rounded-xl bg-black/60 p-6 shadow-lg border border-indigo-900/50 flex-1">
            <div className="font-bold text-lg mb-2">10th CBSE</div>
            <span className="text-blue-400">
              Mata Sukhdevi Public School
            </span>
            <div className="text-white/85 text-base">2018</div>
            <div className="text-white/65 text-sm mb-1">74%</div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-2">
          <span className="bg-gradient-to-r from-fuchsia-500 to-orange-300 text-black font-bold px-4 py-1 rounded-full text-xs inline-flex items-center gap-1 shadow">
            DSA with Java
          </span>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold px-4 py-1 rounded-full text-xs inline-flex items-center gap-1 shadow">
            IBM Data Science Pro
          </span>
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold px-4 py-1 rounded-full text-xs inline-flex items-center gap-1 shadow">
            SIH Finalist
          </span>
          <span className="bg-gradient-to-r from-pink-200 to-pink-400 text-black font-bold px-4 py-1 rounded-full text-xs inline-flex items-center gap-1 shadow">
            Published AI Research
          </span>
          <span className="bg-gradient-to-r from-blue-300 to-yellow-100 text-black font-bold px-4 py-1 rounded-full text-xs inline-flex items-center gap-1 shadow">
            .NET MAUI Apps Launched
          </span>
        </div>
      </SectionFadeIn>
    </main>
  );
}
