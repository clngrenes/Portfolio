"use client";

import Image from 'next/image';
import Link from 'next/link';
import logo from '@assets/LOGO/logo.svg';
import retargetCover from '@assets/COVERS/retarget-cover.jpg';
import { ProjectShell, SectionDivider } from '@/components/projects';
import LeftProjectNavigation from '../../components/navigation/LeftProjectNavigation';
import '../styles/retarget.css';
import { OverviewSection } from './sections/OverviewSection';
import { ConceptSection } from './sections/ConceptSection';
import { TypographySection } from './sections/TypographySection';
import { ColorSystemSection } from './sections/ColorSystemSection';
import { LogoSection } from './sections/LogoSection';
import { ApplicationsSection } from './sections/ApplicationsSection';
import { ConclusionSection } from './sections/ConclusionSection';

export default function ReTargetProject() {
  return (
    <div className="retarget-project-wrapper" data-project="retarget">
      <Link href="/#projects" className="project-home-logo" aria-label="Back to Recent Work">
        <Image src={logo} alt="Home" width={40} height={40} />
      </Link>

      <LeftProjectNavigation projectType="retarget" />

      <div id="project-cover" data-project-anchor="project-cover" className="retarget-cover-anchor" aria-hidden="true" />

      <ProjectShell
        cover={{ src: retargetCover, alt: 'ReTarget brand cover' }}
        title="ReTarget"
        caption="Brand identity for a social media marketing agency that clarifies target audiences and delivers measurable growth."
      >
        <SectionDivider />
        <OverviewSection />
        <SectionDivider />
        <ConceptSection />
        <SectionDivider />
        <TypographySection />
        <SectionDivider />
        <ColorSystemSection />
        <SectionDivider />
        <LogoSection />
        <SectionDivider />
        <ApplicationsSection />
        <SectionDivider />
        <ConclusionSection />
      </ProjectShell>
    </div>
  );
}
