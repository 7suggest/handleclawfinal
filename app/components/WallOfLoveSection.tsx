import Image from "next/image";

const testimonialsRow1 = [
  {
    name: "Mark Jaquith",
    handle: "@markjaquith",
    text: "I've been saying for like six months that even if LLMs suddenly stopped improving, we could spend *years* discovering new transformative uses. This feels like a leap forward. Incredible experience.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh3RjijwS7ZQKXDlfvErUkJ5ZeEHJ2v2dN54XX3X8XgNhmS9fm-69GuKOuBP0YIwqSnVFizWCTQYbDX0gZz53_NAkMHwem14gsY19GW6tLzReCsb9k3d8eITdBu2-hgi8HGNqqNsYAtz6QIIhw1pUYKoErgLwvzyE9s8jufyEwuNfCIj1AYQZD0fm9z-RlHglGsb_o2JF6VhmcojwOT3jS8qbicI49M5s6vE4ZZHjG0Oc1YZtCoD3BJYgRNve0QD-UeLmkJZRxdOqL",
  },
  {
    name: "Dan Peguine",
    handle: "@danpeguine",
    text: "Why this is nuts: your context and skills live on YOUR infrastructure, not a walled garden. Proactive AF: cron jobs, reminders, background tasks. Memory is amazing, context persists 24/7.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMr2jSvkUkq69bIo78kfziqQvUYQVs5bn-B3p5Gu5i2eXZ7nBXJtHwDVwW05uNA02OpOAIJ4FyJ4Qy-XsNpOIA7_O5AvBIhxR6JK-jIjTrukRYqiwA5r2vnYuFgBfS4KMgmw2f8XZBEOlL7awUYOgTTnVcTXZ96-pbKx_YcYcee28fT44R3ftTkUvztlXYpa0FGYIbDUZuMD-W331_D5lgPNRc55_-xVj7vc-2Rrm1H-T0mEthhIJDL9F6KBfgrhuZxV1naMh-_Xs1",
  },
  {
    name: "Nathan Clark",
    handle: "@nathanclark_",
    text: "A smart model with eyes and hands at a desk with keyboard and mouse. You message it like a coworker and it does everything a person could do. That's what you have now.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnkTM6eoPkKQWBvF794Yoc-Ks56uUE7OYbXo7VwGe8ifrb5S3_jAInQ4oE_z7u9cC2Tv2r6A4Xhad_JeBXuQFWkXuhfxLO4Jw856jw4gdo_btGGirBt7qqba1xd0pJl2zDbIRUPg8zxJKJgXyNFHhwgkvoHPyhiJ6ZmKhodvgKs2gHoNktBje1iPCIkyEJKtPijdO0P8vGrG_QR1G5B1rVX8zP0jNtGdyEWn00POwTf69mmE7ya8wuyaCr2b7uBc8Xzk1MHHJXeZoZ",
  },
  {
    name: "Dave Morin",
    handle: "@davemorin",
    text: "At this point I don't even know what to call this. It is something new. After a few weeks in, this is the first time I have felt like I am living in the future.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuACaYWXC5JuL-mIyHMr-H0jXmXwj2bTSbieR5jbt6ZFoMA3wPMqUPtZbp36jNGvpGI-iN0OvEOt2kX6_RC-ZVyGqdOnegPIRkBPpau4uLNvhsBI8aDzBynF6yXzaor-HHZG0AQF2rUxARJlJ5P-2kCpP086hw8cDunn9fRJ5_1kOJq45FpzXgGsodCMesW2FCdWnw6xk5gVp2OrHqaW_RsxN4vXAzkRp1NNZe7HTbBMZ5-3E66fm2qfzrjEH3u1nsv0VeEuZoIBES_m",
  },
  {
    name: "Marc L.",
    handle: "@marcl",
    text: "SaaS Founder. $19,613 MRR with 437 active subscriptions. Founded February 2026. This infrastructure is the real deal.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh3RjijwS7ZQKXDlfvErUkJ5ZeEHJ2v2dN54XX3X8XgNhmS9fm-69GuKOuBP0YIwqSnVFizWCTQYbDX0gZz53_NAkMHwem14gsY19GW6tLzReCsb9k3d8eITdBu2-hgi8HGNqqNsYAtz6QIIhw1pUYKoErgLwvzyE9s8jufyEwuNfCIj1AYQZD0fm9z-RlHglGsb_o2JF6VhmcojwOT3jS8qbicI49M5s6vE4ZZHjG0Oc1YZtCoD3BJYgRNve0QD-UeLmkJZRxdOqL",
  },
];

