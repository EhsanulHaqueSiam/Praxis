import { useState } from "react";
import { ArrowRight, X as XIcon } from "@phosphor-icons/react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-[60] bg-zinc-900/80 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse shrink-0" />
        <p className="text-xs text-zinc-400">
          <span className="text-accent-400 font-semibold">New:</span>{" "}
          AI-powered code reviews now available
        </p>
        <a
          href="/courses"
          className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white transition-colors ml-1"
        >
          Learn more <ArrowRight size={10} />
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 p-1 text-zinc-600 hover:text-zinc-400 transition-colors"
          aria-label="Dismiss"
        >
          <XIcon size={12} weight="bold" />
        </button>
      </div>
    </div>
  );
}
