import React from 'react';
import '../styles/about.css';
import { useEffect } from 'react';

function About() {
    return (
        <section
            id="about" className="about-section" data-aos="fade-right" data-aos-offset="200">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <img src={process.env.PUBLIC_URL + "/about.jpg"} alt="Ron Golan" className="about-img" />
                <div className="about-text">
                    <p>
                        I'm a third-year Computer Science student at Afeka College of Engineering in Tel Aviv (expected graduation: October 2026), with a strong foundation in programming, databases, and software design.
                    </p>
                    <p>
                        I have hands-on experience in both frontend and backend development. My main tools include Java, JavaScript, C#, Kotlin, C, Python, SQL, and Node.js.
                    </p>
                    <p>
                        I enjoy creating clean, intuitive user experiences and solving algorithmic challenges. I'm currently focusing on personal projects and expanding my knowledge in software architecture and machine learning.
                    </p>
                    <p>
                        I bring motivation, attention to detail, and a passion for learning new technologies to every project I work on.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
