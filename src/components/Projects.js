import React from 'react';
import '../styles/projects.css';

function Projects() {
    return (
        <section id="projects" className="projects-section text-center">
            <div className="container">
                <h2 className="mb-4">My Projects</h2>

                <div className="project-card mx-auto mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Gym-Site</h5>
                        <p className="card-text">An Angular e-commerce platform with login system and admin panel.</p>
                        <p className="text-muted">Angular | Node.js | MSSQL | TypeScript</p>
                        <a href="https://github.com/rongo270/gym-site.git" className="btn btn-outline-primary" target="_blank">View Code</a>
                    </div>
                </div>

                <div className="project-card mx-auto mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Dental System</h5>
                        <p className="card-text">A C project for managing dental appointments with user registration and scheduling.</p>
                        <p className="text-muted">C | System Programming</p>
                        <a href="https://github.com/rongo270/Better_Dentel_System.git" className="btn btn-outline-primary" target="_blank">View Code</a>
                    </div>
                </div>

                <div className="project-card mx-auto mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Car Project</h5>
                        <p className="card-text">An Android game inspired by Minecraft where Steve dodges falling enemies.</p>
                        <p className="text-muted">Android | Kotlin | Game Dev</p>
                        <a href="https://github.com/rongo270/Car_Project.git" className="btn btn-outline-primary" target="_blank">View Code</a>
                    </div>
                </div>

                <p className="mt-4 text-muted">Always building and learning — new projects coming soon!</p>
            </div>
        </section>
    );
}

export default Projects;
