"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const nav = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/projects", text: "Projects" },
    { href: "/contact", text: "Contact" },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="w-full bg-black/60 backdrop-blur-md shadow-md h-[58px] md:h-[64px] flex items-center relative">
        {/* LEFT: Logo */}
        <div className="pl-3 sm:pl-8 flex-shrink-0 h-full flex items-center">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-white select-none"
            style={{ lineHeight: "1" }}
          >
            Prince
          </Link>
        </div>
        {/* CENTER: Nav links, flex-1, center on desktop */}
        <div className="flex-1 flex justify-center items-center">
          <ul className="hidden md:flex gap-5 lg:gap-10 text-[1.13rem] font-semibold uppercase text-white">
            {nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-3 py-1 rounded-md transition duration-150
                    ${
                      path === link.href
                        ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow"
                        : "hover:bg-white/10 hover:text-cyan-300"
                    }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* RIGHT: Social Icons, always right edge */}
        <div className="flex items-center gap-2 sm:gap-4 text-white text-xl md:text-lg pr-3 sm:pr-8">
          {/* Social icons - desktop only */}
          <div className="hidden md:flex gap-2 sm:gap-3">
            <a href="https://github.com/PjAlgoMaster" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <Github />
            </a>
            <a href="https://in.linkedin.com/in/prince-kumar-jha-77a0a5250" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              <Linkedin />
            </a>
            <a href="tel:9910283644" className="hover:text-cyan-400 transition">
              <Phone />
            </a>
          </div>
          {/* Hamburger for mobile */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded text-white focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md absolute top-full left-0 w-full border-t border-white/10 shadow-md z-50 pb-2">
          <ul className="flex flex-col items-center text-lg py-2">
            {nav.map((link) => (
              <li key={link.href} className="w-full">
                <Link
                  href={link.href}
                  className={`block w-full text-center py-3 px-2 transition font-semibold uppercase ${
                    path === link.href
                      ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-white"
                      : "hover:bg-white/10 hover:text-cyan-300 text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="flex gap-5 justify-center pt-3 pb-2">
              <a href="https://github.com/PjAlgoMaster" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><Github /></a>
              <a href="https://in.linkedin.com/in/prince-kumar-jha-77a0a5250" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><Linkedin /></a>
              <a href="tel:9910283644" className="hover:text-cyan-400"><Phone /></a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
