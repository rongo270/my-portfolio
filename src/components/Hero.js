import React from 'react';
import { ReactTyped } from 'react-typed';
import '../styles/hero.css';


function Hero() {
    return (
        <section id="hero" className="hero-section d-flex align-items-center justify-content-center text-center">
            <div>
                <img src="/profile.jpg" alt="Profile" className="profile-img mb-4" />
                <h1 className="display-5 fw-bold">Ron Golan</h1>
                <ReactTyped
                    strings={['Frontend Developer', 'Backend Developer', 'Software Engineer']}
                    typeSpeed={60}
                    backSpeed={40}
                    loop
                    className="typed-text"
                />
                <div className="mt-4">
                    <h2 className="hero-title">Full Stack Web Developer</h2>
                    <p className="hero-subtitle">
                        Web development enthusiast, seeking growth and <br /> learning opportunities.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
