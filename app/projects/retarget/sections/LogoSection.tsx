"use client";

import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import logoCombination from '@assets/RETARGET/logo-combination.png';
import logoPrimary from '@assets/RETARGET/logo-primary.png';
import logoSecondary from '@assets/RETARGET/logo-secondary.png';

export function LogoSection() {
  return (
    <ProjectSection id="project-logo" anchor="project-logo" title="Logo Story">
      <p>
        The ReTarget mark blends a stylized target with directional arrows—capturing the brand&apos;s promise to iterate, refine, and aim messages precisely. It expresses innovation, efficiency, and reliability in one immediate symbol.
      </p>
      <div className="retarget-media">
        <Image src={logoCombination} alt="ReTarget logo combination grid" width={9600} height={3001} />
      </div>
      <p>
        Layered forms create a dynamic, memorable silhouette. Cool blue tones reinforce professionalism and trust, while arrow motifs signal progress and momentum.
      </p>
      <div className="retarget-media">
        <Image src={logoPrimary} alt="ReTarget primary logo lockups" width={9600} height={4201} />
      </div>
      <p>
        The target can also be read as a dartboard—mirroring the goal of identifying and reaching the right audience. Businesses use ReTarget&apos;s tools to place every message with accuracy and impact.
      </p>
      <div className="retarget-media">
        <Image src={logoSecondary} alt="ReTarget alternate logo applications" width={9601} height={4201} />
      </div>
    </ProjectSection>
  );
}
