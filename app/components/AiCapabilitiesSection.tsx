const capabilities = [
  {
    icon: "api",
    title: "Custom Integrations",
    color: "#A855F7",
    description: "We wire up any bespoke internal tools so your agent can do real work from day one.",
  },
  {
    icon: "update",
    title: "Ongoing Maintenance",
    color: "#3B82F6",
    description: "We proactively handle updates, fix API drift, and monitor workflows quietly.",
  },
  {
    icon: "security_update_good",
    title: "Security Patches",
    color: "#10B981",
    description: "Your infrastructure stays fully patched and compliant with zero downtime.",
  },
  {
    icon: "handshake",
    title: "Done-for-you Setup",
    color: "#F59E0B",
    description: "We handle the entire setup securely. You get the leverage without the IT headache.",
  },
];

export default function AiCapabilitiesSection() {
  return (
    <section id="capabilities" className="py-12 md:py-16 bg-black/30 relative border-t border-b border-white/5">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-primary text-sm">
              build
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
              Why Teams Hire Us
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            We Handle The Hard Parts
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="glass-card rounded-2xl p-5 group flex flex-col items-center text-center hover:bg-white/5 transition-all duration-300"
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 shadow-sm"
                style={{
                  backgroundColor: `${cap.color}15`,
                  borderWidth: 1,
                  borderColor: `${cap.color}33`,
                }}
              >
                <span 
                  className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform"
                  style={{ color: cap.color }}
                >
                  {cap.icon}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {cap.title}
              </h3>
              <p className="text-on-surface-variant text-xs leading-relaxed mb-4 flex-grow">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
