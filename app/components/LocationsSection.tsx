"use client";
import React from "react";
const locations = [
  { city: "Riyadh", type: "In-person & remote", highlight: true },
  { city: "London", type: "Remote" },
  { city: "Austin", type: "Remote" },
  { city: "San Francisco", type: "Remote" },
  { city: "Miami", type: "Remote" },
  { city: "New York City", type: "Remote" },
  { city: "Seattle", type: "Remote" },
  { city: "Denver", type: "Remote" },
  { city: "Los Angeles", type: "Remote" },
  { city: "Boston", type: "Remote" },
  { city: "Chicago", type: "Remote" },
];

export default function LocationsSection() {
  return (
    <section id="locations" className="py-12 md:py-16 bg-[#020202] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-primary text-sm">
              globe
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
              Global Reach
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Available worldwide
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {locations.map((loc, index) => (
            <div 
              key={loc.city} 
              className={`rounded-2xl border p-6 transition-all duration-300 flex flex-col items-center text-center justify-center ${
                loc.highlight 
                  ? "border-primary/50 bg-[#120505] shadow-[0_0_30px_-10px_rgba(236,32,32,0.2)]" 
                  : "border-white/5 bg-[#0a0a0c] hover:border-white/20"
              }`}
            >
              <h3 className={`text-lg font-bold mb-2 ${loc.highlight ? "text-white" : "text-white/80"}`}>
                {loc.city}
              </h3>
              <div className="flex items-center gap-1.5 justify-center">
                {loc.highlight ? (
                  <>
                    {/* Pulsing indicator for physical presence */}
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{loc.type}</span>
                  </>
                ) : (
                  <span className="text-xs font-bold uppercase tracking-wider text-white/30">{loc.type}</span>
                )}
              </div>
            </div>
          ))}

          {/* Fallback box for unlisted cities */}
          <div className="rounded-2xl border border-white/5 bg-transparent p-6 flex flex-col items-center justify-center text-center">
            <h3 className="text-white/60 text-sm mb-2 italic">
              Don't see your city?
            </h3>
            <span className="text-xs font-bold uppercase tracking-wider text-white/30">Remote</span>
          </div>

        </div>

        {/* Footer Text */}
        <div className="mt-16 text-center">
          <p className="text-white/60 md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            We deploy remotely worldwide. Don't see your city? <br className="hidden md:block" />
            Book a call ($50) — we're happy to help.
          </p>
          <a
            href="https://cal.com/handleclaw/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 inline-block"
          >
            Book a Call ($50)
          </a>
        </div>

      </div>
    </section>
  );
}
