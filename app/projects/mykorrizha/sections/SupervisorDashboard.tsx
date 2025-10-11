import React from 'react';
import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { mykorrizhaAssets } from '../assets';

export function SupervisorDashboardSection() {
  return (
    <ProjectSection id="project-dashboard" anchor="project-dashboard" title="Supervisor Dashboard">
      <p>Pedagogical supervision shifts from monitoring compliance to amplifying meaningful momentum. A lightweight dashboard surfaces friction, engagement patterns and reflective windows—without interrupting flow.</p>
      <figure className="myko-visual" aria-label="Supervisor dashboard visualization">
        <Image src={mykorrizhaAssets.supervisorDashboard} alt="Supervisor Dashboard" />
      </figure>
      <p>Instead of managing schedules, supervisors intervene at inflection points—celebrating, re-aligning or scaffolding resilience.</p>
    </ProjectSection>
  );
}
