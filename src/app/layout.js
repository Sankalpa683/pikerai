import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // improves CLS
});

export const metadata = {
  title: "Pikera AI - Turn One Prompt Into a Viral YouTube Thumbnail with AI",
  description:
    "Pikera AI transforms simple text into powerful blog or YouTube-ready thumbnails. No templates. No Canva fatigue. Just: idea in, scroll-stopper out.",
  applicationName: "Pikera AI",
  keywords: [
    "Pikera AI",
    "AI Thumbnail Generator",
    "YouTube Thumbnail AI",
    "Blog Image Generator",
    "AI Image for Blog",
    "Text to Thumbnail",
    "Pikera",
    "Generate blog images from text",
    "AI content tools",
    "Prompt to image blog",
  ],
  authors: [
    { name: "Sankalpa Dahal", url: "https://pikeraai.com" },
  ],
  creator: "Sankalpa Dahal",
  publisher: "Pikera AI",
  metadataBase: new URL("https://pikeraai.com"),
  openGraph: {
    title: "Pikera AI — Instantly Create Relevant Thumbnails From Text",
    description:
      "Say goodbye to bland stock images. Pikera AI lets you go from blog blurb to perfect visual in seconds.",
    url: "https://pikeraai.com",
    siteName: "Pikera AI",
    images: [
      {
        url: "https://pikeraai.com/og-image.jpg", // Make sure to create this
        width: 1200,
        height: 630,
        alt: "Pikera AI Thumbnail Example",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pikera AI",
    description:
      "Turn simple text blurbs into stunning thumbnails for your blog or YouTube channel. Built for creators.",
    images: ["https://pikeraai.com/og-image.jpg"],
    site: "@yourhandle", // update if you have one
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
    <script defer src="https://cloud.umami.is/script.js" data-website-id="4f2a1984-c6be-4265-a51a-0b413f3e924e"></script>
        {/* Structured data for Google (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Pikera AI",
              url: "https://pikeraai.com",
              image: "https://pikeraai.com/og-image.jpg",
              author: {
                "@type": "Person",
                name: "Sankalpa Dahal",
              },
              description:
                "AI-powered tool to turn your blog blurb or YouTube script into engaging thumbnail visuals instantly.",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "All",
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased bg-white text-neutral-900`}>
        {children}

        {/* Analytics (optional but helps with SEO ranking signals) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
