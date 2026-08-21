"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projectsData } from "@/data/projects"
import { ExternalLink, Github } from "lucide-react"

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
            {/* Showcase Rows */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto flex flex-col gap-5"
            >
              {projectsData.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1">
                            {project.category}
                          </p>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                        {project.featured && (
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium flex-shrink-0">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="text-muted-foreground">{project.description}</p>

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

                      {(project.githubUrl || project.demoUrl) && (
                        <div className="flex gap-2 pt-1">
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
                      )}
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

