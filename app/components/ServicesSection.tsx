const services = [
  {
    icon: "admin_panel_settings",
    title: "Separated Access",
    color: "#F59E0B",
    description:
      "Your bot never sees raw passwords. We use secure middleware to manage authentication, giving you a full audit trail and instant revocation power.",
  },
  {
    icon: "security",
    title: "Hardened Infrastructure",
    color: "#3B82F6",
    description:
      "Our deployments feature deep structural security, including Docker sandboxing, strict firewall rules, and robust exec allowlists.",
  },
  {
    icon: "gpp_good",
    title: "Gradual Permissions",
    color: "#10B981",
    description:
      "We start your agent with read-only permissions and safely expand access only as it proves its reliability and earns your trust.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-primary text-sm">
              shield_locked
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
              Security-First
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Enterprise-Grade Security by Design
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-6 group flex flex-col h-full items-center text-center"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 shadow-sm"
                style={{
                  backgroundColor: `${service.color}15`,
                  borderWidth: 1,
                  borderColor: `${service.color}33`,
                }}
              >
                <span 
                  className="material-symbols-outlined text-2xl interactive-icon group-hover:scale-110 transition-transform"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <a
                href="#"
                className="text-primary text-xs md:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:gap-4 transition-all"
              >
                Explore Service{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
