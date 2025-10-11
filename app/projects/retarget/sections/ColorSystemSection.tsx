"use client";

import { ProjectSection } from '@/components/projects';

type PaletteColor = {
  name: string;
  value: string;
  contrast: 'light' | 'dark';
};

const palette: PaletteColor[] = [
  { name: 'Signal Blue', value: '#435AFF', contrast: 'light' },
  { name: 'Focus Blue', value: '#7789E0', contrast: 'light' },
  { name: 'Deep Navy', value: '#202E77', contrast: 'light' },
  { name: 'Clarity White', value: '#FFFFFF', contrast: 'dark' },
];

export function ColorSystemSection() {
  return (
    <ProjectSection id="project-colors" anchor="project-colors" title="Color Language">
      <p>
        A professional blue palette communicates trust, reliability, and forward momentum. The tonal range allows the brand to stand out while maintaining a polished appearance across digital and physical touchpoints.
      </p>
      <div className="retarget-palette">
        {palette.map((color) => (
          <div
            key={color.value}
            className="retarget-palette-item"
            style={{ backgroundColor: color.value }}
            data-contrast={color.contrast}
          >
            <span className="retarget-palette-label">
              <strong>{color.name}</strong>
              <span>{color.value}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="retarget-palette-note">
        Each tone supports a clear brand role: Signal Blue leads attention, Focus Blue softens supporting layouts, Deep Navy grounds data-heavy screens, and Clarity White keeps breathing room for copy and imagery.
      </p>
    </ProjectSection>
  );
}
