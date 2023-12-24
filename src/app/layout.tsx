import './globals.css'
import { Inter } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local'

import RecoilRootProvider from './RecoilRootProvider'

const inter = Inter({ subsets: ['latin'] })

const d2Coding = localFont({
  src: "./assets/fonts/D2Coding.ttf",
  display: 'swap',
})

export const metadata = {
  title: 'Code Sweeper',
  description: '클린 코드를 추천해드립니다.',
  icons: {
    icon: "/icon.ico",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={d2Coding.className}>
      <body className={d2Coding.className}>
        <RecoilRootProvider>
          {children}
          <Analytics />
        </RecoilRootProvider>
      </body>
    </html>
  )
}
