"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ProjectShell, SectionDivider } from '@/components/projects';
import LeftProjectNavigation from '../../components/navigation/LeftProjectNavigation';
import logo from '@assets/LOGO/logo.svg';
import '../styles/aidea.css';
import { ProblemSection } from './sections/ProblemSection';
import { AudienceSection } from './sections/AudienceSection';
import { SpecialSection } from './sections/SpecialSection';
import { CollaborationSection } from './sections/CollaborationSection';
import { PrototypeSection } from './sections/PrototypeSection';
import { ImpactSection } from './sections/ImpactSection';

export default function AideaProject() {
  return (
    <div className="aidea-project-wrapper" data-project="aidea">
      <Link href="/#projects" aria-label="Back to Recent Work" className="project-home-logo">
        <Image src={logo} alt="Home" width={40} height={40} />
      </Link>

      <LeftProjectNavigation projectType="aidea" />

      <ProjectShell
        cover={{ video: true, src: 'https://www.youtube.com/embed/uKkxBmeuWLg', alt: 'AIDEA Project Overview' }}
        title="AIDEA"
        caption="An AI-powered creative assistant that transforms simple sketches into professional visualizations. AIDEA bridges the gap between imagination and execution, helping anyone communicate their ideas visually – regardless of drawing skills."
      >
  <SectionDivider />
  <ProblemSection />
        <SectionDivider />
        <AudienceSection />
        <SectionDivider />
        <SpecialSection />
  <SectionDivider />
  <CollaborationSection />
  <SectionDivider />
        <PrototypeSection />
        <SectionDivider />
        <ImpactSection />
      </ProjectShell>
    </div>
  );
}
