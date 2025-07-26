"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Phone } from "lucide-react";

export default function Navbar() {
  const path = usePathname();
  const nav = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-30 px-0">
      {/* Full-width black transparent bar with blur */}
      <div className="flex justify-between items-center w-full bg-black/60 backdrop-blur-md shadow-md rounded-b-xl py-4">
        {/* Logo */}
        <div className="pl-6 text-2xl font-extrabold tracking-tight text-white">
          Prince
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 md:gap-10 text-[1.1rem] font-semibold uppercase text-white">
          {nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative px-3 py-1 rounded-md transition duration-150 ${
                  path === link.href
                    ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-md"
                    : "hover:bg-white/10 hover:text-cyan-300"
                }`}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="pr-6 flex gap-3 text-white text-lg">
          <a
            href="https://github.com/PjAlgoMaster"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-200"
          >
            <Github />
          </a>
          <a
            href="https://in.linkedin.com/in/prince-kumar-jha-77a0a5250"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-200"
          >
            <Linkedin />
          </a>
          <a
            href="tel:9910283644"
            className="hover:text-cyan-400 transition duration-200"
          >
            <Phone />
          </a>
        </div>
      </div>
    </nav>
  );
}
