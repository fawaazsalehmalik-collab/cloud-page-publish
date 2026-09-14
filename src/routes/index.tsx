import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Free Credits — Claim Yours Today" },
      {
        name: "description",
        content:
          "Get free credits to build, ship, and experiment. No card required — claim your starter pack in seconds.",
      },
      { property: "og:title", content: "Free Credits — Claim Yours Today" },
      {
        property: "og:description",
        content:
          "Get free credits to build, ship, and experiment. No card required — claim your starter pack in seconds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [email, setEmail] = useState("");
  const [claimed, setClaimed] = useState(false);

  function handleClaim(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setClaimed(true);
  }

  return (
    <main className="grain relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "var(--primary)" }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-2xl flex-col px-6 py-10 sm:px-8">
        {/* masthead */}
        <header className="flex items-center justify-between">
          <span
            className="font-[family-name:var(--font-display)] text-xl tracking-tight text-foreground"
          >
            Free<span className="text-primary">.</span>Credits
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            No card
          </span>
        </header>

        {/* hero */}
        <section className="flex flex-1 flex-col justify-center py-16">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-primary">
            Starter pack · Limited
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-balance text-5xl leading-[1.05] text-foreground sm:text-6xl">
            Free credits,
            <br />
            <span className="italic text-primary">yours to keep.</span>
          </h1>
          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-muted-foreground">
            Build, ship, and experiment without spending a cent. Claim your starter
            credits in seconds — no credit card, no catch.
          </p>

          {/* claim form */}
          <form onSubmit={handleClaim} className="mt-10 w-full max-w-md">
            {!claimed ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 flex-1 rounded-md border border-border bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="h-12 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                >
                  Claim credits
                </button>
              </div>
            ) : (
              <div className="rounded-md border border-primary/40 bg-card px-5 py-4">
                <p className="font-[family-name:var(--font-display)] text-lg text-primary">
                  Credits claimed.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your starter pack is on its way to{" "}
                  <span className="text-foreground">{email}</span>.
                </p>
              </div>
            )}
          </form>

          <p className="mt-4 text-xs text-muted-foreground">
            By claiming, you agree to receive a one-time welcome email. Unsubscribe anytime.
          </p>
        </section>

        {/* what's included */}
        <section className="border-t border-border py-12">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-foreground">
            What's inside
          </h2>
          <ul className="mt-6 space-y-4">
            {[
              ["5,000 credits", "Enough to prototype, test, and launch your first idea."],
              ["30-day window", "Use them at your own pace — they won't vanish overnight."],
              ["No card on file", "Claim with just an email. Upgrade only if you want more."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-4">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--primary)" }}
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* footer */}
        <footer className="flex flex-col gap-2 border-t border-border py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Free.Credits</span>
          <span className="uppercase tracking-[0.2em]">Built to be shared</span>
        </footer>
      </div>
    </main>
  );
}
