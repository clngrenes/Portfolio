"use client";

import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { aideaAssets } from '../assets';

export function ProblemSection() {
  return (
    <ProjectSection anchor="project-problem" title="The Problem">
      <p>Ideas often fail not because of lack of imagination, but because of implementation barriers.</p>
      <div className="highlight-block">
        <p>
          In an experiment by designer Gianluca Gimini, over 500 people were asked to draw a bicycle from memory. Only about 25% could draw it correctly – 75% instead created creative but inaccurate variations.
        </p>
      </div>
      <p>
        We see the potential to revolutionize how people sketch, refine, and share ideas – regardless of drawing abilities, through a symbiosis of creativity and artificial intelligence.
      </p>
      <p>
        How many brilliant ideas have vanished from our minds simply because we couldn&apos;t express them visually? How many groundbreaking concepts remain trapped in our thoughts, waiting for the right tool to set them free?
      </p>
      <div className="aidea-media">
        <Image src={aideaAssets.cover} alt="AIDEA Overview" width={1600} height={1200} quality={90} />
      </div>
    </ProjectSection>
  );
}
