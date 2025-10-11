"use client";

import React, { ReactNode } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { VideoEmbed } from './VideoEmbed';
import '../sections/styles/project-components.css';

export interface ProjectShellProps {
  cover?: {
    src: string | StaticImageData;
    alt?: string;
    ratio?: string;
    video?: boolean;
    poster?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    playsInline?: boolean;
  };
  title: string;
  caption?: string;
  meta?: Array<{ label: string; value: ReactNode | ReactNode[] }>;
  actions?: ReactNode;
  children: ReactNode;
}

export function ProjectShell({ cover, title, caption, meta = [], actions, children }: ProjectShellProps) {
  return (
    <article className="project-shell" data-project-article>
      {cover && (
        <div
          className="project-cover"
          style={cover.ratio ? ({ aspectRatio: cover.ratio } as React.CSSProperties) : undefined}
        >
          {cover.video ? (
            <VideoEmbed
              url={typeof cover.src === 'string' ? cover.src : cover.src.src}
              title={cover.alt || title}
              poster={cover.poster}
              autoPlay={cover.autoPlay ?? true}
              loop={cover.loop ?? true}
              muted={cover.muted ?? true}
              controls={cover.controls ?? true}
              playsInline={cover.playsInline ?? true}
              className="project-cover-media"
              wrapperClassName="project-cover-embed"
            />
          ) : (
            <Image src={cover.src} alt={cover.alt || title} fill className="project-cover-media" priority />
          )}
        </div>
      )}
  <header className="project-head" data-animate="blur-fade" data-animate-delay="120ms">
        <h1 className="project-title-head">{title}</h1>
        {caption && <p className="project-caption-head">{caption}</p>}
        {!!meta.length && (
          <div className="project-meta-box" data-animate="blur-fade" data-animate-delay="180ms">
            <ProjectMeta items={meta} />
          </div>
        )}
        {actions && <div className="project-actions">{actions}</div>}
      </header>
      <div className="project-body">{children}</div>
    </article>
  );
}

const inlineMetaLabels = new Set(['Year', 'Team']);
const hiddenMetaLabels = new Set(['Institution', 'Semester', 'Role']);

function renderInlineValue(value: ReactNode | ReactNode[]) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map((v, idx, arr) => (
      <React.Fragment key={idx}>
        {idx > 0 && <span className="project-meta-separator">, </span>}
        {v}
      </React.Fragment>
    ));
  }
  return value;
}

export function ProjectMeta({ items }: { items: Array<{ label: string; value: ReactNode | ReactNode[] }> }) {
  const basicItems = items.filter((item) => inlineMetaLabels.has(item.label));
  const gridItems = items.filter((item) => !inlineMetaLabels.has(item.label) && !hiddenMetaLabels.has(item.label));
  const cols3 = gridItems.length >= 5;

  return (
    <div className="project-meta">
      {basicItems.length > 0 && (
        <div className="project-meta-basic">
          {basicItems.map((item, index) => (
            <div className="project-meta-basic-item" key={`${item.label}-${index}`}>
              <span className="project-meta-basic-label">{item.label}</span>
              <span className="project-meta-basic-value">{renderInlineValue(item.value)}</span>
            </div>
          ))}
        </div>
      )}
      {gridItems.length > 0 && (
        <dl className={`project-meta-grid${cols3 ? ' cols-3' : ''}`}>
          {gridItems.map((m, i) => (
            <div className="project-meta-cell" key={i}>
              <dt>{m.label}</dt>
              <dd>{Array.isArray(m.value) ? m.value.map((v, idx) => <div key={idx}>{v}</div>) : m.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

export interface ProjectSectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  anchor?: string;
}

export function ProjectSection({ id, title, eyebrow, children, anchor }: ProjectSectionProps) {
  return (
    <section
      id={id || anchor}
      data-project-anchor={anchor || id}
      className="project-section-block"
      data-animate="blur-fade"
    >
      {eyebrow && <div className="project-eyebrow">{eyebrow}</div>}
      {title && <h2 className="project-section-title">{title}</h2>}
      <div className="project-section-content">{children}</div>
    </section>
  );
}

export function QuadGrid({ children, cols = 2 }: { children: ReactNode; cols?: 2 | 3 | 4 }) {
  const className = cols === 2 ? 'project-quad-grid' : `project-quad-grid cols-${cols}`;
  return <div className={className}>{children}</div>;
}

export function QuadItem({ children, title, caption }: { children?: ReactNode; title?: string; caption?: string }) {
  return (
    <div className="project-quad-item">
      {children}
      {(title || caption) && (
        <div className="project-quad-text">
          {title && <h3>{title}</h3>}
          {caption && <p>{caption}</p>}
        </div>
      )}
    </div>
  );
}

export function ImageReel({ images }: { images: { src: string | StaticImageData; alt?: string }[] }) {
  return (
    <div className="project-image-reel" aria-label="Image reel">
      {images.map((img, i) => (
        <figure key={i} className="project-reel-frame">
          <Image src={img.src} alt={img.alt || ''} width={800} height={600} className="project-reel-img" />
        </figure>
      ))}
    </div>
  );
}

export function SectionDivider() {
  return <hr className="project-divider" />;
}

export { MediaCarousel } from './MediaCarousel';
export {
  SurveyStats,
  AgeDistributionCard,
  KnowledgeDonutCard,
  InterestBarCard,
} from './SurveyStats';
export { VideoEmbed } from './VideoEmbed';
