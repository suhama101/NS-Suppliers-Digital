import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/company";

export function SiteBrand() {
  return (
    <Link href="/" className="site-brand">
      <Image className="profile-brand-mark" src="/images/ns-profile-mark.png" width={60} height={36} alt="" />
      <span>{company.name}</span>
    </Link>
  );
}
