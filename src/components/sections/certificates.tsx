"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { certificatesData } from "@/data/certificates"
import { Award, ExternalLink, FileText } from "lucide-react"
import { useState } from "react"

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

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
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Certificates & Credentials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and completed courses demonstrating continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {certificatesData.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        {cert.issuer} • {cert.issueDate}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {cert.pdfPath && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={cert.pdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          View PDF
                        </a>
                      </Button>
                    )}
                    {cert.credentialUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Verify
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Add Certificate Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            {certificatesData.length} certificate{certificatesData.length !== 1 ? 's' : ''} earned
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            To add more certificates, edit <code className="bg-secondary px-2 py-1 rounded">src/data/certificates.ts</code>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Made with Bob
