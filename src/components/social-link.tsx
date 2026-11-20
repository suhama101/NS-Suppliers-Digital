import Link from "next/link";
import { SocialIcon } from "@/components/social-icon";
import type { SocialPlatform } from "@/content/site";

export function SocialLink({ platform, className, showName = false }: {
  platform: SocialPlatform;
  className: string;
  showName?: boolean;
}) {
  const { id, name, officialUrl } = platform;
  const children = (
    <>
      <SocialIcon id={id} />
      <span className={showName ? undefined : "sr-only"}>{name}</span>
      {officialUrl && <span className="sr-only"> (opens in a new tab)</span>}
    </>
  );

  if (officialUrl) {
    return <a className={className} href={officialUrl} target="_blank" rel="noopener noreferrer" data-platform={id}>{children}</a>;
  }
  return <Link className={className} href={`/social/${id}`} prefetch={false} data-platform={id}>{children}</Link>;
}
