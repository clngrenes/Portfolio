"use client";
import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import React from 'react';
import futureVisual from '@assets/PULSE/zukunft.jpg';

export const Conclusion: React.FC = () => (
  <ProjectSection id="pulse-conclusion" title="Conclusion" anchor="pulse-conclusion">
    <p>
      Working on Pulse was an eye-opening experience that showed me how design can tackle real social problems. What started as a simple
      question - &quot;Why don&apos;t young people donate blood?&quot; - turned into a comprehensive solution that addresses everything from scheduling
      headaches to the lack of community around blood donation.
    </p>
    <figure
      className="project-figure"
      data-animate="blur-fade"
      data-animate-delay="80"
      style={{ marginBottom: 'var(--space-paragraph-content)' }}
    >
      <Image src={futureVisual} alt="Pulse app future vision showing community-driven features" placeholder="blur" />
    </figure>
    <p>
      The most rewarding part was seeing how small design decisions could make such a big difference. Features like the smart appointment
      system and donation streaks aren&apos;t just nice-to-haves - they directly solve the pain points we discovered during our research. By
      making blood donation feel more like joining a community than doing a chore, Pulse has the potential to create lasting change in how
      young people think about giving back.
    </p>
  </ProjectSection>
);
