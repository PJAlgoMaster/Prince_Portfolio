"use client"
import SectionFadeIn from './SectionFadeIn'

export default function Experience() {
  const jobs = [
    {
      company: "Increaditech Innovations", role: "Software Engineer Trainee", period: "Feb 2025–Present", results: [
        "Developed 4+ cross-platform (.NET MAUI) apps for Android, iOS, macOS, Windows.",
        "Reduced code duplication by 60% using MVVM.",
        "Integrated Firebase & SQLite for data sync and performance.",
        "Optimized UI performance: +35% speed, -25% crash rate."
      ]
    },
    {
      company: "The Sparks Foundation", role: "Web Developer Intern", period: "Nov 2023–Jan 2024", results: [
        "Built full-stack apps with React, Node.js, and MongoDB.",
        "Enhanced API speed by 30% with async logic and optimized routes."
      ]
    },
    {
      company: "Teachnook", role: "Cybersecurity Analyst Intern", period: "Sep 2023–Oct 2023", results: [
        "Simulated MITM, MAC spoofing, Wi-Fi attacks using Kali Linux & Metasploit.",
        "Documented vulnerabilities and authored security reports."
      ]
    }
  ];
  return (
    <SectionFadeIn delay={0.26} className="mb-14">
      <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
      <ul className="border-l-4 border-blue-600 space-y-10">
        {jobs.map((exp, i) => (
          <li key={i} className="ml-6 relative">
            <span className="absolute -left-4 top-3 w-3 h-3 bg-blue-600 rounded-full"/>
            <h3 className="font-bold text-xl">{exp.role} @ {exp.company}</h3>
            <div className="text-gray-500">{exp.period}</div>
            <ul className="ml-5 list-disc mt-2">
              {exp.results.map((r, j) => <li key={j}>{r}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </SectionFadeIn>
  );
}
