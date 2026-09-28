import type { MetadataRoute } from "next";

const BASE = "https://www.lococlinic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: "", priority: 1.0 },
    { path: "/mental", priority: 0.9 },
    { path: "/privacy-policy", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    priority,
  }));
}
