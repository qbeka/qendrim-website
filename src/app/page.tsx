import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ExperienceSection />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
