"use client";

import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { HERO } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Full-width hero image background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero_image.webp)" }}
      />

      {/* Jigsaw pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(/jigsaw.svg)",
          backgroundSize: "192px 192px",
        }}
      />

      {/* Text content on translucent plate */}
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{
          maxWidth: "var(--max-w-content)",
          padding: "8rem clamp(1rem, 3vw, 2rem) 4rem",
        }}
      >
        <div className="rounded-2xl bg-white/70 px-8 py-10 text-center shadow-lg backdrop-blur-md sm:px-12">
          <AnimateOnScroll>
            <h1 className="text-hero mx-auto max-w-4xl font-[family-name:var(--font-display)] font-extrabold text-graphite">
              {HERO.title}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <p className="text-hero mx-auto mt-2 max-w-4xl font-[family-name:var(--font-display)] font-extrabold text-graphite/20">
              {HERO.tagline}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-body-lg mx-auto mt-8 max-w-2xl text-steel">
              {HERO.subtitle}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <div className="mt-10">
              <Button
                size="lg"
                onClick={() => {
                  // @ts-expect-error Calendly is loaded externally
                  window.Calendly?.initPopupWidget({ url: "https://calendly.com/stefan-245/30min" });
                }}
              >
                {HERO.cta} &rarr;
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
