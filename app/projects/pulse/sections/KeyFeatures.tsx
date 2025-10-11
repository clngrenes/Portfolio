"use client";
import { ProjectSection } from '@/components/projects';
import Image from 'next/image';
import React from 'react';
import colorPaletteVisual from '@assets/PULSE/color-palette.jpg';

export const KeyFeatures: React.FC = () => (
  <ProjectSection id="pulse-features" title="Key Features" anchor="pulse-features">
    <p>
      Pulse transforms blood donation from a one-time good deed into an ongoing, community-driven experience. Our design language keeps
      information dense yet approachable, balancing vibrant accents with calm surfaces.
    </p>
    <div id="pulse-color-palette" data-project-anchor="pulse-color-palette" className="project-section-subblock">
      <h3>Color Palette</h3>
      <p>
        We chose a bold primary red to echo the DRK identity while keeping it warm and modern. Monochrome greys provide calm surfaces for
        dense information, and the accent gradients highlight key actions without overwhelming the experience.
      </p>
      <figure className="project-figure">
        <Image src={colorPaletteVisual} alt="Pulse color palette showing red and neutral shades" placeholder="blur" />
      </figure>
    </div>
  </ProjectSection>
);
