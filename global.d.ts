import type { StaticImageData } from 'next/image';

declare module '*.jpg' {
  const content: StaticImageData;
  export default content;
}

declare module '*.jpeg' {
  const content: StaticImageData;
  export default content;
}

declare module '*.png' {
  const content: StaticImageData;
  export default content;
}

declare module '*.gif' {
  const content: StaticImageData;
  export default content;
}

declare module '*.webp' {
  const content: StaticImageData;
  export default content;
}

declare module '*.svg' {
  const content: StaticImageData;
  export default content;
}

declare module '*.ico' {
  const content: StaticImageData;
  export default content;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '@assets/*.mp4' {
  const src: string;
  export default src;
}

declare module '@assets/**/*.mp4' {
  const src: string;
  export default src;
}

declare module '@assets/*' {
  const content: StaticImageData | string;
  export default content;
}

declare module '*.json' {
  const value: Record<string, unknown>;
  export default value;
}
