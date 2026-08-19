import type { MetadataRoute } from "next";
import { COLUMNS } from "@/lib/columns";

const BASE = "https://www.lococlinic.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/thread-lift", priority: 0.9 },
    { path: "/price", priority: 0.9 },
    { path: "/column", priority: 0.8 },
    { path: "/case", priority: 0.8 },
    { path: "/guide", priority: 0.7 },
    { path: "/doctor", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
    { path: "/menu", priority: 0.7 },
    { path: "/concerns", priority: 0.7 },
    { path: "/artmake", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/campaign", priority: 0.5 },
    { path: "/news", priority: 0.4 },
    { path: "/cancel-policy", priority: 0.3 },
    { path: "/privacy-policy", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    priority,
  }));

  const columnPages = COLUMNS.map((c) => ({
    url: `${BASE}/column/${c.slug}`,
    lastModified: new Date(c.date.replaceAll(".", "-")),
    priority: 0.8,
  }));

  return [...staticPages, ...columnPages];
}
