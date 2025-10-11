"use client";

import { ProjectSection } from '@/components/projects';
import { aideaAssets } from '../assets';

export function ImpactSection() {
  return (
    <ProjectSection anchor="project-impact" title="Conclusion">
      <p>
        AIDEA showed us that the best creative tools stay humble: they clean up the noise so people can stay in their flow. The closer we kept the
        assistant to the hand, the more natural every decision felt.
      </p>
      <p>
        We now have a sketching companion that speeds up the rough moments without sanding off the author&apos;s voice. That balance—human lead,
        machine support—is the direction we&apos;re committed to pushing forward.
      </p>
      <div className="aidea-media">
        <video width="100%" height="auto" autoPlay loop muted playsInline preload="auto" controls={false}>
          <source src={aideaAssets.impactVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </ProjectSection>
  );
}
