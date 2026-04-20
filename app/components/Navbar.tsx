"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            HandleClaw
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm tracking-wide font-medium">
            <Link
              href="#services"
              className="text-[#a5aac2] hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#use-cases"
              className="text-[#a5aac2] hover:text-white transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#pricing"
              className="text-[#a5aac2] hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </div>
          <a
            id="nav-get-started"
            href="https://cal.com/handleclaw/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-gradient text-white font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-lg active:scale-95 transition-all duration-200 text-xs md:text-sm cursor-pointer inline-flex whitespace-nowrap justify-center"
          >
            Book a Call ($50)
          </a>
        </div>
    </nav>
  );
}
