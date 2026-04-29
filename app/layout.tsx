import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

const SITE_URL = "https://goldenstylesalon.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GOLDEN STYLE SALON | Estética en Querétaro",
  description:
    "Estética profesional en Querétaro. Cortes, color, manicure, pedicure, faciales y más. Más de 136 clientas satisfechas con calificación 4.7 en Google. Agenda tu cita hoy.",
  keywords: [
    "estética Querétaro",
    "salón de belleza Querétaro",
    "Golden Style Salon",
    "manicure Querétaro",
    "pedicure Querétaro",
    "faciales Querétaro",
    "corte de cabello mujer Querétaro",
    "color de cabello Querétaro",
  ],
  authors: [{ name: "Golden Style Salon" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Golden Style Salon",
    title: "GOLDEN STYLE SALON | Estética en Querétaro",
    description:
      "Estética profesional en Querétaro con calificación 4.7★ en Google. Cortes, color, manicure, faciales y más. Agenda tu cita.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Style Salon — Estética en Querétaro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GOLDEN STYLE SALON | Estética en Querétaro",
    description:
      "Estética profesional en Querétaro con calificación 4.7★ en Google.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `}
            </Script>
          </>
        )}
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            name: "Golden Style Salon",
            image: `${SITE_URL}/og-image.jpg`,
            url: SITE_URL,
            telephone: "+524423841341",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Querétaro",
              addressRegion: "Qro.",
              addressCountry: "MX",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              reviewCount: "136",
            },
            priceRange: "$$",
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
