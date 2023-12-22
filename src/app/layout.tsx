import './globals.css'
import { Inter } from 'next/font/google'

import RecoilRootProvider from './RecoilRootProvider'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootProvider>
          {children}
        </RecoilRootProvider>
      </body>
    </html>
  )
}
