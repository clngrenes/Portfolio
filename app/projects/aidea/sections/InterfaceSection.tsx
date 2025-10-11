"use client";

import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { aideaAssets } from '../assets';

export function InterfaceSection() {
  return (
    <ProjectSection anchor="project-interface" title="Interface Design">
      <p>
        When you open AIDEA, you won&apos;t find cluttered toolbars or confusing menus. The interface gets out of your way so you can focus on what matters most: bringing your ideas to life. Every tool is exactly where you expect it, and the drawing canvas takes center stage.
      </p>
      <div className="aidea-media">
        <Image src={aideaAssets.interfaceImage} alt="AIDEA User Interface" width={800} height={600} />
      </div>
      <p>
        The design philosophy is simple: remove barriers between your imagination and the screen. No hunting through nested menus or overwhelming feature lists. Just pick up your stylus and start sketching – the interface adapts to support your creative flow, not interrupt it.
      </p>
    </ProjectSection>
  );
}
