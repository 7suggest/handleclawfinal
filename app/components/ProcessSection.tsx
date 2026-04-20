const steps = [
  {
    number: "01",
    title: "Strategic Kickoff Call",
    description:
      "We learn your goals and map out your required tools (email, calendar, CRM). You tell us what routine tasks you want to automate.",
  },
  {
    number: "02",
    title: "Same-Day Secure Deployment",
    description:
      "We install OpenClaw on a secure server, handling OAuth connections, firewalls, and sandboxing so your agent is ready on day one.",
  },
  {
    number: "03",
    title: "14 Days of Fine-Tuning",
    description:
      "We actively monitor your workflows, solve edge cases, and provide direct Slack support until you fully trust your new AI assistant.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-12 md:py-16 bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-primary text-sm">
              insights
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
              Easy Setup
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Go Live in 3 Simple Steps
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 hidden lg:block -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl glass-card border flex items-center justify-center text-lg font-black text-primary mb-5 border-primary/30 shadow-sm group-hover:border-primary group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-500 bg-black">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed px-6">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
