"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./about-hero-video.module.css";

const poster = "/images/video-posters/handling.webp";
const clip = "/videos/industrial/handling.mp4";

export function AboutHeroVideo() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = video.current;
    if (!player || typeof IntersectionObserver === "undefined") return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    let attempt = 0;
    const canPlay = () => inView && !motion.matches && !document.hidden;

    function update() {
      if (!player) return;
      const token = ++attempt;
      const shouldPlay = canPlay();
      player.autoplay = shouldPlay;
      if (!shouldPlay) {
        player.pause();
        delete player.dataset.playing;
        return;
      }
      player.muted = true;
      if (!player.getAttribute("src")) player.src = clip;
      void player.play().catch(() => {
        if (token === attempt) delete player.dataset.playing;
      });
    }

    function showVideo() {
      if (player && canPlay()) player.dataset.playing = "";
    }
    function showPoster() {
      if (player) delete player.dataset.playing;
    }

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(player);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    player.addEventListener("playing", showVideo);
    player.addEventListener("error", showPoster);
    return () => {
      ++attempt;
      observer.disconnect();
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      player.removeEventListener("playing", showVideo);
      player.removeEventListener("error", showPoster);
      player.autoplay = false;
      player.pause();
    };
  }, []);

  return (
    <div className={styles.media} aria-hidden="true" data-about-hero-video>
      <Image src={poster} alt="" width={960} height={540} loading="eager" fetchPriority="high" />
      <video ref={video} muted playsInline loop preload="none" />
    </div>
  );
}
