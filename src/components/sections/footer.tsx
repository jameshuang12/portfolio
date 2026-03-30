import { profileData } from "@/data/profile"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${profileData.social.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} {profileData.name}. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Made with Bob
