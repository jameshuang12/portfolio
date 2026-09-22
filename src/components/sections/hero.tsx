"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
import { profileData } from "@/data/profile"
import { getAssetPath } from "@/lib/paths"
import Image from "next/image"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-primary [font-family:var(--font-hero),serif]">
                <span className="block text-3xl md:text-4xl lg:text-5xl opacity-80">Hi, I'm</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl mt-2">{profileData.name}</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl text-muted-foreground [font-family:var(--font-hero),serif]">
                {profileData.title}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl [font-family:var(--font-hero),serif] opacity-80">
                {profileData.tagline}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              {profileData.resume && (
                <Button size="lg" variant="outline" asChild>
                  <a href={profileData.resume} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src={getAssetPath('/images/me.jpg')}
                  alt={profileData.name}
                  fill
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector("#about")?.scrollIntoView()
          }}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down to explore"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll down to learn more</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  )
}

