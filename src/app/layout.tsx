import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Huang | Software Engineer Portfolio",
  description: "Portfolio of James Huang - Software Engineer specializing in full-stack development, cloud technologies, and modern web applications.",
  keywords: ["James Huang", "Software Engineer", "Portfolio", "Full Stack Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "James Huang" }],
  openGraph: {
    title: "James Huang | Software Engineer Portfolio",
    description: "Portfolio of James Huang - Software Engineer specializing in full-stack development, cloud technologies, and modern web applications.",
    url: "https://jameshuang12.github.io/portfolio",
    siteName: "James Huang Portfolio",
    images: [
      {
        url: "/portfolio/images/me.jpg",
        width: 1200,
        height: 630,
        alt: "James Huang",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Huang | Software Engineer Portfolio",
    description: "Portfolio of James Huang - Software Engineer specializing in full-stack development, cloud technologies, and modern web applications.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// Made with Bob
