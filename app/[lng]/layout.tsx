import { Inter, Montserrat } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import './globals.css'
import TranslationProvider from "./TranslationProvider"

const montserrat = Montserrat({ subsets: ["latin"] })

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: "Game page",
  description: "Test game page",
    generator: 'thienhuy'
}

export default function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng} dir={dir(lng)} className="">
      <body className={`${montserrat.className} bg-background text-foreground antialiased`}>
        <TranslationProvider lng={lng}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}
