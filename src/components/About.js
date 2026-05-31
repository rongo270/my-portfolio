import React from 'react';
import '../styles/about.css';

const stats = [
    { value: '2', label: 'Apps live on App Store & Google Play' },
    { value: '4th', label: 'Year CS at Afeka, finishing Aug 2026' },
    { value: 'Full-time', label: 'Available now for mobile roles' },
];

function About() {
    return (
        <section id="about" className="section about-section">
            <div className="about-grid">
                <div className="about-media" data-aos="fade-right">
                    <div className="about-media-glow" />
                    <img
                        src={process.env.PUBLIC_URL + '/about-illustration.svg'}
                        alt="Developer profile illustration"
                        className="about-img"
                    />
                </div>

                <div className="about-body" data-aos="fade-left">
                    <span className="section-eyebrow">About me</span>
                    <h2 className="section-heading">
                        A mobile developer who ships <span className="gradient-text">real products</span>
                    </h2>
                    <p className="about-text">
                        I'm Ron Golan, a fourth-year Computer Science student at Afeka College of
                        Engineering (graduating August 2026) and a mobile developer focused on
                        Android and iOS. I don't just write code for exercises - I design, build
                        and publish complete apps that real people use, taking each one from the
                        first idea all the way to release on the stores.
                    </p>
                    <p className="about-text">
                        My core stack is Kotlin and Android Studio on Android, and Swift, SwiftUI and
                        Xcode on iOS, backed by Firebase and Firestore. I care about clean
                        architecture, smooth UX and details that make an app feel professional. I'm
                        currently <strong className="hl">open for work as a mobile developer,
                        available for full-time positions</strong>.
                    </p>

                    <div className="about-stats">
                        {stats.map((s) => (
                            <div className="about-stat card-surface" key={s.label}>
                                <span className="about-stat-value gradient-text">{s.value}</span>
                                <span className="about-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
