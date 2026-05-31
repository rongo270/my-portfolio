import React from 'react';
import { ReactTyped } from 'react-typed';
import '../styles/hero.css';

function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-inner">
                <div className="hero-left" data-aos="fade-up">
                    <span className="open-badge">
                        <span className="pulse-dot" /> Open for work · Full-time
                    </span>

                    <h1 className="hero-name">
                        Hi, I'm <span className="gradient-text">Ron Golan</span>
                    </h1>

                    <h2 className="hero-role">
                        I build mobile apps for{' '}
                        <ReactTyped
                            strings={['Android', 'iOS', 'Android & iOS']}
                            typeSpeed={70}
                            backSpeed={45}
                            backDelay={1600}
                            loop
                            className="typed-text"
                        />
                    </h2>

                    <p className="hero-subtitle">
                        Fourth-year Computer Science student at Afeka College of Engineering,
                        focused on Android &amp; iOS development. I take products all the way from
                        idea to release - already live on Google Play and the App Store.
                    </p>

                    <div className="hero-cta-row">
                        <a className="btn-primary-cta" href="#checkchange">
                            View my app ↓
                        </a>
                        <a
                            className="btn-ghost-cta"
                            href="https://www.linkedin.com/in/ron-golan-27171028b/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>

                    <div className="hero-store-row">
                        <a
                            className="store-link"
                            href="https://play.google.com/store/apps/developer?id=rongo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="store-icon" aria-hidden="true">▶</span>
                            <span>
                                <small>Google Play</small>
                                Developer page
                            </span>
                        </a>
                        <a
                            className="store-link"
                            href="https://apps.apple.com/us/developer/ron-golan/id6772835016"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="store-icon" aria-hidden="true"><svg viewBox="0 0 384 512" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg></span>
                            <span>
                                <small>App Store</small>
                                Developer page
                            </span>
                        </a>
                    </div>
                </div>

                <div className="hero-right" data-aos="fade-left" data-aos-delay="150">
                    <div className="hero-photo-wrap">
                        <div className="hero-glow" />
                        <img
                            src={process.env.PUBLIC_URL + '/profile.jpg'}
                            alt="Ron Golan"
                            className="hero-photo"
                        />
                        <div className="hero-chip chip-1">📱 Kotlin · Swift</div>
                        <div className="hero-chip chip-2">🚀 Live on 2 stores</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
