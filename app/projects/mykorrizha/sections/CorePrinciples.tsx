import React from 'react';
import { ProjectSection } from '@/components/projects';

export function CorePrinciplesSection() {
  return (
    <ProjectSection id="project-features" anchor="project-features" title="Our Core Principles">
      <p>Mykorrizha (mycorrhiza) describes the symbiotic network under every healthy forest: hidden, adaptive, connecting and nourishing. It became the metaphor for a learning system that shifts from instruction to emergence.</p>
      <div className="project-section-subblock" id="myko-principles" data-project-anchor="myko-principles">
        <h3>Five Foundational Shifts</h3>
        <div className="myko-grid principles" role="list" aria-label="Core educational principles">
          {[
            { t: 'No teachers.', c: 'Adults move from lecturers to emotional / social facilitators. AI offloads repetition and diagnostics—freeing time for human development.' },
            { t: 'No classes.', c: 'Learners navigate personal trajectories. Cohorts become fluid collaboration clusters formed around project fit and readiness.' },
            { t: 'No grades.', c: 'Progress is expressed as capability growth & evidence, not stress-inducing numerical compression.' },
            { t: 'No exams.', c: 'Continuous, contextual performance creates a living assessment layer—eliminating artificial test events.' },
            { t: 'No subjects.', c: 'Interdisciplinary projects drive emergent synthesis; knowledge clusters instead of silos.' }
          ].map(p => (
            <div className="myko-card" key={p.t} role="listitem" tabIndex={0}>
              <h4>{p.t}</h4>
              <p>{p.c}</p>
            </div>
          ))}
        </div>
      </div>
    </ProjectSection>
  );
}
