import React from 'react';
import '../styles/workingon.css';

const items = [
    {
        status: 'In progress',
        icon: '🏛️',
        title: 'Municipality collaboration',
        text: 'A mobile project connected to a collaboration with the Tel Aviv Municipality. More details to come - stay tuned.',
        locked: true,
    },
    {
        status: 'Coming soon',
        icon: '✨',
        title: 'New apps on the way',
        text: 'More published apps are coming. I\'m actively prototyping additional ideas and turning them into real products for both Android and iOS.',
    },
    {
        status: 'Always',
        icon: '📈',
        title: 'Leveling up',
        text: 'Sharpening my Swift, SwiftUI and Kotlin skills, exploring better app architecture and using modern AI dev tools to build faster.',
    },
];

function WorkingOn() {
    return (
        <section id="working-on" className="section working-section">
            <div className="working-head" data-aos="fade-up">
                <span className="section-eyebrow">What's next</span>
                <h2 className="section-heading">What I'm working on now</h2>
                <p className="section-sub">
                    CheckChange was just the start. Here's what's currently on my desk.
                </p>
            </div>

            <div className="working-grid">
                {items.map((item, i) => (
                    <div
                        className={`working-card card-surface ${item.locked ? 'is-locked' : ''}`}
                        key={item.title}
                        data-aos="fade-up"
                        data-aos-delay={i * 90}
                    >
                        <div className="working-top">
                            <span className="working-icon">{item.icon}</span>
                            <span className="working-status">{item.status}</span>
                        </div>
                        <h3 className="working-title">{item.title}</h3>
                        <p className="working-text">{item.text}</p>
                        {item.locked && <span className="working-lock">🔒 Details under wraps</span>}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorkingOn;
