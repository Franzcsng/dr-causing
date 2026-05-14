import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dr. Causing | EKZ Pain and Regenerative Center |Trusted Healthcare in Bacolod City',
  description: 'Providing compassionate, patient-centered healthcare for individuals and families in Bacolod City.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/ekz-black-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ekz-white-logo_1.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/ekz-black-logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/ekz-blue-logo_1.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
