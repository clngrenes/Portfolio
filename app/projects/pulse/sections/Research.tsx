"use client";
import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { SurveyStats } from '@/components/projects/SurveyStats';
import React from 'react';
import posterCreationVisual from '@assets/PULSE/posters.jpg';
import shadowingVisual from '@assets/PULSE/shadowing.jpg';

const drkAssumptions = [
  {
    title: 'Perceived financial motivation',
    description:
      'Some people believe donations are driven mainly by financial incentives or assume others will cover the need, so their own contribution feels less important.'
  },
  {
    title: 'Low return rate after the first donation',
    description:
      'Many don’t come back because the effort feels too high or they underestimate the benefit for the wider community.'
  },
  {
    title: 'Complex booking and registration',
    description:
      'The process for finding an appointment and signing up is perceived as confusing and time-consuming.'
  },
  {
    title: 'Lack of visibility into demand',
    description:
      'Without clear signals about current blood shortages or public reminders, people donate less regularly.'
  },
  {
    title: 'Unclear donation logistics',
    description:
      'It’s often unclear where, when, and how to donate, or which steps are involved on site.'
  },
  {
    title: 'Eligibility misconceptions',
    description:
      'People assume they cannot donate because of age, health, or lifestyle factors—even when they meet the criteria.'
  },
  {
    title: 'Fears around the procedure',
    description:
      'Anxieties about needles, medical settings, or feeling exhausted afterwards stop many potential donors.'
  },
  {
    title: 'LGBTQ+ uncertainty',
    description:
      'Many queer people are unaware that donation rules have been relaxed and fear prejudice or doubts about safety.'
  },
  {
    title: 'Low awareness of DRK digital tools',
    description:
      'Few people know the German Red Cross already offers a blood donation app or similar services.'
  }
];

const shadowingFindings = [
  {
    title: '“This all feels so negative.”',
    description:
      'The intense red landing page felt overwhelming. Lars struggled to know where to look first and started with a negative impression.'
  },
  {
    title: '“I can’t continue without a donor card.”',
    description:
      'The “Without donor card” option was barely visible, so he assumed the appointment wasn’t possible without one.'
  },
  {
    title: 'Language barriers',
    description:
      'The data privacy form must be filled out in German. Without language support, non-native speakers can’t complete the process even with a translator.'
  },
  {
    title: 'Missing nutrition guidance',
    description:
      'Lars didn’t know he should eat more throughout the day, so he arrived underprepared.'
  },
  {
    title: 'Time and paperwork burden',
    description:
      'The visit took roughly 80 minutes, including 15 minutes of repetitive paperwork that must be redone each time.'
  },
  {
    title: 'Pre-screening expectations',
    description:
      'Before the medical check, the doctor insisted he read the entire “What to know before donating” brochure, adding another mandatory step.'
  }
];

const interviewInsights = [
  {
    title: 'First-time motivations',
    description:
      'Most interviewees donated for the first time because someone close encouraged them, out of curiosity, or to help others in a tangible way.'
  },
  {
    title: 'Promotion triggers',
    description:
      'Family, friends, posters, hospital staff, and targeted ads inspired people to try donating and share the experience.'
  },
  {
    title: 'On-site experience',
    description:
      'Overall the staff and organisation were praised, yet the paperwork volume, scattered booking sites, and language barriers still caused friction.'
  },
  {
    title: 'Clarity on rules',
    description:
      'Many remain unsure about deferral criteria or how often they can donate, which leads to hesitations between appointments.'
  },
  {
    title: 'App awareness and gaps',
    description:
      'The DRK app is known but rarely used; interviewees wanted easier booking, clearer supply data, and meaningful personal insights.'
  },
  {
    title: 'Boosting willingness',
    description:
      'People asked for streamlined paperwork, better updates, gentle incentives, and a stronger community feel to motivate repeat donations.'
  },
  {
    title: 'Motivating features',
    description:
      'A live blood barometer, smart reminders, gamified milestones, and inviting friends were all seen as high-value nudges.'
  }
];

