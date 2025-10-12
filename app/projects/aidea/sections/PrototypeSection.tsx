"use client";

import { ProjectSection, VideoEmbed } from '@/components/projects';

export function PrototypeSection() {
  return (
    <ProjectSection anchor="project-results" title="Prototype &amp; Implementation">
      <p>
        We wanted to know: How realistic can our prototype become today? Using ComfyUI and advanced AI models, we built a working prototype that demonstrates AIDEA&apos;s core capabilities.
      </p>
      <VideoEmbed
        url="https://youtu.be/s7T9XYbdVTY"
        title="AIDEA prototype walkthrough"
        controls
        autoPlay={false}
        wrapperClassName="aidea-media"
      />
      <p>
        This walkthrough shows how the prototype translates a quick sketch into a refined visualization. From the initial capture to the generated concepts, every step is explained so designers understand how the system interprets their intent.
      </p>
      <p>
        This approach opens new possibilities for how we think, sketch, and collaborate. When AI becomes a thoughtful assistant rather than an automated replacement, it empowers designers to explore ideas they never could before, making the creative process more intuitive and accessible to everyone.
      </p>
    </ProjectSection>
  );
}
