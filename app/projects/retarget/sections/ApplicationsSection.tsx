"use client";

import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import brandMockupPrimary from '@assets/RETARGET/mockups-primary.jpg';
import brandMockupSecondary from '@assets/RETARGET/mockups-secondary.png';
import brandMockupTertiary from '@assets/RETARGET/mockups-tertiary.png';
import brandLaptopMockup from '@assets/RETARGET/mac-mockup.jpg';
import brandStationery from '@assets/RETARGET/letterhead.jpg';
import brandColorFamily from '@assets/RETARGET/color-family.jpg';
import brandGridSystem from '@assets/RETARGET/grid-system.png';
import brandStamp from '@assets/RETARGET/stamp.png';
import brandTactileDetail from '@assets/RETARGET/post-it.jpg';

const applications = [
  { src: brandMockupPrimary, alt: 'Large-scale campaign visuals', width: 8200, height: 2700 },
  { src: brandMockupSecondary, alt: 'Brand applications across web and mobile', width: 11757, height: 4149 },
  { src: brandMockupTertiary, alt: 'Billboard and signage translations', width: 7200, height: 2700 },
  { src: brandLaptopMockup, alt: 'MacBook pitch deck mockup', width: 2800, height: 2100 },
  { src: brandStationery, alt: 'Stationery and letterhead system', width: 3000, height: 2250 },
  { src: brandColorFamily, alt: 'Color palette overview', width: 1920, height: 1508 },
  { src: brandGridSystem, alt: 'Grid and layout guidance', width: 9601, height: 2801 },
  { src: brandStamp, alt: 'Brand stamp lockup', width: 4800, height: 2700 },
  { src: brandTactileDetail, alt: 'Brand post-it and tactile assets', width: 3000, height: 2250 },
];

export function ApplicationsSection() {
  return (
    <ProjectSection id="project-applications" anchor="project-applications" title="Identity in Action">
      <p>
        The identity system scales across digital and physical touchpoints. Consistent color, typography, and motion language create a recognizable presence—from billboards and stationery to in-product UI moments.
      </p>
      <div className="retarget-applications">
        {applications.map((item) => (
          <figure key={item.alt}>
            <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
          </figure>
        ))}
      </div>
    </ProjectSection>
  );
}
