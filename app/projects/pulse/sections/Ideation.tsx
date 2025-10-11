"use client";
import { ProjectSection } from '@/components/projects';
import Image from 'next/image';
import React from 'react';
import wireframesVisual from '@assets/PULSE/wireframes.jpg';
import sketchesVisual from '@assets/PULSE/sketches.jpg';
import moodboardVisual from '@assets/PULSE/moodboard.jpg';
import userJourneyVisual from '@assets/PULSE/user-journey.jpg';

export const Ideation: React.FC = () => (
  <ProjectSection id="pulse-ideation" title="Ideation" anchor="pulse-ideation">
    <p>Through a structured ideation process, we developed creative solutions to address the key challenges identified during our research phase.</p>
    <div id="pulse-hmw" data-project-anchor="pulse-hmw" className="project-section-subblock">
      <h3>How Might We Questions</h3>
      <p>From the user flow, we formulated “How Might We” questions, which were prioritized accordingly. This enabled us to tackle the most important challenges directly and focus on innovative solutions.</p>
      <div className="pulse-hmw-list" role="list" aria-label="Prioritized How Might We questions">
        <div className="pulse-hmw-item" role="listitem">
          <div className="pulse-hmw-num">1</div>
          <div className="pulse-hmw-body">
            <span className="pulse-hmw-title">How can we make the donation process more efficient and pleasant?</span>
            <p>Long wait times and complicated procedures especially discourage first-time donors and busy individuals.</p>
          </div>
        </div>
        <div className="pulse-hmw-item" role="listitem">
          <div className="pulse-hmw-num">2</div>
          <div className="pulse-hmw-body">
            <span className="pulse-hmw-title">How can we build a personal connection to blood donation?</span>
            <p>Young people often lack an emotional connection to the topic of blood donation, which is essential for long-term engagement.</p>
          </div>
        </div>
        <div className="pulse-hmw-item" role="listitem">
          <div className="pulse-hmw-num">3</div>
          <div className="pulse-hmw-body">
            <span className="pulse-hmw-title">How can we improve information and education?</span>
            <p>A lack of knowledge about donation requirements and the actual process poses a major barrier.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="pulse-problem-solution" data-project-anchor="pulse-problem-solution" className="project-section-subblock">
      <h3>From Problem to Solution</h3>
      <p>Using a structured ideation process, we transformed the identified problems into concrete solution approaches. The iterative process included various creative techniques and continuous testing of hypotheses.</p>
      <div className="pulse-process-grid" role="list" aria-label="Ideation transformation steps">
        <div className="pulse-process-step" role="listitem">
          <div className="pulse-process-head"><div className="pulse-process-num">1</div><div className="pulse-process-title">Problem Identification</div></div>
          <p>Analyze user research findings and identify key pain points in the blood donation process.</p>
        </div>
        <div className="pulse-process-step" role="listitem">
          <div className="pulse-process-head"><div className="pulse-process-num">2</div><div className="pulse-process-title">Define HMW Questions</div></div>
          <p>Rephrase the identified problems into specific design challenges.</p>
        </div>
        <div className="pulse-process-step" role="listitem">
          <div className="pulse-process-head"><div className="pulse-process-num">3</div><div className="pulse-process-title">Ideation &amp; Brainstorming</div></div>
          <p>Development sessions and creative workshops with various stakeholders.</p>
        </div>
        <div className="pulse-process-step" role="listitem">
          <div className="pulse-process-head"><div className="pulse-process-num">4</div><div className="pulse-process-title">Clustering &amp; Selection</div></div>
          <p>Group and prioritize ideas based on innovativeness and feasibility.</p>
        </div>
        <div className="pulse-process-step" role="listitem">
          <div className="pulse-process-head"><div className="pulse-process-num">5</div><div className="pulse-process-title">Concept &amp; Testing</div></div>
          <p>Develop the most promising ideas into feature concepts; visualize and test with potential users.</p>
        </div>
      </div>
      <p>Next we explored the structure of the experience through wireframes, mapping the main journeys and defining which features belonged in each flow.</p>
      <div className="pulse-wireframes-stack">
        <figure className="project-figure">
          <Image src={wireframesVisual} alt="Early Pulse wireframes exploring navigation flows" placeholder="blur" />
        </figure>
        <figure className="project-figure">
          <Image src={sketchesVisual} alt="Sketches iterating on Pulse interaction patterns" placeholder="blur" />
        </figure>
        <figure className="project-figure">
          <Image src={moodboardVisual} alt="Moodboard defining visual tone for Pulse" placeholder="blur" />
        </figure>
      </div>
    </div>
    <div id="pulse-user-journey" data-project-anchor="pulse-user-journey" className="project-section-subblock">
      <h3>User Journey</h3>
      <p>
        Mapping the complete journey helped us connect marketing touchpoints, digital flows, and on-site experiences. Each lane reveals how
        reminders, questionnaires, and follow-ups support donors from first awareness through post-donation engagement.
      </p>
      <figure className="project-figure">
        <Image src={userJourneyVisual} alt="Detailed user journey mapping the Pulse donation experience" placeholder="blur" />
      </figure>
    </div>
  </ProjectSection>
);
