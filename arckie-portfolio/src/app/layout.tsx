import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import Header from './components/header';
import Hero from './components/hero';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arckie Zeth Jadulco',
  description: 'This is my Webs Developer portfolio website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />
        <section id="hero">
          <Hero />
        </section>
        {children}
        </body>
    </html>
  )
}
