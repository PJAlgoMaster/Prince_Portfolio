"use client"
import SectionFadeIn from './SectionFadeIn'

export default function Skills() {
  const skills = [
    ".NET MAUI", "MERN", "JavaScript", "TypeScript", "Python", "Java", "C#", "SQL", "React.js",
    "Express.js", "MongoDB", "MVVM", "DSA", "Cybersecurity", "Firebase", "REST APIs", "OOP"
  ];
  return (
    <SectionFadeIn delay={0.3} className="mb-14">
      <h2 className="text-3xl font-semibold mb-7">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="bg-blue-100 px-4 py-1 rounded-full text-blue-900 font-medium shadow">{skill}</span>
        ))}
      </div>
    </SectionFadeIn>
  );
}
