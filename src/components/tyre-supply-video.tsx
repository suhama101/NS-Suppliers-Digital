"use client";

import { useEffect, useRef } from "react";
import { EditorialPhoto } from "@/components/editorial-photo";
import { tyreImage } from "@/content/editorial-images";
import styles from "./tyre-supply-video.module.css";

const clip = "/videos/industrial/truck-tyres.mp4";
const visibleThreshold = 0.15;

export function TyreSupplyVideo() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = video.current;
    if (!player || typeof IntersectionObserver === "undefined") return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const canPlay = () => visible && !motion.matches && !document.hidden;
    const showPoster = () => { delete player.dataset.playing; };
    const showVideo = () => {
      if (canPlay()) player.dataset.playing = "";
    };

    const update = () => {
      player.autoplay = canPlay();
      if (!player.autoplay) {
        player.pause();
        showPoster();
        return;
      }

      player.muted = true;
      if (!player.hasAttribute("src")) player.src = clip;
      void player.play().catch(() => {
        if (player.paused) showPoster();
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.intersectionRatio >= visibleThreshold;
      update();
    }, { threshold: visibleThreshold });
    observer.observe(player);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    player.addEventListener("playing", showVideo);
    player.addEventListener("pause", showPoster);
    player.addEventListener("error", showPoster);

    return () => {
      observer.disconnect();
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      player.removeEventListener("playing", showVideo);
      player.removeEventListener("pause", showPoster);
      player.removeEventListener("error", showPoster);
      player.autoplay = false;
      player.pause();
    };
  }, []);

  return (
    <div className={`tyre-photo ${styles.media}`}>
      <EditorialPhoto image={tyreImage} square />
      <video ref={video} aria-hidden="true" muted playsInline loop preload="none" />
    </div>
  );
}
