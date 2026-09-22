"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { skillsData, type Skill } from "@/data/skills"
import { useState } from "react"

// Split the flat skill list into three marquee rows of roughly equal length,
// preserving the category order from skills.ts.
const rowCount = 3
const rowSize = Math.ceil(skillsData.length / rowCount)
const skillRows: Skill[][] = Array.from({ length: rowCount }, (_, i) =>
  skillsData.slice(i * rowSize, (i + 1) * rowSize)
)

// Function to get icon URL based on source
const getIconUrl = (skill: Skill) => {
  if (skill.iconSource === "fallback") {
    return null
  }
  if (skill.iconSource === "url") {
    return skill.icon
  }
  if (skill.iconSource === "devicon") {
    // Special case for AWS - use plain-wordmark variant
    if (skill.icon === "amazonwebservices") {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain-wordmark.svg`
    }
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`
  }
  // simpleicons
  return `https://cdn.simpleicons.org/${skill.icon}`
}

function SkillChip({
  skill,
  hasError,
  onImageError,
}: {
  skill: Skill
  hasError: boolean
  onImageError: (name: string) => void
}) {
  const iconUrl = getIconUrl(skill)

  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-card shadow-sm whitespace-nowrap">
      {iconUrl && !hasError ? (
        <Image
          src={iconUrl}
          alt=""
          width={28}
          height={28}
          className="w-7 h-7 object-contain"
          onError={() => onImageError(skill.name)}
          unoptimized
        />
      ) : (
        <span className="w-7 h-7 flex items-center justify-center text-xs font-bold text-primary bg-primary/10 rounded">
          {skill.name === "CSS3" ? "CSS" : skill.name === "AWS" ? "AWS" : skill.name.substring(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  )
}

export function Skills() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (skillName: string) => {
    setImageErrors(prev => new Set(prev).add(skillName))
  }

  return (
    <section id="skills" className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What I build with, day to day.
          </p>
        </motion.div>
      </div>

      <div className="space-y-6">
        {skillRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="marquee-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          >
            <div
              className={`marquee-track flex w-max gap-4 pr-4 ${rowIndex % 2 === 1 ? "marquee-reverse" : ""}`}
            >
              {/* Content is doubled so the -50% translate loops seamlessly. The
                  second copy is hidden from assistive tech so screen readers
                  don't announce every skill twice. */}
              {[0, 1].map((copy) => (
                <div key={copy} className="flex gap-4" aria-hidden={copy === 1}>
                  {row.map((skill) => (
                    <SkillChip
                      key={`${skill.name}-${copy}`}
                      skill={skill}
                      hasError={imageErrors.has(skill.name)}
                      onImageError={handleImageError}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
