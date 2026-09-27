// src/components/ProjectVisual.jsx
import { BarChart3, Bot, Search, Send, ShoppingBag, Sparkles, User } from 'lucide-react';

/**
 * Abstract, code-drawn previews for each project — no stock imagery.
 */
export default function ProjectVisual({ variant }) {
  if (variant === 'ecommerce') {
    return (
      <div className="flex h-full w-full items-center justify-center p-6">
        <div className="w-full max-w-[320px] rounded-2xl border border-ink/10 bg-offwhite p-4 shadow-soft">
          <div className="flex items-center gap-2 pb-3">
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <div className="ml-2 flex flex-1 items-center gap-2 rounded-full bg-ink/[0.04] px-3 py-1.5">
              <Search className="h-3 w-3 text-ink/35" />
              <span className="font-mono text-[9px] text-ink/35">search groceries</span>
            </div>
            <div className="relative">
              <ShoppingBag className="h-4 w-4 text-ink/50" />
              <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent font-mono text-[7px] text-white">
                3
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="rounded-xl border border-ink/8 bg-white p-2">
                <div className="h-10 rounded-lg bg-accent/12" />
                <div className="mt-2 h-1.5 w-3/4 rounded-full bg-ink/10" />
                <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-accent/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'chat') {
    return (
      <div className="flex h-full w-full items-center justify-center p-6">
        <div className="w-full max-w-[300px] space-y-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15">
              <User className="h-3.5 w-3.5 text-accent" />
            </span>
            <div className="h-1.5 w-20 rounded-full bg-ink/12" />
          </div>
          <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-ink px-3.5 py-2.5">
            <div className="h-1.5 w-24 rounded-full bg-offwhite/60" />
            <div className="mt-2 h-1.5 w-16 rounded-full bg-offwhite/30" />
          </div>
          <div className="max-w-[75%] rounded-2xl rounded-bl-sm border border-ink/10 bg-offwhite px-3.5 py-2.5">
            <div className="h-1.5 w-28 rounded-full bg-ink/15" />
            <div className="mt-2 h-1.5 w-20 rounded-full bg-ink/10" />
          </div>
          <div className="ml-auto max-w-[60%] rounded-2xl rounded-br-sm bg-accent px-3.5 py-2.5">
            <div className="h-1.5 w-16 rounded-full bg-white/70" />
          </div>
          <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-offwhite px-3 py-2">
            <span className="flex-1 font-mono text-[9px] text-ink/30">type a message…</span>
            <Send className="h-3.5 w-3.5 text-accent" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'erp') {
    return (
      <div className="flex h-full w-full items-center justify-center p-6">
        <div className="flex w-full max-w-[340px] gap-2">
          <div className="hidden w-14 flex-col gap-2 rounded-2xl border border-ink/10 bg-offwhite p-2.5 sm:flex">
            {[0, 1, 2, 3].map((item) => (
              <div
                key={item}
                className={`h-6 rounded-lg ${item === 0 ? 'bg-accent/25' : 'bg-ink/[0.05]'}`}
              />
            ))}
          </div>
          <div className="flex-1 rounded-2xl border border-ink/10 bg-offwhite p-3.5">
            <div className="flex items-center justify-between">
              <div className="h-1.5 w-16 rounded-full bg-ink/15" />
              <BarChart3 className="h-3.5 w-3.5 text-accent" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((item) => (
                <div key={item} className="rounded-xl bg-accent/10 p-2">
                  <div className="h-1.5 w-6 rounded-full bg-accent/60" />
                  <div className="mt-1.5 h-1 w-9 rounded-full bg-ink/12" />
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              {[0, 1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-ink/8 bg-white px-2 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                  <span className="h-1.5 flex-1 rounded-full bg-ink/8" />
                  <span className="h-1.5 w-6 rounded-full bg-ink/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AI / RAG
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="w-full max-w-[320px] rounded-2xl border border-ink/10 bg-ink p-4 shadow-lift">
        <div className="flex items-center gap-2 pb-3">
          <Bot className="h-4 w-4 text-accent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-offwhite/60">
            ERP Assistant
          </span>
        </div>
        <div className="space-y-2.5">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-offwhite/10 px-3 py-2">
            <p className="font-mono text-[9.5px] leading-relaxed text-offwhite/80">
              Show me today&apos;s attendance summary.
            </p>
          </div>
          <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-accent/30 bg-accent/12 px-3 py-2">
            <p className="flex items-center gap-2 font-mono text-[9.5px] leading-relaxed text-accent">
              <Sparkles className="h-3 w-3" />
              Retrieving the latest attendance data…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}