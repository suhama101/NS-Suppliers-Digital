"use client";

import { Contact, Mail, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { SocialLink } from "@/components/social-link";
import { businessContact, emailHref, socialPlatforms } from "@/content/site";
import styles from "./quick-contact.module.css";

function keepDockClear(details: HTMLDetailsElement, summary: HTMLElement) {
  const videoControls = document.querySelector('[aria-labelledby="industrial-video-heading"] [aria-label="Choose a video"]')?.parentElement;
  const footerLinks = document.querySelector(".footer-icons");
  let lift = 0;
  let frame = 0;
  details.style.removeProperty("--contact-lift");

  function update() {
    frame = 0;
    if (details.open) return;
    const dock = summary.getBoundingClientRect();
    const baseTop = dock.top + lift;
    let top = baseTop;
    const reserved = [videoControls, footerLinks].flatMap(area => area ? [area.getBoundingClientRect()] : []);
    for (const area of reserved.sort((a, b) => b.bottom - a.bottom)) {
      if (area.height && dock.right > area.left && dock.left < area.right && top < area.bottom + 6 && top + dock.height > area.top - 6) {
        top = area.top - dock.height - 6;
      }
    }
    const nextLift = Math.max(0, Math.min(baseTop - top, baseTop - 80));
    if (nextLift !== lift) {
      lift = nextLift;
      details.style.setProperty("--contact-lift", `${lift}px`);
    }
  }

  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  details.addEventListener("toggle", schedule);
  schedule();

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    details.removeEventListener("toggle", schedule);
  };
}

export function QuickContact() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const path = usePathname();

  useEffect(() => {
    const details = detailsRef.current;
    const summary = summaryRef.current;
    if (!details || !summary) return;
    details.open = false;
    details.dataset.enhanced = "";
    const clearDock = keepDockClear(details, summary);
    function dismissFromOutside(event: PointerEvent) {
      if (details?.open && event.target instanceof Node && !details.contains(event.target)) details.open = false;
    }
    document.addEventListener("pointerdown", dismissFromOutside);
    return () => {
      document.removeEventListener("pointerdown", dismissFromOutside);
      clearDock();
    };
  }, [path]);

  function close() {
    if (detailsRef.current) detailsRef.current.open = false;
    summaryRef.current?.focus({ preventScroll: true });
  }

  return (
    <details className={styles.widget} ref={detailsRef} onKeyDown={event => {
      if (event.key === "Escape" && detailsRef.current?.open) {
        event.preventDefault();
        close();
      }
    }}>
      <summary className={styles.toggle} ref={summaryRef} aria-label="Quick contact">
        <Contact size={22} aria-hidden="true" />
        <span>Contact</span>
      </summary>
      <div className={styles.panel}>
        <div className={styles.header}>
          <p>Quick contact</p>
          <button type="button" className={styles.close} onClick={close} aria-label="Close quick contact">
            <X size={19} aria-hidden="true" />
          </button>
        </div>
        <ul className={styles.actions} aria-label="Contact options" role="list">
          <li><a href={businessContact.phones[0].href} className={styles.action}><Phone size={20} aria-hidden="true" /> Call</a></li>
          <li><a href={emailHref} className={styles.action}><Mail size={20} aria-hidden="true" /> Email</a></li>
          {socialPlatforms.map(platform => (
            <li key={platform.id}><SocialLink platform={platform} className={styles.action} showName /></li>
          ))}
        </ul>
      </div>
    </details>
  );
}
