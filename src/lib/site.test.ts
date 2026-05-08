import { describe, expect, it } from "vitest";

import { formatSiteTitle, siteIdentity } from "./site";

describe("siteIdentity", () => {
  it("formats the site title", () => {
    expect(formatSiteTitle(siteIdentity)).toBe(
      "Astro Static Template — шаблон статического сайта",
    );
  });
});
