import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Toaster } from 'react-hot-toast'
import { cn } from '@/utils/clsx'
import './globals.css'

const pretendard = localFont({
  src: [
    {
      path: '../fonts/PretendardVariable.woff2'
    }
  ],
  display: 'swap',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.BASE_URL}`),
  title: {
    default: 'Specter AI Chatbot',
    template: `%s - Specter AI Chatbot`
  },
  description: 'AI Chatbot',
  icons: {
    icon: '/favicon.ico'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

type RootLayoutProps = React.PropsWithChildren

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className={cn(['font-sans antialiased', pretendard.className])}>
        <Toaster />
        <div className="flex flex-col flex-1 min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
