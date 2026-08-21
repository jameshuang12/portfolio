"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { experienceData } from "@/data/experience"
import { TechTag } from "@/components/tech-tag"
import { Briefcase, type LucideIcon } from "lucide-react"

// Each company's real logo, sourced directly (Wikimedia Commons for most, plus
// Chalkline's own inline favicon SVG) rather than Google's favicon proxy —
// favicons only serve ~64px, which looked blurry once the header got bigger.
const companyIconSrc: Record<string, string> = {
  IBM: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "Chalkline":
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%2307100E'/%3E%3Ccircle cx='16' cy='16' r='10.5' fill='none' stroke='%23A6F0B5' stroke-width='1.4' stroke-dasharray='0 2.6' stroke-linecap='round' opacity='0.55'/%3E%3Cpath d='M10 16.6 L14.3 20.8 L22.4 11.2' fill='none' stroke='%236FE38A' stroke-width='2.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
  "Booz Allen Hamilton": "https://upload.wikimedia.org/wikipedia/commons/8/83/Booz_Allen_Hamilton_logo.svg",
  "Jacobs": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Jacobs_Engineering_Group_2019_logo.svg",
  "Vanderbilt School of Engineering": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vanderbilt_University_logo.svg",
}

function CompanyVisual({ company }: { company: string }) {
  const [imageError, setImageError] = useState(false)
  const src = companyIconSrc[company]

  if (src && !imageError) {
    return (
      <div className="relative w-full h-full bg-white p-8">
        <Image
          src={src}
          alt={company}
          fill
          className="object-contain p-2"
          unoptimized
          onError={() => setImageError(true)}
        />
      </div>
    )
  }

  const FallbackIcon: LucideIcon = Briefcase

  return (
    <div className="w-full h-full bg-white text-primary flex items-center justify-center">
      <FallbackIcon className="w-12 h-12" />
    </div>
  )
}

export function Experience() {
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
            My professional journey and key accomplishments
          </p>
        </motion.div>

        {experienceData.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {experienceData.map((exp) => (
              <motion.div key={exp.id} variants={itemVariants} className="h-full">
                <Card className="h-full flex flex-col overflow-hidden">
                  {/* Visual header */}
                  <div className="relative h-36">
                    <CompanyVisual company={exp.company} />
                    {exp.current && (
                      <span className="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <CardContent className="p-5 flex-1 flex flex-col gap-3">
                    <div>
                      <p className="font-semibold leading-tight">{exp.company}</p>
                      <p className="text-sm text-muted-foreground leading-tight">{exp.title}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{exp.duration}</p>
                    <p className="text-sm text-foreground">{exp.description}</p>
                    {exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                        {exp.technologies.slice(0, 4).map((tech) => (
                          <TechTag key={tech} tech={tech} />
                        ))}
                      </div>
                    )}
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

