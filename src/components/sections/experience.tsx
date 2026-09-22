"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { experienceData } from "@/data/experience"
import { TechTag } from "@/components/tech-tag"
import { Briefcase, Calendar, MapPin, type LucideIcon } from "lucide-react"

// Each company's real logo, sourced directly (Wikimedia Commons for most, plus
// Chalkline's own inline favicon SVG) rather than Google's favicon proxy —
// favicons only serve ~64px, which looked blurry once the header got bigger.
const companyIconSrc: Record<string, string> = {
  IBM: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "Chalkline":
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%2307100E'/%3E%3Ccircle cx='16' cy='16' r='10.5' fill='none' stroke='%23A6F0B5' stroke-width='1.4' stroke-dasharray='0 2.6' stroke-linecap='round' opacity='0.55'/%3E%3Cpath d='M10 16.6 L14.3 20.8 L22.4 11.2' fill='none' stroke='%236FE38A' stroke-width='2.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
  // Booz Allen's and Vanderbilt's full wordmarks are too wide to read inside a
  // square tile, so use their square favicon marks instead.
  "Booz Allen Hamilton": "https://www.google.com/s2/favicons?domain=boozallen.com&sz=128",
  "Jacobs": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Jacobs_Engineering_Group_2019_logo.svg",
  "Vanderbilt School of Engineering": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vanderbilt_University_logo.svg",
}

// Wide wordmark logos cropped to just their emblem inside the tile. The value
// is the emblem's measured aspect ratio; the crop shows that leftmost region
// centered in the tile instead of letterboxing the full wordmark.
const companyIconCrop: Record<string, string> = {
  // Vanderbilt's shield spans the first 92px of the 300x65 wordmark
  "Vanderbilt School of Engineering": "aspect-[92/65]",
}

function CompanyLogo({ company }: { company: string }) {
  const [imageError, setImageError] = useState(false)
  const src = companyIconSrc[company]
  const crop = companyIconCrop[company]

  if (src && !imageError) {
    return (
      <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-white border border-border shadow-sm overflow-hidden flex-shrink-0 p-3 flex items-center">
        <div className={`relative w-full overflow-hidden ${crop ?? "h-full"}`}>
          <Image
            src={src}
            alt={company}
            fill
            className={crop ? "object-cover object-left" : "object-contain"}
            unoptimized
            onError={() => setImageError(true)}
          />
        </div>
      </div>
    )
  }

  const FallbackIcon: LucideIcon = Briefcase

  return (
    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-white border border-border shadow-sm text-primary flex items-center justify-center flex-shrink-0">
      <FallbackIcon className="w-10 h-10" />
    </div>
  )
}

export function Experience() {
  const [expandedTags, setExpandedTags] = useState<Set<string>>(new Set())

  const toggleTags = (id: string) => {
    setExpandedTags((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Work Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Where I've worked, most recent first.
          </p>
        </motion.div>

        {experienceData.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {experienceData.map((exp) => (
              <motion.div key={exp.id} variants={itemVariants}>
                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/40">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex gap-4 sm:gap-5">
                      <CompanyLogo company={exp.company} />

                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-semibold leading-tight">{exp.company}</h3>
                            <p className="text-muted-foreground leading-tight mt-0.5">{exp.title}</p>
                          </div>
                          {exp.current && (
                            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium flex-shrink-0">
                              Current
                            </span>
                          )}
                        </div>

                        <p className="text-sm text-foreground leading-relaxed">{exp.description}</p>

                        {exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {(expandedTags.has(exp.id)
                              ? exp.technologies
                              : exp.technologies.slice(0, 6)
                            ).map((tech) => (
                              <TechTag key={tech} tech={tech} />
                            ))}
                            {exp.technologies.length > 6 && (
                              <button
                                type="button"
                                onClick={() => toggleTags(exp.id)}
                                className="inline-flex items-center min-h-6 px-2.5 text-xs text-muted-foreground border border-border rounded-full hover:bg-accent hover:text-foreground transition-colors"
                                aria-expanded={expandedTags.has(exp.id)}
                              >
                                {expandedTags.has(exp.id)
                                  ? "Show less"
                                  : `+${exp.technologies.length - 6} more`}
                              </button>
                            )}
                          </div>
                        )}

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2 text-xs text-muted-foreground border-t border-border/60 mt-3 [&>*]:mt-2">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  No work experience added yet. Add your experience to showcase your professional journey!
                </p>
                <p className="text-sm text-muted-foreground">
                  Edit <code className="bg-secondary px-2 py-1 rounded">src/data/experience.ts</code> to add your work history.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}
