export const appIcons: Record<string, { color: string; svg: React.ReactNode }> = {
  Gmail: {
    color: "#EA4335",
    svg: (
      <svg viewBox="52 42 88 66" width="12" height="12">
        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
      </svg>
    ),
  },
  "Google Calendar": {
    color: "#4285F4",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="#4285F4">
        <path d="M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H5.684v5.684h12.632zM5.684 18.316H0V5.684h5.684v12.632zM7.895 9.474h2.526v1.263H7.895V9.474zm0 2.526h2.526v1.263H7.895V12zm3.79-2.526h2.525v1.263h-2.526V9.474zm0 2.526h2.525v1.263h-2.526V12z" />
      </svg>
    ),
  },
  Slack: {
    color: "#E01E5A",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12">
        <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313z" />
        <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 012.521 2.521 2.527 2.527 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312z" />
        <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.528 2.528 0 01-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 01-2.523 2.521 2.527 2.527 0 01-2.52-2.521V2.522A2.527 2.527 0 0115.163 0a2.528 2.528 0 012.523 2.522v6.312z" />
        <path fill="#ECB22E" d="M15.163 18.956a2.528 2.528 0 012.523 2.522A2.528 2.528 0 0115.163 24a2.527 2.527 0 01-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 01-2.52-2.523 2.526 2.526 0 012.52-2.52h6.315A2.528 2.528 0 0124 15.163a2.528 2.528 0 01-2.522 2.523h-6.315z" />
      </svg>
    ),
  },
  Zoom: {
    color: "#0B5CFF",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="#2D8CFF">
        <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.263-1.364l-3.12 2.272V9.545a.91.91 0 00-.908-.909H6.545a.91.91 0 00-.909.91v5.453a.91.91 0 00.91.91h7.163a.91.91 0 00.909-.91v-3.363l3.12 2.272z" />
      </svg>
    ),
  },
  WhatsApp: {
    color: "#25D366",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  Outlook: {
    color: "#0078D4",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="#0078D4">
        <path d="M24 7.387v10.478c0 .23-.08.424-.238.576a.806.806 0 01-.588.236h-8.174v-8.088l1.602 1.172a.273.273 0 00.332 0l7.066-4.98V7.387zm-.826-1.09L16.2 11.267l-1.2-.853V5.6h8.174a.78.78 0 01.648.308.344.344 0 01.065.198l.001.001-.001.002v-.001l.087.079v.11zM14.4 4.8v15.6H.75a.726.726 0 01-.525-.225A.726.726 0 010 19.65V4.35c0-.21.075-.39.225-.525A.726.726 0 01.75 3.6H13.65a.726.726 0 01.525.225.726.726 0 01.225.525V4.8zm-3.6 4.602a3.076 3.076 0 00-.975-1.572A2.747 2.747 0 008.1 7.2a2.747 2.747 0 00-1.725.63 3.076 3.076 0 00-.975 1.572A4.631 4.631 0 005.1 11.1c0 .708.1 1.362.3 1.962.2.6.5 1.08.9 1.44.383.36.858.54 1.425.54h.75c.567 0 1.042-.18 1.425-.54.4-.36.7-.84.9-1.44.2-.6.3-1.254.3-1.962a4.631 4.631 0 00-.3-1.698zM9.6 13.05c-.133.4-.317.717-.55.95-.233.233-.517.35-.85.35-.333 0-.617-.117-.85-.35-.233-.233-.417-.55-.55-.95-.133-.4-.2-.85-.2-1.35v-1.2c0-.5.067-.95.2-1.35.133-.4.317-.717.55-.95a1.13 1.13 0 01.85-.35c.333 0 .617.117.85.35.233.233.417.55.55.95.133.4.2.85.2 1.35v1.2c0 .5-.067.95-.2 1.35z" />
      </svg>
    ),
  },
  Salesforce: {
    color: "#00A1E0",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="#00A1E0">
        <path d="M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.45 0-.884-.06-1.305-.165a3.975 3.975 0 01-3.525 2.145c-.63 0-1.23-.15-1.77-.39a4.635 4.635 0 01-4.035 2.37c-1.86 0-3.465-1.08-4.2-2.67a3.615 3.615 0 01-.975.135C1.305 17.73 0 16.335 0 14.61c0-1.125.57-2.1 1.455-2.67A4.23 4.23 0 011.2 10.5c0-2.34 1.89-4.23 4.23-4.23 1.665 0 3.075.93 3.81 2.325a4.26 4.26 0 01.766-3.18z" />
      </svg>
    ),
  },
  HubSpot: {
    color: "#FF7A59",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="#FF7A59">
        <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984v-.066A2.2 2.2 0 0017.23.834h-.066a2.2 2.2 0 00-2.2 2.2v.066c0 .87.51 1.617 1.244 1.974v2.858a6.015 6.015 0 00-2.876 1.47l-7.57-5.862a2.63 2.63 0 00.076-.586A2.632 2.632 0 003.2 0a2.632 2.632 0 00-2.64 2.625A2.632 2.632 0 003.2 5.25c.517 0 .996-.155 1.4-.417l7.464 5.78a6.062 6.062 0 00-.836 3.087c0 1.168.332 2.258.904 3.186l-2.578 2.578a2.018 2.018 0 00-.588-.094 2.024 2.024 0 100 4.048 2.024 2.024 0 000-4.048c.2 0 .392.037.572.094l2.522-2.522a6.06 6.06 0 003.54 1.608 6.06 6.06 0 006.1-6.018 6.06 6.06 0 00-3.036-5.252zM17.2 18.4a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z" />
      </svg>
    ),
  },
  "Google Sheets": {
    color: "#0F9D58",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="#34A853">
        <path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.909h3.41v-1.91zM20.727 6.5v17.227A.273.273 0 0120.455 24H3.545a.273.273 0 01-.272-.273V.273A.273.273 0 013.545 0h11.182v6.5h6zm-4.09 3.59H7.362v7.728h9.273V10.09zm-5.32 5.546H7.91v-1.909h3.41v1.91z" />
      </svg>
    ),
  },
  Notion: {
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="#ffffff">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.26 2.23c-.42-.326-.98-.7-2.055-.607L3.39 2.71c-.466.046-.56.28-.374.466l1.443 1.032zm.793 3.358v13.882c0 .746.373 1.026 1.213.98l14.523-.84c.84-.046.933-.56.933-1.166V6.63c0-.606-.233-.933-.746-.886l-15.177.886c-.56.047-.746.327-.746.933zm14.337.42c.093.42 0 .84-.42.886l-.7.14v10.264c-.606.326-1.166.514-1.633.514-.746 0-.933-.234-1.493-.933l-4.572-7.185v6.952l1.446.327s0 .84-1.166.84l-3.218.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.093-.42.14-1.026.793-1.073l3.451-.233 4.759 7.278v-6.44l-1.213-.14c-.093-.513.28-.886.746-.933l3.218-.186z" />
      </svg>
    ),
  },
  "Google Drive": {
    color: "#4285F4",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12">
        <path fill="#4285F4" d="M15.07 15.07l-2.63 4.55h9.18l2.63-4.55z" />
        <path fill="#0F9D58" d="M7.38 19.62l2.63-4.55L2.63 2.55 0 7.1z" />
        <path fill="#FFCD40" d="M21.56 7.1L14.18 19.62h7.38L24 15.07 17.94 4.55z" />
        <path fill="#FFCD40" d="M7.38 19.62l2.63-4.55H2.63z" />
        <path fill="#4285F4" d="M12.37 2.55l-5 8.52 2.64 4.55L17.94 2.55z" />
        <path fill="#EA4335" d="M22.19 7.1h-9.82L7.38 2.55h9.82z" />
      </svg>
    ),
  },
  GitHub: {
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="#ffffff">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
};

