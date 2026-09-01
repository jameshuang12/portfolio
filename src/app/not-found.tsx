import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <p className="text-sm font-mono text-muted-foreground uppercase tracking-wide mb-4">
          404
        </p>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </section>
  )
}
