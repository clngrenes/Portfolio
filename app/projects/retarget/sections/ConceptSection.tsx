"use client";

import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import conceptMoodboard from '@assets/RETARGET/moodboard.png';
import conceptKeywords from '@assets/RETARGET/keywords.png';

export function ConceptSection() {
  return (
    <ProjectSection id="project-concept" anchor="project-concept" title="Design Direction">
      <p>
        The ReTarget brand positions the company as the go-to solution for organizations that want to improve their social media performance. Precision, reliability, and innovation sit at the center of the identity—mirroring the way ReTarget continually refines strategies to reach the right audience.
      </p>
      <div className="retarget-media">
        <Image src={conceptMoodboard} alt="ReTarget brand moodboard" width={10000} height={7604} priority />
      </div>
      <div className="retarget-media">
        <Image src={conceptKeywords} alt="ReTarget strategy keywords board" width={20000} height={6250} />
      </div>
    </ProjectSection>
  );
}
