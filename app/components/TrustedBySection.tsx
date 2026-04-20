export default function TrustedBySection() {
  return (
    <section id="trusted-by" className="py-16 md:py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.2em] text-outline mb-8 font-bold">
          Trusted by High-Growth Builders &amp; Founders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex justify-center">
              <div
                className="h-8 bg-white/10 rounded"
                style={{ width: `${[128, 112, 144, 96, 128, 112][i]}px` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
