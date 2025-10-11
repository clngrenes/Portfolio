"use client";

import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { aideaAssets } from '../assets';

export function AudienceSection() {
  return (
    <ProjectSection anchor="project-features" title="Who Is AIDEA For?">
      <p>
        AIDEA is designed for everyone who has ideas but struggles to bring them to life visually. Whether you&apos;re a student brainstorming for a presentation, a professional sketching out concepts in meetings, or someone who simply wants to explore their creativity – AIDEA makes visual thinking accessible to all. You don&apos;t need to be an artist; you just need to have ideas worth sharing.
      </p>
      <div className="aidea-media">
        <Image src={aideaAssets.audienceImage} alt="AIDEA Target Users" width={800} height={600} />
      </div>
    </ProjectSection>
  );
}
