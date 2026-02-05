import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import Projects from '@/components/Projects';
import Involvement from '@/components/Involvement';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ExperienceSection />
      <Projects />
      <Involvement />
      <Testimonials />
      <Contact />
    </main>
  );
}
