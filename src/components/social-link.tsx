import { SocialIcon } from "@/components/social-icon";
import type { SocialPlatform } from "@/content/site";

export function SocialLink({ platform, className, showName = false }: {
  platform: SocialPlatform;
  className: string;
  showName?: boolean;
}) {
  const { id, name, officialUrl } = platform;
  return (
    <a className={className} href={officialUrl} target="_blank" rel="noopener noreferrer" data-platform={id}>
      <SocialIcon id={id} />
      <span className={showName ? undefined : "sr-only"}>{name}</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
