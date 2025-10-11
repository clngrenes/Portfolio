"use client";
// Import via configured @/* alias which maps to app/* in tsconfig
import { ProjectShell, SectionDivider, type ProjectShellProps } from '@/components/projects';
import { Problem } from './sections/Problem';
import { Research } from './sections/Research';
import { Ideation } from './sections/Ideation';
import { KeyFeatures } from './sections/KeyFeatures';
import { UiHighlights } from './sections/UiHighlights';
import { Mockups } from './sections/Mockups';
import { Conclusion } from './sections/Conclusion';
import LeftProjectNavigation from '../../components/navigation/LeftProjectNavigation';
import Image from 'next/image';
import React from 'react';
import logo from '@assets/LOGO/logo.svg';
import '../styles/pulse.css';

export default function PulseProject() {
  const heroCover: ProjectShellProps['cover'] = {
    video: true,
    src: 'https://youtu.be/jFu1MkizXBU',
    alt: 'Pulse product walkthrough',
    ratio: '16 / 9',
    controls: true,
    autoPlay: true,
    loop: true,
    muted: true,
  };

  return (
    <div className="pulse-project-wrapper" data-project="pulse">
      <a href="/#projects" aria-label="Back to Recent Work" className="project-home-logo">
        <Image src={logo} alt="Recent Work" width={40} height={40} />
      </a>
      <LeftProjectNavigation projectType="pulse" />
      <ProjectShell
        cover={heroCover}
        title="Pulse"
        caption="An innovative blood donation app that motivates young people to donate regularly."
      >
        <SectionDivider />
        <Problem />
        <SectionDivider />
        <Research />
        <SectionDivider />
        <Ideation />
        <SectionDivider />
        <KeyFeatures />
        <SectionDivider />
  <UiHighlights />
  <SectionDivider />
        <Mockups />
        <SectionDivider />
        <Conclusion />
      </ProjectShell>
    </div>
  );
}
