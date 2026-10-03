import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-grid-soft opacity-40" />
      <div className="absolute left-[-80px] top-12 -z-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute right-[-40px] top-20 -z-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-52 w-52 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <div className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary">
              Child-led learning for curious minds
            </div>
            <h1 className="max-w-xl text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Growing joyful, confident learners every day.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              BrightLane Montessori pairs thoughtful guidance with hands-on discovery,
              helping children build independence, creativity, and a love for learning in a warm,
              nurturing community.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" asChild>
                <Link href="/admissions">Schedule a Tour</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div>
                <span className="block font-heading text-3xl font-bold text-ink">1:1</span>
                <span>Student support</span>
              </div>
              <div>
                <span className="block font-heading text-3xl font-bold text-ink">6:1</span>
                <span>Learning ratio</span>
              </div>
              <div>
                <span className="block font-heading text-3xl font-bold text-ink">18+</span>
                <span>Expert educators</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_30px_60px_rgba(15,23,42,0.08)] sm:p-6">
              <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-primary/15 via-cloud to-secondary/20 p-5">
                <div className="rounded-[24px] border border-white/70 bg-white/70 p-4 shadow-inner">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Today at BrightLane</p>
                      <h2 className="mt-2 font-heading text-3xl font-extrabold text-ink">Montessori Morning</h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-ink shadow-sm">
                      ✦
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-primary/10 p-4">
                      <p className="text-sm text-slate-600">Focus</p>
                      <p className="mt-2 font-heading text-2xl font-extrabold text-ink">Practical life</p>
                    </div>
                    <div className="rounded-2xl bg-secondary/20 p-4">
                      <p className="text-sm text-slate-600">Adventure</p>
                      <p className="mt-2 font-heading text-2xl font-extrabold text-ink">Nature play</p>
                    </div>
                    <div className="rounded-2xl bg-accent/10 p-4">
                      <p className="text-sm text-slate-600">Learning</p>
                      <p className="mt-2 font-heading text-2xl font-extrabold text-ink">Hands-on</p>
                    </div>
                    <div className="rounded-2xl bg-success/10 p-4">
                      <p className="text-sm text-slate-600">Community</p>
                      <p className="mt-2 font-heading text-2xl font-extrabold text-ink">Shared joy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-10 animate-float rounded-full border border-white/70 bg-white/80 p-3 shadow-lg backdrop-blur-sm">
              <div className="text-sm font-semibold text-primary">Curiosity</div>
            </div>
            <div className="absolute -right-3 bottom-12 animate-[blob_12s_ease-in-out_infinite] rounded-full border border-white/70 bg-secondary/90 p-3 shadow-lg">
              <div className="text-sm font-semibold text-ink">Play</div>
            </div>
            <div className="absolute -bottom-4 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border border-white/70 bg-white/80 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
