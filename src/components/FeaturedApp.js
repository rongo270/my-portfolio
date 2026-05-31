import React from 'react';
import '../styles/featured.css';

const features = [
    {
        icon: '💳',
        title: 'Card fee calculation',
        text: 'The standout feature — CheckChange calculates the card fees on your payment so you see the real final amount before you pay, not after.',
        highlight: true,
    },
    {
        icon: '💱',
        title: 'Currency conversion',
        text: 'Convert prices into your own currency for accurate, real-world comparisons while shopping abroad or online.',
    },
    {
        icon: '🏷️',
        title: 'Discounts & cash',
        text: 'Factor in discounts and cash-withdrawal costs to understand what a purchase truly costs you.',
    },
];

function FeaturedApp() {
    return (
        <section id="checkchange" className="section featured-section">
            <div className="featured-head" data-aos="fade-up">
                <span className="section-eyebrow">Featured app</span>
                <h2 className="section-heading">
                    <span className="gradient-text">CheckChange</span> — know the real cost before you pay
                </h2>
                <p className="section-sub">
                    My first published app, live on <strong>both Android and iOS</strong>. CheckChange
                    helps people estimate the true cost of payments made abroad or online by combining
                    currency conversion, discounts, cash-withdrawal calculations and — most importantly —
                    card fee calculation.
                </p>
            </div>

            <div className="featured-body">
                <div className="featured-features" data-aos="fade-right">
                    {features.map((f) => (
                        <div className={`feature-row card-surface ${f.highlight ? 'is-highlight' : ''}`} key={f.title}>
                            <div className="feature-icon">{f.icon}</div>
                            <div>
                                <h3 className="feature-title">
                                    {f.title}
                                    {f.highlight && <span className="feature-tag">Key feature</span>}
                                </h3>
                                <p className="feature-text">{f.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="featured-stores" data-aos="fade-left">
                    <div className="platform-card card-surface android">
                        <div className="platform-top">
                            <span className="platform-logo">🤖</span>
                            <div>
                                <small>Available on</small>
                                <h3>Google Play</h3>
                            </div>
                        </div>
                        <p className="platform-meta">Android · Kotlin · Firebase</p>
                        <a
                            className="btn-primary-cta platform-btn"
                            href="https://play.google.com/store/apps/details?id=com.rongo.checkchange&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get it on Google Play
                        </a>
                    </div>

                    <div className="platform-card card-surface ios">
                        <div className="platform-top">
                            <span className="platform-logo apple"><svg viewBox="0 0 384 512" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg></span>
                            <div>
                                <small>Download on the</small>
                                <h3>App Store</h3>
                            </div>
                        </div>
                        <p className="platform-meta">iOS · Swift · SwiftUI</p>
                        <a
                            className="btn-ghost-cta platform-btn"
                            href="https://apps.apple.com/us/app/checkchange/id6772835014"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on the App Store
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedApp;
