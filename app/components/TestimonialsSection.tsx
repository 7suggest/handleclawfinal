import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-black/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-left mb-16 md:mb-24 flex flex-col items-start gap-3">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-primary text-sm">
              stars
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
              Client Outcomes
            </p>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Client Success Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Testimonial */}
          <div className="md:col-span-8 glass-card p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-primary text-5xl opacity-20 interactive-icon">
                format_quote
              </span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Image
                  alt="Founder"
                  className="rounded-full object-cover ring-2 ring-primary/40 group-hover:ring-primary transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACaYWXC5JuL-mIyHMr-H0jXmXwj2bTSbieR5jbt6ZFoMA3wPMqUPtZbp36jNGvpGI-iN0OvEOt2kX6_RC-ZVyGqdOnegPIRkBPpau4uLNvhsBI8aDzBynF6yXzaor-HHZG0AQF2rUxARJlJ5P-2kCpP086hw8cDunn9fRJ5_1kOJq45FpzXgGsodCMesW2FCdWnw6xk5gVp2OrHqaW_RsxN4vXAzkRp1NNZe7HTbBMZ5-3E66fm2qfzrjEH3u1nsv0VeEuZoIBES_m"
                  width={64}
                  height={64}
                  unoptimized
                />
                <div>
                  <div className="text-white font-bold">Marcus Thorne</div>
                  <div className="text-primary text-xs font-bold tracking-widest uppercase">
                    CEO, Nexus Systems
                  </div>
                </div>
              </div>
              <p className="text-2xl font-medium text-on-surface leading-relaxed group-hover:text-white transition-colors">
                &ldquo;The speed of execution was unlike anything I&apos;ve seen
                in legal tech. HandleClaw didn&apos;t just register my company;
                they built the digital backbone of my entire operation in 72
                hours.&rdquo;
              </p>
            </div>
          </div>

          {/* Stat Card */}
          <div className="md:col-span-4 glass-card p-10 rounded-2xl border-l-4 border-l-primary flex flex-col justify-center group">
            <div className="text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors">
              400%
            </div>
            <div className="text-on-surface-variant text-sm uppercase tracking-widest font-bold">
              Efficiency Increase
            </div>
            <div className="mt-8 text-on-surface leading-relaxed italic">
              &ldquo;Their automated compliance tracking alone saved our
              operations team 15 hours a week.&rdquo;
            </div>
          </div>

          {/* Small Quote */}
          <div className="md:col-span-4 glass-card p-8 rounded-2xl text-center group">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-all duration-300">
              <span className="material-symbols-outlined text-primary group-hover:text-white interactive-icon">
                verified
              </span>
            </div>
            <p className="text-on-surface font-medium italic">
              &ldquo;Founders&apos; best-kept secret for scaling fast.&rdquo;
            </p>
            <div className="mt-6 text-xs text-on-surface-variant font-bold uppercase tracking-widest">
              — Sarah J., Tech Nomad
            </div>
          </div>

          {/* Join CTA Card */}
          <div className="md:col-span-8 glass-card p-8 rounded-2xl flex items-center justify-between group hover:bg-white/5">
            <div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                Join 2,500+ High-Performance Founders
              </h4>
              <p className="text-on-surface-variant text-sm">
                Start your infrastructure activation today.
              </p>
            </div>
            <button
              id="testimonials-cta"
              className="primary-gradient p-4 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20 active:scale-90 transition-transform group-hover:scale-110 cursor-pointer"
            >
              <span className="material-symbols-outlined font-bold">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
