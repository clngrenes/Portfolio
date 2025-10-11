"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contact.css';

export default function Contact() {
	const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (formData.company.trim().length > 0) {
			return;
		}
		setIsSubmitting(true);
		try {
			const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
			const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
			const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';
			if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
				await new Promise(r => setTimeout(r, 1000));
			} else {
				await emailjs.send(serviceId, templateId, { from_name: formData.name, from_email: formData.email, message: formData.message, to_name: 'Enes Cilingir' }, publicKey);
			}
			setSubmitStatus('success');
			setFormData({ name: '', email: '', message: '', company: '' });
			setTimeout(() => setSubmitStatus('idle'), 5000);
		} catch (err) {
			setSubmitStatus('error');
			setTimeout(() => setSubmitStatus('idle'), 5000);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="contact-section site-section" id="contact-section" aria-labelledby="contact-heading" data-animate="blur-fade">
			<div className="contact-grid" data-animate="blur-fade" data-animate-delay="120ms">
				<div className="contact-left" data-animate="blur-fade">
					<h2 className="section-title" id="contact-heading">Let&apos;s Build Together</h2>
					<p className="contact-intro">Ready to launch a new product, sharpen an experience or explore a collaboration? Drop me a line with a few details and I&apos;ll get back to you quickly so we can plan the next steps.</p>
				</div>
				<div className="contact-right" data-animate="blur-fade" data-animate-delay="210ms">
					<form onSubmit={handleSubmit} className="contact-form-grid" noValidate aria-live="polite">
								<div style={{ display: 'none' }} aria-hidden="true">
									<label>
										Company (leave blank)
										<input type="text" name="company" value={formData.company} onChange={handleInputChange} tabIndex={-1} autoComplete="off" />
									</label>
								</div>
								<div className="form-row">
									<div className="form-group">
										<label htmlFor="name" className="form-label">Your Name</label>
										<input type="text" id="name" name="name" className="form-input" placeholder="Max Mustermann" value={formData.name} onChange={handleInputChange} required />
									</div>
									<div className="form-group">
										<label htmlFor="email" className="form-label">Your Email</label>
										<input type="email" id="email" name="email" className="form-input" placeholder="maxmustermann@example.com" value={formData.email} onChange={handleInputChange} required autoComplete="email" />
									</div>
								</div>
								<div className="form-group full">
									<label htmlFor="message" className="form-label">Your Message</label>
									<textarea id="message" name="message" className="form-input" rows={6} placeholder="How can I help you?" value={formData.message} onChange={handleInputChange} required aria-describedby={submitStatus === 'error' ? 'contact-error' : undefined} />
								</div>
							<div className="form-actions">
								<button type="submit" className="submit-button" disabled={isSubmitting} aria-disabled={isSubmitting} aria-busy={isSubmitting} aria-label={isSubmitting ? 'Sending message' : 'Start the conversation'}>
									{isSubmitting ? 'Sending…' : 'Start the conversation'}
								</button>
								{submitStatus !== 'idle' && (
									<div className={`form-feedback ${submitStatus}`} role="status" aria-live="polite">
											{submitStatus === 'success' && (
												<div className="success-message">
													<div className="checkmark"><div className="checkmark-circle"></div><div className="checkmark-check"></div></div>
													Message sent successfully!
												</div>
											)}
											{submitStatus === 'error' && (<div id="contact-error" className="error-message">Something went wrong. Please try again.</div>)}
										</div>
									)}
							</div>
					</form>
				</div>
			</div>
		</section>
	);
}
