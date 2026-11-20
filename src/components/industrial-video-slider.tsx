"use client";

import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { industrialVideos } from "@/content/industrial-videos";
import styles from "./industrial-video-slider.module.css";

const motionQuery = "(prefers-reduced-motion: reduce)";
const count = industrialVideos.length;

function subscribeToMotion(notify: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", notify);
  return () => query.removeEventListener("change", notify);
}

function subscribeToVisibility(notify: () => void) {
  document.addEventListener("visibilitychange", notify);
  return () => document.removeEventListener("visibilitychange", notify);
}

function prepareVideo(player: HTMLVideoElement) {
  if (!player.getAttribute("src") && player.dataset.source) player.src = player.dataset.source;
}

function startVideo(player: HTMLVideoElement) {
  player.muted = true;
  player.autoplay = true;
  prepareVideo(player);
  if (player.error) player.load();
  return player.play();
}

function stopVideo(player: HTMLVideoElement | null) {
  if (!player) return;
  player.autoplay = false;
  player.pause();
}

function playbackProblem(error: unknown) {
  if (error instanceof DOMException && error.name === "AbortError") return null;
  return error instanceof DOMException && error.name === "NotAllowedError" ? "blocked" : "unavailable";
}

export function IndustrialVideoSlider() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [userPlayback, setUserPlayback] = useState<boolean | null>(null);
  const [rendered, setRendered] = useState<number | null>(null);
  const [warmedFor, setWarmedFor] = useState<number | null>(null);
  const [problem, setProblem] = useState<"blocked" | "unavailable" | null>(null);
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const activePlayer = useRef<HTMLVideoElement>(null);
  const nextPlayer = useRef<HTMLVideoElement>(null);
  const reducedMotion = useSyncExternalStore(subscribeToMotion, () => window.matchMedia(motionQuery).matches, () => true);
  const tabVisible = useSyncExternalStore(subscribeToVisibility, () => !document.hidden, () => false);
  const clip = industrialVideos[active];
  const next = (active + 1) % count;
  const wantsPlayback = userPlayback ?? !reducedMotion;
  const shouldPlay = wantsPlayback && inView && tabVisible && !problem;

  useEffect(() => {
    section.current?.setAttribute("data-enhanced", "");
    const target = frame.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.intersectionRatio >= 0.15;
      if (!visible) stopVideo(activePlayer.current);
      setInView(visible);
    }, { threshold: 0.15 });
    const pauseWhenHidden = () => { if (document.hidden) stopVideo(activePlayer.current); };
    observer.observe(target);
    document.addEventListener("visibilitychange", pauseWhenHidden);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", pauseWhenHidden);
    };
  }, []);

  useEffect(() => {
    const player = activePlayer.current;
    if (!player || !shouldPlay) {
      stopVideo(player);
      return;
    }
    let cancelled = false;
    void startVideo(player).catch((error: unknown) => {
      const issue = playbackProblem(error);
      if (!cancelled && issue) setProblem(issue);
    });
    return () => {
      cancelled = true;
      stopVideo(player);
    };
  }, [active, shouldPlay]);

  useEffect(() => {
    if (shouldPlay && warmedFor === active && nextPlayer.current) prepareVideo(nextPlayer.current);
  }, [active, shouldPlay, warmedFor]);

  function selectSlide(index: number) {
    if (index === active) return;
    stopVideo(activePlayer.current);
    setRendered(null);
    setWarmedFor(null);
    setProblem(null);
    setActive(index);
  }

  function togglePlayback() {
    if (wantsPlayback && !problem) {
      stopVideo(activePlayer.current);
      setUserPlayback(false);
      return;
    }

    setProblem(null);
    setUserPlayback(true);
    const player = activePlayer.current;
    if (!player || !inView || document.hidden) return;
    // Start within the click handler as well for browsers that require a user gesture.
    void startVideo(player).catch((error: unknown) => {
      const issue = playbackProblem(error);
      if (activePlayer.current === player && issue) setProblem(issue);
    });
  }

  const playbackLabel = problem || (reducedMotion && userPlayback === null)
    ? "Play video"
    : wantsPlayback ? "Pause autoplay" : "Resume autoplay";
  const PlaybackIcon = wantsPlayback && !problem ? Pause : Play;

  return (
    <section ref={section} className={`section-space ${styles.section}`} aria-labelledby="industrial-video-heading">
      <div className="site-container">
        <h2 id="industrial-video-heading">Industrial Supply Portfolio</h2>

        <div className={styles.slider} role="group" aria-roledescription="carousel" aria-label="Industrial supply videos">
          <div ref={frame} className={styles.frame}>
            {industrialVideos.map(({ id, description, title }, index) => {
              const isActive = index === active;
              const poster = `/images/video-posters/${id}.webp`;
              return (
                <div key={id} className={styles.slide} data-active={isActive || undefined} aria-hidden={!isActive}>
                  <Image className={styles.poster} src={poster} alt={description} width={960} height={540} />
                  {(isActive || (index === next && warmedFor === active)) && (
                    <video
                      ref={isActive ? activePlayer : nextPlayer}
                      className={styles.video}
                      aria-label={title}
                      data-source={`/videos/industrial/${id}.mp4`}
                      data-playing-frame={isActive && rendered === index && !problem || undefined}
                      poster={poster}
                      preload={isActive ? "none" : "metadata"}
                      muted
                      playsInline
                      onPlaying={event => {
                        if (!isActive || document.hidden || !inView || !wantsPlayback) stopVideo(event.currentTarget);
                        else setRendered(index);
                      }}
                      onTimeUpdate={event => {
                        const { currentTime, duration } = event.currentTarget;
                        if (isActive && shouldPlay && duration - currentTime < 2.5) setWarmedFor(index);
                      }}
                      onEnded={() => { if (isActive && shouldPlay) selectSlide(next); }}
                      onError={() => { if (isActive) setProblem("unavailable"); }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className={styles.details}>
            <div aria-live={wantsPlayback && !problem ? "off" : "polite"} aria-atomic="true">
              <h3>{clip.title}</h3>
              <p>{clip.description}</p>
              {problem === "unavailable" && <p role="status">This video could not load.</p>}
            </div>
            <div className={`${styles.controls} ${styles.interactive}`}>
              <button type="button" className={styles.playback} aria-label={playbackLabel} onClick={togglePlayback}>
                <PlaybackIcon size={17} aria-hidden="true" />
                <span>{playbackLabel.split(" ")[0]}</span>
              </button>
              <button type="button" aria-label="Previous video" onClick={() => selectSlide((active + count - 1) % count)}>
                <ArrowLeft size={19} aria-hidden="true" />
              </button>
              <div className={styles.indicators} role="group" aria-label="Choose a video">
                {industrialVideos.map(({ id, title }, index) => (
                  <button
                    key={id}
                    type="button"
                    aria-label={`Video ${index + 1} of ${count}, ${title}`}
                    aria-current={index === active ? "true" : undefined}
                    onClick={() => selectSlide(index)}
                  >
                    <span />
                  </button>
                ))}
              </div>
              <button type="button" aria-label="Next video" onClick={() => selectSlide(next)}>
                <ArrowRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
