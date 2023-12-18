import './globals.css'
import { Inter } from 'next/font/google'

import RecoilRootProvider from './RecoilRootProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