export const Research: React.FC = () => (
  <ProjectSection id="pulse-research" title="Research" anchor="pulse-research">
  <p>In our research phase, we used various methods to gather insights for the design process. We conducted online surveys, performed shadowing by accompanying a person during a blood donation, analyzed the German Red Cross forum, conducted interviews, and spoke with officials on-site at the German Red Cross.</p>
    <div id="pulse-poster-campaign" data-project-anchor="pulse-poster-campaign" className="project-section-subblock">
      <h3>Poster Creation</h3>
      <p>
        To reach people beyond our immediate circle we quickly designed a set of posters, printed them ourselves, and put them up in cafés
        and small neighborhood shops around Schwäbisch Gmünd. Each poster carried a short, friendly call to action plus a QR code that led
        straight to the survey.
      </p>
      <p>
        The posters sparked plenty of curiosity. Shop owners mentioned them to regulars, friends shared the link in their group chats, and
        within a single weekend our responses doubled. Most importantly, we started hearing from people who had never crossed paths with our
        digital channels before.
      </p>
      <figure className="project-figure">
        <Image src={posterCreationVisual} alt="Posters promoting the Pulse survey across Schwäbisch Gmünd" width={4800} height={2700} />
      </figure>
    </div>
    <div id="pulse-survey" data-project-anchor="pulse-survey" className="project-section-subblock">
      <h3>Survey</h3>
      <p>Our study with over 80 participants provided valuable insights into blood donation behavior and attitudes. The data collected formed a solid foundation for the development of the Pulse concept.</p>
      <p>Almost nobody we spoke to knew that the German Red Cross already has a blood donation app. Only a handful had even heard about it, which confirmed that basic awareness is still missing long before usability becomes an issue.</p>
      <SurveyStats />
      <p>Our survey shows clear age differences in donation habits. Only 19% of people under 30 give blood regularly, compared with 37% of those over 50. At the same time, 54% of participants were unsure about basic eligibility rules. Even though interest is high—76% say they would like to donate—many never turn that intention into an actual appointment.</p>
    </div>
    <div id="pulse-drk-assumptions" data-project-anchor="pulse-drk-assumptions" className="project-section-subblock">
      <h3>DRK Assumptions</h3>
      <p>
        In workshops with the DRK team we collected further assumptions about why donations stall. The nine themes below capture the
        beliefs we aim to validate and transform through better communication, tooling, and ongoing support.
      </p>
      <div className="assumption-grid">
        {drkAssumptions.map((assumption, index) => (
          <article className="assumption-card" key={index}>
            <h4 className="assumption-title">{assumption.title}</h4>
            <p>{assumption.description}</p>
          </article>
        ))}
      </div>
    </div>
    <div id="pulse-shadowing" data-project-anchor="pulse-shadowing" className="project-section-subblock">
      <h3>Shadowing</h3>
      <p>
        On 28 October we asked a participant to book a blood donation appointment via the DRK website. Two days later we accompanied him to
        the appointment, observed every step, and conducted a short interview to understand how it felt from start to finish.
      </p>
      <figure className="project-figure">
        <Image src={shadowingVisual} alt="Shadowing a donor during the DRK blood donation process" width={4032} height={3024} />
      </figure>
      <p>
        The insights below highlight what Lars struggled with most during the journey—from the online entry point to the final medical
        conversation.
      </p>
      <div className="assumption-grid">
        {shadowingFindings.map((finding, index) => (
          <article className="assumption-card" key={index}>
            <h4 className="assumption-title">{finding.title}</h4>
            <p>{finding.description}</p>
          </article>
        ))}
      </div>
    </div>
    <div id="pulse-faq-concerns" data-project-anchor="pulse-faq-concerns" className="project-section-subblock">
      <h3>Frequently Asked Questions and Concerns</h3>
      <p>From forum analysis (DRK) and interviews we distilled repeating uncertainties that hold potential donors back. These six questions appeared most often.</p>
      <div className="pulse-faq-grid" role="list" aria-label="Common donor concerns">
        <div className="pulse-faq-item" role="listitem">Am I allowed to donate blood if I have a pre-existing condition?</div>
        <div className="pulse-faq-item" role="listitem">How long do I have to wait after getting a tattoo?</div>
        <div className="pulse-faq-item" role="listitem">How long does a blood donation take in total?</div>
        <div className="pulse-faq-item" role="listitem">Can I schedule an appointment to avoid waiting times?</div>
        <div className="pulse-faq-item" role="listitem">When and how do I receive my blood values?</div>
        <div className="pulse-faq-item" role="listitem">What do the individual readings in my results mean?</div>
      </div>
    </div>
    <div id="pulse-user-personas" data-project-anchor="pulse-user-personas" className="project-section-subblock">
      <h3>User Personas</h3>
      <p>Interviews, user shadowing, and surveys led to three main user personas. Direct observations and in-depth interviews provided valuable insights into their needs.</p>
      <div className="pulse-persona-grid" role="list" aria-label="Primary, secondary and tertiary user personas">
        <div className="pulse-persona" role="listitem">
          <div className="pulse-persona-label">Primary Persona</div>
          <h4 className="pulse-persona-name">Anna Himmel</h4>
          <div className="pulse-persona-meta">25 years old</div>
          <p className="pulse-persona-quote">“I would like to donate blood, but I&apos;ve never done it before and I&apos;m not sure if I&apos;m even eligible.”</p>
        </div>
        <div className="pulse-persona" role="listitem">
          <div className="pulse-persona-label">Secondary Persona</div>
          <h4 className="pulse-persona-name">Thomas Beck</h4>
          <div className="pulse-persona-meta">45 years old</div>
          <p className="pulse-persona-quote">“I have been donating blood regularly for 25 years, because my father was saved by a donation. For me, it&apos;s a given.”</p>
        </div>
        <div className="pulse-persona" role="listitem">
          <div className="pulse-persona-label">Tertiary Persona</div>
          <h4 className="pulse-persona-name">Harald Dinkelberg</h4>
          <div className="pulse-persona-meta">65 years old</div>
          <p className="pulse-persona-quote">“I would like to donate blood, but because of my chronic illness, I&apos;m not allowed. I still want to help.”</p>
        </div>
      </div>
    </div>
    <div id="pulse-interviews" data-project-anchor="pulse-interviews" className="project-section-subblock">
      <h3>Interviews</h3>
      <p>
        We spoke with six people for 15–30 minutes each via Google Meet. They brought different donation histories, which helped us compare
        first-timers, regular donors, and those who stopped donating altogether.
      </p>
      <div className="assumption-grid">
        {interviewInsights.map((insight, index) => (
          <article className="assumption-card" key={index}>
            <h4 className="assumption-title">{insight.title}</h4>
            <p>{insight.description}</p>
          </article>
        ))}
      </div>
    </div>
  </ProjectSection>
);
