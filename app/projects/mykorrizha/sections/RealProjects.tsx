import React from 'react';
import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { mykorrizhaAssets } from '../assets';

export function RealProjectsSection() {
  return (
    <ProjectSection id="project-garden" anchor="project-garden" title="Learning Through Real Projects">
      <p>Projects (e.g. a self-sustaining garden) create multi-layered cognitive surfaces: biological systems, cooperative logistics, narrative expression and material problem-solving—all in one living frame.</p>
      <figure className="myko-visual" aria-label="School garden project visualization">
        <Image src={mykorrizhaAssets.schoolGarden} alt="School Garden" />
      </figure>
      <div className="project-section-subblock" id="myko-project-roles">
        <h3>Role Archetypes</h3>
        <div className="myko-grid roles" role="list" aria-label="Collaborative role archetypes">
          {[
            { t: 'Plant Lovers', c: 'Steward growth cycles, environmental data and biological care.' },
            { t: 'Science Detectives', c: 'Form hypotheses, run micro-experiments and interpret variance.' },
            { t: 'Builders & Makers', c: 'Materialize infrastructure, iterate structures and manage constraints.' },
            { t: 'Storytellers', c: 'Externalize process, synthesize meaning and broadcast narrative arcs.' }
          ].map(r => (
            <div className="myko-card" key={r.t} role="listitem" tabIndex={0}>
              <h4>{r.t}</h4>
              <p>{r.c}</p>
            </div>
          ))}
        </div>
      </div>
    </ProjectSection>
  );
}
