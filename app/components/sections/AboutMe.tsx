"use client";

import Image, { type StaticImageData } from 'next/image';
import figmaIcon from '@assets/SVG/figma.svg';
import framerIcon from '@assets/SVG/framer.svg';
import jitterIcon from '@assets/SVG/jitter.svg';
import notionIcon from '@assets/SVG/notion.svg';
import blenderIcon from '@assets/SVG/blender.svg';
import illustratorIcon from '@assets/SVG/Illustrator.svg';
import photoshopIcon from '@assets/SVG/photoshop.svg';
import linearIcon from '@assets/SVG/linear.svg';
import './styles/about-me.css';
import './styles/experience.css';

export default function AboutMe() {
	function renderDate(dateStr: string) {
		const parts = dateStr.split(' – ');
		if (parts.length > 1 && parts[1].trim() === 'Now') {
			return (
				<>
					{parts[0]} – <span className="now-badge"><span className="live-dot" aria-hidden="true" />Now</span>
				</>
			);
		}
		return dateStr;
	}
	return (
		<section id="about-me" className="about-me site-section tight" data-animate="blur-fade">
			<h2 className="section-title" data-animate="blur-fade">About Me</h2>
			<div className="about-me__text" data-animate="blur-fade" data-animate-delay="120ms">
				<p>
					Hey! I&apos;m Enes Cilingir, an Interaction Design student at the{' '}
					<span className="university-highlight">University of Applied Sciences</span>{' '}
					in Schwäbisch Gmünd. I&apos;ve been working in design since 2017, starting with brand identity for tech startups and now focusing on creating products that solve real problems. What drives me is bringing together design and technology to create something genuinely useful, always with real people in mind.
				</p>
				</div>

			<div className="tools-section">
				<div className="styled-box" data-animate="blur-fade">
					<h2 className="section-title" data-animate="blur-fade" data-animate-delay="90ms">Tools I Work With</h2>
					<div className="tools-grid">
						{[
							{ icon: figmaIcon, name: 'Figma', desc: 'My go-to for design and prototyping.' },
							{ icon: framerIcon, name: 'Framer', desc: 'Where I build clickable prototypes and real websites.' },
							{ icon: jitterIcon, name: 'Jitter', desc: 'For quick and simple animations.' },
							{ icon: notionIcon, name: 'Notion', desc: 'My space for planning, notes, and ideas.' },
							{ icon: blenderIcon, name: 'Blender', desc: 'When things need to take shape in 3D.' },
							{ icon: illustratorIcon, name: 'Illustrator', desc: 'Where logos and vectors come to life.' },
							{ icon: photoshopIcon, name: 'Photoshop', desc: 'For image editing and fine details.' },
							{ icon: linearIcon, name: 'Linear', desc: 'How I keep projects and tasks on track.' }
						].map((t, i) => (
							<ToolCard key={t.name} icon={t.icon} name={t.name} desc={t.desc} index={i} />
						))}
					</div>
				</div>
			</div>

			<div className="embedded-experience" data-animate="blur-fade">
				<h2 className="section-title" data-animate="blur-fade" data-animate-delay="90ms">Curriculum Vitae</h2>
				<div className="cv-list" data-animate="blur-fade" data-animate-delay="180ms">
					{[
						{ title: 'UX Design Intern', company: 'Vodafone', link: 'https://vodafone.com/', date: '08/2025 – Now', description: 'Contributing to iterative UX flows and interface components, translating research insights into Figma prototypes. Collaborate cross‑functionally to refine accessibility and performance‑oriented UI patterns.', emph: true },
						{ title: 'B.A. Interaction Design', company: 'HfG Schwäbisch Gmünd', link: 'https://www.hfg-gmuend.de/', date: '10/2023 – Now', description: 'Systems thinking, research‑driven prototyping and AI‑augmented interaction.', emph: true },
						{ title: 'Assistant UX/UI Design', company: 'Vasa Works', link: 'https://www.vasa.works/', date: '03/2025 – 05/2025', description: 'Helped shape a responsive landing page for an AI revenue product (Realm). Focus on narrative clarity, adaptive layout system and clean developer hand‑off.' },
						{ title: 'Student Assistant', company: 'AID Lab', link: 'https://aid-lab.hfg-gmuend.de/', date: '12/2024 – 02/2025', description: 'Supported research into AI‑driven interaction modalities; prototyped user‑centered interface concepts.' },
						{ title: 'UX/UI Design (Project-Based)', company: 'Studio Sphere', link: 'https://studiosphere.co/', date: '11/2024 – 01/2025', description: 'Led concept + design for a Web3 agency landing page: structure, responsive layout tokens and conversion flows.' },
						{ title: 'Working Student UX/UI Design', company: 'Sport1', link: 'https://www.sport1.de/', date: '05/2024 – 08/2024', description: 'Supported UX & Brand team on SPORT1 Moments and Tippspiel: wireframes, UI designs and prototypes.' },
						{ title: 'Editorial Design', company: 'FORMAT Magazine', link: 'https://www.hfg-gmuend.de/studium/format/', date: '04/2024 – 07/2024', description: 'Crafted multi‑page editorial layouts balancing typographic hierarchy and pacing.' },
						{ title: 'Figma Tutor', company: 'HfG Schwäbisch Gmünd', link: 'https://www.hfg-gmuend.de/', date: '04/2024 – 07/2024', description: 'Guided students in component architecture, tokens and collaboration workflows.' },
						{ title: 'UX/UI + Brand Design (Freelance)', company: 'Enes Cilingir', link: '#', date: '01/2018 – 09/2023', description: 'End‑to‑end brand + interface projects: discovery, identity foundations, UI kits.' }
					].map((item, i) => (
						<div key={i} className="cv-item">
							<div className="cv-inner">
								<div className="cv-row">
									<span className={`cv-title ${item.emph ? 'cv-title--emph' : ''}`}>{item.title}<a href={item.link} target="_blank" className="cv-company-link" onClick={e => e.stopPropagation()}>{item.company}</a></span>
									<span className="cv-date">{renderDate(item.date)}</span>
								</div>
								{item.description && <div className="cv-caption-wrapper" aria-hidden="true"><div className="cv-caption">{item.description}</div></div>}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function ToolCard({ icon, name, desc, index }: { icon: StaticImageData; name: string; desc?: string; index: number }) {
	return (
		<div
			className="tool-card"
			data-animate="blur-fade"
			data-animate-delay={`${index * 70}ms`}
		>
			<div className="tool-icon">
				<Image src={icon} alt={name} width={32} height={32} />
			</div>
			<div className="tool-text">{name}</div>
			<div className="tool-desc" aria-hidden="true">
				<p className="tool-label">{name}</p>
				{desc && <p className="tool-desc-text">{desc}</p>}
			</div>
		</div>
	);
}
