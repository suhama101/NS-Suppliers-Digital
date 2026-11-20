"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SiteBrand } from "@/components/site-brand";
import { navigation } from "@/content/site";
import { serviceHref, services } from "@/content/services";

export function SiteHeader() {
  const pathname = usePathname();
  return <HeaderNavigation key={pathname} pathname={pathname} />;
}

function HeaderNavigation({ pathname }: { pathname: string }) {
  const home = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const servicesGroup = useRef<HTMLLIElement>(null);
  const menuToggle = useRef<HTMLButtonElement>(null);
  const servicesToggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const element = header.current;
    if (!element) return;

    element.setAttribute("data-enhanced", "true");
    if (!home) return;

    const updateSurface = () => element.toggleAttribute("data-scrolled", window.scrollY >= 32);

    updateSurface();
    window.addEventListener("scroll", updateSurface, { passive: true });
    window.addEventListener("pageshow", updateSurface);
    return () => {
      window.removeEventListener("scroll", updateSurface);
      window.removeEventListener("pageshow", updateSurface);
    };
  }, [home]);

  function closeNavigation() {
    setMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;

    function handlePointer(event: PointerEvent) {
      if (!(event.target instanceof Node)) return;
      if (!header.current?.contains(event.target)) setMenuOpen(false);
      if (!servicesGroup.current?.contains(event.target)) setServicesOpen(false);
    }

    document.addEventListener("pointerdown", handlePointer);
    return () => document.removeEventListener("pointerdown", handlePointer);
  }, [menuOpen, servicesOpen]);

  return (
    <header
      className="site-header"
      data-home={home || undefined}
      ref={header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeNavigation();
      }}
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
          closeNavigation();
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (servicesOpen) {
          setServicesOpen(false);
          servicesToggle.current?.focus();
        } else if (menuOpen) {
          closeNavigation();
          menuToggle.current?.focus();
        } else {
          return;
        }
        event.preventDefault();
      }}
    >
      <div className="site-container header-inner">
        <SiteBrand />
        <details className="mobile-navigation-fallback">
          <summary className="menu-toggle" aria-label="Site navigation">
            <Menu aria-hidden="true" />
          </summary>
          <nav className="primary-nav" aria-label="Mobile navigation">
            <ul className="primary-links">
              {navigation.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={href === "/contact" ? "site-button button-gold nav-contact" : "nav-link"}
                    aria-current={pathname === href ? "page" : undefined}
                    prefetch={false}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
        <button
          type="button"
          className="menu-toggle"
          ref={menuToggle}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setServicesOpen(false);
          }}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className="primary-nav"
          data-open={menuOpen}
        >
          <ul className="primary-links">
            {navigation.map(({ href, label }) => {
              const current = pathname === href;
              if (href === "/services") {
                return (
                  <li
                    key={href}
                    className="services-nav"
                    ref={servicesGroup}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) {
                        setServicesOpen(false);
                      }
                    }}
                  >
                    <div className="services-trigger" data-current={current || pathname.startsWith("/services/")}>
                      <Link href={href} className="nav-link" aria-current={current ? "page" : undefined}>{label}</Link>
                      <button
                        type="button"
                        aria-label={servicesOpen ? "Hide service pages" : "Show service pages"}
                        aria-expanded={servicesOpen}
                        aria-controls="service-pages"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        ref={servicesToggle}
                      >
                        <ChevronDown size={17} aria-hidden="true" />
                      </button>
                    </div>
                    <ul className="services-dropdown" id="service-pages" hidden={!servicesOpen}>
                      {services.map(({ slug, title, pendingApproval }) => {
                        const destination = serviceHref(slug);
                        return (
                          <li key={slug}>
                            <Link href={destination} aria-current={pathname === destination ? "page" : undefined}>
                              {title}
                              {pendingApproval && <small className="service-pending">Scope pending approval</small>}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={href === "/contact" ? "site-button button-gold nav-contact" : "nav-link"}
                    aria-current={current ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
