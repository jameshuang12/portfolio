"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profileData } from "@/data/profile"

function BaseballNumber({ n }: { n: number }) {
  return (
    <span
      className="relative mr-3 flex h-9 w-9 flex-shrink-0 items-center justify-center"
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className="absolute inset-0 h-full w-full">
        <circle cx="16" cy="16" r="15" fill="#ffffff" stroke="#b9b2a0" strokeWidth="1" />
        <path
          d="M7 4 C 12 11, 12 21, 7 28"
          fill="none"
          stroke="#c8102e"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="2.4 2.6"
        />
        <path
          d="M25 4 C 20 11, 20 21, 25 28"
          fill="none"
          stroke="#c8102e"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="2.4 2.6"
        />
      </svg>
      <span className="relative text-sm font-extrabold text-zinc-900">{n}</span>
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.summary.map((paragraph, index) => (
                  <p key={index} className="text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Key Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {profileData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <BaseballNumber n={index + 1} />
                      <div>
                        <p className="font-semibold text-foreground leading-snug">{highlight.label}</p>
                        <p className="text-muted-foreground leading-snug">{highlight.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

