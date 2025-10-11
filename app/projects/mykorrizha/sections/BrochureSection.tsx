import React from 'react';
import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { mykorrizhaAssets } from '../assets';

export function BrochureSection() {
  return (
    <ProjectSection anchor="project-brochure" title="Communicating the Vision">
      <p>
        To help stakeholders grasp the emotional and practical shift behind Mykorrizha, we distilled the concept into a tangible
        brochure. It walks educators and families through the learner journey, the AI support network, and the everyday rituals that make
        the ecosystem feel safe and empowering.
      </p>
      <div className="myko-gallery" role="list" aria-label="Mykorrizha brochure spreads">
        {[mykorrizhaAssets.brochure.front, mykorrizhaAssets.brochure.inside].map((image, index) => (
          <figure className="myko-gallery-item" key={index} role="listitem">
            <Image src={image} alt={index === 0 ? 'Mykorrizha brochure cover' : 'Mykorrizha brochure inside spread'} />
          </figure>
        ))}
      </div>
    </ProjectSection>
  );
}
