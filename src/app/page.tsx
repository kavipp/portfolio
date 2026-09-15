import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { About } from '@/components/sections/About';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { QAWorkflow } from '@/components/sections/QAWorkflow';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { CareerJourney } from '@/components/sections/CareerJourney';
import { RecruiterSnapshot } from '@/components/sections/RecruiterSnapshot';
import { ToolsEcosystem } from '@/components/sections/ToolsEcosystem';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <ValueProposition />
      <Experience />
      <Skills />
      <QAWorkflow />
      <Projects />
      <Certifications />
      <CareerJourney />
      <RecruiterSnapshot />
      <ToolsEcosystem />
      <FAQ />
      <Contact />
    </>
  );
}