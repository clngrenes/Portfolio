import React from 'react';
import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { mykorrizhaAssets } from '../assets';

export function SkillTreeSection() {
  return (
    <ProjectSection id="project-process" anchor="project-process" title="Your Personal Skill Tree">
      <p>Each learner cultivates a living competency tree: roots (core literacies), structural branches (toolsets &amp; cognitive strategies) and elective canopy (deep explorations). Growth is organic, asymmetric and identity-forming.</p>
      <figure className="myko-visual" aria-label="Skill tree visualization">
        <Image src={mykorrizhaAssets.skillTree} alt="Personal Skill Tree" />
      </figure>
      <p>The tree becomes a longitudinal identity artifact—portable across life transitions. Instead of report cards, learners show structural depth, lateral curiosity and temporal progression.</p>
    </ProjectSection>
  );
}
