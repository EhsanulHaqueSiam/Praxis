import { useState, useEffect } from "react";
import { Button } from "@lumina/ui";
import { X as XIcon } from "@phosphor-icons/react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("cookie-consent");
    if (!dismissed) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    setShow(false);
    sessionStorage.setItem("cookie-consent", "1");
  }

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 glass-dark rounded-2xl p-4 flex items-center gap-3 transition-all duration-500"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <p className="text-xs text-zinc-400 flex-1 leading-relaxed">
        We use cookies for analytics and to improve your experience.
      </p>
      <div className="flex items-center gap-2 shrink-0">
        <Button size="sm" onClick={dismiss} className="text-xs h-7 px-3">
          Accept
        </Button>
        <button
          onClick={dismiss}
          className="h-7 w-7 rounded-lg flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors"
          aria-label="Dismiss"
        >
          <XIcon size={12} weight="bold" />
        </button>
      </div>
    </div>
  );
}
