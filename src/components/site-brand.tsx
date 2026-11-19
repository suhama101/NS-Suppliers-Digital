import Link from "next/link";
import { company } from "@/content/company";

export function SiteBrand() {
  return (
    <Link href="/" className="site-brand">
      <span className="brand-mark" aria-hidden="true">NS</span>
      <span>{company.name}</span>
    </Link>
  );
}
