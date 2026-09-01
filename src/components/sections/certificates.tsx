"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { certificatesData } from "@/data/certificates"
import { profileData } from "@/data/profile"
import { Award } from "lucide-react"
import { getAssetPath } from "@/lib/paths"
import { PdfThumbnail } from "@/components/pdf-thumbnail"

// Real issuer logos, same approach as Experience's company logos.
const issuerIconSrc: Record<string, string> = {
  IBM: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "LinkedIn Learning": "https://upload.wikimedia.org/wikipedia/commons/5/52/LinkedIn_Learning_logo.png",
}

function IssuerVisual({ issuer, credentialImageUrl }: { issuer: string; credentialImageUrl?: string }) {
  const [imageError, setImageError] = useState(false)

  // Prefer the actual badge/credential artwork when available; fall back to
  // the issuer's logo, since not every certificate has its own badge image.
  const src = !imageError ? credentialImageUrl ?? issuerIconSrc[issuer] : null
  const isBadgeArt = Boolean(credentialImageUrl) && !imageError

  if (src) {
    return (
      <div className="relative w-full h-full bg-white p-8">
        <Image
          src={src}
          alt={issuer}
          fill
          className={isBadgeArt ? "object-contain p-4" : "object-contain p-2"}
          unoptimized
          onError={() => setImageError(true)}
        />
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-white text-primary flex items-center justify-center">
      <Award className="w-12 h-12" />
    </div>
  )
}

export function Certificates() {

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
            <motion.div key={cert.id} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                {cert.pdfPath ? (
                  <a
                    href={getAssetPath(cert.pdfPath)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <PdfThumbnail src={getAssetPath(cert.pdfPath)} title={cert.title} />
                      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent p-4">
                        <h3 className="font-semibold leading-tight text-white">{cert.title}</h3>
                        <p className="text-sm text-white/80 leading-tight">
                          {cert.issuer} • {cert.issueDate}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col h-full"
                  >
                    <div className="relative h-56">
                      <IssuerVisual issuer={cert.issuer} credentialImageUrl={cert.credentialImageUrl} />
                      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent p-4">
                        <h3 className="font-semibold leading-tight text-white">{cert.title}</h3>
                        <p className="text-sm text-white/80 leading-tight">
                          {cert.issuer} • {cert.issueDate}
                        </p>
                      </div>
                    </div>
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Credly Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-6"
        >
          <Card className="hover:shadow-lg transition-shadow">
            <a
              href={profileData.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src="https://cdn.simpleicons.org/credly"
                  alt="Credly"
                  width={28}
                  height={28}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div>
                <p className="font-semibold leading-tight">View All Badges on Credly</p>
                <p className="text-sm text-muted-foreground leading-tight">
                  {certificatesData.length} certificate{certificatesData.length !== 1 ? "s" : ""} shown here — full badge wallet on Credly
                </p>
              </div>
            </a>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

