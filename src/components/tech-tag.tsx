"use client"

import { useState } from "react"
import Image from "next/image"

// Icon source for technologies/tools that have a real logo. Anything not
// listed here (concepts like "Agentic AI", "Automation", or "Pre-Sales")
// just renders as a plain text tag — there's no logo to show for those.
const techIcons: Record<string, { source: "devicon" | "simpleicons"; slug: string }> = {
  "Python": { source: "devicon", slug: "python" },
  "C++": { source: "devicon", slug: "cplusplus" },
  "TypeScript": { source: "devicon", slug: "typescript" },
  "JavaScript": { source: "devicon", slug: "javascript" },
  "React": { source: "devicon", slug: "react" },
  "Next.js": { source: "devicon", slug: "nextjs" },
  "Node.js": { source: "devicon", slug: "nodejs" },
  "FastAPI": { source: "simpleicons", slug: "fastapi" },
  "Firebase": { source: "devicon", slug: "firebase" },
  "PostgreSQL": { source: "devicon", slug: "postgresql" },
  "Qt": { source: "devicon", slug: "qt" },
  "Salesforce": { source: "devicon", slug: "salesforce" },
  "Slack": { source: "devicon", slug: "slack" },
  "Auth0": { source: "simpleicons", slug: "auth0" },
  "Kubernetes": { source: "devicon", slug: "kubernetes" },
  "Docker": { source: "devicon", slug: "docker" },
  "GitLab": { source: "devicon", slug: "gitlab" },
  "Terraform": { source: "devicon", slug: "terraform" },
  "Vault": { source: "simpleicons", slug: "vault" },
  "MongoDB": { source: "devicon", slug: "mongodb" },
  "PyQt6": { source: "devicon", slug: "qt" },
}

function getTechIconUrl(slug: string, source: "devicon" | "simpleicons") {
  if (source === "devicon") {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`
  }
  return `https://cdn.simpleicons.org/${slug}`
}

export function TechTag({ tech }: { tech: string }) {
  const [imageError, setImageError] = useState(false)
  const icon = techIcons[tech]

  if (icon && !imageError) {
    return (
      <span className="flex items-center gap-1.5 px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
        <Image
          src={getTechIconUrl(icon.slug, icon.source)}
          alt=""
          width={14}
          height={14}
          className="object-contain"
          unoptimized
          onError={() => setImageError(true)}
        />
        {tech}
      </span>
    )
  }

  return (
    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
      {tech}
    </span>
  )
}
