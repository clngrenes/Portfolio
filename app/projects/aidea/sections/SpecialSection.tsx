"use client";

import Image from 'next/image';
import { ProjectSection } from '@/components/projects';
import { aideaAssets } from '../assets';

export function SpecialSection() {
  return (
    <ProjectSection anchor="project-features-detail" title="What Makes AIDEA Special">
      <p>
        This is our house. And you know what? That&apos;s exactly how the best ideas begin: with crooked lines, no perspective, but full of
        imagination.
      </p>

      <div className="aidea-media">
        <Image src={aideaAssets.penSketchStart} alt="Early sketch of the house inside AIDEA" width={4800} height={3600} />
      </div>

      <p>
        What if that rough sketch could become a polished concept in seconds? No perfect drawing skills required, still unmistakably your
        style – but elevated through AI.
      </p>

      <div className="aidea-media">
        <Image src={aideaAssets.penSketchEnd} alt="AIDEA refined concept of the house" width={4800} height={3600} />
      </div>

      <div className="project-section-subblock">
        <h3>The Smart Pen Concept</h3>
        <p>
          This smart pen brings AI directly into your hand – no menus, no distractions. Hold the button down and it helps you draw: lines become clearer, shapes more consistent. One click refines your sketch, a double-click undoes the last step. You decide what happens – the AI supports you, not the other way around.
        </p>
        <div className="aidea-media is-tight">
          <Image src={aideaAssets.smartPen} alt="Smart pen concept sketch for AIDEA" width={4800} height={3600} />
        </div>
        <p>
          The pen features advanced pressure sensitivity, gesture recognition, and seamless integration with our AI system. Every stroke you make is analyzed and enhanced, turning your natural drawing movements into precise, professional lines while preserving your unique artistic style.
        </p>
      </div>

      <div className="project-section-subblock">
        <h3>From Rough to Refined – Instantly</h3>
        <p>
          Messy lines, disproportionate shapes, or duplicate contours? No problem. The AI Refiner recognizes weaknesses in your sketch and cleans them up automatically – either live while drawing or manually with a button press. Your style remains intact, but the form becomes clear and precise.
        </p>
      </div>

      <div className="project-section-subblock">
        <h3>Sketch Smarter – With One Button</h3>
        <p>
          Like a second hand that shows you how your sketch could continue – before you even know it yourself. When you hold the pen button long, AIDEA recognizes what you&apos;re planning and places a transparent, style-appropriate guide line under your hand. You see a possible continuation – for example, how a roof might run or what a window could look like – and can trace or ignore this line. It&apos;s not autopilot – it&apos;s creative co-sketching. In your style. In real time.
        </p>
      </div>

      <div className="project-section-subblock">
        <h3>One Sketch – Many Views</h3>
        <p>
          The modes in AIDEA aren&apos;t rigid editing phases, but flexible views of your sketch – they automatically adapt depending on how far along you are. You switch between Sketch, Color, Image, and CAD to see your idea from different perspectives – as a sketch, colored concept, realistically interpreted image, or 3D model. Your original remains preserved – each view helps you work purposefully without disrupting the creative process.
        </p>
      </div>

      <div className="project-section-subblock">
        <h3>Locked-In – Your Creative Version History</h3>
        <p>
          With the Locked-Function, you save targeted intermediate states of your sketch – so-called Locks. These &quot;checkpoints&quot; function like an intelligent version system.
        </p>
        <div className="aidea-media">
          <Image src={aideaAssets.historyStill} alt="Saved sketch states within AIDEA" width={4800} height={3600} />
        </div>
        <p>
          You can jump back to any saved state, compare variants or take new directions from there. Ideal for creative branches: Design different styles, try alternative roof shapes or perspectives – without losing your previous work. Each Lock saves not only the graphic, but also the mode (e.g. Sketch, Color or CAD), so you can specifically track developments. AIDEA thinks of the design process not as linear, but as a branched path. And you decide which way to continue.
        </p>
      </div>

      <div className="project-section-subblock">
        <h3>Smart Tools That Think With You</h3>
        <p>
          These tools feel familiar – but they&apos;re smarter, more flexible, and built to support your creative flow with the power of AI.
        </p>
        <div className="aidea-media">
          <Image src={aideaAssets.toolsImage} alt="AIDEA Tools Interface" width={800} height={600} />
        </div>
        <p>
          The Sketch Pen smooths your lines in real time, adapting to your drawing style. The intelligent Eraser removes elements while AI regenerates spaces naturally. The Lasso Tool moves elements with structural awareness, while AI Assist provides context-aware suggestions. For precision, the Ruler Tool creates accurate lines, Grid Toggle provides alignment, and Shape Tool adds forms that integrate seamlessly. The Symmetry Tool mirrors your work for patterns and facades.
        </p>
      </div>
    </ProjectSection>
  );
}
