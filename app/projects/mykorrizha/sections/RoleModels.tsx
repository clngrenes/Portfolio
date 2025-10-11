import React from 'react';
import { ProjectSection } from '@/components/projects';
import { mykorrizhaAssets } from '../assets';

export function RoleModelsSection() {
  return (
    <ProjectSection id="project-rolemodels" anchor="project-rolemodels" title="Learning from Historical Minds">
      <p>
        Conversational tutors such as Einstein, Curie, or da Vinci guide learners in plain language, narrating the experiments, doubts and
        sparks that shaped their breakthroughs. Instead of memorizing facts, students experience how ideas were born and why they still
        matter today.
      </p>
      <figure className="myko-visual video" aria-label="Einstein AI tutor clip">
        <video autoPlay loop muted playsInline>
          <source src={mykorrizhaAssets.roleModelsVideo} type="video/mp4" />
        </video>
      </figure>
    </ProjectSection>
  );
}
