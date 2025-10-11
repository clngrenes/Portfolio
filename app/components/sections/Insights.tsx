"use client";
import { InsightCard, InsightCardData } from './InsightCard';
import aiProductivityCover from '@assets/INSIGHTS/prototype.jpeg';
import emotionCover from '@assets/INSIGHTS/emotion.jpg';
import './styles/insights.css';

type InsightItem = InsightCardData & {
  isNewest?: boolean;
};

const insights: InsightItem[] = [
  { title: "How AI Is Redefining Prototyping", description: "AI is fundamentally changing how we approach prototyping and reshaping our entire design process.", image: aiProductivityCover, href: "https://medium.com/@enesclngr/from-sketches-to-smart-systems-how-ai-is-redefining-prototyping-5fc8ced3f413", badges: [] },
  { title: "Emotions Are Important In Design", description: "In a world full of a variety of products, why did you choose that particular object? Think about it.", image: emotionCover, href: "https://enesclngr.medium.com/emotional-design-why-its-one-of-the-most-important-aspect-of-any-product-b49cde70e1cf", badges: [] },
];

export default function Insights() {
  return (
    <section id="insights" className="insights site-section tight" data-animate="blur-fade">
      <h2 className="section-title" data-animate="blur-fade">Insights</h2>
      <p className="section-intro" data-animate="blur-fade" data-animate-delay="120ms">This is where I dive deeper into ideas that shape my work and thinking. Research, observations, and explorations. Sharing what I&apos;ve learned along the way.</p>
      <div className="insight-list-grid">
        {insights.map((item, index) => (
          <InsightCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </section>
  );
}
