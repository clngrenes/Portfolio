"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectShell, SectionDivider } from '@/components/projects';
import LeftProjectNavigation from '../../components/navigation/LeftProjectNavigation';
import logo from '@assets/LOGO/logo.svg';
import '../styles/mykorrizha.css';
import { CorePrinciplesSection } from './sections/CorePrinciples';
import { SkillTreeSection } from './sections/SkillTree';
import { SupervisorDashboardSection } from './sections/SupervisorDashboard';
import { RealProjectsSection } from './sections/RealProjects';
import { AITeamSection } from './sections/AITeam';
import { RoleModelsSection } from './sections/RoleModels';
import { BrochureSection } from './sections/BrochureSection';
import { WhatWeLearnedSection } from './sections/WhatWeLearned';

export default function MykorrizhaProjectModern() {
  return (
    <div className="myko-project-wrapper" data-project="mykorrizha">
      <Link href="/#projects" className="project-home-logo" aria-label="Back to Recent Work">
        <Image src={logo} alt="Home" width={40} height={40} />
      </Link>
      <LeftProjectNavigation projectType="mykorrizha" />
      <ProjectShell
        cover={{ video: true, src: 'https://www.youtube.com/embed/is0ODTT-2pw', alt: 'Mykorrizha Overview' }}
        title="Mykorrizha"
        caption="An adaptive, AI-supported learning ecosystem that replaces rigid structures with personal growth pathways."
      >
    <SectionDivider />
    <CorePrinciplesSection />
    <SectionDivider />
    <SkillTreeSection />
    <SectionDivider />
    <SupervisorDashboardSection />
    <SectionDivider />
    <RealProjectsSection />
    <SectionDivider />
    <BrochureSection />
    <SectionDivider />
    <AITeamSection />
    <SectionDivider />
    <RoleModelsSection />
    <SectionDivider />
    <WhatWeLearnedSection />
      </ProjectShell>
    </div>
  );
}
