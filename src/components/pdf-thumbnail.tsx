"use client"

import { useEffect, useRef, useState } from "react"
import { FileText } from "lucide-react"

// Renders the first page of a PDF onto a plain <canvas> using pdf.js, so the
// certificate shows up as a clean image — no browser PDF-viewer toolbar,
// consistent across Chrome/Firefox/Safari/mobile.
export function PdfThumbnail({ src, title }: { src: string; title: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    let cancelled = false

    async function render() {
      try {
        // The "legacy" build avoids a dynamic self-import that pdf.js's main
        // build does internally, which Turbopack fails to resolve.
        const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs")
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/legacy/build/pdf.worker.min.mjs`

        const pdf = await pdfjsLib.getDocument({ url: src }).promise
        const page = await pdf.getPage(1)
        if (cancelled) return

        const baseViewport = page.getViewport({ scale: 1 })
        const targetWidth = 900
        const scale = targetWidth / baseViewport.width
        const viewport = page.getViewport({ scale })

        const canvas = canvasRef.current
        if (!canvas) return
        canvas.width = viewport.width
        canvas.height = viewport.height

        const context = canvas.getContext("2d")
        if (!context) return

        await page.render({ canvasContext: context, viewport, canvas }).promise
        if (!cancelled) setStatus("ready")
      } catch (err) {
        console.error("PdfThumbnail render failed:", err)
        if (!cancelled) setStatus("error")
      }
    }

    render()
    return () => {
      cancelled = true
    }
  }, [src])

  if (status === "error") {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-secondary text-muted-foreground text-sm">
        <FileText className="w-6 h-6" />
        Preview unavailable
      </div>
    )
  }

  return (
    <div className="relative w-full h-full bg-white">
      <canvas ref={canvasRef} aria-label={title} className="w-full h-full object-cover block" />
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
