import React from 'react';
import '../styles/focus.css';

const focusItems = [
    {
        icon: '🤖',
        title: 'Android development',
        text: 'Native apps with Kotlin and Android Studio — clean UI, solid architecture and Firebase-powered backends.',
    },
    {
        icon: '',
        title: 'iOS development',
        text: 'Building for iPhone with Swift, SwiftUI and Xcode, keeping the experience native and fluid on Apple devices.',
    },
    {
        icon: '🔥',
        title: 'Backend & cloud',
        text: 'Firebase, Firestore and Cloudflare with APIs and Python/C# services to power real, connected apps.',
    },
    {
        icon: '🚀',
        title: 'Idea → release',
        text: 'Taking products end to end: concept, design, build, store submission and publishing on both platforms.',
    },
];

function Focus() {
    return (
        <section id="focus" className="section focus-section">
            <div className="focus-head" data-aos="fade-up">
                <span className="section-eyebrow">Current focus</span>
                <h2 className="section-heading">What I'm focused on right now</h2>
                <p className="section-sub">
                    My day-to-day is mobile development across both platforms — and everything it
                    takes to turn an idea into a shipped app.
                </p>
            </div>

            <div className="focus-grid">
                {focusItems.map((item, i) => (
                    <div
                        className="focus-card card-surface"
                        key={item.title}
                        data-aos="fade-up"
                        data-aos-delay={i * 90}
                    >
                        <div className="focus-icon">{item.icon}</div>
                        <h3 className="focus-title">{item.title}</h3>
                        <p className="focus-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Focus;
