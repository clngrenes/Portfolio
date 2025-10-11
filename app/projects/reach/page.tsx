'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ProjectSection, ProjectShell, SectionDivider } from '@/components/projects';
import logo from '@assets/LOGO/logo.svg';
import reachCover from '@assets/COVERS/reach-cover.jpg';
// @ts-expect-error -- bundler resolves mp4 asset via webpack alias
import reachTypographyVideo from '@assets/REACH/typo.mp4';
// @ts-expect-error -- bundler resolves mp4 asset via webpack alias
import reachColorVideo from '@assets/REACH/colors.mp4';
import reachPersonas from '@assets/REACH/user-interface.jpg';
import reachContactsVisual from '@assets/REACH/contacts.jpg';
import reachMockupOne from '@assets/REACH/phone-top.jpg';
import reachMockupTwo from '@assets/REACH/phone-bottom.jpg';
import reachAppIcon from '@assets/REACH/app-icon.jpg';
import LeftProjectNavigation from '../../components/navigation/LeftProjectNavigation';
import '../styles/reach.css';

const contactData = [
  { id: 'contact-1', emoji: '👨‍💼', name: 'Dad', meta: 'Last called: 3 days ago' },
  { id: 'contact-2', emoji: '👩‍🎓', name: 'Sarah (Best Friend)', meta: 'Last called: 1 week ago' },
  { id: 'contact-3', emoji: '👨‍🏫', name: 'Prof. Miller (Mentor)', meta: 'Last called: 2 months ago' },
];

const paletteSwatches = [
  { hex: '#240B6A', label: 'Deep Focus', role: 'Primary base', contrast: 'dark' },
  { hex: '#724DFF', label: 'Guiding Violet', role: 'Brand accent', contrast: 'light' },
  { hex: '#9885FF', label: 'Soft Support', role: 'Secondary accent', contrast: 'light' },
  { hex: '#D6D4FF', label: 'Fog Layer', role: 'Interface surface', contrast: 'light' },
  { hex: '#F3F2FF', label: 'Quiet Canvas', role: 'Background wash', contrast: 'light' },
];

