"use client";

import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import typographySystem from '@assets/RETARGET/font-family.png';

export function TypographySection() {
  return (
    <ProjectSection id="project-typography" anchor="project-typography" title="Type Choices">
      <p>
        Degular Display serves as the primary typeface. Its geometric construction and subtle rounded edges balance professionalism with approachability—perfect for conveying ReTarget&apos;s precision-focused messaging across screen and print.
      </p>
      <div className="retarget-media">
        <Image src={typographySystem} alt="ReTarget typography system" width={9600} height={7001} />
      </div>
    </ProjectSection>
  );
}
