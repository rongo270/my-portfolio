import React from 'react';
import '../styles/focus.css';

const AppleIcon = (
    <svg viewBox="0 0 384 512" width="1em" height="1em" fill="currentColor" aria-hidden="true">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
);

const focusItems = [
    { icon: '\u{1F916}', title: 'Android development', text: 'Native apps with Kotlin and Android Studio - clean UI, solid architecture and Firebase-powered backends.' },
    { icon: AppleIcon, title: 'iOS development', text: 'Building for iPhone with Swift, SwiftUI and Xcode, keeping the experience native and fluid on Apple devices.' },
    { icon: '\u{1F525}', title: 'Backend and cloud', text: 'Firebase, Firestore and Cloudflare with APIs and Python / C# services to power real, connected apps.' },
    { icon: '\u{1F680}', title: 'Idea to release', text: 'Taking products end to end: concept, design, build, store submission and publishing on both platforms.' },
];

function Focus() {
    return (
        <section id="focus" className="section focus-section">
            <div className="focus-head" data-aos="fade-up">
                <span className="section-eyebrow">Current focus</span>
                <h2 className="section-heading">What I'm focused on right now</h2>
                <p className="section-sub">
                    My day-to-day is mobile development across both platforms, and everything it
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
