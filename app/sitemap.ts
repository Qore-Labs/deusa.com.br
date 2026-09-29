import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/src/utils/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_CONFIG.baseUrl, changeFrequency: "monthly", priority: 1 }];
}
