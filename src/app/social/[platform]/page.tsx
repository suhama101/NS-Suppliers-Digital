import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { SocialLink } from "@/components/social-link";
import { socialPlatforms } from "@/content/site";
import { makePageMetadata } from "@/lib/site-metadata";

const description = "Find NOSHIRWAN & SONS on this social platform.";
type SocialPageProps = { params: Promise<{ platform: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return socialPlatforms.map(({ id }) => ({ platform: id }));
}

async function getPlatform(params: SocialPageProps["params"]) {
  const { platform: id } = await params;
  const platform = socialPlatforms.find(entry => entry.id === id);
  if (!platform) notFound();
  return platform;
}

export async function generateMetadata({ params }: SocialPageProps): Promise<Metadata> {
  const { id, name } = await getPlatform(params);
  return {
    ...makePageMetadata({ path: `/social/${id}`, title: name, description }),
    robots: { index: false, follow: true },
  };
}

export default async function SocialPage({ params }: SocialPageProps) {
  const platform = await getPlatform(params);
  return (
    <PageShell title={platform.name} description={description}>
      <div className="shell-links">
        <SocialLink platform={platform} className="site-button button-gold" showName />
        <Link className="site-button button-gold" href="/">Back to Website</Link>
      </div>
    </PageShell>
  );
}
