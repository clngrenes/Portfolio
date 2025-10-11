"use client";

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import pulseCover from '@assets/COVERS/pulse-cover.jpg';
import mykorrizhaCover from '@assets/COVERS/mykorrizha-cover.jpg';
import aideaCover from '@assets/COVERS/aidea-cover.jpg';
import reachCover from '@assets/COVERS/reach-cover.jpg';
import retargetCover from '@assets/COVERS/retarget-cover.jpg';
import './styles/projects.css';

interface Project {
	title: string;
	badge: string;
	description: string;
	tagline: string;
	subtitle?: string;
	image: StaticImageData;
	href: string;
}

const BLUR_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

const projects: Project[] = [
	{ title: "Pulse", badge: "", description: "What if giving blood could save more lives? An app that makes regular blood donation feel rewarding and connects you with people you're actually helping.", tagline: "Rewarding donation", subtitle: "Donate & Save Lives", image: pulseCover, href: "/projects/pulse" },
	{ title: "Mykorrizha", badge: "", description: "What if learning was actually fun? A platform where kids explore what they love, guided by AI tutors and real projects.", tagline: "AI playful learning", subtitle: "AI-powered Learning", image: mykorrizhaCover, href: "/projects/mykorrizha" },
	{ title: "AIDEA", badge: "", description: "An AI-powered creative assistant that transforms simple sketches into professional visualizations.", tagline: "Sketch to concept", subtitle: "Ideas, Visualized", image: aideaCover, href: "/projects/aidea" },
	{ title: "Reach", badge: "", description: "Tired of shallow connections? An app designed to help you build genuine friendships through shared interests and real-world meetups.", tagline: "Real social bonds", subtitle: "Connect With Loved Ones", image: reachCover, href: "/projects/reach" },
	{ title: "ReTarget", badge: "", description: "Brand identity for a social media marketing agency specializing in precise target audience identification and strategic customer segmentation for businesses.", tagline: "Targeted identity", subtitle: "Brand Identity", image: retargetCover, href: "/projects/retarget" }
];

export default function Projects() {
	return (
		<section id="recent-projects" className="recent-projects site-section tight" data-animate="blur-fade">
			<div className="projects-container">
				<h2 className="section-title projects-title" data-animate="blur-fade">Recent Projects</h2>
				<p className="section-intro projects-intro" data-animate="blur-fade" data-animate-delay="120ms">These selected projects highlight my approach to specific design problems, turning ideas into thoughtful solutions.</p>
				<div className="projects-grid">
					{projects.map((project, index) => (
						<ProjectCard key={index} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
	let year = '';
	if (project.title === 'Mykorrizha') year = '2023';
	else if (project.title === 'AIDEA') year = '2024';
	else if (project.title === 'Pulse') year = '2024';
	else if (project.title === 'Reach') year = '2024';
	else if (project.title === 'ReTarget') year = '2023';

	return (
		<Link
			href={project.href}
			className="project-card-link"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div
				className="project-card"
				data-animate="blur-fade"
				data-animate-delay={`${index * 90}ms`}
			>
				<div className="project-card__image-container" data-animate="blur-fade" data-animate-delay={`${index * 90 + 90}ms`}>
					<Image
						src={project.image}
						alt={`${project.title} Project Preview`}
						fill
						style={{ objectFit: 'cover' }}
						quality={90}
						sizes="(max-width: 640px) 100vw, (max-width: 1200px) 45vw, 420px"
						placeholder={project.image.blurDataURL ? 'blur' : 'empty'}
						blurDataURL={project.image.blurDataURL ?? BLUR_PLACEHOLDER}
						priority={index === 0}
						fetchPriority={index === 0 ? 'high' : 'auto'}
					/>
				</div>
			</div>
			<div
				className="project-card__meta"
				data-animate="blur-fade"
				data-animate-delay={`${index * 90 + 180}ms`}
			>
				<span className="project-card__title">
					{project.title}
					{project.subtitle && (
						<>
							<span className="project-title-sep" aria-hidden="true"> &middot; </span>
							<span className="project-card__subtitle">{project.subtitle}</span>
						</>
					)}
				</span>
				<span className="project-card__date">{year}</span>
			</div>
		</Link>
	);
}
