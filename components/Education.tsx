"use client"
import SectionFadeIn from './SectionFadeIn'

export default function Education() {
  return (
    <SectionFadeIn delay={0.35}>
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-3">Degree</th>
            <th className="py-2 px-3">Institute</th>
            <th className="py-2 px-3">Year</th>
            <th className="py-2 px-3">Performance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.Tech CSE</td>
            <td>HMRITM (IPU)</td>
            <td>2021–2025</td>
            <td>8.445 / 10</td>
          </tr>
          <tr>
            <td>12th CBSE</td>
            <td>Mata Sukhdevi Public School</td>
            <td>2021</td>
            <td>84.28%</td>
          </tr>
          <tr>
            <td>10th CBSE</td>
            <td>Mata Sukhdevi Public School</td>
            <td>2018</td>
            <td>74%</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-8 font-semibold text-xl">Certifications & Highlights</h3>
      <ul className="list-disc pl-5 mt-2">
        <li>DSA with Java — Coding Ninjas</li>
        <li>IBM Data Science Professional Certificate — Coursera</li>
        <li>SIH 2024 College Finalist</li>
        <li>Multiple .NET MAUI apps deployed</li>
        <li>Published AI-based gesture paper</li>
      </ul>
    </SectionFadeIn>
  );
}
