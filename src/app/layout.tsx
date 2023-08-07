import { Header } from '@/components/Header/header'
import './globals.css'
import { Blinker } from 'next/font/google'
import { DefaultProvider } from '@/providers/defaultProvider'
import { Footer } from '@/components/Footer/footer'

const font_google = Blinker({ weight: ['300', '400', '600'], style: ['normal'], subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={font_google.className}>
      <body>
        <DefaultProvider>
          <Header />
          <main className='mx-auto container'>
            {children}
          </main>
          <Footer />
        </DefaultProvider>
      </body>
    </html>
  )
}
