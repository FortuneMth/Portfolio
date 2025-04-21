'use client';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Methodology from './components/Methodology';

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <Navbar />
      <Hero3D />
      <Services />
      <Projects />
      <Methodology />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
} 