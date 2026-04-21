import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ForexDeals Karachi | Pro Signals & Courses',
  description: 'Karachi\'s #1 Forex Training Institute. Learn, Trade, Grow with professional signals and premium courses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
