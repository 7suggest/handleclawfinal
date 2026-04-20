"use client";
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center pt-36 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ec2020 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="scan-line-container">
          <div className="scan-line" />
          <div className="scan-line" style={{ animationDelay: "4s" }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 flex flex-col items-center text-center">
        {/* OpenClaw Logo */}
        <div className="mb-4 sm:mb-12 claw-float group cursor-pointer">
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            {/* Outer Shell */}
            <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
            <div className="absolute inset-4 border-2 border-white/5 rounded-full rotate-45" />
            {/* Pulsing Core */}
            <div className="eye-core w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full shadow-[0_0_50px_rgba(236,32,32,0.8)] flex items-center justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full opacity-40 blur-sm" />
            </div>
            {/* Claw Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 md:-translate-y-4">
              <span className="material-symbols-outlined text-white/20 text-3xl md:text-4xl">
                keyboard_arrow_down
              </span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 md:translate-y-4 rotate-180">
              <span className="material-symbols-outlined text-white/20 text-3xl md:text-4xl">
                keyboard_arrow_down
              </span>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 rotate-90">
              <span className="material-symbols-outlined text-white/20 text-3xl md:text-4xl">
                keyboard_arrow_down
              </span>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 -rotate-90">
              <span className="material-symbols-outlined text-white/20 text-3xl md:text-4xl">
                keyboard_arrow_down
              </span>
            </div>
            {/* Spinning indicators */}
            <div className="absolute inset-0 border-r-2 border-primary/40 rounded-full animate-spin-slow" />
            <div className="absolute inset-6 md:inset-8 animate-claw-glow">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
                <path d="M60 10 C30 10 15 35 15 55 C15 75 30 95 45 100 L45 110 L55 110 L55 100 C55 100 60 102 65 100 L65 110 L75 110 L75 100 C90 95 105 75 105 55 C105 35 90 10 60 10Z" fill="url(#lobster-gradient)" />
                <path d="M20 45 C5 40 0 50 5 60 C10 70 20 65 25 55 C28 48 25 45 20 45Z" fill="url(#lobster-gradient)" />
                <path d="M100 45 C115 40 120 50 115 60 C110 70 100 65 95 55 C92 48 95 45 100 45Z" fill="url(#lobster-gradient)" />
                <path d="M45 15 Q35 5 30 8" stroke="#ec2020" strokeWidth="2" strokeLinecap="round" />
                <path d="M75 15 Q85 5 90 8" stroke="#ec2020" strokeWidth="2" strokeLinecap="round" />
                <circle cx="45" cy="35" r="6" fill="#050810" />
                <circle cx="75" cy="35" r="6" fill="#050810" />
                <circle cx="46" cy="34" r="2" fill="#ec2020" />
                <circle cx="76" cy="34" r="2" fill="#ec2020" />
                <defs>
                  <linearGradient id="lobster-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec2020" />
                    <stop offset="100%" stopColor="#a70138" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto mb-20">
          <div className="claw-indicator mx-auto" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            Meet Your Dedicated{" "}
            <br />
            <span className="text-primary">
              Executive AI Agent.
            </span>
          </h1>

          <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto md:hidden">
            Your AI assistant — deployed, secured, and managed for you from day one.
          </p>

          {/* Availability Alert */}
          <div className="flex justify-center pt-2 md:pt-4">
            <a
              href="https://cal.com/handleclaw/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs md:text-sm font-medium text-white/70 hover:text-white transition-all duration-300 cursor-pointer group border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-primary/10 pl-3 pr-4 py-2 rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] text-left"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span>Next consultation: <strong className="text-white font-semibold flex-wrap">Available immediately.</strong></span>
              <span className="text-primary font-bold group-hover:translate-x-0.5 transition-transform bg-transparent">Claim your spot ›</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a
              id="hero-get-started"
              href="https://cal.com/handleclaw/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-gradient text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300 animate-pulse-red text-sm md:text-base cursor-pointer inline-flex justify-center"
            >
              Book a Call ($50)
            </a>
            <a
              id="hero-view-services"
              href="#services"
              className="border border-white/10 text-white font-semibold px-6 py-3 md:px-8 md:py-4 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors text-sm md:text-base cursor-pointer"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
