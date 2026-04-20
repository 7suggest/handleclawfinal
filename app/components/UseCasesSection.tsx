import React from "react";
import { appIcons } from "./BuiltForSection";

const useCases = [
  {
    icon: "mark_email_read",
    title: "Inbox Zero on Autopilot",
    subtitle: "Email Triage & Drafting",
    description: "Your assistant reads incoming emails 24/7, categorizes them, and drafts context-aware replies for your review.",
    features: [
      { icon: "verified", label: "Filters vendor spam instantly" },
      { icon: "edit_note", label: "Pre-drafts replies to clients" },
      { icon: "notification_important", label: "Highlights urgent messages" },
    ],
    focus: "Focus: Triage",
    apps: ["Gmail", "Outlook", "Slack"],
  },
  {
    icon: "event_available",
    title: "Frictionless Scheduling",
    subtitle: "Calendar Coordination",
    description: "Never play email ping-pong again. The AI cross-references your bandwidth and automatically books meetings when clients reply.",
    features: [
      { icon: "sync", label: "Live calendar cross-referencing" },
      { icon: "schedule_send", label: "Proposes available slots via email" },
      { icon: "video_camera_front", label: "Auto-generates Zoom links" },
    ],
    focus: "Focus: Booking",
    apps: ["Google Calendar", "Zoom", "WhatsApp"],
  },
  {
    icon: "forum",
    title: "Chat-to-CRM Automation",
    subtitle: "Data Entry Elimination",
    description: "Update your pipeline through WhatsApp or Slack. Just voice-note your AI after a call, and it logs the deal notes automatically.",
    features: [
      { icon: "mic", label: "Voice-note transcription" },
      { icon: "data_check", label: "Auto-maps data to right fields" },
      { icon: "update", label: "Instant pipeline updates" },
    ],
    focus: "Focus: Data Entry",
    apps: ["Salesforce", "HubSpot", "Slack"],
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-primary text-sm">
              bolt
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
              Live Workflows
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Real-Time Use Cases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(236,32,32,0.15)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a1a1e] border border-white/10 flex items-center justify-center mb-5 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                <span className="material-symbols-outlined text-white/70 text-2xl group-hover:text-primary interactive-icon">
                  {uc.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {uc.title}
              </h3>
              <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-4">
                {uc.subtitle}
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {uc.description}
              </p>
              
              <div className="space-y-3 mb-8 w-full flex-grow flex flex-col items-center">
                {uc.features.map((feat) => (
                  <div
                    key={feat.label}
                    className="flex items-center justify-center gap-2 text-xs text-white/70"
                  >
                    <span className="material-symbols-outlined text-primary text-sm interactive-icon">
                      {feat.icon}
                    </span>
                    <span>{feat.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-white/5 w-full flex flex-col items-center gap-3">
                <span className="text-[10px] uppercase tracking-wider text-white/30 font-medium">
                  Integrates with
                </span>
                <div className="flex items-center justify-center gap-2">
                  {uc.apps.map((appName) => {
                    const app = appIcons[appName];
                    if (!app) return null;
                    return (
                      <div
                        key={appName}
                        className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#1a1a1e] border border-white/10 hover:scale-110 transition-transform"
                        title={appName}
                      >
                        {app.svg}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
