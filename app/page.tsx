'use client';

import { useEffect, useState } from 'react';
import wedding from '../data/wedding.json';

function Countdown() {
  const target = new Date(wedding.event.dateISO).getTime();
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, target - Date.now());
      setRemaining({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update(); const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [target]);
  return <div className="countdown" aria-label="Countdown to the wedding">
    {Object.entries(remaining).map(([label, value]) => <div className="count-box" key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}
  </div>;
}

export default function Home() {
  return <main>
    <header className="topbar">
      <a className="brand" href="#home"><span className="brand-sprig">❧</span>{wedding.siteTitle}</a>
      <nav aria-label="Main navigation">{wedding.navigation.map(item => <a key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>{item.label}</a>)}</nav>
    </header>

    <section className="hero" id="home">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-copy reveal">
        <p className="eyebrow">TOGETHER WITH OUR FAMILIES<br />WE CORDIALLY INVITE YOU TO THE WEDDING OF</p>
        <h1>{wedding.couple.nameOne}<span className="ampersand"><i />&amp;<i /></span>{wedding.couple.nameTwo}</h1>
        <p className="tagline">{wedding.couple.tagline}</p>
        <Countdown />
        <p className="hero-date"><span>▦</span>{wedding.event.dateDisplay} <b>•</b> {wedding.event.weekday}</p>
      </div>
    </section>

    <section className="invitation section" id="rsvp">
      <div className="invitation-copy reveal">
        <p className="section-label">{wedding.invitation.eyebrow}</p>
        <h2>{wedding.invitation.title}</h2>
        <div className="flourish"><i />❧<i /></div>
        <p>{wedding.invitation.paragraph}</p>
        <p className="script-line">{wedding.invitation.closing}</p>
      </div>
      <div className="arch-wrap reveal"><div className="arch-image" role="img" aria-label="Botanical vase in warm sunlight" /><svg className="line-leaves" viewBox="0 0 100 180" aria-hidden="true"><path d="M48 176 C47 130 47 75 67 15 M48 145 C21 137 12 115 15 97 C34 105 46 120 48 145 M53 116 C76 108 85 87 82 70 C65 80 55 96 53 116 M58 82 C36 72 30 53 35 38 C51 49 58 65 58 82 M65 48 C80 43 88 29 87 17 C74 24 67 35 65 48" fill="none" stroke="currentColor" strokeWidth="1"/></svg></div>
    </section>

    <section className="date-band" id="details">
      <div className="band-overlay" />
      <div className="band-content reveal">
        <p className="section-label light">WEDDING DETAILS</p>
        <h2>Save the Date</h2>
        <div className="details-grid">
          <div className="detail"><span className="detail-icon">▦</span><strong>Date</strong><p>{wedding.event.dateDisplay.replace(/\b\w/g, c => c.toUpperCase())}<br />{wedding.event.weekday.charAt(0)+wedding.event.weekday.slice(1).toLowerCase()}</p></div>
          <div className="detail"><span className="detail-icon pin">♧</span><strong>Venue</strong><p>{wedding.event.venue}<br />{wedding.event.address}</p></div>
          <div className="detail"><span className="detail-icon">♧</span><strong>View on Maps</strong><p><a href={wedding.event.mapsUrl} target="_blank" rel="noreferrer">Get Directions →</a></p></div>
        </div>
      </div>
    </section>

    <section className="story section" id="story">
      <div className="story-image reveal" role="img" aria-label="Sage green wedding book and delicate flowers" />
      <div className="story-copy reveal"><p className="section-label">{wedding.story.eyebrow}</p><h2>{wedding.story.title}</h2><p>{wedding.story.paragraph}</p><div className="flourish story-flourish"><i />❧<i /></div></div>
    </section>

    <section className="dua-section" id="family">
      <p className="section-label">A PRAYER FOR OUR NEW BEGINNING</p>
      <h2 className="arabic" lang="ar" dir="rtl">{wedding.dua.arabic}</h2>
      <p className="translation">“{wedding.dua.translation}”</p>
      <span className="quran-ref">{wedding.dua.reference}</span>
      <div className="dua-divider">✧</div>
      <p className="arabic blessing" lang="ar" dir="rtl">{wedding.dua.blessing}</p>
      <p className="translation">{wedding.dua.blessingTranslation}</p>
    </section>

    <footer><span className="brand-sprig">❧</span><p>Made with love and gratitude to Allah</p><span>{wedding.couple.nameOne} &amp; {wedding.couple.nameTwo}</span></footer>
  </main>;
}
