import React from 'react';
import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { mykorrizhaAssets } from '../assets';

export function WhatWeLearnedSection() {
  return (
    <ProjectSection id="project-impact" anchor="project-impact" title="What We Learned">
      <p>Removing coercive structures (grades, subjects, fixed pacing) unlocks durable intrinsic curiosity. Technology is not the replacement of educators—but an orchestration substrate that restores human bandwidth to emotional safety, identity shaping and collaborative meaning-making.</p>
      <figure className="myko-visual" aria-label="Illustration summarizing Mykorrizha impact">
        <Image src={mykorrizhaAssets.conclusionIllustration} alt="Illustration of learners growing together in the Mykorrizha ecosystem" />
      </figure>
    </ProjectSection>
  );
}
