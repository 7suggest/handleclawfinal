"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 px-4 md:px-8 bg-[#020202] border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Contact Info */}
        <div className="text-center md:text-left flex flex-col gap-2">
          <p className="text-white/80 text-lg md:text-xl font-medium">
            Questions?{" "}
            <a
              href="https://cal.com/handleclaw/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold inline-block"
            >
              Book a call
            </a> 
            {" "}or DM on{" "}
            <a 
              href="https://x.com/cold_abdul" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-white hover:text-primary transition-colors"
            >
              @cold_abdul
            </a>
          </p>
        </div>

        {/* Availability & Links */}
        <div className="flex flex-col items-center md:items-end gap-6 text-sm">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 border border-[#10B981]/30 bg-[#10B981]/10 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
            </span>
            <span className="text-[#10B981] font-bold text-xs tracking-widest uppercase">
              Accepting new clients
            </span>
          </div>

          {/* Legal / Meta Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 text-white/40 font-medium">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Affiliates
            </Link>
          </nav>

        </div>
      </div>
    </footer>
  );
}
