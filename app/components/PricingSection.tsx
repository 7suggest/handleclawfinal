"use client";
import React from "react";

const plans = [
  {
    name: "Hosted Setup",
    price: "$3,000",
    desc: "Managed service — we host, harden + 14-day hypercare",
    recommended: true,
  },
  {
    name: "Mac Mini Setup",
    price: "$5,000",
    desc: "Remote — iMessage integration + local hardware",
    recommended: false,
  },
  {
    name: "Mac Mini In-Person",
    price: "$6,000",
    desc: "SF Bay Area only — on-site setup + iMessage",
    recommended: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-12 md:py-16 bg-[#020202] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-primary text-sm">
              payments
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
              Transparent Pricing
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            One-time setup fee. <br className="hidden md:block" />
            No recurring retainers.
          </h2>
        </div>

        {/* 3 Main Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-6 md:mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 relative ${
                plan.recommended
                  ? "border border-primary/50 bg-[#120505] shadow-[0_0_40px_-10px_rgba(236,32,32,0.2)]"
                  : "border border-white/10 bg-[#0a0a0c]"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-[0_0_15px_rgba(236,32,32,0.4)]">
                  Recommended
                </div>
              )}

              <h3 className={`text-lg font-bold mb-1 ${plan.recommended ? "text-primary mt-2" : "text-white"}`}>
                {plan.name}
              </h3>
              
              <div className="my-6">
                <span className="text-3xl font-extrabold text-white">
                  {plan.price}
                </span>
                <span className="text-white/40 ml-2 text-sm font-medium hidden">
                  /one-time
                </span>
              </div>

              <p className="text-white/60 text-sm leading-relaxed max-w-[220px] mx-auto pb-4">
                {plan.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Addon Wide Card */}
        <div className="max-w-6xl mx-auto rounded-xl border border-white/10 bg-[#0a0a0c] p-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 mb-8 flex-wrap">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-white">Add Another Agent</h3>
            <p className="text-white/60 text-sm">
              CEO, EA, Sales, Finance — deploy your full exec team
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-white">
              +$1,500
            </span>
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">
              each
            </span>
          </div>
        </div>

        {/* Existing Users Card */}
        <div className="max-w-6xl mx-auto rounded-2xl border border-primary/30 bg-[#120505] p-6 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-6 mb-12 shadow-[0_0_30px_-10px_rgba(236,32,32,0.2)]">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">
              Already running OpenClaw?
            </h3>
            <p className="text-white/70 max-w-2xl text-sm leading-relaxed">
              Many customers come to us with a working install that has security gaps. We&apos;ll audit your setup, secure OAuth, harden your firewall, and migrate you to managed care. <strong className="text-white">Same pricing.</strong>
            </p>
          </div>
          <a
            href="https://cal.com/handleclaw/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors shrink-0 whitespace-nowrap inline-flex justify-center"
          >
            Assess My Setup
          </a>
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <a
            href="https://cal.com/handleclaw/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-gradient text-white text-base md:text-lg font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(236,32,32,0.25)] hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            Book a Call ($50) &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