const testimonialsRow2 = [
  {
    name: "LyC",
    handle: "@lycfyi",
    text: "After years of AI hype, I thought nothing could faze me. From nervous 'hi what can you do?' to full throttle - design, code review, taxes, PM, content pipelines... AI as teammate, not tool. The endgame is here.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMr2jSvkUkq69bIo78kfziqQvUYQVs5bn-B3p5Gu5i2eXZ7nBXJtHwDVwW05uNA02OpOAIJ4FyJ4Qy-XsNpOIA7_O5AvBIhxR6JK-jIjTrukRYqiwA5r2vnYuFgBfS4KMgmw2f8XZBEOlL7awUYOgTTnVcTXZ96-pbKx_YcYcee28fT44R3ftTkUvztlXYpa0FGYIbDUZuMD-W331_D5lgPNRc55_-xVj7vc-2Rrm1H-T0mEthhIJDL9F6KBfgrhuZxV1naMh-_Xs1",
  },
  {
    name: "Rovensky",
    handle: "@rovensky",
    text: "It will actually be the thing that nukes a ton of startups. The fact that it's hackable and hostable on-prem will make sure tech like this DOMINATES conventional SaaS imo.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnkTM6eoPkKQWBvF794Yoc-Ks56uUE7OYbXo7VwGe8ifrb5S3_jAInQ4oE_z7u9cC2Tv2r6A4Xhad_JeBXuQFWkXuhfxLO4Jw856jw4gdo_btGGirBt7qqba1xd0pJl2zDbIRUPg8zxJKJgXyNFHhwgkvoHPyhiJ6ZmKhodvgKs2gHoNktBje1iPCIkyEJKtPijdO0P8vGrG_QR1G5B1rVX8zP0jNtGdyEWn00POwTf69mmE7ya8wuyaCr2b7uBc8Xzk1MHHJXeZoZ",
  },
  {
    name: "Jakub",
    handle: "@jakubkrcmar",
    text: "Current level of capabilities: does everything, connects to everything, remembers everything. It's all collapsing into one unique personal OS — all apps, interfaces, walled gardens etc gone.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuACaYWXC5JuL-mIyHMr-H0jXmXwj2bTSbieR5jbt6ZFoMA3wPMqUPtZbp36jNGvpGI-iN0OvEOt2kX6_RC-ZVyGqdOnegPIRkBPpau4uLNvhsBI8aDzBynF6yXzaor-HHZG0AQF2rUxARJlJ5P-2kCpP086hw8cDunn9fRJ5_1kOJq45FpzXgGsodCMesW2FCdWnw6xk5gVp2OrHqaW_RsxN4vXAzkRp1NNZe7HTbBMZ5-3E66fm2qfzrjEH3u1nsv0VeEuZoIBES_m",
  },
  {
    name: "Mike",
    handle: "@bffmike",
    text: "I now have it independently assessing how it can help me in the background. It wrote a doc connecting two completely unrelated conversations from different comms channels.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh3RjijwS7ZQKXDlfvErUkJ5ZeEHJ2v2dN54XX3X8XgNhmS9fm-69GuKOuBP0YIwqSnVFizWCTQYbDX0gZz53_NAkMHwem14gsY19GW6tLzReCsb9k3d8eITdBu2-hgi8HGNqqNsYAtz6QIIhw1pUYKoErgLwvzyE9s8jufyEwuNfCIj1AYQZD0fm9z-RlHglGsb_o2JF6VhmcojwOT3jS8qbicI49M5s6vE4ZZHjG0Oc1YZtCoD3BJYgRNve0QD-UeLmkJZRxdOqL",
  },
  {
    name: "SedRick",
    handle: "@SedRicKCZ",
    text: "Absolute game changer for me. The amount of things I done from my phone just during my breakfast is absolutely breathtaking.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMr2jSvkUkq69bIo78kfziqQvUYQVs5bn-B3p5Gu5i2eXZ7nBXJtHwDVwW05uNA02OpOAIJ4FyJ4Qy-XsNpOIA7_O5AvBIhxR6JK-jIjTrukRYqiwA5r2vnYuFgBfS4KMgmw2f8XZBEOlL7awUYOgTTnVcTXZ96-pbKx_YcYcee28fT44R3ftTkUvztlXYpa0FGYIbDUZuMD-W331_D5lgPNRc55_-xVj7vc-2Rrm1H-T0mEthhIJDL9F6KBfgrhuZxV1naMh-_Xs1",
  },
];

export default function WallOfLoveSection() {
  return (
    <section id="wall-of-love" className="py-12 md:py-16 bg-black/40 overflow-hidden relative border-t border-b border-white/5">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

      <div className="text-center mb-8 md:mb-12 relative z-10 px-4 md:px-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
          <span className="material-symbols-outlined text-primary text-sm">
            foundation
          </span>
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
            Wall Of Love
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Built for Builders
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-[200%]">
        {/* Row 1 - Left direction */}
        <div className="flex w-full animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
          {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[240px] md:w-[320px] flex-shrink-0 glass-card p-5 md:p-6 rounded-2xl flex flex-col gap-3 border border-white/5 hover:border-primary/40 group transition-colors"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={36}
                  height={36}
                  className="rounded-full grayscale group-hover:grayscale-0 transition-all border border-white/10"
                  unoptimized
                />
                <div>
                  <h4 className="text-white text-sm md:text-base font-bold">{testimonial.name}</h4>
                  <span className="text-[10px] md:text-xs text-primary font-medium">{testimonial.handle}</span>
                </div>
                <div className="ml-auto">
                  <span className="material-symbols-outlined text-[#1DA1F2] opacity-80 text-base md:text-xl">
                    chat_bubble
                  </span>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-xs md:text-sm group-hover:text-white transition-colors">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 - Right direction */}
        <div className="flex w-full animate-marquee-reverse hover:[animation-play-state:paused] gap-6 px-3">
          {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[240px] md:w-[320px] flex-shrink-0 glass-card p-5 md:p-6 rounded-2xl flex flex-col gap-3 border border-white/5 hover:border-primary/40 group transition-colors"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={36}
                  height={36}
                  className="rounded-full grayscale group-hover:grayscale-0 transition-all border border-white/10"
                  unoptimized
                />
                <div>
                  <h4 className="text-white text-sm md:text-base font-bold">{testimonial.name}</h4>
                  <span className="text-[10px] md:text-xs text-primary font-medium">{testimonial.handle}</span>
                </div>
                <div className="ml-auto">
                  <span className="material-symbols-outlined text-[#1DA1F2] opacity-80 text-base md:text-xl">
                    chat_bubble
                  </span>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-xs md:text-sm group-hover:text-white transition-colors">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
