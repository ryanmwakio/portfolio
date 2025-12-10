import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <ThreeBackground />
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
