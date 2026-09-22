"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin, Github, ArrowUpRight, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { profileData } from "@/data/profile"

// Formspree form endpoint. Create a free form at https://formspree.io, then
// replace YOUR_FORM_ID with the id from the form's endpoint URL.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/myeyrvzv"

function IntakeForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  // Bots fill forms instantly; humans take at least a few seconds.
  const loadedAt = useRef<number | null>(null)

  useEffect(() => {
    loadedAt.current = Date.now()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    // Honeypot filled or submitted inhumanly fast: silently pretend success
    // so bots don't learn they were filtered.
    const honeypot = (form.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value
    if (honeypot || (loadedAt.current !== null && Date.now() - loadedAt.current < 3000)) {
      setStatus("success")
      form.reset()
      return
    }

    setStatus("submitting")

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
        <p className="font-semibold">Message sent!</p>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot: hidden from humans, bots auto-fill it and get filtered.
          Formspree also discards any submission where _gotcha is non-empty. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-subject" className="text-sm font-medium">
          Subject
        </label>
        {/* Formspree uses _subject as the notification email's subject line */}
        <input
          id="contact-subject"
          name="_subject"
          type="text"
          required
          placeholder="What's this about?"
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
        />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          Something went wrong sending your message. Please try again, or email me directly.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        <Send className="mr-2 h-4 w-4" aria-hidden="true" />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      title: "Email",
      label: profileData.email,
      href: `mailto:${profileData.email}`,
      external: false,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      label: "View Profile",
      href: profileData.social.linkedin,
      external: true,
    },
    {
      icon: Github,
      title: "GitHub",
      label: "View Repositories",
      href: profileData.social.github,
      external: true,
    },
  ]

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
            Looking to hire, collaborate, or just have a question? Drop me a note.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
                    <link.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-center">{link.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" asChild className="group max-w-full">
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className="truncate">{link.label}</span>
                      <ArrowUpRight
                        className="ml-2 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Intake Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-10"
        >
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form below and it lands straight in my inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <IntakeForm />
            </CardContent>
          </Card>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" aria-hidden="true" />
            <span>{profileData.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
