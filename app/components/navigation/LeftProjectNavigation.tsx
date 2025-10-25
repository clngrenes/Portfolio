"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import './left-navbar.css';
import type { ProjectNavItem, ProjectType, NavigationItem } from '@/types/project';

interface LeftProjectNavigationProps {
	items?: ProjectNavItem[];
	projectType?: ProjectType;
}

const legacySectionMap: Record<ProjectType, NavigationItem[]> = {
	mosaic: [
		{ id: 'problem', label: 'Problem', section: 'problem-section' },
		{ id: 'concept', label: 'Concept', section: 'concept-section' },
		{ id: 'functions', label: 'Functions', section: 'functions-section' },
		{ id: 'brand', label: 'Brand Identity', section: 'brand-identity-section' },
		{ id: 'conclusion', label: 'Conclusion', section: 'conclusion-section' }
	],
	pulse: [
		{ id: 'research', label: 'Research', section: 'pulse-research' },
		{ id: 'ideation', label: 'Ideation', section: 'pulse-ideation' },
		{ id: 'features', label: 'Key Features', section: 'pulse-features' },
		{ id: 'ui-showcase', label: 'UI Highlights', section: 'pulse-ui-showcase' },
		{ id: 'mockups', label: 'Product Screens', section: 'pulse-mockups' },
		{ id: 'conclusion', label: 'Conclusion', section: 'pulse-conclusion' }
	],
	retarget: [
		{ id: 'intro', label: 'Project Overview', section: 'project-cover' },
		{ id: 'concept', label: 'Design Direction', section: 'project-concept' },
		{ id: 'typography', label: 'Type Choices', section: 'project-typography' },
		{ id: 'colors', label: 'Color Language', section: 'project-colors' },
		{ id: 'logo', label: 'Logo Story', section: 'project-logo' },
		{ id: 'applications', label: 'Identity in Action', section: 'project-applications' },
		{ id: 'conclusion', label: 'Results', section: 'project-conclusion' }
	],
	reach: [
		{ id: 'overview', label: 'Why Reach Matters', section: 'project-overview' },
		{ id: 'principles', label: 'Design Principles', section: 'project-concept' },
		{ id: 'brand', label: 'Visual System', section: 'project-brand' },
		{ id: 'experience', label: 'Product Experience', section: 'project-interface' },
		{ id: 'conclusion', label: 'Key Takeaways', section: 'project-conclusion' }
	],
	mykorrizha: [
		{ id: 'principles', label: 'Our Core Principles', section: 'project-features' },
		{ id: 'skilltree', label: 'Personal Skill Tree', section: 'project-process' },
		{ id: 'dashboard', label: 'Supervisor Dashboard', section: 'project-dashboard' },
		{ id: 'projects', label: 'Real Projects', section: 'project-garden' },
		{ id: 'brochure', label: 'Communicating the Vision', section: 'project-brochure' },
		{ id: 'ai-team', label: 'AI Team', section: 'project-results' },
		{ id: 'rolemodels', label: 'AI Role Models', section: 'project-rolemodels' },
		{ id: 'learned', label: 'What We Learned', section: 'project-impact' }
	],
	aidea: [
		{ id: 'problem', label: 'The Problem', section: 'project-problem' },
		{ id: 'features', label: 'Who Is AIDEA For?', section: 'project-features' },
		{ id: 'special', label: 'What Makes AIDEA Special', section: 'project-features-detail' },
		{ id: 'collaboration', label: 'Collaboration', section: 'project-collaboration' },
		{ id: 'interface', label: 'Interface Design', section: 'project-interface' },
		{ id: 'prototype', label: 'Prototype', section: 'project-results' },
		{ id: 'conclusion', label: 'Conclusion', section: 'project-impact' }
	],
	hybrid: [
		{ id: 'problem', label: 'Problem', section: 'problem-section' },
		{ id: 'concept', label: 'Concept', section: 'concept-section' },
		{ id: 'functions', label: 'Functions', section: 'functions-section' },
		{ id: 'prototype', label: 'Prototype', section: 'prototype-section' },
		{ id: 'conclusion', label: 'Conclusion', section: 'conclusion-section' }
	]
};