export default function ReachProject() {
  const [calledContacts, setCalledContacts] = useState<string[]>([]);

  const markAsCalled = (contactId: string) => {
    if (!calledContacts.includes(contactId)) {
      setCalledContacts((prev) => [...prev, contactId]);
    }
  };

  const callProgress = useMemo(() => {
    if (!contactData.length) return 0;
    return Math.min(100, (calledContacts.length / contactData.length) * 100);
  }, [calledContacts]);

  return (
    <div className="reach-project-wrapper" data-project="reach">
      <a href="/#projects" aria-label="Back to Recent Work" className="project-home-logo">
        <Image src={logo} alt="Recent Work" width={40} height={40} />
      </a>
      <LeftProjectNavigation projectType="reach" />
      <ProjectShell
        cover={{ src: reachCover, alt: 'Reach App Cover' }}
        title="Reach"
        caption="Stay truly connected with the people who matter most. Keep track of your calls, nurture relationships, and own your communication habits."
      >
        <SectionDivider />
        <ProjectSection anchor="project-overview" title="Why Reach Matters">
          <p>
            Reach is built for intentional, recurring contact. Instead of endless contact lists, the experience centres the people you
            genuinely want to keep close—family, friends, mentors—and helps you track the rhythm of those conversations.
          </p>
          <p>
            Each interaction is logged like a small promise kept. Over weeks and months, you get a gentle accountability loop that makes
            staying in touch feel rewarding instead of overwhelming.
          </p>
          <div className="reach-interactive" role="region" aria-labelledby="reach-demo-heading">
            <h3 id="reach-demo-heading">Try it yourself</h3>
            <div className="reach-contact-list">
              {contactData.map((contact) => {
                const called = calledContacts.includes(contact.id);
                return (
                  <div key={contact.id} className={`reach-contact ${called ? 'is-called' : ''}`}>
                    <div className="reach-contact-info">
                      <div className="reach-contact-avatar" aria-hidden>
                        {contact.emoji}
                      </div>
                      <div className="reach-contact-details">
                        <h4>{contact.name}</h4>
                        <p>{contact.meta}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="reach-call-button"
                      onClick={() => markAsCalled(contact.id)}
                      disabled={called}
                    >
                      {called ? '✅ Called' : '📞 Call'}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="reach-progress" aria-live="polite">
              <h4>This week&apos;s progress</h4>
              <div className="reach-progress-track">
                <div className="reach-progress-fill" style={{ width: `${callProgress}%` }} />
              </div>
              <p>
                {calledContacts.length} of {contactData.length} calls made this week
              </p>
            </div>
          </div>
        </ProjectSection>

        <SectionDivider />

        <ProjectSection anchor="project-concept" title="Design Principles">
          <p>
            Modern messengers create a constant stream of requests that blur the line between what is urgent and what is meaningful. Reach
            flips that model by asking one question: who deserves your attention today? The product trims the noise and celebrates the
            calls you actually make.
          </p>
          <p>
            The concept also borrows from gentle habit forming. Visual feedback, streaks, and encouraging micro-copy guide people toward
            being deliberate about connection, not just mindlessly available.
          </p>
          <div className="reach-problem">
            <div className="reach-problem-column">
              <h4>❌ Traditional way</h4>
              <div className="reach-notification-wall">
                <span>📱 Instagram (99+)</span>
                <span>💬 WhatsApp (47 unread)</span>
                <span>📧 Email (156 unread)</span>
                <span>🐦 Twitter (23 mentions)</span>
                <span>📺 YouTube (12 updates)</span>
                <span>💼 LinkedIn (8 messages)</span>
              </div>
              <p>Relational noise makes it easy to lose track of what matters.</p>
            </div>
            <div className="reach-problem-column">
              <h4>✅ Focused approach</h4>
              <div className="reach-focus-panel">
                <div className="reach-focus-card" data-level="high">
                  <span className="reach-focus-emoji">👨‍👩‍👧‍👦</span>
                  <span className="reach-focus-name">Family</span>
                  <span className="reach-focus-meta">Weekly calls</span>
                </div>
                <div className="reach-focus-card" data-level="medium">
                  <span className="reach-focus-emoji">👥</span>
                  <span className="reach-focus-name">Close Friends</span>
                  <span className="reach-focus-meta">Bi-weekly check-ins</span>
                </div>
                <div className="reach-focus-card" data-level="low">
                  <span className="reach-focus-emoji">🎓</span>
                  <span className="reach-focus-name">Mentors</span>
                  <span className="reach-focus-meta">Monthly updates</span>
                </div>
              </div>
              <p>Focus the experience on the relationships that should never drift.</p>
            </div>
          </div>
        </ProjectSection>

        <SectionDivider />

        <ProjectSection anchor="project-brand" title="Visual System">
          <p>
            A calm violet palette, soft gradients, and warm typography strike a balance between clarity and empathy. Motion cues are slow
            and tactile, emphasising care over speed while keeping the navigation familiar.
          </p>
          <div className="reach-animation-grid">
            <div className="reach-animation-item">
              <div className="reach-animation-media">
                <video autoPlay loop muted playsInline>
                  <source src={reachTypographyVideo} type="video/mp4" />
                </video>
              </div>
              <h4>Typography animation</h4>
            </div>
            <div className="reach-animation-item">
              <div className="reach-animation-media">
                <video autoPlay loop muted playsInline>
                  <source src={reachColorVideo} type="video/mp4" />
                </video>
              </div>
              <h4>Color system</h4>
            </div>
          </div>
          <div className="reach-palette" role="list" aria-label="Reach color palette">
            {paletteSwatches.map(({ hex, label, role, contrast }) => (
              <button
                key={hex}
                className="reach-palette-item"
                style={{ backgroundColor: hex }}
                data-contrast={contrast}
                type="button"
                aria-label={`${label} – ${role}`}
              >
                <span className="reach-palette-label">
                  <strong>{label}</strong>
                  <span>{hex}</span>
                </span>
              </button>
            ))}
          </div>
        </ProjectSection>

        <SectionDivider />

        <ProjectSection anchor="project-interface" title="Product Experience">
          <p>
            The core journeys emphasise calm decision-making: a focused home screen, approachable copy, and lightweight controls keep
            actions quick without ever feeling demanding. Contextual guidance explains what happens next instead of burying users in
            options.
          </p>
          <figure className="reach-figure">
            <Image
              src={reachPersonas}
              alt="Reach product overview screens"
              width={7488}
              height={4212}
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </figure>
          <div className="reach-subsection">
            <h3>Contact management</h3>
            <p>
              Contacts surface when you really need them. A progress indicator highlights who has gone quiet and gently nudges you to
              reconnect before the relationship drifts, so every reminder feels purposeful rather than noisy.
            </p>
            <figure className="reach-figure">
              <Image
                src={reachContactsVisual}
                alt="Contact management checklist in Reach"
                width={7488}
                height={2106}
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </figure>
          </div>
        </ProjectSection>

        <ProjectSection anchor="project-conclusion" title="Key Takeaways">
          <p>
            Reach showed that meaningful digital experiences benefit from constraints. By designing for a single, human need—staying close
            to the people who matter—the product encourages stepping away from screens after every call. Connection, not engagement, is the
            metric that matters most.
          </p>
          <div className="reach-mockups">
            <Image
              src={reachMockupOne}
              alt="Reach app hero mockup"
              width={4500}
              height={3000}
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
            <Image
              src={reachMockupTwo}
              alt="Reach call scheduling mockup"
              width={4500}
              height={3000}
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>
          <figure className="reach-figure reach-icon">
            <Image
              src={reachAppIcon}
              alt="Reach app icon"
              width={3600}
              height={3600}
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </figure>
        </ProjectSection>
      </ProjectShell>
    </div>
  );
}
