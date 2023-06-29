import Head from 'next/head';
import Image from 'next/image';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <div className="h-screen snap-y snap-normal overflow-y-scroll overflow-x-auto z-0">
        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        
        {/* About */}
        <section id="about" className="">
          <About />
        </section>
        
        {/* Experience */}
        <section id="experience" className="">
          <Experience />
        </section>
        
        {/* Skills */}
        <section id="skills" className="">
          <Skills />
        </section>
        
        {/* Projects */}
        
        {/* Contact Me */}
        <section id="contact" className="">
          <Contact />
        </section>
        
        {/* Footer */}
        <section id="footer" className="">
          <Footer />
        </section>

      </div>
    </main>
  )
}
