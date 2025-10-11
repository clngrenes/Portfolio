"use client";
import { ProjectSection } from '@/components/projects';
import { MediaCarousel } from '@/components/projects/MediaCarousel';
import React from 'react';
import pulseScreens from '@assets/PULSE/screens.jpg';
import pulseUi from '@assets/PULSE/notification.jpg';
import pulseAppIconPrimary from '@assets/PULSE/appicon.jpg';
import pulseAppIconAlt from '@assets/PULSE/appicon-2.jpg';
import pulseChallenge from '@assets/PULSE/challenge.jpg';
import pulseChallengeAlt from '@assets/PULSE/challenge-2.jpg';
import pulseDonation from '@assets/PULSE/spendi.jpg';
import pulseDonationHistory from '@assets/PULSE/spendeverlauf.jpg';
import pulseDonationHistoryAlt from '@assets/PULSE/spendeverlauf-2.jpg';
import pulseFaq from '@assets/PULSE/faq.jpg';
import pulseAppointments from '@assets/PULSE/termine.jpg';
import pulseAppointmentFlow from '@assets/PULSE/termine-verlauf.jpg';

export const Mockups: React.FC = () => (
  <ProjectSection id="pulse-mockups" title="Product Screens" anchor="pulse-mockups">
    <MediaCarousel
      images={[
        { src: pulseScreens, alt: 'Pulse core screens collage' },
        { src: pulseUi, alt: 'Detailed UI view with notification states' },
        { src: pulseAppIconPrimary, alt: 'Primary Pulse app icon' },
        { src: pulseAppIconAlt, alt: 'Alternate Pulse app icon concept' },
        { src: pulseChallenge, alt: 'Pulse challenge screen highlighting team progress' },
        { src: pulseChallengeAlt, alt: 'Alternative challenge layout with streaks' },
        { src: pulseDonation, alt: 'Donation flow outlining key steps' },
        { src: pulseDonationHistory, alt: 'Donation history overview' },
        { src: pulseDonationHistoryAlt, alt: 'Detailed donation timeline view' },
        { src: pulseFaq, alt: 'FAQ interface design' },
        { src: pulseAppointments, alt: 'Appointments overview screen' },
        { src: pulseAppointmentFlow, alt: 'Appointment booking timeline' },
      ]}
      aspectRatio="16/9"
      thumbAspectRatio="4/3"
    />
  </ProjectSection>
);
