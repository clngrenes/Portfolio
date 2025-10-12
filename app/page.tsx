import type { CSSProperties } from 'react';
import Projects from './components/sections/Projects';
import AboutMe from './components/sections/AboutMe';
import Insights from './components/sections/Insights';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import FixedNavigation from './components/navigation/FixedNavigation';
import './components/sections/styles/header.css';
import './components/sections/styles/faq.css';

const heroHeadline = [
  { words: ['HEY!', 'I', 'AM', 'ENES', 'CILINGIR,'] },
  { words: ['AN', 'INTERACTION', 'DESIGNER'], italic: true },
  { words: ['TURNING', 'COMPLEX', 'IDEAS'] },
  { words: ['INTO', 'EXPERIENCES', 'PEOPLE'], italic: true },
  { words: ['FEEL,', 'REMEMBER', 'AND', 'TRUST.'] }
];

export default function HomePage() {
  let wordSequenceIndex = 0;

  return (
    <>
      <FixedNavigation />
      <main>
      <header className="main-header" id="top">
        <div className="header-content" aria-label="Intro headline">
          {heroHeadline.map((line, lineIndex) => (
            <div
              key={`header-line-${lineIndex}`}
              className={`header-line${line.italic ? ' header-line--italic' : ''}`}
              role="text"
            >
              {line.words.map((word, wordIndex) => {
                const style = { '--word-index': wordSequenceIndex } as CSSProperties;
                wordSequenceIndex += 1;
                const isWideWord = word === 'AN' || word === 'PEOPLE';
                const wordClassName = `header-word${isWideWord ? ' header-word--wide' : ''}`;

                return (
                  <span className={wordClassName} key={`header-word-${lineIndex}-${wordIndex}`} style={style}>
                    {word}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </header>
  <Projects />
  <AboutMe />
  <Insights />
  <FAQ />
      <Contact />
      </main>
    </>
  );
}
