"use client";

import { PropsWithChildren, type CSSProperties } from 'react';

interface StatCardProps {
  title: string;
}

const StatCard = ({ title, children }: PropsWithChildren<StatCardProps>) => (
  <div className="project-stat-card" role="group" aria-label={title}>
    <h4 className="project-stat-title">{title}</h4>
    <div className="project-stat-body">{children}</div>
  </div>
);

export interface DistributionItem {
  label: string;
  value: number;
}

export interface AgeDistributionCardProps {
  values?: DistributionItem[];
}

export const AgeDistributionCard = ({
  values = [
    { label: 'Under 30', value: 19 },
    { label: '30–50', value: 44 },
    { label: 'Over 50', value: 37 },
  ],
}: AgeDistributionCardProps) => {
  const max = Math.max(...values.map((item) => item.value));
  return (
    <StatCard title="Age Distribution">
      <ul className="project-distribution" aria-label="Age distribution">
        {values.map((item) => (
          <li key={item.label} className="project-distribution-row">
            <span className="project-distribution-label">{item.label}</span>
            <span className="project-distribution-track" aria-hidden>
              <span
                className="project-distribution-fill"
                style={{ width: `${(item.value / max) * 100}%` }}
              />
            </span>
            <span className="project-distribution-value">{item.value}%</span>
          </li>
        ))}
      </ul>
    </StatCard>
  );
};

export interface KnowledgeDonutCardProps {
  value?: number;
}

export const KnowledgeDonutCard = ({ value = 54 }: KnowledgeDonutCardProps) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const segment = (value / 100) * circumference;

  return (
    <StatCard title="Donation Knowledge">
      <div className="project-donut" role="img" aria-label={`Donation knowledge ${value}%`}>
        <svg className="project-donut-svg" viewBox="0 0 100 100">
          <circle className="project-donut-ring" cx="50" cy="50" r={radius} />
          <circle
            className="project-donut-segment"
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={`${segment} ${circumference - segment}`}
          />
        </svg>
        <div className="project-donut-value">{value}%</div>
      </div>
    </StatCard>
  );
};

export interface InterestBarCardProps {
  value?: number;
}

export const InterestBarCard = ({ value = 76 }: InterestBarCardProps) => (
  <StatCard title="Interest in Donation">
    <div className="project-progress" role="img" aria-label={`Interest in donation ${value}%`}>
      <div className="project-progress-value">{value}%</div>
      <div className="project-progress-track" aria-hidden>
        <div
          className="project-progress-fill"
          style={{ width: `${value}%`, '--progress-target': `${value}%` } as CSSProperties}
        />
      </div>
    </div>
  </StatCard>
);

export interface SurveyStatsProps {
  distribution?: DistributionItem[];
  knowledge?: number;
  interest?: number;
}

export function SurveyStats({
  distribution,
  knowledge,
  interest,
}: SurveyStatsProps) {
  return (
    <div className="project-stats-grid">
      <AgeDistributionCard values={distribution} />
      <KnowledgeDonutCard value={knowledge} />
      <InterestBarCard value={interest} />
    </div>
  );
}

export default SurveyStats;
