import Link from "next/link";
import type { ReactNode } from "react";

export function PageShell({
  title,
  description,
  backToServices,
  children,
}: {
  title: string;
  description: string;
  backToServices?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="page-shell section-space" aria-labelledby="page-title">
      <div className="site-container">
        {backToServices && <Link href="/services" className="text-link">All services</Link>}
        <h1 id="page-title">{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
