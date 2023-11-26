import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme-provider";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import { type Metadata } from "next";
import { siteConfig } from "~/config/site";
import { Analytics } from "@vercel/analytics/react";
import { SiteFooter } from "~/components/site-footer";
import { cn } from "~/lib/utils";
import { SiteHeader } from "~/components/site-header";
import { env } from "~/env.mjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BOOGIE_URL),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "boogie",
    "JacoBoogie",
    "blog",
    "developer",
    "software engineer",
    "web developer",
  ],
  authors: [
    {
      name: "Jacob Burgess",
      url: "https://twitter.com/jacoboogie",
    },
  ],
  creator: "Jacob Burgess",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@jacoboogie",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          `font-sans ${inter.variable}`,
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  );
}
