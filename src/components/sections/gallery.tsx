"use client"

import { motion } from "framer-motion"
import { galleryData } from "@/data/gallery"
import { getAssetPath } from "@/lib/paths"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const lightboxImage = lightboxIndex !== null ? galleryData[lightboxIndex] : null

  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? i : (i - 1 + galleryData.length) % galleryData.length))
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryData.length))

  useEffect(() => {
    if (lightboxIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null)
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [lightboxIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of moments and memories
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {galleryData.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              role="button"
              tabIndex={0}
              aria-label={`View larger image: ${image.title}`}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setLightboxIndex(index)
                }
              }}
            >
              <Image
                src={getAssetPath(image.src)}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-white">{image.title}</h3>
                  {image.description && (
                    <p className="text-sm text-white/80">{image.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxImage.title}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              autoFocus
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close image"
            >
              <X className="h-6 w-6" />
            </Button>

            {galleryData.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 sm:left-4 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation()
                    showPrev()
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-7 w-7" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 sm:right-4 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation()
                    showNext()
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-7 w-7" />
                </Button>
              </>
            )}

            <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
              <Image
                src={getAssetPath(lightboxImage.src)}
                alt={lightboxImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/90"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-semibold">{lightboxImage.title}</p>
              {lightboxImage.description && (
                <p className="text-sm text-white/70">{lightboxImage.description}</p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
