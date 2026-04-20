export default function CtaSection() {
  return (
    <section id="cta" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="claw-indicator mx-auto mb-8 md:mb-10" />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 md:mb-8 tracking-tighter">
          Ready to Deploy Your <br />
          <span className="text-primary">Corporate Monolith?</span>
        </h2>
        <p className="text-base md:text-lg text-on-surface-variant mb-8 md:mb-12 max-w-2xl mx-auto">
          Skip the bureaucracy. Activate your infrastructure with the precision
          your vision deserves.
        </p>
        <div className="flex justify-center gap-6">
          <button
            id="cta-get-started"
            className="primary-gradient text-white text-base md:text-lg font-bold px-8 py-4 md:px-10 md:py-5 rounded-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-all cursor-pointer"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
