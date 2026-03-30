"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projectsData } from "@/data/projects"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"
import { getAssetPath } from "@/lib/paths"

export function Projects() {
  const featuredProjects = projectsData.filter(p => p.featured)

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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
              {projectsData.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                    {project.imageUrl && (
                      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={getAssetPath(project.imageUrl)}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        {project.featured && (
                          <div className="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                            Featured
                          </div>
                        )}
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-xs">
                        <Calendar className="h-3 w-3" />
                        {project.startDate} {project.endDate && `- ${project.endDate}`}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col gap-4">
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <ul className="space-y-1 text-sm">
                          {project.highlights.slice(0, 2).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-0.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-auto pt-4">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild className="flex-1">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button size="sm" asChild className="flex-1">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Projects Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-muted-foreground">
                {projectsData.length} total projects
                {featuredProjects.length > 0 && ` • ${featuredProjects.length} featured`}
              </p>
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

// Made with Bob
