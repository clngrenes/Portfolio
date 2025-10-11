"use client";

import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import React, { KeyboardEvent, useState } from 'react';
import challengeScreen from '@assets/PULSE/ui-challenge.jpg';
import crewScreen from '@assets/PULSE/ui-gruppenansicht.jpg';
import donationFlowScreen from '@assets/PULSE/ui-spendi.jpg';
import questionnaireScreen from '@assets/PULSE/ui-fragebogen.png';
import bookingScreen from '@assets/PULSE/ui-terminauswahl.jpg';
import scheduleScreen from '@assets/PULSE/ui-termine.jpg';
import historyScreen from '@assets/PULSE/ui-verlauf.jpg';

const screens = [
  {
    image: challengeScreen,
    title: 'Collective Challenges',
    description:
      'Tracks team-based donation challenges with streak progress and celebratory feedback that keep groups motivated.',
  },
  {
    image: crewScreen,
    title: 'Community Overview',
    description:
      'Provides a quick snapshot of friends and colleagues, showing recent donations and who is lining up next.',
  },
  {
    image: donationFlowScreen,
    title: 'Giving Made Simple',
    description:
      'Guides donors step by step through a transparent flow covering preparation, on-site check-in, and post-donation care.',
  },
  {
    image: questionnaireScreen,
    title: 'Smart Eligibility Check',
    description:
      'Condenses the DRK questionnaire into clear, mobile-friendly prompts so donors finish screening without guesswork.',
  },
  {
    image: bookingScreen,
    title: 'Appointment Finder',
    description:
      'Surfaces nearby drives with availability filters, helping donors secure the slot that fits their schedule.',
  },
  {
    image: scheduleScreen,
    title: 'Personal Schedule',
    description:
      'Keeps every confirmed visit and reminder in one place so donors never lose track of their upcoming commitments.',
  },
  {
    image: historyScreen,
    title: 'Donation History',
    description:
      'Highlights past donations, blood values, and community impact to reinforce the habit over time.',
  },
] as const;

export const UiHighlights: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActivate = (index: number) => {
    setActiveIndex(index);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleActivate(index);
    }
  };

  return (
    <ProjectSection id="pulse-ui-showcase" title="UI Feature Highlights" anchor="pulse-ui-showcase">
      <p>
        These interface moments show how Pulse translates research insights into guided, community-first decisions. Each screen focuses on a
        pivotal action—from finding an appointment to celebrating collective progress.
      </p>
      <div className="pulse-feature-layout">
        <div className="pulse-feature-image-panel" data-animate="blur-fade" data-animate-delay="120ms">
          <div className="pulse-feature-image-stack" aria-live="polite">
            {screens.map(({ image, title }, index) => (
              <div
                key={title}
                className={`pulse-feature-image-layer${index === activeIndex ? ' is-active' : ''}`}
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={image}
                  alt={index === activeIndex ? `${title} feature image` : ''}
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                  className="pulse-feature-image"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="pulse-feature-list" role="list" aria-label="Navigate Pulse feature screens">
          {screens.map(({ title, description }, index) => (
            <div
              key={title}
              className={`pulse-feature-card${index === activeIndex ? ' is-active' : ''}`}
              tabIndex={0}
              onMouseEnter={() => handleActivate(index)}
              onFocus={() => handleActivate(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              role="listitem"
              aria-current={index === activeIndex}
            >
              <div className="pulse-feature-name">
                <span className="pulse-feature-name-text">{title}</span>
              </div>
              <div className="pulse-feature-text">
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectSection>
  );
};

export default UiHighlights;
