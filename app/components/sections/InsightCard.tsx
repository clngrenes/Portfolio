"use client";

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

export interface InsightCardData {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  badges?: string[];
  isInternal?: boolean;
}

interface InsightCardProps extends InsightCardData {
  index: number;
}

const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 260;

export function InsightCard({
  title,
  description,
  image,
  href,
  badges = [],
  isInternal = false,
  index,
}: InsightCardProps) {
  const linkProps = isInternal
    ? {}
    : { target: '_blank' as const, rel: 'noopener noreferrer' };
  const LinkComponent = isInternal ? Link : 'a';

  return (
    <LinkComponent href={href} {...linkProps} className="insight-list-link">
      <article
        className="insight-list-card"
        data-animate="blur-fade"
        data-animate-delay={`${index * 80}ms`}
      >
        <div className="insight-list-card__media">
          <Image
            src={image}
            alt={title}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className="cover-image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            priority={index === 0}
            placeholder={image.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={image.blurDataURL}
          />
        </div>
        <div className="insight-list-card__content">
          {!!badges.length && (
            <div className="insight-list-card__meta" aria-hidden={badges.length === 0}>
              {badges.map((badge, badgeIndex) => (
                <span
                  key={`${title}-badge-${badge}-${badgeIndex}`}
                  className={`insight-list-badge ${badge === 'UX RESEARCH' ? 'ux-research' : ''}`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          <h3 className="insight-list-card__title">{title}</h3>
          <p className="insight-list-card__description">{description}</p>
        </div>
      </article>
    </LinkComponent>
  );
}
