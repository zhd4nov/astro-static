export type SiteIdentity = Readonly<{
  name: string;
  purpose: string;
}>;

export const siteIdentity: SiteIdentity = {
  name: "Astro Static Template",
  purpose: "шаблон статического сайта",
};

export function formatSiteTitle(identity: SiteIdentity): string {
  return `${identity.name} — ${identity.purpose}`;
}
