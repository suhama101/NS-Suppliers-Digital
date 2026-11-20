"use client";

import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { industrialVideos } from "@/content/industrial-videos";
import styles from "./industrial-video-slider.module.css";

export function IndustrialVideoSlider() {
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const clip = industrialVideos[active];
  const poster = `/images/video-posters/${clip.id}.webp`;
  const count = industrialVideos.length;

  useEffect(() => {
    section.current?.setAttribute("data-enhanced", "");
    const playerFrame = frame.current;
    const pauseWhenHidden = () => {
      if (document.hidden) video.current?.pause();
    };
    document.addEventListener("visibilitychange", pauseWhenHidden);
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.current?.pause();
    });
    if (playerFrame) observer?.observe(playerFrame);
    return () => {
      document.removeEventListener("visibilitychange", pauseWhenHidden);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (started && !failed) video.current?.focus({ preventScroll: true });
  }, [started, failed]);

  function selectSlide(index: number) {
    if (index === active) return;
    video.current?.pause();
    setStarted(false);
    setFailed(false);
    setActive(index);
  }

  function play() {
    const player = video.current;
    if (!player) return;
    setFailed(false);
    setStarted(true);
    player.src = `/videos/industrial/${clip.id}.mp4`;
    void player.play().catch((error: unknown) => {
      if (video.current !== player || (error instanceof DOMException && error.name === "AbortError")) return;
      setFailed(true);
    });
  }

  return (
    <section ref={section} className={`section-space ${styles.section}`} aria-labelledby="industrial-video-heading">
      <div className="site-container">
        <h2 id="industrial-video-heading">Industrial Supply Portfolio</h2>
        <p className={styles.context}>Illustrative stock footage</p>

        <div className={styles.slider} role="group" aria-roledescription="carousel" aria-label="Industrial supply videos">
          <div ref={frame} className={styles.frame}>
            {(!started || failed) && (
              <Image className={styles.poster} src={poster} alt={clip.description} width={960} height={540} />
            )}
            <video
              key={clip.id}
              ref={video}
              aria-label={clip.title}
              className={styles.video}
              hidden={!started || failed}
              poster={started ? poster : undefined}
              preload="none"
              muted
              playsInline
              controls
              tabIndex={0}
              onError={() => setFailed(true)}
              onPlay={() => { if (document.hidden) video.current?.pause(); }}
            />
            {(!started || failed) && (
              <button className={`${styles.play} ${styles.interactive}`} type="button" aria-label={`Play ${clip.title}`} onClick={play}>
                <Play size={26} fill="currentColor" aria-hidden="true" />
              </button>
            )}
            {failed && <p className={styles.error} role="status">This video is unavailable.</p>}
          </div>

          <div className={styles.details}>
            <div aria-live="polite" aria-atomic="true">
              <h3>{clip.title}</h3>
              <p>{clip.description}</p>
            </div>
            <div className={`${styles.controls} ${styles.interactive}`}>
              <button type="button" aria-label="Previous video" onClick={() => selectSlide((active + count - 1) % count)}>
                <ArrowLeft size={21} aria-hidden="true" />
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
              <button type="button" aria-label="Next video" onClick={() => selectSlide((active + 1) % count)}>
                <ArrowRight size={21} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
