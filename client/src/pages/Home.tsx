
import { useEffect, useRef, useState } from "react";
import GalaxyScene, { AUDIO_URL, type GalaxyRunState } from "@/components/GalaxyScene";

const monthsarryLetter = `I’m sorry this is all I could offer for now. I know I’m not like the others who could buy you something special, but I made this with my heart just for you. I wanted to give you something true, personal, and meaningful because you deserve more than anything material.

If I ever get rich, I will give you everything you’ve ever wanted and more. I will do my best to make sure you feel loved, cared for, and treasured every single day. For now, this is all I can offer, but please know it comes from my heart and I made it special for you.

You mean so much to me, and I hope you can feel how much love and effort I put into this. Thank you for being in my life and for making every day brighter. I love you, and I hope this little surprise reminds you that my heart is always with you.`;

export default function Home() {
  const previewScene = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("scene") === "1";
  const previewTime = typeof window !== "undefined" ? Number(new URLSearchParams(window.location.search).get("sceneTime") ?? 0) : 0;
  const [runState, setRunState] = useState<GalaxyRunState>("idle");
  const [noteOpen, setNoteOpen] = useState(false);
  const [typedNote, setTypedNote] = useState("");
  const [hasRevealedLetter, setHasRevealedLetter] = useState(false);
  const [noteAvailable, setNoteAvailable] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const ensureAudioCanPlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.7;
    audio.muted = false;
    audio.play().catch(() => undefined);
    setAudioReady(true);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRunState("launch");
    }, 10000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.7;
    if (runState === "launch" && audioReady) {
      void audio.play().catch(() => undefined);
    }
  }, [runState, audioReady]);

  useEffect(() => {
    const enableAudioOnInteraction = () => {
      ensureAudioCanPlay();
    };

    window.addEventListener("pointerdown", enableAudioOnInteraction, { once: true });
    window.addEventListener("keydown", enableAudioOnInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", enableAudioOnInteraction);
      window.removeEventListener("keydown", enableAudioOnInteraction);
    };
  }, []);

  useEffect(() => {
    if (runState !== "launch") {
      setNoteAvailable(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setNoteAvailable(true);
    }, 17000);

    return () => window.clearTimeout(timer);
  }, [runState]);

  useEffect(() => {
    if (!noteOpen || runState !== "launch") {
      return;
    }

    if (hasRevealedLetter) {
      setTypedNote(monthsarryLetter);
      return;
    }

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedNote(monthsarryLetter.slice(0, index));
      if (index >= monthsarryLetter.length) {
        window.clearInterval(timer);
        setHasRevealedLetter(true);
      }
    }, 35);

    return () => window.clearInterval(timer);
  }, [noteOpen, runState, hasRevealedLetter]);

  return (
    <main className="for-my-world" data-scene-state={runState}>
      <style>{`
        @keyframes noteBlink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
      <GalaxyScene runState={runState} initialTime={previewScene ? previewTime : 0} />
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        loop
        preload="auto"
        aria-hidden="true"
        onCanPlay={() => setAudioReady(true)}
      />

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          pointerEvents: "none",
        }}
      >
        {runState === "launch" && noteAvailable && !noteOpen && (
          <button
            type="button"
            onClick={() => {
              setNoteOpen(true);
              if (!hasRevealedLetter) {
                setTypedNote("");
              }
            }}
            style={{
              position: "absolute",
              right: "max(12px, env(safe-area-inset-right))",
              bottom: "max(14px, env(safe-area-inset-bottom))",
              zIndex: 55,
              border: "1px solid rgba(255, 181, 214, 0.38)",
              background: "rgba(22, 12, 19, 0.72)",
              color: "#fff1f8",
              borderRadius: "999px",
              padding: "10px 16px",
              cursor: "pointer",
              fontFamily: '"Segoe Script", "Lucida Handwriting", cursive',
              fontSize: "clamp(12px, 3.2vw, 18px)",
              boxShadow: "0 14px 38px rgba(195, 98, 151, 0.22)",
              backdropFilter: "blur(12px)",
              pointerEvents: "auto",
              maxWidth: "calc(100vw - 24px)",
            }}
          >
            Read my note
          </button>
        )}

        {noteOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              background: "rgba(13, 7, 11, 0.54)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                width: "min(720px, 92vw)",
                maxHeight: "78vh",
                padding: "18px 16px 14px",
                borderRadius: "24px",
                background: "linear-gradient(135deg, rgba(255, 240, 246, 0.22), rgba(255, 214, 228, 0.09))",
                border: "1px solid rgba(255, 181, 214, 0.38)",
                boxShadow: "0 25px 70px rgba(195, 98, 151, 0.2)",
                color: "#fff1f8",
                fontFamily: '"Segoe Script", "Lucida Handwriting", cursive',
                lineHeight: 1.6,
                textShadow: "0 0 18px rgba(255, 170, 206, 0.6)",
                pointerEvents: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(18px, 4vw, 30px)",
                    fontWeight: 700,
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  Happy 2nd Monthsarry
                </div>

                <button
                  type="button"
                  onClick={() => setNoteOpen(false)}
                  aria-label="Close note"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff1f8",
                    borderRadius: "999px",
                    width: "34px",
                    height: "34px",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                >
                  ×
                </button>
              </div>

              <div
                style={{
                  maxHeight: "56vh",
                  overflowY: "auto",
                  paddingRight: "8px",
                  whiteSpace: "pre-line",
                  textAlign: "center",
                  fontSize: "clamp(16px, 3.6vw, 28px)",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,180,214,0.7) transparent",
                }}
              >
                <div aria-live="polite" style={{ minHeight: "120px" }}>
                  {typedNote}
                  {!hasRevealedLetter && !typedNote && <span style={{ opacity: 0.5 }}>Click again to start typing…</span>}
                  {!hasRevealedLetter && typedNote && <span style={{ display: "inline-block", width: "0.34em", animation: "noteBlink 0.8s infinite" }}>|</span>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
