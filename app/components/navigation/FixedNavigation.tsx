"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@assets/LOGO/logo.svg';
import './fixed-tabs.css';

const navigationTabs = [
	{ id: 'tab-work', label: 'Work', target: 'recent-projects' },
	{ id: 'tab-about', label: 'About', target: 'about-me' },
	{ id: 'tab-writing', label: 'Insights', target: 'insights' },
	{ id: 'tab-contact', label: 'Contact', target: 'contact-section' }
];

export default function FixedNavigation() {
	const [activeTab, setActiveTab] = useState('tab-work');
	const scrollLockTarget = useRef<string | null>(null);
	const isAnimatingScroll = useRef(false);
	const animationFrame = useRef<number | null>(null);

	useEffect(() => {
		const observerOptionsPrimary: IntersectionObserverInit = { root: null, rootMargin: '-120px 0px -55% 0px', threshold: [0, 0.1, 0.25] };
		const intersectionObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting || entry.intersectionRatio <= 0) return;
				const sectionId = entry.target.id;
				const correspondingTab = navigationTabs.find(tab => tab.target === sectionId);
				if (!correspondingTab) return;
				if (isAnimatingScroll.current && scrollLockTarget.current && sectionId !== scrollLockTarget.current) return;
				setActiveTab(correspondingTab.id);
			});
		}, observerOptionsPrimary);
		const observedElements = new Set<Element>();
		const registerSections = () => {
			navigationTabs.forEach(tab => {
				const element = document.getElementById(tab.target);
				if (element && !observedElements.has(element)) {
					intersectionObserver.observe(element);
					observedElements.add(element);
				}
			});
			observedElements.forEach(element => {
				if (!document.body.contains(element)) {
					intersectionObserver.unobserve(element);
					observedElements.delete(element);
				}
			});
		};
		registerSections();
		const mutationObserver = new MutationObserver(() => {
			registerSections();
		});
		const mainElement = document.querySelector('main');
		if (mainElement) {
			mutationObserver.observe(mainElement, { childList: true, subtree: true });
		}
		const handleScroll = () => {
			const contactEl = document.getElementById('contact-section');
			if (contactEl) {
				const rect = contactEl.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.55) { setActiveTab('tab-contact'); return; }
			}
			const scrollBottom = window.scrollY + window.innerHeight;
			const docHeight = document.documentElement.scrollHeight;
			if (docHeight - scrollBottom < 40) setActiveTab('tab-contact');
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		const rafId = requestAnimationFrame(registerSections);
		handleScroll();
		return () => {
			mutationObserver.disconnect();
			intersectionObserver.disconnect();
			window.removeEventListener('scroll', handleScroll);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, []);

	const handleTabClick = (tab: typeof navigationTabs[0]) => {
		setActiveTab(tab.id);
		const targetElement = document.getElementById(tab.target);
		if (!targetElement) return;
		const headerOffset = 110;
		const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
		const targetScroll = Math.max(elementTop - headerOffset, 0);
		scrollLockTarget.current = tab.target;
		isAnimatingScroll.current = true;
		if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
		const start = window.pageYOffset;
		const distance = targetScroll - start;
		let duration = Math.abs(distance) * 0.35;
		duration = Math.min(Math.max(duration, 250), 800);
		let startTime: number | null = null;
		const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
		const step = (time: number) => {
			if (startTime === null) startTime = time;
			const elapsed = time - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const current = start + distance * easeOutCubic(progress);
			window.scrollTo(0, current);
			if (progress < 1) {
				animationFrame.current = requestAnimationFrame(step);
			} else {
				isAnimatingScroll.current = false;
				scrollLockTarget.current = null;
			}
		};
		step(performance.now());
	};

	return (
		<div className="fixed-tabs">
			<div className="fixed-tabs__logo">
				<Link href="/" aria-label="Home" prefetch={false}>
					<Image src={logo} alt="Logo" width={26} height={26} priority />
				</Link>
				<span className="tab-separator">•</span>
			</div>
			<div className="tabs-group">
				{navigationTabs.map((tab, index) => (
					<div key={tab.id} className="tab-container">
						<input
							type="radio"
							id={tab.id}
							name="tabs"
							checked={activeTab === tab.id}
							onChange={() => {}}
						/>
						<label
							className={`tab ${activeTab === tab.id ? 'active' : ''}`}
							htmlFor={tab.id}
							data-target={`#${tab.target}`}
							onClick={() => handleTabClick(tab)}
						>
							{tab.label}
						</label>
						{index < navigationTabs.length - 1 && <span className="tab-separator">•</span>}
					</div>
				))}
			</div>
		</div>
	);
}
