import { appIcons } from "./BuiltForSection";

const integrations = [
  "WhatsApp",
  "Slack",
  "Gmail",
  "Google Calendar",
  "Notion",
  "Salesforce",
  "HubSpot",
  "Google Sheets",
  "Zoom",
  "Outlook",
  "Google Drive",
  "GitHub",
];

export default function WorksWithSection() {
  return (
    <section id="works-with" className="py-8 md:py-12 relative overflow-hidden bg-[#050505]">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none rounded-full" style={{ left: '10%', right: '10%', top: '20%', bottom: '20%' }} />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Seamless Integrations
          </h2>
        </div>

        {/* Integration Pills Engine */}
        <div className="flex flex-wrap justify-center content-center gap-2 md:gap-3 max-w-4xl mx-auto mb-8">
          {integrations.map((appName) => {
            const app = appIcons[appName];
            if (!app) return null;
            return (
              <div
                key={appName}
                className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[#1a1a1e] border border-white/5 hover:border-primary/40 hover:bg-[#222] transition-colors cursor-pointer group"
              >
                <div className="w-3.5 h-3.5 md:w-4 md:h-4 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                  {app.svg}
                </div>
                <span className="text-xs md:text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {appName}
                </span>
              </div>
            );
          })}
        </div>

        {/* Links */}
        <div className="flex flex-row items-center justify-center gap-2 md:gap-4 mt-2">
          <a
            href="#"
            className="text-primary hover:text-white text-[10px] sm:text-xs md:text-sm font-medium transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            View all 50+ integrations <span>→</span>
          </a>
          <span className="text-white/20 text-[10px] sm:text-xs md:text-sm">•</span>
          <a
            href="#"
            className="text-primary hover:text-white text-[10px] sm:text-xs md:text-sm font-medium transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            See what people built <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
