import type { MetadataRoute } from "next"

const baseUrl = "https://www.codingbunker.it"
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/en",
    "/events",
    "/hacktoberfest",
    "/impatto-milano",
    "/partners",
    "/partners/past",
    "/press",
    "/staff",
    "/aiuta-la-community",
    "/about-us",
    "/code-of-conduct",
    "/contatti",
    "/contact",
  ]
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "/" || route === "/events" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/events" ? 0.9 : 0.7,
  }))
}
