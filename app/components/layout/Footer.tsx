"use client";

import Image from 'next/image';
import Link from 'next/link';
import logo from '@assets/LOGO/logo.svg';
import './footer.css';

export default function Footer() {
	return (
		<footer className="mega-footer" role="contentinfo">
			<div className="footer-content">
				<div className="footer-row">
					<div className="footer-left">
						<div className="footer-logo" aria-label="Site logo">
							<Image src={logo} alt="Logo" className="footer-logo-img" width={28} height={28} priority />
						</div>
					</div>
					<div className="footer-right-cluster">
						<a href="https://www.linkedin.com/in/enes-cilingir" className="footer-link footer-linkedin-text" target="_blank" rel="noopener noreferrer">LinkedIn</a>
						<Link href="/impressum" className="footer-link footer-imprint-link">Imprint</Link>
					</div>
				</div>
				<div className="footer-bottom">© {new Date().getFullYear()} Enes Cilingir. All rights reserved.</div>
			</div>
		</footer>
	);
}
