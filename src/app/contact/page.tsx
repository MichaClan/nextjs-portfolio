"use client";

import { useState } from "react";
// 1. Remove Github from lucide-react import
import { Mail, Check, Copy } from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "mihhailoleinikov@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      {/* Header Banner */}
      <section className="rounded-lg bg-nav px-6 py-12 text-center text-nav-fg">
        <h1 className="text-4xl font-light md:text-5xl">Contact</h1>
        <p className="mt-2 text-lg text-nav-muted">
          Let&apos;s build something together or just say hello
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Direct Reach Out Card */}
        <div className="rounded-lg border border-border bg-card p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-light">Get in touch</h2>


          {/* Quick Copy Email Box */}
          <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" />
              <span className="text-sm font-mono truncate">{email}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded bg-accent/10 px-3 py-1.5 text-xs font-mono font-medium text-accent hover:bg-accent/20 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-muted mb-3">
              Other Platforms
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/MichaClan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-nav hover:text-nav-fg"
              >
                {/* Inline GitHub SVG Icon */}
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Form Layout */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-lg border border-border bg-card p-6 md:p-8 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1.5">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border border-border bg-background px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-border bg-background px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              rows={4}
              placeholder="What's on your mind?"
              className="w-full rounded-md border border-border bg-background px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-nav px-4 py-2.5 text-sm font-medium text-nav-fg hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}