export default function LeftProjectNavigation({ items, projectType }: LeftProjectNavigationProps) {
	const derivedItems: ProjectNavItem[] = useMemo(() => {
		if (items) return items;
		if (!projectType) return [];
		return (legacySectionMap[projectType] || []).map(n => ({ href: `#${n.section}`, label: n.label }));
	}, [items, projectType]);
	const pathname = usePathname();
	const [activeHash, setActiveHash] = useState<string>('');
	const activeHashRef = useRef(activeHash);

	useEffect(() => {
		activeHashRef.current = activeHash;
	}, [activeHash]);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const targetIds = derivedItems
			.map(i => i.href.startsWith('#') ? i.href.slice(1) : null)
			.filter(Boolean) as string[];
		if (!targetIds.length) return;
		const sections = targetIds
			.map(id => document.querySelector<HTMLElement>(`[data-project-anchor="${id}"]`))
			.filter(Boolean) as HTMLElement[];

		const pickActive = () => {
			const viewportTrigger = window.innerHeight * 0.28;
			if (sections.length) {
				const firstRect = sections[0].getBoundingClientRect();
				if (firstRect.top > viewportTrigger) {
					if (activeHashRef.current !== '') setActiveHash('');
					return;
				}
			}
			let current: { id: string; top: number } | null = null;
			for (const el of sections) {
				const rect = el.getBoundingClientRect();
				if (rect.top <= viewportTrigger) {
					const id = el.getAttribute('data-project-anchor') || '';
					if (!current || rect.top > current.top) current = { id, top: rect.top };
				}
			}
			if (current) {
				if (current.id !== activeHashRef.current) setActiveHash(current.id);
			} else if (activeHashRef.current !== '') setActiveHash('');
		};

		if (window.location.hash) {
			const h = window.location.hash.slice(1);
			if (targetIds.includes(h)) setActiveHash(h);
		}
		pickActive();
		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => { pickActive(); ticking = false; });
				ticking = true;
			}
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);
		return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
	}, [pathname, derivedItems]);

	const [visible, setVisible] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);
	useEffect(() => { const t = requestAnimationFrame(() => setVisible(true)); return () => cancelAnimationFrame(t); }, []);

	const handleSelect = (id?: string, closeDrawer?: boolean) => {
		if (id) setActiveHash(id);
		if (closeDrawer) setDrawerOpen(false);
	};

	const renderItems = (closeDrawer: boolean) => derivedItems.map(item => {
		const targetId = item.href.startsWith('#') ? item.href.replace('#', '') : undefined;
		const isActive = targetId ? activeHash === targetId : false;
		const className = isActive ? 'nav-link active' : 'nav-link';
		const content = (
			<>
				<span className="nav-indicator" />
				<span className="nav-label">{item.label}</span>
			</>
		);
		return (
			<li key={item.href} className="nav-item">
				{item.href.startsWith('#') ? (
					<a
						href={item.href}
						className={className}
						onClick={() => handleSelect(targetId, closeDrawer)}
					>
						{content}
					</a>
				) : (
					<Link href={item.href} className={className} onClick={() => handleSelect(targetId, closeDrawer)}>
						{content}
					</Link>
				)}
			</li>
		);
	});

	return (
		<>
			<button
				className="mobile-nav-button"
				aria-label={drawerOpen ? 'Close navigation' : 'Open navigation'}
				aria-expanded={drawerOpen}
				aria-controls="mobile-project-nav"
				onClick={() => setDrawerOpen(state => !state)}
			>
				<span className="hamburger">{drawerOpen ? '✕' : '☰'}</span>
			</button>

			<div id="mobile-project-nav" className={`mobile-nav-drawer ${drawerOpen ? 'open' : ''}`} role="dialog" aria-modal={drawerOpen}>
				<div className="mobile-nav-backdrop" onClick={() => setDrawerOpen(false)} />
				<div className="mobile-nav-panel">
					<nav className="nav-container" aria-label="Section navigation">
						<ul className="nav-list">{renderItems(true)}</ul>
					</nav>
				</div>
			</div>

			<aside className={`left-project-nav ${visible ? 'visible' : ''}`}>
				<nav className="nav-container" aria-label="Section navigation">
					<ul className="nav-list">{renderItems(false)}</ul>
				</nav>
			</aside>
		</>
	);
}
