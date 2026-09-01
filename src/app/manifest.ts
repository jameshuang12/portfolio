import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "James Huang | Platform Engineer @ IBM",
    short_name: "James Huang",
    description: "Portfolio of James Huang, a Platform Engineer at IBM specializing in hybrid-cloud infrastructure, Generative AI, and enterprise solutions.",
    start_url: "/portfolio/",
    scope: "/portfolio/",
    display: "standalone",
    background_color: "#fbf6d9",
    theme_color: "#000000",
    icons: [
      {
        src: "/portfolio/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
