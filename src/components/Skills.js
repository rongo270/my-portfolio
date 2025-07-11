import React from 'react';
import '../styles/skills.css';

const skills = [
    { name: "C#", img: process.env.PUBLIC_URL + "/skills/csharp.png" },
    { name: "JavaScript", img: process.env.PUBLIC_URL + "/skills/javascript.png" },
    { name: "React", img: process.env.PUBLIC_URL + "/skills/react.png" },
    { name: "Angular", img: process.env.PUBLIC_URL + "/skills/angular.png" },
    { name: "Node.js", img: process.env.PUBLIC_URL + "/skills/node.png" },
    { name: "Python", img: process.env.PUBLIC_URL + "/skills/python.png" },
    { name: "Java", img: process.env.PUBLIC_URL + "/skills/java.png" },
    { name: "Kotlin", img: process.env.PUBLIC_URL + "/skills/kotlin.png" },
    { name: "PostgreSQL", img: process.env.PUBLIC_URL + "/skills/postgresql.png" },
    { name: "MSSQL", img: process.env.PUBLIC_URL + "/skills/mssql.png" },
    { name: "Git", img: process.env.PUBLIC_URL + "/skills/git.png" },
    { name: "GitHub", img: process.env.PUBLIC_URL + "/skills/github.png" },
    { name: "Android Studio", img: process.env.PUBLIC_URL + "/skills/androidstudio.png" },
    { name: "VS Code", img: process.env.PUBLIC_URL + "/skills/vscode.png" },
    { name: "Eclipse", img: process.env.PUBLIC_URL + "/skills/eclipse.png" },
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
