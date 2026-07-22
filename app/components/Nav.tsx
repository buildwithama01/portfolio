"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuInstagram } from "react-icons/lu";
import { ImTwitter } from "react-icons/im";
import { BiLogoLinkedin } from "react-icons/bi";

const links = [
  { label: "Portfolio", href: "/#projects" },
  { label: "About Me", href: "/#about" },
  { label: "Get In Touch", href: "/#contact" },
]

const socials = [
  { label: "Email", href: "mailto:amapeter21@gmail.com", icon: HiOutlineEnvelope },
  { label: "Instagram", href: "https://www.instagram.com/buildwithama/", icon: LuInstagram },
  { label: "Twitter", href: "https://x.com/thats_ama", icon: ImTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ama-peter-obinna/", icon: BiLogoLinkedin },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-[#111111]/95 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">

        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-white text-[15px] font-semibold hover:text-[#F13D52] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="text-white text-xl md:text-2xl font-bold tracking-tight lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-baseline">
          <Link href="/">
            Peter Ama<span className="text-[#F13D52] inline-block w-[0.3em] h-[0.3em] ml-1 bg-[#F13D52]"></span>
          </Link>
        </div>

        {/* Right Socials */}
        <div className="hidden lg:flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black hover:text-[#F13D52] transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 py-1 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#111111] border-t border-white/10 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-64" : "max-h-0 border-transparent"}`}>
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-white font-medium text-lg hover:text-[#F13D52] transition-colors">
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 mt-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:text-[#F13D52] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
