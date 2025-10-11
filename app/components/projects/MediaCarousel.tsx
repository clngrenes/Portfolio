"use client";

import Image, { type StaticImageData } from 'next/image';
import { useEffect, useState, type CSSProperties } from 'react';

export interface CarouselImage {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

export interface MediaCarouselProps {
  images: CarouselImage[];
  aspectRatio?: string;
  initialIndex?: number;
  className?: string;
  thumbAspectRatio?: string;
  autoPlay?: boolean;
  autoPlayDelay?: number;
}

export function MediaCarousel({
  images,
  aspectRatio = '16/9',
  initialIndex = 0,
  className = '',
  thumbAspectRatio = '16/9',
  autoPlay = true,
  autoPlayDelay = 5000,
}: MediaCarouselProps) {
  const hasImages = images.length > 0;
  const boundedIndex = hasImages ? Math.min(Math.max(initialIndex, 0), images.length - 1) : 0;
  const [current, setCurrent] = useState(boundedIndex);
  const thumbColumnsDesktop = Math.min(Math.max(Math.ceil(images.length / 2), 1), 6);
  const thumbColumnsMobile = Math.min(thumbColumnsDesktop, 3);
  const carouselStyle = {
    '--carousel-thumb-ratio': thumbAspectRatio,
    '--carousel-thumb-columns': String(thumbColumnsDesktop),
    '--carousel-thumb-columns-mobile': String(thumbColumnsMobile),
  } as CSSProperties;
  const mainStyle = { '--carousel-ratio': aspectRatio } as CSSProperties;
  const currentImage = images[current];
  const currentKey = typeof currentImage.src === 'string' ? currentImage.src : currentImage.alt;
  const total = images.length;

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
  };

  const goNext = () => goTo(current + 1);

  const goPrev = () => goTo(current - 1);

  useEffect(() => {
    if (!autoPlay || total < 2) return;
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, Math.max(autoPlayDelay, 1000));

    return () => window.clearInterval(timer);
  }, [autoPlay, autoPlayDelay, total]);

  if (!hasImages) return null;

  return (
    <div
      className={`project-carousel ${className}`.trim()}
      style={carouselStyle}
    >
      <div className="project-carousel-main" style={mainStyle}>
        <div
          key={currentKey}
          className="project-carousel-frame"
          data-animate="blur-fade"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="project-carousel-img"
            data-animate="blur-fade"
            sizes="(max-width: 900px) 100vw, 640px"
            priority={current === 0}
          />
        </div>
      </div>
      <div className="project-carousel-controls" aria-live="polite">
        <button
          type="button"
          className="project-carousel-control"
          onClick={goPrev}
          aria-label="Show previous image"
        >
          ← Previous
        </button>
        <span className="project-carousel-counter">
          {current + 1} / {total}
        </span>
        <button
          type="button"
          className="project-carousel-control"
          onClick={goNext}
          aria-label="Show next image"
        >
          Next →
        </button>
      </div>
      <div className="project-carousel-thumbs" role="list" aria-label="Carousel thumbnails">
        {images.map((img, index) => (
          <button
            key={typeof img.src === 'string' ? img.src : `${img.alt}-${index}`}
            type="button"
            className={`project-carousel-thumb ${index === current ? 'is-active' : ''}`.trim()}
            onClick={() => setCurrent(index)}
            aria-current={index === current || undefined}
            aria-label={`Show image ${index + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="120px"
              className="project-carousel-thumb-img"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default MediaCarousel;