const personas = [
  {
    icon: "rocket_launch",
    title: "Founders & CEOs",
    description: "Drowning in email, calendar chaos, need leverage",
    color: "#F59E0B",
    apps: ["Gmail", "Google Calendar", "Slack", "Zoom", "WhatsApp"],
  },
  {
    icon: "groups",
    title: "Exec Teams",
    description: "CFO, Head of Sales, EA — each gets their own agent",
    color: "#3B82F6",
    apps: ["Outlook", "Salesforce", "HubSpot", "Google Sheets", "Slack"],
  },
  {
    icon: "design_services",
    title: "Agencies & Studios",
    description: "Client workflows, reporting, project management",
    color: "#A855F7",
    apps: ["Notion", "Google Drive", "GitHub", "Zoom", "Slack"],
  },
  {
    icon: "trending_up",
    title: "Investors & VCs",
    description: "Deal flow tracking, portfolio updates, LP comms",
    color: "#10B981",
    apps: ["Gmail", "Google Sheets", "Salesforce", "HubSpot", "Notion"],
  },
];

export default function BuiltForSection() {
  return (
    <section id="built-for" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-primary text-sm">
              groups
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
              Who It&apos;s For
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Built for
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="glass-card rounded-2xl p-6 group flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  backgroundColor: `${persona.color}15`,
                  borderWidth: 1,
                  borderColor: `${persona.color}33`,
                }}
              >
                <span
                  className="material-symbols-outlined text-2xl"
                  style={{ color: persona.color }}
                >
                  {persona.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {persona.title}
              </h3>

              {/* Description */}
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                {persona.description}
              </p>

              {/* Connects to */}
              <div className="flex flex-col items-center gap-2 mt-auto">
                <span className="text-[10px] uppercase tracking-wider text-white/30 shrink-0 font-medium">
                  Connects to
                </span>
                <div className="flex items-center justify-center">
                  {persona.apps.map((appName, i) => {
                    const app = appIcons[appName];
                    if (!app) return null;
                    return (
                      <div
                        key={appName}
                        className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#1a1a1e] border border-white/10 -ml-1.5 first:ml-0 hover:scale-110 hover:z-30 transition-transform"
                        style={{ zIndex: 20 - i }}
                        title={appName}
                      >
                        {app.svg}
                      </div>
                    );
                  })}
                  <div
                    className="flex h-[24px] items-center justify-center rounded-full bg-[#1a1a1e] border border-white/10 -ml-1.5 px-2"
                    style={{ zIndex: 1 }}
                  >
                    <span className="text-[9px] font-medium text-white/40 leading-none whitespace-nowrap">
                      +more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

