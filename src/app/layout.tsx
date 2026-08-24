import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MotionConfig } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jameshuang12.github.io/portfolio'),
  title: "James Huang | Platform Engineer @ IBM",
  description: "Portfolio of James Huang, a Platform Engineer at IBM specializing in hybrid-cloud infrastructure, Generative AI, and enterprise solutions.",
  keywords: ["James Huang", "Platform Engineer", "IBM", "Generative AI", "Agentic AI", "Hybrid Cloud", "DevOps", "Portfolio"],
  authors: [{ name: "James Huang" }],
  openGraph: {
    title: "James Huang | Platform Engineer @ IBM",
    description: "Portfolio of James Huang, a Platform Engineer at IBM specializing in hybrid-cloud infrastructure, Generative AI, and enterprise solutions.",
    url: "https://jameshuang12.github.io/portfolio",
    siteName: "James Huang Portfolio",
    images: [
      {
        url: "/portfolio/images/me.jpg",
        width: 400,
        height: 400,
        alt: "James Huang",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "James Huang | Platform Engineer @ IBM",
    description: "Portfolio of James Huang, a Platform Engineer at IBM specializing in hybrid-cloud infrastructure, Generative AI, and enterprise solutions.",
    images: ["/portfolio/images/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}

