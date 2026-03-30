"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { skillsData, skillCategories } from "@/data/skills"
import { useState } from "react"

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const filteredSkills = selectedCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory)

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

  // Function to get icon URL from Simple Icons
  const getIconUrl = (icon: string) => {
    // If it's an emoji, return it directly
    if (icon.match(/[\u{1F300}-\u{1F9FF}]/u)) {
      return null
    }
    return `https://cdn.simpleicons.org/${icon}`
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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "All"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill) => {
            const iconUrl = getIconUrl(skill.icon)
            return (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-3">
                    {iconUrl ? (
                      <img 
                        src={iconUrl} 
                        alt={skill.name}
                        className="w-12 h-12 object-contain dark:invert"
                      />
                    ) : (
                      <span className="text-4xl">{skill.icon}</span>
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
            {filteredSkills.length} {selectedCategory === "All" ? "total" : selectedCategory.toLowerCase()} skills
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Made with Bob
