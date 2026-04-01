"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin, Github, Download } from "lucide-react"
import { profileData } from "@/data/profile"

export function Contact() {

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">Email</CardTitle>
                <CardDescription className="text-center">
                  Send me an email
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-primary hover:underline break-all"
                >
                  {profileData.email}
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">LinkedIn</CardTitle>
                <CardDescription className="text-center">
                  Connect professionally
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Profile
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">GitHub</CardTitle>
                <CardDescription className="text-center">
                  Check out my code
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View Repositories
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Location & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>{profileData.location}</span>
          </div>
          
          {profileData.resume && (
            <Button asChild variant="outline" size="lg">
              <a href={profileData.resume} download>
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  )
}

