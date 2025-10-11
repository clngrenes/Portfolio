import './components/layout/base.css';
import React from 'react';
import Footer from './components/layout/Footer';
import BlurFadeObserver from './components/layout/BlurFadeObserver';
import favicon32 from '@assets/FAVICON/favicon-32x32.png';
import favicon16 from '@assets/FAVICON/favicon-16x16.png';
import faviconIco from '@assets/FAVICON/favicon.ico';

export const metadata = {
  title: 'Enes Cilingir – Product & Interaction Designer',
  description: 'Portfolio of Enes Cilingir – Product, Interaction & Visual Design, AI-augmented workflows.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href={favicon32.src} sizes="32x32" />
        <link rel="icon" type="image/png" href={favicon16.src} sizes="16x16" />
        <link rel="shortcut icon" href={faviconIco.src} />
        <meta name="theme-color" content="#0e0e10" />
      </head>
      <body>
    <BlurFadeObserver />
        {children}
        <Footer />
      </body>
    </html>
  );
}
