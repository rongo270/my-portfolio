import React from 'react';
import '../styles/skills.css';

const skills = [
    { name: "C#", img: "/skills/csharp.png" },
    { name: "JavaScript", img: "/skills/javascript.png" },
    { name: "React", img: "/skills/react.png" },
    { name: "Angular", img: "/skills/angular.png" },
    { name: "Node.js", img: "/skills/node.png" },
    { name: "Python", img: "/skills/python.png" },
    { name: "Java", img: "/skills/java.png" },
    { name: "Kotlin", img: "/skills/kotlin.png" },
    { name: "PostgreSQL", img: "/skills/postgresql.png" },
    { name: "MSSQL", img: "/skills/mssql.png" },
    { name: "Git", img: "/skills/git.png" },
    { name: "GitHub", img: "/skills/github.png" },
    { name: "Android Studio", img: "/skills/androidstudio.png" },
    { name: "VS Code", img: "/skills/vscode.png" },
    { name: "Eclipse", img: "/skills/eclipse.png" },
];

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-item"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <img src={skill.img} alt={skill.name} />
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
