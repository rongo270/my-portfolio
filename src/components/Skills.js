import React from 'react';
import '../styles/skills.css';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

// icon: devicon path (or null for text-only pill). invert: lighten dark glyphs on dark bg.
const groups = [
    {
        title: 'Mobile stack',
        accent: 'a',
        items: [
            { name: 'Kotlin', icon: `${DEVICON}/kotlin/kotlin-original.svg` },
            { name: 'Android Studio', icon: `${DEVICON}/androidstudio/androidstudio-original.svg` },
            { name: 'Swift', icon: `${DEVICON}/swift/swift-original.svg` },
            { name: 'SwiftUI', icon: `${DEVICON}/swift/swift-original.svg` },
            { name: 'Xcode', icon: `${DEVICON}/xcode/xcode-original.svg` },
            { name: 'Firebase', icon: `${DEVICON}/firebase/firebase-plain.svg` },
        ],
    },
    {
        title: 'Backend & cloud',
        accent: 'b',
        items: [
            { name: 'Firebase', icon: `${DEVICON}/firebase/firebase-plain.svg` },
            { name: 'Firestore', icon: `${DEVICON}/firebase/firebase-plain.svg` },
            { name: 'Cloudflare', icon: `${DEVICON}/cloudflare/cloudflare-original.svg` },
            { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
            { name: 'C#', icon: `${DEVICON}/csharp/csharp-original.svg` },
            { name: 'REST APIs', icon: null },
        ],
    },
    {
        title: 'Databases & tools',
        accent: 'c',
        items: [
            { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg` },
            { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` },
            { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
            { name: 'GitHub', icon: `${DEVICON}/github/github-original.svg`, invert: true },
            { name: 'VS Code', icon: `${DEVICON}/vscode/vscode-original.svg` },
            { name: 'Visual Studio', icon: `${DEVICON}/visualstudio/visualstudio-plain.svg` },
        ],
    },
    {
        title: 'Also experienced with',
        accent: 'd',
        items: [
            { name: 'Java', icon: `${DEVICON}/java/java-original.svg` },
            { name: 'C', icon: `${DEVICON}/c/c-original.svg` },
            { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
            { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
            { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
            { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
        ],
    },
];

const aiTools = ['ChatGPT', 'Codex', 'Claude', 'Gemini'];

const hideBroken = (e) => { e.target.style.display = 'none'; };

function Skills() {
    return (
        <section id="tech" className="section tech-section">
            <div className="tech-head" data-aos="fade-up">
                <span className="section-eyebrow">Tech stack</span>
                <h2 className="section-heading">Tools I build with</h2>
                <p className="section-sub">
                    A mobile-first toolkit, backed by solid backend, cloud and database experience.
                </p>
            </div>

            <div className="tech-grid">
                {groups.map((group, gi) => (
                    <div
                        className={`tech-group card-surface accent-${group.accent}`}
                        key={group.title}
                        data-aos="fade-up"
                        data-aos-delay={gi * 80}
                    >
                        <h3 className="tech-group-title">{group.title}</h3>
                        <div className="tech-pills">
                            {group.items.map((it) => (
                                <span className="tech-pill" key={group.title + it.name}>
                                    {it.icon && (
                                        <img
                                            src={it.icon}
                                            alt=""
                                            loading="lazy"
                                            onError={hideBroken}
                                            className={`tech-pill-icon ${it.invert ? 'invert' : ''}`}
                                        />
                                    )}
                                    {it.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="ai-block" data-aos="fade-up">
                <h3 className="ai-title">
                    <span className="ai-spark">✦</span> AI development tools I use daily
                </h3>
                <div className="ai-pills">
                    {aiTools.map((t) => (
                        <span className="ai-pill" key={t}>{t}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
