'use client';

import React from 'react';

type VideoProvider = 'youtube' | 'vimeo' | 'file';

interface VideoEmbedProps {
  url: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  poster?: string;
  className?: string;
  wrapperClassName?: string;
}

interface ResolveOptions {
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  controls: boolean;
}

interface ResolvedVideo {
  provider: VideoProvider;
  src: string;
}

const combineClasses = (...tokens: Array<string | false | null | undefined>) => tokens.filter(Boolean).join(' ');

function resolveVideo(url: string, { autoPlay, loop, muted, controls }: ResolveOptions): ResolvedVideo | null {
  if (!url) return null;

  let parsed: URL | null = null;
  try {
    parsed = new URL(url);
  } catch {
    return { provider: 'file', src: url };
  }

  const host = parsed.hostname.replace(/^www\./, '').toLowerCase();

  if (host.includes('youtube.com') || host === 'youtu.be' || host.includes('youtube-nocookie.com')) {
    const videoId = extractYouTubeId(parsed);
    if (!videoId) return null;
    const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
    embedUrl.searchParams.set('rel', '0');
    embedUrl.searchParams.set('modestbranding', '1');
    embedUrl.searchParams.set('playsinline', '1');
    if (!controls) embedUrl.searchParams.set('controls', '0');
    if (autoPlay) embedUrl.searchParams.set('autoplay', '1');
    if (muted) embedUrl.searchParams.set('mute', '1');
    if (loop) {
      embedUrl.searchParams.set('loop', '1');
      embedUrl.searchParams.set('playlist', videoId);
    }
    return { provider: 'youtube', src: embedUrl.toString() };
  }

  if (host.includes('vimeo.com')) {
    const videoId = parsed.pathname.split('/')?.filter(Boolean).pop();
    if (!videoId) return null;
    const embedUrl = new URL(`https://player.vimeo.com/video/${videoId}`);
    if (autoPlay) embedUrl.searchParams.set('autoplay', '1');
    embedUrl.searchParams.set('muted', muted ? '1' : '0');
    embedUrl.searchParams.set('playsinline', '1');
    embedUrl.searchParams.set('title', '0');
    embedUrl.searchParams.set('byline', '0');
    embedUrl.searchParams.set('portrait', '0');
    if (loop) embedUrl.searchParams.set('loop', '1');
    if (!controls) embedUrl.searchParams.set('controls', '0');
    return { provider: 'vimeo', src: embedUrl.toString() };
  }

  return { provider: 'file', src: url };
}

function extractYouTubeId(url: URL): string | null {
  if (url.hostname === 'youtu.be') {
    return url.pathname.replace('/', '').split('?')[0] || null;
  }

  if (url.pathname.startsWith('/embed/')) {
    return url.pathname.replace('/embed/', '').split('?')[0] || null;
  }

  if (url.pathname.startsWith('/shorts/')) {
    return url.pathname.replace('/shorts/', '').split('?')[0] || null;
  }

  const id = url.searchParams.get('v');
  if (id) return id;

  const segments = url.pathname.split('/').filter(Boolean);
  return segments.length ? segments.pop() ?? null : null;
}

export function VideoEmbed({
  url,
  title,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  playsInline = true,
  className,
  wrapperClassName,
}: VideoEmbedProps) {
  const resolved = resolveVideo(url.trim(), { autoPlay, loop, muted, controls });
  if (!resolved) return null;

  if (resolved.provider === 'file') {
    const videoElement = (
      <video
        className={className}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        controls={controls}
        poster={poster}
      >
        <source src={resolved.src} />
      </video>
    );

    if (wrapperClassName) {
      return <div className={wrapperClassName}>{videoElement}</div>;
    }

    return videoElement;
  }

  return (
    <div className={combineClasses('video-embed', wrapperClassName)}>
      <iframe
        className={className}
        src={resolved.src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder={0}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
