import Head from 'next/head';
import Image from 'next/image';
import About from './components/about';
import Header from './components/header';
import Hero from './components/hero';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <div className="h-screen snap-y snap-normal overflow-y-scroll overflow-x-auto z-0">
        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        
        {/* Experience */}
        
        {/* Skills */}
        
        {/* Projects */}
        
        {/* Contact Me */}
        
        {/* Footer */}

      </div>
    </main>
  )
}
