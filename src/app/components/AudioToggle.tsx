import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";

const AUDIO_SRC = new URL("../../images/whispering.mp3", import.meta.url).href;

let sharedAudio: HTMLAudioElement | null = null;

function getSharedAudio() {
  if (!sharedAudio) {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.muted = true; // default muted on first load
    audio.preload = "auto";
    sharedAudio = audio;
  }
  return sharedAudio;
}

export function AudioToggle() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);

  React.useEffect(() => {
    const audio = getSharedAudio();
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolume = () => setIsMuted(audio.muted);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("volumechange", onVolume);

    // Sync initial UI state on mount
    setIsPlaying(!audio.paused);
    setIsMuted(audio.muted);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("volumechange", onVolume);
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.muted = false;
      setIsMuted(false);
      try {
        await audio.play();
      } catch {
        // Autoplay restrictions: keep it muted until user gesture succeeds
        audio.muted = true;
        setIsMuted(true);
      }
    } else {
      audio.pause();
    }
  };

  const label = isPlaying ? "Stop music" : "Play music";

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-6 left-6 z-[60] inline-flex items-center gap-3 rounded-full bg-white/70 dark:bg-[#0A1128]/70 backdrop-blur-xl border border-black/10 dark:border-white/15 px-5 py-3 text-[12px] font-semibold tracking-[0.22em] uppercase text-[#1D1D1F] dark:text-gray-100 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] hover:bg-white/90 dark:hover:bg-[#0A1128]/85 transition-colors"
      aria-label={label}
      title={label}
    >
      {isPlaying && !isMuted ? (
        <Volume2 className="w-4 h-4" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
      <span className="leading-none">{isPlaying ? "Music on" : "Music off"}</span>
    </button>
  );
}

