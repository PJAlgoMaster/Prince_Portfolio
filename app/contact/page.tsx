"use client";
import SectionFadeIn from '../../components/SectionFadeIn';
import FluidHeroOverlay from '../../components/FluidHeroOverlay'; // ✅ Import fluid section
import { Github, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-black via-gray-900 to-black px-2">
      {/* ✅ Fluid Background */}
      <FluidHeroOverlay />

      <SectionFadeIn
        delay={0.1}
        className="w-full max-w-md xs:max-w-lg sm:max-w-xl md:max-w-lg mx-auto pt-24 pb-10"
      >
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-blue-800/30 px-4 xs:px-6 sm:px-8 py-8 shadow-2xl flex flex-col items-center gap-3 sm:gap-5">
          <h2 className="text-2xl xs:text-3xl font-bold mb-1 text-center text-white">Get in Touch</h2>

          {/* Main Contact Rows */}
          <div className="flex flex-col gap-2 w-full">
            <ContactRow
              icon={<Mail size={20} />}
              label="Email"
              val="jhaprince212001@gmail.com"
              href="mailto:jhaprince212001@gmail.com"
            />
            <ContactRow
              icon={<Phone size={20} />}
              label="Phone"
              val="+91-9910283644"
              href="tel:9910283644"
            />
            <ContactRow
              icon={<Linkedin size={20} />}
              label="LinkedIn"
              val="linkedin.com/in/prince-kumar-jha-77a0a5250"
              href="https://in.linkedin.com/in/prince-kumar-jha-77a0a5250"
              external
            />
            <ContactRow
              icon={<Github size={20} />}
              label="GitHub"
              val="PjAlgoMaster"
              href="https://github.com/PjAlgoMaster"
              external
            />
            <ContactRow
              icon={<MapPin size={20} />}
              label="Location"
              val="Delhi, India"
            />
          </div>

          {/* Social Icons Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 w-full">
            <ContactIcon
              href="mailto:jhaprince212001@gmail.com"
              icon={<Mail size={24} />}
              color="bg-fuchsia-500"
            />
            <ContactIcon
              href="https://in.linkedin.com/in/prince-kumar-jha-77a0a5250"
              icon={<Linkedin size={24} />}
              color="bg-blue-600"
              external
            />
            <ContactIcon
              href="https://github.com/PjAlgoMaster"
              icon={<Github size={24} />}
              color="bg-gray-900"
              external
            />
            <ContactIcon
              href="tel:9910283644"
              icon={<Phone size={24} />}
              color="bg-green-500"
            />
          </div>

          {/* Gmail Pre-Filled */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jhaprince212001@gmail.com&su=I'm Interested in Working with You!&body=Hi%20Prince%2C%0A%0AI%20saw%20your%20portfolio%2C%20and%20would%20love%20to%20connect%20about..."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full sm:w-auto text-center text-white bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:scale-105 transition-transform px-4 py-3 rounded-full font-medium shadow-lg shadow-black/30"
            tabIndex={0}
          >
            ✉️ Send me a message via Gmail
          </a>
        </div>
      </SectionFadeIn>
    </main>
  );
}

function ContactRow({
  icon,
  label,
  val,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  val: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <div className="w-full flex items-center gap-1 xs:gap-2 py-1 min-h-10">
      <span className="text-cyan-300 flex-shrink-0">{icon}</span>
      <span className="min-w-[55px] xs:min-w-[72px] max-w-[83px] font-semibold text-white flex-shrink-0">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="ml-1 text-blue-200 underline underline-offset-4 font-medium hover:text-pink-300 transition truncate"
          style={{
            maxWidth: "calc(100% - 120px)",
            display: "inline-block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            verticalAlign: "middle"
          }}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {val}
        </a>
      ) : (
        <span
          className="text-blue-100 truncate"
          style={{
            maxWidth: "calc(100% - 120px)",
            display: "inline-block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            verticalAlign: "middle"
          }}
        >
          {val}
        </span>
      )}
    </div>
  );
}

function ContactIcon({
  href,
  icon,
  color,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  color: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`rounded-full p-3 text-white shadow-md shadow-black/30 ${color} hover:scale-110 hover:shadow-xl transition-transform`}
      tabIndex={0}
    >
      {icon}
    </a>
  );
}
