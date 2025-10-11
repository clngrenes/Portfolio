import React from 'react';
import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { mykorrizhaAssets } from '../assets';

const agents = [
  { title: 'Competence Agent', description: 'Tracks capability formation & surfaces proximal expansion zones.', image: mykorrizhaAssets.agents.competenceAgent },
  { title: 'Interest Agent', description: 'Matches tasks to intrinsic motivational gradients.', image: mykorrizhaAssets.agents.interestAgent },
  { title: 'Adaptation Agent', description: 'Continuously recalibrates challenge density & temporal spacing.', image: mykorrizhaAssets.agents.adaptationAgent },
  { title: 'Didactics Agent', description: 'Refactors abstract concepts into personally resonant representations.', image: mykorrizhaAssets.agents.didacticsAgent },
  { title: 'Context Agent', description: 'Accounts for cultural, linguistic & situational nuance.', image: mykorrizhaAssets.agents.contextAgent },
  { title: 'Reflection Agent', description: 'Supports metacognitive consolidation & goal reframing.', image: mykorrizhaAssets.agents.reflectionAgent },
  { title: 'Scheduling Agent', description: 'Optimizes temporal rhythm & collaborative synchrony.', image: mykorrizhaAssets.agents.schedulingAgent },
  { title: 'Trust Agent', description: 'Mediates privacy, consent & data transparency.', image: mykorrizhaAssets.agents.trustAgent },
  { title: 'Social Agent', description: 'Curates team complementarity & peer resonance.', image: mykorrizhaAssets.agents.socialAgent },
];

export function AITeamSection() {
  return (
    <ProjectSection id="project-results" anchor="project-results" title="Your Personal AI Team">
      <p>A constellation of cooperating micro-agents orchestrates pacing, relevance, adaptation, scaffolding and social matching. Each agent owns a precise pedagogical responsibility.</p>
      <div className="myko-grid agents" role="list" aria-label="AI learning support agents">
        {agents.map((agent) => (
          <div className="myko-agent" key={agent.title} role="listitem">
            <div className="myko-agent-media">
              <Image src={agent.image} alt={agent.title} />
            </div>
            <h4>{agent.title}</h4>
            <p>{agent.description}</p>
          </div>
        ))}
      </div>
      <figure className="myko-visual video" aria-label="Agent System Animation">
        <video autoPlay loop muted playsInline>
          <source src={mykorrizhaAssets.aiAgentsVideo} type="video/mp4" />
        </video>
      </figure>
    </ProjectSection>
  );
}
