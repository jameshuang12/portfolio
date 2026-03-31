"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { skillsData } from "@/data/skills"
import { useState } from "react"

export function Skills() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  // Function to get icon URL based on source
  const getIconUrl = (skill: typeof skillsData[0]) => {
    if (skill.iconSource === "fallback") {
      return null
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

  const handleImageError = (skillName: string) => {
    setImageErrors(prev => new Set(prev).add(skillName))
  }

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
        >
          {skillsData.map((skill) => {
            const iconUrl = getIconUrl(skill)
            const hasError = imageErrors.has(skill.name)
            
            return (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-3">
                    {iconUrl && !hasError ? (
                      <Image
                        src={iconUrl}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                        style={{ filter: 'none' }}
                        onError={() => handleImageError(skill.name)}
                        unoptimized
                      />
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center text-lg font-bold text-primary bg-primary/10 rounded">
                        {skill.name === "CSS3" ? "CSS" : skill.name === "AWS" ? "AWS" : skill.name.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            {skillsData.length} total skills
          </p>
        </motion.div>
      </div>
    </section>
  )
}

