"use client";
import React from "react";
export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-12 md:py-16 bg-[#020202] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-primary text-sm">
              autorenew
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
              24/7 Automation
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Always on, always working
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative items-stretch max-w-5xl mx-auto">

          {/* Left Card: Manual Work */}
          <div className="rounded-3xl border border-white/5 bg-[#0a0a0c] p-8 md:p-10 flex flex-col h-full relative group">
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-white/30 uppercase mb-8">
              The Old Way
            </h3>
            <ul className="space-y-6 flex-grow">
              {[
                "You read and reply to every single email yourself",
                "You spend your mornings researching people before meetings",
                "You have to manually text people to reschedule when rushing",
                "You waste time jumping between apps to figure out what's going on",
                "You lose hours every day doing the same boring tasks"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#ff4a4a] font-bold text-base mt-[-2px] shrink-0">✕</span>
                  <span className="text-white/50 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Time wasted doing this:</p>
              <p className="text-3xl md:text-4xl font-extrabold text-[#ff4a4a]/70">3-5 hrs / day</p>
            </div>
          </div>

          {/* Right Card: HandleClaw */}
          <div className="rounded-3xl border border-primary/30 bg-[#120505] p-8 md:p-10 flex flex-col h-full relative shadow-[0_0_50px_-15px_rgba(255,51,51,0.2)] group hover:border-primary/60 transition-colors duration-500">
            {/* Recommended Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] py-2 px-6 rounded-full shadow-[0_0_20px_rgba(255,51,51,0.5)]">
              Recommended
            </div>

            <h3 className="text-xs md:text-sm font-bold tracking-widest text-primary/80 uppercase mb-8 mt-2">
              With HandleClaw
            </h3>
            <ul className="space-y-6 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold text-base mt-[-2px] shrink-0">✓</span>
                <span className="text-white/90 text-sm leading-relaxed">
                  <strong className="text-white block mb-0.5">Every 30 min</strong>
                  Checks your inbox, spots urgent emails, and writes drafts for you
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold text-base mt-[-2px] shrink-0">✓</span>
                <span className="text-white/90 text-sm leading-relaxed">
                  <strong className="text-white block mb-0.5">9:00 AM daily</strong>
                  Texts you a morning summary with your schedule and meeting notes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold text-base mt-[-2px] shrink-0">✓</span>
                <span className="text-white/90 text-sm leading-relaxed">
                  <strong className="text-white block mb-0.5">On demand</strong>
                  Just text it "I'm late", and it automatically emails the other person
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold text-base mt-[-2px] shrink-0">✓</span>
                <span className="text-white/90 text-sm leading-relaxed">
                  <strong className="text-white block mb-0.5">All day long</strong>
                  Keeps an eye on team chats and gives you simple daily summaries
                </span>
              </li>
            </ul>
            <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <div>
                <p className="text-xs text-primary/70 uppercase tracking-widest mb-3">Time needed to manage it:</p>
                <p className="text-3xl md:text-4xl font-extrabold text-primary">&lt; 10 mins</p>
              </div>
              <a
                href="https://cal.com/handleclaw/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-white text-white hover:text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full sm:w-auto text-center inline-block"
              >
                Book a Call ($50) →
              </a>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-16 md:mt-24 text-center max-w-4xl mx-auto bg-gradient-to-r from-transparent via-white/[0.03] to-transparent p-8 rounded-3xl border border-white/[0.02]">
          <div className="flex justify-center mb-6 gap-4 opacity-70">
            {/* Telegram, Slack, WhatsApp generic icons or text to anchor visually */}
            <span className="material-symbols-outlined text-3xl">forum</span>
            <span className="material-symbols-outlined text-3xl">quickreply</span>
            <span className="material-symbols-outlined text-3xl">mark_chat_read</span>
          </div>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed font-light">
            You talk to your bot through <strong className="text-white font-medium">Telegram</strong> (or Slack, WhatsApp, Discord) — just like texting a human assistant. <span className="text-primary font-medium">No technical knowledge required.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
