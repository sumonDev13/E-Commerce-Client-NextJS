'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Home from './dashboard/navbar/page'
import { usePathname } from 'next/navigation'


const inter = Inter({ subsets: ['latin'] })


// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname()
  console.log(pathname)

  return (
    <html lang="en">
      <body className={inter.className}>
        
        
        { pathname !== '/login' && <Home/>}

        {children}
        </body>
    </html>
  )
}
