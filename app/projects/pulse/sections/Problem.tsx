"use client";
import { ProjectSection } from '@/components/projects';
import React from 'react';
import Image from 'next/image';
import problemVisual from '@assets/PULSE/problem.jpg';

export const Problem: React.FC = () => (
  <ProjectSection id="pulse-problem" title="Problem" anchor="pulse-problem">
    <p>In Germany, there is an annual shortage of 2.5 million blood donations – a deficit that exists because only 3% of the population donates regularly. Young people in particular rarely or never participate in blood donations, as the topic is often not present in their daily lives. This is exactly where Pulse comes in: an app designed with targeted features to appeal primarily to young people and motivate them to donate blood regularly.</p>

    <figure className="project-figure">
      <Image src={problemVisual} alt="Young donors facing blood donation challenges" width={4096} height={2731} quality={90} />
    </figure>
  </ProjectSection>
);
