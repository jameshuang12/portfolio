"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projectsData } from "@/data/projects"
import { TechTag } from "@/components/tech-tag"
import {
  ExternalLink,
  Github,
  Bot,
  Microscope,
  TrendingUp,
  Plane,
  BarChart3,
  Lightbulb,
  Code2,
  type LucideIcon,
} from "lucide-react"

// A themed icon per project, standing in for a real screenshot until one exists.
const projectVisuals: Record<string, LucideIcon> = {
  "agentic-ai-platform": Bot,
  "qudi-iqo-modules": Microscope,
  "low-latency-trading": TrendingUp,
  "vandy-flights": Plane,
  "stock-analyzer": BarChart3,
  "hackduke-2023": Lightbulb,
}

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and personal projects
          </p>
        </motion.div>

        {projectsData.length > 0 ? (
          <>
            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {projectsData.map((project) => (
                <motion.div key={project.id} variants={itemVariants} className="h-full">
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                    {/* Visual header */}
                    <div className="relative h-36 bg-gradient-to-br from-primary/15 to-secondary/40 flex items-center justify-center">
                      {(() => {
                        const VisualIcon = projectVisuals[project.id] ?? Code2
                        return <VisualIcon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                      })()}
                      {project.featured && (
                        <span className="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <CardContent className="p-5 flex-1 flex flex-col gap-3">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1">
                          {project.category}
                        </p>
                        <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                      </div>

                      <p className="text-sm text-muted-foreground">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <TechTag key={tech} tech={tech} />
                        ))}
                      </div>

                      <div className="mt-auto pt-1">
                        {project.githubUrl || project.demoUrl ? (
                          <div className="flex gap-2">
                            {project.githubUrl && (
                              <Button size="sm" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="mr-2 h-4 w-4" />
                                  View Code
                                </a>
                              </Button>
                            )}
                            {project.demoUrl && (
                              <Button variant="outline" size="sm" asChild>
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Demo
                                </a>
                              </Button>
                            )}
                          </div>
                        ) : (
                          <p className="text-xs text-muted-foreground italic">
                            Internal tool — not publicly available
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </>
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
                  No projects added yet. Add your projects to showcase your work!
                </p>
                <p className="text-sm text-muted-foreground">
                  Edit <code className="bg-secondary px-2 py-1 rounded">src/data/projects.ts</code> to add your projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}

