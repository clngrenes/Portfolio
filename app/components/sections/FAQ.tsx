interface FAQItem { question: string; answer: string; }

const faqItems: FAQItem[] = [
	{ question: "You've been designing since 2017?", answer: "Yes, but it started much earlier as a kid who was obsessed with making things look better. I got my first paying client when I was just starting out—a small logo project that felt huge to me back then. Since 2017, I've worked with startups and companies of all sizes, learning something new from every project. What keeps me going is that I'm still as excited about solving design problems today as I was on day one." },
	{ question: "Why switch from brand design to digital product design?", answer: "I didn't really switch—I expanded. After years of creating brand identities, I realized I wanted to see how people actually interact with what I design. Brand design taught me how to communicate visually, but digital products let me solve real problems for real people. When you design an app or website, you get immediate feedback on whether it actually works. That connection between design and human behavior fascinated me, so I dove in." },
	{ question: "What makes working with you different?", answer: "I've been on both sides—creating the visual identity and building the digital experience. This means I understand how everything needs to work together from day one. I'm not just designing screens; I'm thinking about your brand, your users, and your business goals all at once. Plus, I actually enjoy the messy, iterative process of figuring out what works. Most designers I know either love the brand side or the product side. I genuinely love both." }
];



export default function FAQ() {
	return (
		<section id="faq-section" className="faq-section site-section tight" data-animate="blur-fade">
			<h2 className="section-title" data-animate="blur-fade">FAQ</h2>
			<p className="section-intro" data-animate="blur-fade" data-animate-delay="120ms">Got questions? These are the ones I hear most often. Whether you&apos;re wondering about my process, what it&apos;s like working together, or just want to know more about my background, I&apos;ve put together some honest answers.</p>
			<div className="faq-list" data-animate="blur-fade" data-animate-delay="210ms">
				{faqItems.map((item, index) => (
					<div
						key={index}
						className="faq-item"
						tabIndex={0}
						data-animate="blur-fade"
						data-animate-delay={`${240 + index * 90}ms`}
					>
						<div className="faq-question">
							<span className="faq-question-text">{item.question}</span>
						</div>
						<div className="faq-answer"><p>{item.answer}</p></div>
					</div>
				))}
			</div>
		</section>
	);
}
